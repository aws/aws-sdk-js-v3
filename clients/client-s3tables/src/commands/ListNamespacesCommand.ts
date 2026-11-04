// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListNamespacesRequest, ListNamespacesResponse } from "../models/models_0";
import { ListNamespaces$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListNamespacesCommand}.
 */
export interface ListNamespacesCommandInput extends ListNamespacesRequest {}
/**
 * @public
 *
 * The output of {@link ListNamespacesCommand}.
 */
export interface ListNamespacesCommandOutput extends ListNamespacesResponse, __MetadataBearer {}

/**
 * Lists the namespaces within a table bucket. For more information, see [Table namespaces](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables-namespace.html) in the *Amazon Simple Storage Service User Guide*.
 *
 * - **Permissions**
 *
 *   You must have the `s3tables:ListNamespaces` permission to use this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, ListNamespacesCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, ListNamespacesCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * // import type { S3TablesClientConfig } from "@aws-sdk/client-s3tables";
 * const config = {}; // type is S3TablesClientConfig
 * const client = new S3TablesClient(config);
 * const input = { // ListNamespacesRequest
 *   tableBucketARN: "STRING_VALUE", // required
 *   prefix: "STRING_VALUE",
 *   continuationToken: "STRING_VALUE",
 *   maxNamespaces: Number("int"),
 * };
 * const command = new ListNamespacesCommand(input);
 * const response = await client.send(command);
 * // { // ListNamespacesResponse
 * //   namespaces: [ // NamespaceSummaryList // required
 * //     { // NamespaceSummary
 * //       namespace: [ // NamespaceList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       createdBy: "STRING_VALUE", // required
 * //       ownerAccountId: "STRING_VALUE", // required
 * //       namespaceId: "STRING_VALUE",
 * //       tableBucketId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   continuationToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListNamespacesCommandInput - {@link ListNamespacesCommandInput}
 * @returns {@link ListNamespacesCommandOutput}
 * @see {@link ListNamespacesCommandInput} for command's `input` shape.
 * @see {@link ListNamespacesCommandOutput} for command's `response` shape.
 * @see {@link S3TablesClientResolvedConfig | config} for S3TablesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The action cannot be performed because you do not have the required permission.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The request is invalid or malformed.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request failed because there is a conflict with a previous write. You can retry the request.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The caller isn't authorized to make the request.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * The request failed due to an internal server error.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The request was rejected because the specified resource could not be found.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link S3TablesServiceException}
 *
 * Base exception class for all service exceptions from S3Tables service.
 *
 * @public
 */
export class ListNamespacesCommand extends command<ListNamespacesCommandInput, ListNamespacesCommandOutput>(
  _ep0,
  _mw0,
  "ListNamespaces",
  ListNamespaces$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNamespacesRequest;
      output: ListNamespacesResponse;
    };
    sdk: {
      input: ListNamespacesCommandInput;
      output: ListNamespacesCommandOutput;
    };
  };
}
