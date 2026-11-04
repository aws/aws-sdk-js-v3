// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ResetChannelStateRequest, ResetChannelStateResponse } from "../models/models_0";
import { ResetChannelState$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Resetting the channel can help to clear errors from misconfigurations in the encoder. A reset refreshes the ingest stream and removes previous content.
 *
 * Be sure to stop the encoder before you reset the channel, and wait at least 30 seconds before you restart the encoder.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageV2Client, ResetChannelStateCommand } from "@aws-sdk/client-mediapackagev2"; // ES Modules import
 * // const { MediaPackageV2Client, ResetChannelStateCommand } = require("@aws-sdk/client-mediapackagev2"); // CommonJS import
 * // import type { MediaPackageV2ClientConfig } from "@aws-sdk/client-mediapackagev2";
 * const config = {}; // type is MediaPackageV2ClientConfig
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
 *
 * Access is denied because either you don't have permissions to perform the requested operation or MediaPackage is getting throttling errors with CDN authorization. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see Access Management in the IAM User Guide. Or, if you're using CDN authorization, you will receive this exception if MediaPackage receives a throttling error from Secrets Manager.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting this resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Indicates that an error from the service occurred while trying to process a request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource doesn't exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request throughput limit was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input failed to meet the constraints specified by the AWS service.
 *
 * @throws {@link MediaPackageV2ServiceException}
 *
 * Base exception class for all service exceptions from MediaPackageV2 service.
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
export class ResetChannelStateCommand extends command<ResetChannelStateCommandInput, ResetChannelStateCommandOutput>(
  _ep0,
  _mw0,
  "ResetChannelState",
  ResetChannelState$
) {
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
