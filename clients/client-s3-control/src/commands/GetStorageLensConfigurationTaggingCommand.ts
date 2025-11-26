// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  GetStorageLensConfigurationTaggingRequest,
  GetStorageLensConfigurationTaggingResult,
} from "../models/models_0";
import type { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { GetStorageLensConfigurationTagging } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetStorageLensConfigurationTaggingCommand}.
 */
export interface GetStorageLensConfigurationTaggingCommandInput extends GetStorageLensConfigurationTaggingRequest {}
/**
 * @public
 *
 * The output of {@link GetStorageLensConfigurationTaggingCommand}.
 */
export interface GetStorageLensConfigurationTaggingCommandOutput
  extends GetStorageLensConfigurationTaggingResult,
    __MetadataBearer {}

/**
 * <note>
 *             <p>This operation is not supported by directory buckets.</p>
 *          </note>
 *          <p>Gets the tags of Amazon S3 Storage Lens configuration. For more information about S3 Storage Lens, see
 *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html">Assessing your
 *             storage activity and usage with Amazon S3 Storage Lens </a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 *          <note>
 *             <p>To use this action, you must have permission to perform the
 *                <code>s3:GetStorageLensConfigurationTagging</code> action. For more information, see
 *                <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens_iam_permissions.html">Setting permissions to
 *                use Amazon S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetStorageLensConfigurationTaggingCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetStorageLensConfigurationTaggingCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // GetStorageLensConfigurationTaggingRequest
 *   ConfigId: "STRING_VALUE", // required
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new GetStorageLensConfigurationTaggingCommand(input);
 * const response = await client.send(command);
 * // { // GetStorageLensConfigurationTaggingResult
 * //   Tags: [ // StorageLensTags
 * //     { // StorageLensTag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetStorageLensConfigurationTaggingCommandInput - {@link GetStorageLensConfigurationTaggingCommandInput}
 * @returns {@link GetStorageLensConfigurationTaggingCommandOutput}
 * @see {@link GetStorageLensConfigurationTaggingCommandInput} for command's `input` shape.
 * @see {@link GetStorageLensConfigurationTaggingCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class GetStorageLensConfigurationTaggingCommand extends $Command
  .classBuilder<
    GetStorageLensConfigurationTaggingCommandInput,
    GetStorageLensConfigurationTaggingCommandOutput,
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions()), getProcessArnablesPlugin(config)];
  })
  .s("AWSS3ControlServiceV20180820", "GetStorageLensConfigurationTagging", {})
  .n("S3ControlClient", "GetStorageLensConfigurationTaggingCommand")
  .sc(GetStorageLensConfigurationTagging)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetStorageLensConfigurationTaggingRequest;
      output: GetStorageLensConfigurationTaggingResult;
    };
    sdk: {
      input: GetStorageLensConfigurationTaggingCommandInput;
      output: GetStorageLensConfigurationTaggingCommandOutput;
    };
  };
}
