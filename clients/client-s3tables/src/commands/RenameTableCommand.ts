// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { RenameTableRequest } from "../models/models_0";
import type { S3TablesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3TablesClient";
import { RenameTable } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RenameTableCommand}.
 */
export interface RenameTableCommandInput extends RenameTableRequest {}
/**
 * @public
 *
 * The output of {@link RenameTableCommand}.
 */
export interface RenameTableCommandOutput extends __MetadataBearer {}

/**
 * <p>Renames a table or a namespace. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables-tables.html">S3 Tables</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p> <dl> <dt>Permissions</dt> <dd> <p>You must have the <code>s3tables:RenameTable</code> permission to use this operation. </p> </dd> </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, RenameTableCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, RenameTableCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * // import type { S3TablesClientConfig } from "@aws-sdk/client-s3tables";
 * const config = {}; // type is S3TablesClientConfig
 * const client = new S3TablesClient(config);
 * const input = { // RenameTableRequest
 *   tableBucketARN: "STRING_VALUE", // required
 *   namespace: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   newNamespaceName: "STRING_VALUE",
 *   newName: "STRING_VALUE",
 *   versionToken: "STRING_VALUE",
 * };
 * const command = new RenameTableCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RenameTableCommandInput - {@link RenameTableCommandInput}
 * @returns {@link RenameTableCommandOutput}
 * @see {@link RenameTableCommandInput} for command's `input` shape.
 * @see {@link RenameTableCommandOutput} for command's `response` shape.
 * @see {@link S3TablesClientResolvedConfig | config} for S3TablesClient's `config` shape.
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
export class RenameTableCommand extends $Command
  .classBuilder<
    RenameTableCommandInput,
    RenameTableCommandOutput,
    S3TablesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: S3TablesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("S3TableBuckets", "RenameTable", {})
  .n("S3TablesClient", "RenameTableCommand")
  .sc(RenameTable)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RenameTableRequest;
      output: {};
    };
    sdk: {
      input: RenameTableCommandInput;
      output: RenameTableCommandOutput;
    };
  };
}
