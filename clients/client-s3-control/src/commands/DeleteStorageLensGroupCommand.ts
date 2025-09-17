// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteStorageLensGroupRequest } from "../models/models_0";
import { de_DeleteStorageLensGroupCommand, se_DeleteStorageLensGroupCommand } from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteStorageLensGroupCommand}.
 */
export interface DeleteStorageLensGroupCommandInput extends DeleteStorageLensGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteStorageLensGroupCommand}.
 */
export interface DeleteStorageLensGroupCommandOutput extends __MetadataBearer {}

/**
 * <p>
 * Deletes an existing S3 Storage Lens group.</p>
 *          <p>To use this operation, you must have the permission to perform the
 *       <code>s3:DeleteStorageLensGroup</code> action. For more information about the required Storage Lens
 *       Groups permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_iam_permissions.html#storage_lens_groups_permissions">Setting account permissions to use S3 Storage Lens groups</a>.</p>
 *          <p>For information about Storage Lens groups errors, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#S3LensErrorCodeList">List of Amazon S3 Storage
 *       Lens error codes</a>.</p>
 *          <important>
 *             <p>You must URL encode any signed header values that contain spaces. For example, if your header value is <code>my  file.txt</code>, containing two spaces after <code>my</code>, you must URL encode this value to <code>my%20%20file.txt</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, DeleteStorageLensGroupCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, DeleteStorageLensGroupCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // DeleteStorageLensGroupRequest
 *   Name: "STRING_VALUE", // required
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new DeleteStorageLensGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteStorageLensGroupCommandInput - {@link DeleteStorageLensGroupCommandInput}
 * @returns {@link DeleteStorageLensGroupCommandOutput}
 * @see {@link DeleteStorageLensGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteStorageLensGroupCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class DeleteStorageLensGroupCommand extends $Command
  .classBuilder<
    DeleteStorageLensGroupCommandInput,
    DeleteStorageLensGroupCommandOutput,
    S3ControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    RequiresAccountId: { type: "staticContextParams", value: true },
    AccountId: { type: "contextParams", name: "AccountId" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ControlClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getProcessArnablesPlugin(config),
    ];
  })
  .s("AWSS3ControlServiceV20180820", "DeleteStorageLensGroup", {})
  .n("S3ControlClient", "DeleteStorageLensGroupCommand")
  .f(void 0, void 0)
  .ser(se_DeleteStorageLensGroupCommand)
  .de(de_DeleteStorageLensGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteStorageLensGroupRequest;
      output: {};
    };
    sdk: {
      input: DeleteStorageLensGroupCommandInput;
      output: DeleteStorageLensGroupCommandOutput;
    };
  };
}
