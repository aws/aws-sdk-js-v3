// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  MediaPackageV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MediaPackageV2Client";
import type { GetChannelRequest, GetChannelResponse } from "../models/models_0";
import { GetChannel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetChannelCommand}.
 */
export interface GetChannelCommandInput extends GetChannelRequest {}
/**
 * @public
 *
 * The output of {@link GetChannelCommand}.
 */
export interface GetChannelCommandOutput extends GetChannelResponse, __MetadataBearer {}

/**
 * <p>Retrieves the specified channel that's configured in AWS Elemental MediaPackage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageV2Client, GetChannelCommand } from "@aws-sdk/client-mediapackagev2"; // ES Modules import
 * // const { MediaPackageV2Client, GetChannelCommand } = require("@aws-sdk/client-mediapackagev2"); // CommonJS import
 * // import type { MediaPackageV2ClientConfig } from "@aws-sdk/client-mediapackagev2";
 * const config = {}; // type is MediaPackageV2ClientConfig
 * const client = new MediaPackageV2Client(config);
 * const input = { // GetChannelRequest
 *   ChannelGroupName: "STRING_VALUE", // required
 *   ChannelName: "STRING_VALUE", // required
 * };
 * const command = new GetChannelCommand(input);
 * const response = await client.send(command);
 * // { // GetChannelResponse
 * //   Arn: "STRING_VALUE", // required
 * //   ChannelName: "STRING_VALUE", // required
 * //   ChannelGroupName: "STRING_VALUE", // required
 * //   CreatedAt: new Date("TIMESTAMP"), // required
 * //   ModifiedAt: new Date("TIMESTAMP"), // required
 * //   ResetAt: new Date("TIMESTAMP"),
 * //   Description: "STRING_VALUE",
 * //   IngestEndpoints: [ // IngestEndpointList
 * //     { // IngestEndpoint
 * //       Id: "STRING_VALUE",
 * //       Url: "STRING_VALUE",
 * //     },
 * //   ],
 * //   InputType: "HLS" || "CMAF",
 * //   ETag: "STRING_VALUE",
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   InputSwitchConfiguration: { // InputSwitchConfiguration
 * //     MQCSInputSwitching: true || false,
 * //     PreferredInput: Number("int"),
 * //   },
 * //   OutputHeaderConfiguration: { // OutputHeaderConfiguration
 * //     PublishMQCS: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param GetChannelCommandInput - {@link GetChannelCommandInput}
 * @returns {@link GetChannelCommandOutput}
 * @see {@link GetChannelCommandInput} for command's `input` shape.
 * @see {@link GetChannelCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageV2ClientResolvedConfig | config} for MediaPackageV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied because either you don't have permissions to perform the requested operation or MediaPackage is getting throttling errors with CDN authorization. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see Access Management in the IAM User Guide. Or, if you're using CDN authorization, you will receive this exception if MediaPackage receives a throttling error from Secrets Manager.</p>
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
 * @example Getting a Channel
 * ```javascript
 * //
 * const input = {
 *   ChannelGroupName: "exampleChannelGroup",
 *   ChannelName: "exampleChannel"
 * };
 * const command = new GetChannelCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Arn: "arn:aws:mediapackagev2:us-west-2:123456789012:channelGroup/exampleChannelGroup/channel/exampleChannel",
 *   ChannelGroupName: "exampleChannelGroup",
 *   ChannelName: "exampleChannel",
 *   CreatedAt: "2022-10-18T09:36:00.00Z",
 *   Description: "Description for exampleChannel",
 *   ETag: "GlfT+dwAyGIR4wuy8nKWl1RDPwSrjQej9qUutLZxoxk=",
 *   IngestEndpoints: [
 *     {
 *       Id: "1",
 *       Url: "https://abcde-1.ingest.vwxyz.mediapackagev2.us-west-2.amazonaws.com/v1/exampleChannelGroup/exampleChannel/index"
 *     },
 *     {
 *       Id: "2",
 *       Url: "https://abcde-2.ingest.vwxyz.mediapackagev2.us-west-2.amazonaws.com/v1/exampleChannelGroup/exampleChannel/index"
 *     }
 *   ],
 *   InputType: "HLS",
 *   ModifiedAt: "2022-10-18T09:36:00.00Z",
 *   Tags: {
 *     key1: "value1",
 *     key2: "value2"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetChannelCommand extends $Command
  .classBuilder<
    GetChannelCommandInput,
    GetChannelCommandOutput,
    MediaPackageV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaPackageV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("mediapackagev2", "GetChannel", {})
  .n("MediaPackageV2Client", "GetChannelCommand")
  .sc(GetChannel$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetChannelRequest;
      output: GetChannelResponse;
    };
    sdk: {
      input: GetChannelCommandInput;
      output: GetChannelCommandOutput;
    };
  };
}
