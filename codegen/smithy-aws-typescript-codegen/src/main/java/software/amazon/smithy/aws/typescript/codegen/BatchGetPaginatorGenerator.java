/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
package software.amazon.smithy.aws.typescript.codegen;

import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Generates DynamoDB BatchGet paginators, which use UnprocessedKeys rather than a pagination token.
 */
@SmithyInternalApi
final class BatchGetPaginatorGenerator {
    static final String LOW_LEVEL_PAGINATION_FOLDER = "src/pagination";
    static final String LOW_LEVEL_FILE = LOW_LEVEL_PAGINATION_FOLDER + "/PaginatedBatchGetItem.ts";
    static final String LOW_LEVEL_INDEX = LOW_LEVEL_PAGINATION_FOLDER + "/index.ts";
    static final String DOCUMENT_FILE = "doc-client-pagination/PaginatedBatchGet.ts";

    private BatchGetPaginatorGenerator() {}

    static void generateLowLevel(TypeScriptWriter writer) {
        generate(writer, "BatchGetItem", "DynamoDBClient", "paginatedBatchGetItem");
    }

    static void generateDocument(TypeScriptWriter writer) {
        generate(writer, "BatchGet", "DynamoDBDocumentClient", "paginatedBatchGet");
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
