// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeleteStorageLensConfigurationTaggingRequest,
  DeleteStorageLensConfigurationTaggingResult,
} from "../models/models_0";
import {
  de_DeleteStorageLensConfigurationTaggingCommand,
  se_DeleteStorageLensConfigurationTaggingCommand,
} from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteStorageLensConfigurationTaggingCommand}.
 */
export interface DeleteStorageLensConfigurationTaggingCommandInput
  extends DeleteStorageLensConfigurationTaggingRequest {}
/**
 * @public
 *
 * The output of {@link DeleteStorageLensConfigurationTaggingCommand}.
 */
export interface DeleteStorageLensConfigurationTaggingCommandOutput
  extends DeleteStorageLensConfigurationTaggingResult,
    __MetadataBearer {}

/**
 * <note>
 *             <p>This operation is not supported by directory buckets.</p>
 *          </note>
 *          <p>Deletes the Amazon S3 Storage Lens configuration tags. For more information about S3 Storage Lens, see
 *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html">Assessing your
 *             storage activity and usage with Amazon S3 Storage Lens </a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 *          <note>
 *             <p>To use this action, you must have permission to perform the
 *                <code>s3:DeleteStorageLensConfigurationTagging</code> action. For more information,
 *             see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens_iam_permissions.html">Setting permissions to
 *                use Amazon S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          </note>
 *          <important>
 *             <p>You must URL encode any signed header values that contain spaces. For example, if your header value is <code>my  file.txt</code>, containing two spaces after <code>my</code>, you must URL encode this value to <code>my%20%20file.txt</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, DeleteStorageLensConfigurationTaggingCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, DeleteStorageLensConfigurationTaggingCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // DeleteStorageLensConfigurationTaggingRequest
 *   ConfigId: "STRING_VALUE", // required
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new DeleteStorageLensConfigurationTaggingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteStorageLensConfigurationTaggingCommandInput - {@link DeleteStorageLensConfigurationTaggingCommandInput}
 * @returns {@link DeleteStorageLensConfigurationTaggingCommandOutput}
 * @see {@link DeleteStorageLensConfigurationTaggingCommandInput} for command's `input` shape.
 * @see {@link DeleteStorageLensConfigurationTaggingCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class DeleteStorageLensConfigurationTaggingCommand extends $Command
  .classBuilder<
    DeleteStorageLensConfigurationTaggingCommandInput,
    DeleteStorageLensConfigurationTaggingCommandOutput,
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
  .s("AWSS3ControlServiceV20180820", "DeleteStorageLensConfigurationTagging", {})
  .n("S3ControlClient", "DeleteStorageLensConfigurationTaggingCommand")
  .f(void 0, void 0)
  .ser(se_DeleteStorageLensConfigurationTaggingCommand)
  .de(de_DeleteStorageLensConfigurationTaggingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteStorageLensConfigurationTaggingRequest;
      output: {};
    };
    sdk: {
      input: DeleteStorageLensConfigurationTaggingCommandInput;
      output: DeleteStorageLensConfigurationTaggingCommandOutput;
    };
  };
}
