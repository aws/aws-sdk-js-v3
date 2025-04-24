// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTableBucketEncryptionRequest } from "../models/models_0";
import {
  de_DeleteTableBucketEncryptionCommand,
  se_DeleteTableBucketEncryptionCommand,
} from "../protocols/Aws_restJson1";
import { S3TablesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3TablesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTableBucketEncryptionCommand}.
 */
export interface DeleteTableBucketEncryptionCommandInput extends DeleteTableBucketEncryptionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTableBucketEncryptionCommand}.
 */
export interface DeleteTableBucketEncryptionCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the encryption configuration for a table bucket.</p>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>You must have the <code>s3tables:DeleteTableBucketEncryption</code> permission to use this operation.</p>
 *             </dd>
 *          </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, DeleteTableBucketEncryptionCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, DeleteTableBucketEncryptionCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * const client = new S3TablesClient(config);
 * const input = { // DeleteTableBucketEncryptionRequest
 *   tableBucketARN: "STRING_VALUE", // required
 * };
 * const command = new DeleteTableBucketEncryptionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTableBucketEncryptionCommandInput - {@link DeleteTableBucketEncryptionCommandInput}
 * @returns {@link DeleteTableBucketEncryptionCommandOutput}
 * @see {@link DeleteTableBucketEncryptionCommandInput} for command's `input` shape.
 * @see {@link DeleteTableBucketEncryptionCommandOutput} for command's `response` shape.
 * @see {@link S3TablesClientResolvedConfig | config} for S3TablesClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is invalid or malformed.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request failed because there is a conflict with a previous write. You can retry the
 *       request.</p>
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
export class DeleteTableBucketEncryptionCommand extends $Command
  .classBuilder<
    DeleteTableBucketEncryptionCommandInput,
    DeleteTableBucketEncryptionCommandOutput,
    S3TablesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: S3TablesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("S3TableBuckets", "DeleteTableBucketEncryption", {})
  .n("S3TablesClient", "DeleteTableBucketEncryptionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteTableBucketEncryptionCommand)
  .de(de_DeleteTableBucketEncryptionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTableBucketEncryptionRequest;
      output: {};
    };
    sdk: {
      input: DeleteTableBucketEncryptionCommandInput;
      output: DeleteTableBucketEncryptionCommandOutput;
    };
  };
}
