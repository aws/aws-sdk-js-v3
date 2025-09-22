// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaPackageV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageV2Client";
import { ResetOriginEndpointStateRequest, ResetOriginEndpointStateResponse } from "../models/models_0";
import { ResetOriginEndpointState } from "../schemas/schemas_17_ResetOriginEndpointState";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResetOriginEndpointStateCommand}.
 */
export interface ResetOriginEndpointStateCommandInput extends ResetOriginEndpointStateRequest {}
/**
 * @public
 *
 * The output of {@link ResetOriginEndpointStateCommand}.
 */
export interface ResetOriginEndpointStateCommandOutput extends ResetOriginEndpointStateResponse, __MetadataBearer {}

/**
 * <p>Resetting the origin endpoint can help to resolve unexpected behavior and other content packaging issues. It also helps to preserve special events when you don't want the previous content to be available for viewing. A reset clears out all previous content from the origin endpoint.</p> <p>MediaPackage might return old content from this endpoint in the first 30 seconds after the endpoint reset. For best results, when possible, wait 30 seconds from endpoint reset to send playback requests to this endpoint. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageV2Client, ResetOriginEndpointStateCommand } from "@aws-sdk/client-mediapackagev2"; // ES Modules import
 * // const { MediaPackageV2Client, ResetOriginEndpointStateCommand } = require("@aws-sdk/client-mediapackagev2"); // CommonJS import
 * // import type { MediaPackageV2ClientConfig } from "@aws-sdk/client-mediapackagev2";
 * const config = {}; // type is MediaPackageV2ClientConfig
 * const client = new MediaPackageV2Client(config);
 * const input = { // ResetOriginEndpointStateRequest
 *   ChannelGroupName: "STRING_VALUE", // required
 *   ChannelName: "STRING_VALUE", // required
 *   OriginEndpointName: "STRING_VALUE", // required
 * };
 * const command = new ResetOriginEndpointStateCommand(input);
 * const response = await client.send(command);
 * // { // ResetOriginEndpointStateResponse
 * //   ChannelGroupName: "STRING_VALUE", // required
 * //   ChannelName: "STRING_VALUE", // required
 * //   OriginEndpointName: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * //   ResetAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param ResetOriginEndpointStateCommandInput - {@link ResetOriginEndpointStateCommandInput}
 * @returns {@link ResetOriginEndpointStateCommandOutput}
 * @see {@link ResetOriginEndpointStateCommandInput} for command's `input` shape.
 * @see {@link ResetOriginEndpointStateCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageV2ClientResolvedConfig | config} for MediaPackageV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied because either you don't have permissions to perform the requested operation or MediaPackage is getting throttling errors with CDN authorization. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see Access Management in the IAM User Guide. Or, if you're using CDN authorization, you will receive this exception if MediaPackage receives a throttling error from Secrets Manager.</p>
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
 * @example Reset an OriginEndpoint
 * ```javascript
 * //
 * const input = {
 *   ChannelGroupName: "exampleChannelGroup",
 *   ChannelName: "exampleChannel",
 *   OriginEndpointName: "exampleOriginEndpoint"
 * };
 * const command = new ResetOriginEndpointStateCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Arn: "arn:aws:mediapackagev2:us-west-2:123456789012:channelGroup/exampleChannelGroup/channel/exampleChannel/originEndpoint/exampleOriginEndpoint",
 *   ChannelGroupName: "exampleChannelGroup",
 *   ChannelName: "exampleChannel",
 *   OriginEndpointName: "exampleOriginEndpoint",
 *   ResetAt: "2024-10-09T09:36:00.00Z"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ResetOriginEndpointStateCommand extends $Command
  .classBuilder<
    ResetOriginEndpointStateCommandInput,
    ResetOriginEndpointStateCommandOutput,
    MediaPackageV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaPackageV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("mediapackagev2", "ResetOriginEndpointState", {})
  .n("MediaPackageV2Client", "ResetOriginEndpointStateCommand")
  .sc(ResetOriginEndpointState)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResetOriginEndpointStateRequest;
      output: ResetOriginEndpointStateResponse;
    };
    sdk: {
      input: ResetOriginEndpointStateCommandInput;
      output: ResetOriginEndpointStateCommandOutput;
    };
  };
}
