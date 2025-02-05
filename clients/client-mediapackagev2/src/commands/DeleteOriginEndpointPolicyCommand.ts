// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaPackageV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageV2Client";
import { DeleteOriginEndpointPolicyRequest, DeleteOriginEndpointPolicyResponse } from "../models/models_0";
import { de_DeleteOriginEndpointPolicyCommand, se_DeleteOriginEndpointPolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteOriginEndpointPolicyCommand}.
 */
export interface DeleteOriginEndpointPolicyCommandInput extends DeleteOriginEndpointPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteOriginEndpointPolicyCommand}.
 */
export interface DeleteOriginEndpointPolicyCommandOutput extends DeleteOriginEndpointPolicyResponse, __MetadataBearer {}

/**
 * <p>Delete an origin endpoint policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageV2Client, DeleteOriginEndpointPolicyCommand } from "@aws-sdk/client-mediapackagev2"; // ES Modules import
 * // const { MediaPackageV2Client, DeleteOriginEndpointPolicyCommand } = require("@aws-sdk/client-mediapackagev2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MediaPackageV2Client(config);
 * const input = { // DeleteOriginEndpointPolicyRequest
 *   ChannelGroupName: "STRING_VALUE", // required
 *   ChannelName: "STRING_VALUE", // required
 *   OriginEndpointName: "STRING_VALUE", // required
 * };
 * const command = new DeleteOriginEndpointPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteOriginEndpointPolicyCommandInput - {@link DeleteOriginEndpointPolicyCommandInput}
 * @returns {@link DeleteOriginEndpointPolicyCommandOutput}
 * @see {@link DeleteOriginEndpointPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteOriginEndpointPolicyCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageV2ClientResolvedConfig | config} for MediaPackageV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see Access Management in the IAM User Guide.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting this resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates that an error from the service occurred while trying to process a request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request throughput limit was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to meet the constraints specified by the AWS service.</p>
 *
 * @throws {@link MediaPackageV2ServiceException}
 * <p>Base exception class for all service exceptions from MediaPackageV2 service.</p>
 *
 * @public
 * @example Deleting an Origin Endpoint Policy
 * ```javascript
 * //
 * const input = {
 *   "ChannelGroupName": "exampleChannelGroup",
 *   "ChannelName": "exampleChannel",
 *   "OriginEndpointName": "exampleOriginEndpoint"
 * };
 * const command = new DeleteOriginEndpointPolicyCommand(input);
 * await client.send(command);
 * // example id: example-1
 * ```
 *
 */
export class DeleteOriginEndpointPolicyCommand extends $Command
  .classBuilder<
    DeleteOriginEndpointPolicyCommandInput,
    DeleteOriginEndpointPolicyCommandOutput,
    MediaPackageV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaPackageV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("mediapackagev2", "DeleteOriginEndpointPolicy", {})
  .n("MediaPackageV2Client", "DeleteOriginEndpointPolicyCommand")
  .f(void 0, void 0)
  .ser(se_DeleteOriginEndpointPolicyCommand)
  .de(de_DeleteOriginEndpointPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteOriginEndpointPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteOriginEndpointPolicyCommandInput;
      output: DeleteOriginEndpointPolicyCommandOutput;
    };
  };
}
