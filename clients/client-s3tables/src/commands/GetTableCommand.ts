// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetTableRequest, GetTableResponse } from "../models/models_0";
import { S3TablesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3TablesClient";
import { GetTable } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTableCommand}.
 */
export interface GetTableCommandInput extends GetTableRequest {}
/**
 * @public
 *
 * The output of {@link GetTableCommand}.
 */
export interface GetTableCommandOutput extends GetTableResponse, __MetadataBearer {}

/**
 * <p>Gets details about a table. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables-tables.html">S3 Tables</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p> <dl> <dt>Permissions</dt> <dd> <p>You must have the <code>s3tables:GetTable</code> permission to use this operation. </p> </dd> </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, GetTableCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, GetTableCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * // import type { S3TablesClientConfig } from "@aws-sdk/client-s3tables";
 * const config = {}; // type is S3TablesClientConfig
 * const client = new S3TablesClient(config);
 * const input = { // GetTableRequest
 *   tableBucketARN: "STRING_VALUE",
 *   namespace: "STRING_VALUE",
 *   name: "STRING_VALUE",
 *   tableArn: "STRING_VALUE",
 * };
 * const command = new GetTableCommand(input);
 * const response = await client.send(command);
 * // { // GetTableResponse
 * //   name: "STRING_VALUE", // required
 * //   type: "customer" || "aws", // required
 * //   tableARN: "STRING_VALUE", // required
 * //   namespace: [ // NamespaceList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   namespaceId: "STRING_VALUE",
 * //   versionToken: "STRING_VALUE", // required
 * //   metadataLocation: "STRING_VALUE",
 * //   warehouseLocation: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   createdBy: "STRING_VALUE", // required
 * //   managedByService: "STRING_VALUE",
 * //   modifiedAt: new Date("TIMESTAMP"), // required
 * //   modifiedBy: "STRING_VALUE", // required
 * //   ownerAccountId: "STRING_VALUE", // required
 * //   format: "ICEBERG", // required
 * //   tableBucketId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetTableCommandInput - {@link GetTableCommandInput}
 * @returns {@link GetTableCommandOutput}
 * @see {@link GetTableCommandInput} for command's `input` shape.
 * @see {@link GetTableCommandOutput} for command's `response` shape.
 * @see {@link S3TablesClientResolvedConfig | config} for S3TablesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The action cannot be performed because you do not have the required permission.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is invalid or malformed.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request failed because there is a conflict with a previous write. You can retry the request.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The caller isn't authorized to make the request.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The request failed due to an internal server error.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The request was rejected because the specified resource could not be found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link S3TablesServiceException}
 * <p>Base exception class for all service exceptions from S3Tables service.</p>
 *
 *
 * @public
 */
export class GetTableCommand extends $Command
  .classBuilder<
    GetTableCommandInput,
    GetTableCommandOutput,
    S3TablesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: S3TablesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("S3TableBuckets", "GetTable", {})
  .n("S3TablesClient", "GetTableCommand")
  .sc(GetTable)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTableRequest;
      output: GetTableResponse;
    };
    sdk: {
      input: GetTableCommandInput;
      output: GetTableCommandOutput;
    };
  };
}
