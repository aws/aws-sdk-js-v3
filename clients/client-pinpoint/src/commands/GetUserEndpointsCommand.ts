// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetUserEndpointsRequest, GetUserEndpointsResponse } from "../models/models_1";
import type { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetUserEndpoints$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetUserEndpointsCommand}.
 */
export interface GetUserEndpointsCommandInput extends GetUserEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link GetUserEndpointsCommand}.
 */
export interface GetUserEndpointsCommandOutput extends GetUserEndpointsResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about all the endpoints that are associated with a specific user ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetUserEndpointsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetUserEndpointsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // GetUserEndpointsRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE", // required
 * };
 * const command = new GetUserEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // GetUserEndpointsResponse
 * //   EndpointsResponse: { // EndpointsResponse
 * //     Item: [ // ListOfEndpointResponse // required
 * //       { // EndpointResponse
 * //         Address: "STRING_VALUE",
 * //         ApplicationId: "STRING_VALUE",
 * //         Attributes: { // MapOfListOf__string
 * //           "<keys>": [ // ListOf__string
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         ChannelType: "PUSH" || "GCM" || "APNS" || "APNS_SANDBOX" || "APNS_VOIP" || "APNS_VOIP_SANDBOX" || "ADM" || "SMS" || "VOICE" || "EMAIL" || "BAIDU" || "CUSTOM" || "IN_APP",
 * //         CohortId: "STRING_VALUE",
 * //         CreationDate: "STRING_VALUE",
 * //         Demographic: { // EndpointDemographic
 * //           AppVersion: "STRING_VALUE",
 * //           Locale: "STRING_VALUE",
 * //           Make: "STRING_VALUE",
 * //           Model: "STRING_VALUE",
 * //           ModelVersion: "STRING_VALUE",
 * //           Platform: "STRING_VALUE",
 * //           PlatformVersion: "STRING_VALUE",
 * //           Timezone: "STRING_VALUE",
 * //         },
 * //         EffectiveDate: "STRING_VALUE",
 * //         EndpointStatus: "STRING_VALUE",
 * //         Id: "STRING_VALUE",
 * //         Location: { // EndpointLocation
 * //           City: "STRING_VALUE",
 * //           Country: "STRING_VALUE",
 * //           Latitude: Number("double"),
 * //           Longitude: Number("double"),
 * //           PostalCode: "STRING_VALUE",
 * //           Region: "STRING_VALUE",
 * //         },
 * //         Metrics: { // MapOf__double
 * //           "<keys>": Number("double"),
 * //         },
 * //         OptOut: "STRING_VALUE",
 * //         RequestId: "STRING_VALUE",
 * //         User: { // EndpointUser
 * //           UserAttributes: {
 * //             "<keys>": [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           UserId: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetUserEndpointsCommandInput - {@link GetUserEndpointsCommandInput}
 * @returns {@link GetUserEndpointsCommandOutput}
 * @see {@link GetUserEndpointsCommandInput} for command's `input` shape.
 * @see {@link GetUserEndpointsCommandOutput} for command's `response` shape.
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
export class GetUserEndpointsCommand extends $Command
  .classBuilder<
    GetUserEndpointsCommandInput,
    GetUserEndpointsCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Pinpoint", "GetUserEndpoints", {})
  .n("PinpointClient", "GetUserEndpointsCommand")
  .sc(GetUserEndpoints$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetUserEndpointsRequest;
      output: GetUserEndpointsResponse;
    };
    sdk: {
      input: GetUserEndpointsCommandInput;
      output: GetUserEndpointsCommandOutput;
    };
  };
}
