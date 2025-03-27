// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaPackageV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageV2Client";
import { ResetChannelStateRequest, ResetChannelStateResponse } from "../models/models_0";
import { de_ResetChannelStateCommand, se_ResetChannelStateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResetChannelStateCommand}.
 */
export interface ResetChannelStateCommandInput extends ResetChannelStateRequest {}
/**
 * @public
 *
 * The output of {@link ResetChannelStateCommand}.
 */
export interface ResetChannelStateCommandOutput extends ResetChannelStateResponse, __MetadataBearer {}

/**
 * <p>Resetting the channel can help to clear errors from misconfigurations in the encoder. A reset refreshes the ingest stream and removes previous content. </p>
 *          <p> Be sure to stop the encoder before you reset the channel, and wait at least 30 seconds before you restart the encoder. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageV2Client, ResetChannelStateCommand } from "@aws-sdk/client-mediapackagev2"; // ES Modules import
 * // const { MediaPackageV2Client, ResetChannelStateCommand } = require("@aws-sdk/client-mediapackagev2"); // CommonJS import
 * const client = new MediaPackageV2Client(config);
 * const input = { // ResetChannelStateRequest
 *   ChannelGroupName: "STRING_VALUE", // required
 *   ChannelName: "STRING_VALUE", // required
 * };
 * const command = new ResetChannelStateCommand(input);
 * const response = await client.send(command);
 * // { // ResetChannelStateResponse
 * //   ChannelGroupName: "STRING_VALUE", // required
 * //   ChannelName: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * //   ResetAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param ResetChannelStateCommandInput - {@link ResetChannelStateCommandInput}
 * @returns {@link ResetChannelStateCommandOutput}
 * @see {@link ResetChannelStateCommandInput} for command's `input` shape.
 * @see {@link ResetChannelStateCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
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
 *
 * @example Reset a Channel
 * ```javascript
 * //
 * const input = {
 *   ChannelGroupName: "exampleChannelGroup",
 *   ChannelName: "exampleChannel"
 * };
 * const command = new ResetChannelStateCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Arn: "arn:aws:mediapackagev2:us-west-2:123456789012:channelGroup/exampleChannelGroup/channel/exampleChannel",
 *   ChannelGroupName: "exampleChannelGroup",
 *   ChannelName: "exampleChannel",
 *   ResetAt: "2024-10-09T09:36:00.00Z"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ResetChannelStateCommand extends $Command
  .classBuilder<
    ResetChannelStateCommandInput,
    ResetChannelStateCommandOutput,
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
  .s("mediapackagev2", "ResetChannelState", {})
  .n("MediaPackageV2Client", "ResetChannelStateCommand")
  .f(void 0, void 0)
  .ser(se_ResetChannelStateCommand)
  .de(de_ResetChannelStateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResetChannelStateRequest;
      output: ResetChannelStateResponse;
    };
    sdk: {
      input: ResetChannelStateCommandInput;
      output: ResetChannelStateCommandOutput;
    };
  };
}
