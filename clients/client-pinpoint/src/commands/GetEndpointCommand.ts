// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetEndpointRequest, GetEndpointResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_GetEndpointCommand, se_GetEndpointCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEndpointCommand}.
 */
export interface GetEndpointCommandInput extends GetEndpointRequest {}
/**
 * @public
 *
 * The output of {@link GetEndpointCommand}.
 */
export interface GetEndpointCommandOutput extends GetEndpointResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about the settings and attributes of a specific endpoint for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetEndpointCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetEndpointCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const input = { // GetEndpointRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   EndpointId: "STRING_VALUE", // required
 * };
 * const command = new GetEndpointCommand(input);
 * const response = await client.send(command);
 * // { // GetEndpointResponse
 * //   EndpointResponse: { // EndpointResponse
 * //     Address: "STRING_VALUE",
 * //     ApplicationId: "STRING_VALUE",
 * //     Attributes: { // MapOfListOf__string
 * //       "<keys>": [ // ListOf__string
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     ChannelType: "PUSH" || "GCM" || "APNS" || "APNS_SANDBOX" || "APNS_VOIP" || "APNS_VOIP_SANDBOX" || "ADM" || "SMS" || "VOICE" || "EMAIL" || "BAIDU" || "CUSTOM" || "IN_APP",
 * //     CohortId: "STRING_VALUE",
 * //     CreationDate: "STRING_VALUE",
 * //     Demographic: { // EndpointDemographic
 * //       AppVersion: "STRING_VALUE",
 * //       Locale: "STRING_VALUE",
 * //       Make: "STRING_VALUE",
 * //       Model: "STRING_VALUE",
 * //       ModelVersion: "STRING_VALUE",
 * //       Platform: "STRING_VALUE",
 * //       PlatformVersion: "STRING_VALUE",
 * //       Timezone: "STRING_VALUE",
 * //     },
 * //     EffectiveDate: "STRING_VALUE",
 * //     EndpointStatus: "STRING_VALUE",
 * //     Id: "STRING_VALUE",
 * //     Location: { // EndpointLocation
 * //       City: "STRING_VALUE",
 * //       Country: "STRING_VALUE",
 * //       Latitude: Number("double"),
 * //       Longitude: Number("double"),
 * //       PostalCode: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //     },
 * //     Metrics: { // MapOf__double
 * //       "<keys>": Number("double"),
 * //     },
 * //     OptOut: "STRING_VALUE",
 * //     RequestId: "STRING_VALUE",
 * //     User: { // EndpointUser
 * //       UserAttributes: {
 * //         "<keys>": [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       UserId: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetEndpointCommandInput - {@link GetEndpointCommandInput}
 * @returns {@link GetEndpointCommandOutput}
 * @see {@link GetEndpointCommandInput} for command's `input` shape.
 * @see {@link GetEndpointCommandOutput} for command's `response` shape.
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
export class GetEndpointCommand extends $Command
  .classBuilder<
    GetEndpointCommandInput,
    GetEndpointCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Pinpoint", "GetEndpoint", {})
  .n("PinpointClient", "GetEndpointCommand")
  .f(void 0, void 0)
  .ser(se_GetEndpointCommand)
  .de(de_GetEndpointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEndpointRequest;
      output: GetEndpointResponse;
    };
    sdk: {
      input: GetEndpointCommandInput;
      output: GetEndpointCommandOutput;
    };
  };
}
