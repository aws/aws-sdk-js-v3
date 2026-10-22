/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
package software.amazon.smithy.aws.typescript.codegen;

import java.nio.file.Paths;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Generates the DynamoDB document client BatchGet paginator, which uses UnprocessedKeys rather than a pagination token.
 */
@SmithyInternalApi
final class BatchGetPaginatorGenerator {
    static final String DOCUMENT_FILE = "doc-client-pagination/PaginatedBatchGet.ts";

    private BatchGetPaginatorGenerator() {}

    static void generateDocument(TypeScriptWriter writer) {
        generate(writer, "BatchGet", "DynamoDBDocumentClient", "paginatedBatchGet");
    }

    static void generateAggregatedClientMethod(TypeScriptWriter writer, String inputType, String outputType) {
        writer.addRelativeImport(
            "paginatedBatchGet",
            "paginatedBatchGet",
            Paths.get(".", DocumentClientPaginationGenerator.PAGINATION_FOLDER, "PaginatedBatchGet")
        );
        writer.writeDocs(
            "Issues BatchGet requests until every key is processed. Each response is yielded as a page.\n"
                + "When a response contains unprocessed keys, the next request includes only those keys.\n"
                + "Each BatchGet request must contain no more than 100 items."
        );
        writer.write(
            """
            public paginatedBatchGet(args: $1L): AsyncGenerator<$2L> {
              return paginatedBatchGet({ client: this }, args);
            }
            """,
            inputType,
            outputType
        );
    }

    private static void generate(TypeScriptWriter writer, String operation, String client, String function) {
        writer.write(
            "import { $1LCommand, type $1LCommandInput, type $1LCommandOutput } from \"../commands/$1LCommand\";",
            operation
        );
        writer.write("import type { $1L } from \"../$1L\";", client);
        writer.write("");

        writer.writeDocs(
            "Issues batch get requests until every key is processed. Each response is yielded as a page.\n"
                + "When a response contains unprocessed keys, the next request includes only those keys.\n"
                + "Each BatchGet request must contain no more than 100 items.\n\n@public"
        );
        writer.write(
            """
            export async function* $1L(
              config: { client: $2L },
              input: $3LCommandInput
            ): AsyncGenerator<$3LCommandOutput> {
              let requestItems = input.RequestItems;

              while (requestItems && Object.keys(requestItems).length > 0) {
                const response = await config.client.send(
                  new $3LCommand({ ...input, RequestItems: requestItems })
                );
                requestItems = response.UnprocessedKeys;

                yield response;
              }
            }
            """,
            function,
            client,
            operation
        );
    }
}
