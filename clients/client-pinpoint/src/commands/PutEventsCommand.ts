// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutEventsRequest, PutEventsResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { PutEvents } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutEventsCommand}.
 */
export interface PutEventsCommandInput extends PutEventsRequest {}
/**
 * @public
 *
 * The output of {@link PutEventsCommand}.
 */
export interface PutEventsCommandOutput extends PutEventsResponse, __MetadataBearer {}

/**
 * <p>Creates a new event to record for endpoints, or creates or updates endpoint data that existing events are associated with.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, PutEventsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, PutEventsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // PutEventsRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   EventsRequest: { // EventsRequest
 *     BatchItem: { // MapOfEventsBatch // required
 *       "<keys>": { // EventsBatch
 *         Endpoint: { // PublicEndpoint
 *           Address: "STRING_VALUE",
 *           Attributes: { // MapOfListOf__string
 *             "<keys>": [ // ListOf__string
 *               "STRING_VALUE",
 *             ],
 *           },
 *           ChannelType: "PUSH" || "GCM" || "APNS" || "APNS_SANDBOX" || "APNS_VOIP" || "APNS_VOIP_SANDBOX" || "ADM" || "SMS" || "VOICE" || "EMAIL" || "BAIDU" || "CUSTOM" || "IN_APP",
 *           Demographic: { // EndpointDemographic
 *             AppVersion: "STRING_VALUE",
 *             Locale: "STRING_VALUE",
 *             Make: "STRING_VALUE",
 *             Model: "STRING_VALUE",
 *             ModelVersion: "STRING_VALUE",
 *             Platform: "STRING_VALUE",
 *             PlatformVersion: "STRING_VALUE",
 *             Timezone: "STRING_VALUE",
 *           },
 *           EffectiveDate: "STRING_VALUE",
 *           EndpointStatus: "STRING_VALUE",
 *           Location: { // EndpointLocation
 *             City: "STRING_VALUE",
 *             Country: "STRING_VALUE",
 *             Latitude: Number("double"),
 *             Longitude: Number("double"),
 *             PostalCode: "STRING_VALUE",
 *             Region: "STRING_VALUE",
 *           },
 *           Metrics: { // MapOf__double
 *             "<keys>": Number("double"),
 *           },
 *           OptOut: "STRING_VALUE",
 *           RequestId: "STRING_VALUE",
 *           User: { // EndpointUser
 *             UserAttributes: {
 *               "<keys>": [
 *                 "STRING_VALUE",
 *               ],
 *             },
 *             UserId: "STRING_VALUE",
 *           },
 *         },
 *         Events: { // MapOfEvent // required
 *           "<keys>": { // Event
 *             AppPackageName: "STRING_VALUE",
 *             AppTitle: "STRING_VALUE",
 *             AppVersionCode: "STRING_VALUE",
 *             Attributes: { // MapOf__string
 *               "<keys>": "STRING_VALUE",
 *             },
 *             ClientSdkVersion: "STRING_VALUE",
 *             EventType: "STRING_VALUE", // required
 *             Metrics: {
 *               "<keys>": Number("double"),
 *             },
 *             SdkName: "STRING_VALUE",
 *             Session: { // Session
 *               Duration: Number("int"),
 *               Id: "STRING_VALUE", // required
 *               StartTimestamp: "STRING_VALUE", // required
 *               StopTimestamp: "STRING_VALUE",
 *             },
 *             Timestamp: "STRING_VALUE", // required
 *           },
 *         },
 *       },
 *     },
 *   },
 * };
 * const command = new PutEventsCommand(input);
 * const response = await client.send(command);
 * // { // PutEventsResponse
 * //   EventsResponse: { // EventsResponse
 * //     Results: { // MapOfItemResponse
 * //       "<keys>": { // ItemResponse
 * //         EndpointItemResponse: { // EndpointItemResponse
 * //           Message: "STRING_VALUE",
 * //           StatusCode: Number("int"),
 * //         },
 * //         EventsItemResponse: { // MapOfEventItemResponse
 * //           "<keys>": { // EventItemResponse
 * //             Message: "STRING_VALUE",
 * //             StatusCode: Number("int"),
 * //           },
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param PutEventsCommandInput - {@link PutEventsCommandInput}
 * @returns {@link PutEventsCommandOutput}
 * @see {@link PutEventsCommandInput} for command's `input` shape.
 * @see {@link PutEventsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PinpointServiceException}
 * <p>Base exception class for all service exceptions from Pinpoint service.</p>
 *
 *
 * @public
 */
export class PutEventsCommand extends $Command
  .classBuilder<
    PutEventsCommandInput,
    PutEventsCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Pinpoint", "PutEvents", {})
  .n("PinpointClient", "PutEventsCommand")
  .sc(PutEvents)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutEventsRequest;
      output: PutEventsResponse;
    };
    sdk: {
      input: PutEventsCommandInput;
      output: PutEventsCommandOutput;
    };
  };
}
