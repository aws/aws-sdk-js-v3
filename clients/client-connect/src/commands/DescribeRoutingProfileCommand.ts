// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeRoutingProfileRequest, DescribeRoutingProfileResponse } from "../models/models_1";
import { de_DescribeRoutingProfileCommand, se_DescribeRoutingProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRoutingProfileCommand}.
 */
export interface DescribeRoutingProfileCommandInput extends DescribeRoutingProfileRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRoutingProfileCommand}.
 */
export interface DescribeRoutingProfileCommandOutput extends DescribeRoutingProfileResponse, __MetadataBearer {}

/**
 * <p>Describes the specified routing profile.</p>
 *          <note>
 *             <p>
 *                <code>DescribeRoutingProfile</code> does not populate AssociatedQueueIds in its response.
 *     The example Response Syntax shown on this page is incorrect; we are working to update it. <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_SearchRoutingProfiles.html">SearchRoutingProfiles</a> does include AssociatedQueueIds.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeRoutingProfileCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeRoutingProfileCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // DescribeRoutingProfileRequest
 *   InstanceId: "STRING_VALUE", // required
 *   RoutingProfileId: "STRING_VALUE", // required
 * };
 * const command = new DescribeRoutingProfileCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRoutingProfileResponse
 * //   RoutingProfile: { // RoutingProfile
 * //     InstanceId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     RoutingProfileArn: "STRING_VALUE",
 * //     RoutingProfileId: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     MediaConcurrencies: [ // MediaConcurrencies
 * //       { // MediaConcurrency
 * //         Channel: "VOICE" || "CHAT" || "TASK" || "EMAIL", // required
 * //         Concurrency: Number("int"), // required
 * //         CrossChannelBehavior: { // CrossChannelBehavior
 * //           BehaviorType: "ROUTE_CURRENT_CHANNEL_ONLY" || "ROUTE_ANY_CHANNEL", // required
 * //         },
 * //       },
 * //     ],
 * //     DefaultOutboundQueueId: "STRING_VALUE",
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     NumberOfAssociatedQueues: Number("long"),
 * //     NumberOfAssociatedUsers: Number("long"),
 * //     AgentAvailabilityTimer: "TIME_SINCE_LAST_ACTIVITY" || "TIME_SINCE_LAST_INBOUND",
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //     LastModifiedRegion: "STRING_VALUE",
 * //     IsDefault: true || false,
 * //     AssociatedQueueIds: [ // AssociatedQueueIdList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeRoutingProfileCommandInput - {@link DescribeRoutingProfileCommandInput}
 * @returns {@link DescribeRoutingProfileCommandOutput}
 * @see {@link DescribeRoutingProfileCommandInput} for command's `input` shape.
 * @see {@link DescribeRoutingProfileCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class DescribeRoutingProfileCommand extends $Command
  .classBuilder<
    DescribeRoutingProfileCommandInput,
    DescribeRoutingProfileCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "DescribeRoutingProfile", {})
  .n("ConnectClient", "DescribeRoutingProfileCommand")
  .f(void 0, void 0)
  .ser(se_DescribeRoutingProfileCommand)
  .de(de_DescribeRoutingProfileCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRoutingProfileRequest;
      output: DescribeRoutingProfileResponse;
    };
    sdk: {
      input: DescribeRoutingProfileCommandInput;
      output: DescribeRoutingProfileCommandOutput;
    };
  };
}
