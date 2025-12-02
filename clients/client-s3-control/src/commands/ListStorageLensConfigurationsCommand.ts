// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListStorageLensConfigurationsRequest, ListStorageLensConfigurationsResult } from "../models/models_0";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { ListStorageLensConfigurations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListStorageLensConfigurationsCommand}.
 */
export interface ListStorageLensConfigurationsCommandInput extends ListStorageLensConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListStorageLensConfigurationsCommand}.
 */
export interface ListStorageLensConfigurationsCommandOutput
  extends ListStorageLensConfigurationsResult,
    __MetadataBearer {}

/**
 * <note>
 *             <p>This operation is not supported by directory buckets.</p>
 *          </note>
 *          <p>Gets a list of Amazon S3 Storage Lens configurations. For more information about S3 Storage Lens, see
 *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html">Assessing your
 *             storage activity and usage with Amazon S3 Storage Lens </a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 *          <note>
 *             <p>To use this action, you must have permission to perform the
 *                <code>s3:ListStorageLensConfigurations</code> action. For more information, see
 *                <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens_iam_permissions.html">Setting permissions to
 *                use Amazon S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, ListStorageLensConfigurationsCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, ListStorageLensConfigurationsCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // ListStorageLensConfigurationsRequest
 *   AccountId: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListStorageLensConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListStorageLensConfigurationsResult
 * //   NextToken: "STRING_VALUE",
 * //   StorageLensConfigurationList: [ // StorageLensConfigurationList
 * //     { // ListStorageLensConfigurationEntry
 * //       Id: "STRING_VALUE", // required
 * //       StorageLensArn: "STRING_VALUE", // required
 * //       HomeRegion: "STRING_VALUE", // required
 * //       IsEnabled: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListStorageLensConfigurationsCommandInput - {@link ListStorageLensConfigurationsCommandInput}
 * @returns {@link ListStorageLensConfigurationsCommandOutput}
 * @see {@link ListStorageLensConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListStorageLensConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class ListStorageLensConfigurationsCommand extends $Command
  .classBuilder<
    ListStorageLensConfigurationsCommandInput,
    ListStorageLensConfigurationsCommandOutput,
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
  .s("AWSS3ControlServiceV20180820", "ListStorageLensConfigurations", {})
  .n("S3ControlClient", "ListStorageLensConfigurationsCommand")
  .sc(ListStorageLensConfigurations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStorageLensConfigurationsRequest;
      output: ListStorageLensConfigurationsResult;
    };
    sdk: {
      input: ListStorageLensConfigurationsCommandInput;
      output: ListStorageLensConfigurationsCommandOutput;
    };
  };
}
