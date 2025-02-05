// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateEndpointsBatchRequest, UpdateEndpointsBatchResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_UpdateEndpointsBatchCommand, se_UpdateEndpointsBatchCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateEndpointsBatchCommand}.
 */
export interface UpdateEndpointsBatchCommandInput extends UpdateEndpointsBatchRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEndpointsBatchCommand}.
 */
export interface UpdateEndpointsBatchCommandOutput extends UpdateEndpointsBatchResponse, __MetadataBearer {}

/**
 * <p>Creates a new batch of endpoints for an application or updates the settings and attributes of a batch of existing endpoints for an application. You can also use this operation to define custom attributes for a batch of endpoints. If an update includes one or more values for a custom attribute, Amazon Pinpoint replaces (overwrites) any existing values with the new values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateEndpointsBatchCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateEndpointsBatchCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new PinpointClient(config);
 * const input = { // UpdateEndpointsBatchRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   EndpointBatchRequest: { // EndpointBatchRequest
 *     Item: [ // ListOfEndpointBatchItem // required
 *       { // EndpointBatchItem
 *         Address: "STRING_VALUE",
 *         Attributes: { // MapOfListOf__string
 *           "<keys>": [ // ListOf__string
 *             "STRING_VALUE",
 *           ],
 *         },
 *         ChannelType: "PUSH" || "GCM" || "APNS" || "APNS_SANDBOX" || "APNS_VOIP" || "APNS_VOIP_SANDBOX" || "ADM" || "SMS" || "VOICE" || "EMAIL" || "BAIDU" || "CUSTOM" || "IN_APP",
 *         Demographic: { // EndpointDemographic
 *           AppVersion: "STRING_VALUE",
 *           Locale: "STRING_VALUE",
 *           Make: "STRING_VALUE",
 *           Model: "STRING_VALUE",
 *           ModelVersion: "STRING_VALUE",
 *           Platform: "STRING_VALUE",
 *           PlatformVersion: "STRING_VALUE",
 *           Timezone: "STRING_VALUE",
 *         },
 *         EffectiveDate: "STRING_VALUE",
 *         EndpointStatus: "STRING_VALUE",
 *         Id: "STRING_VALUE",
 *         Location: { // EndpointLocation
 *           City: "STRING_VALUE",
 *           Country: "STRING_VALUE",
 *           Latitude: Number("double"),
 *           Longitude: Number("double"),
 *           PostalCode: "STRING_VALUE",
 *           Region: "STRING_VALUE",
 *         },
 *         Metrics: { // MapOf__double
 *           "<keys>": Number("double"),
 *         },
 *         OptOut: "STRING_VALUE",
 *         RequestId: "STRING_VALUE",
 *         User: { // EndpointUser
 *           UserAttributes: {
 *             "<keys>": [
 *               "STRING_VALUE",
 *             ],
 *           },
 *           UserId: "STRING_VALUE",
 *         },
 *       },
 *     ],
 *   },
 * };
 * const command = new UpdateEndpointsBatchCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEndpointsBatchResponse
 * //   MessageBody: { // MessageBody
 * //     Message: "STRING_VALUE",
 * //     RequestID: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateEndpointsBatchCommandInput - {@link UpdateEndpointsBatchCommandInput}
 * @returns {@link UpdateEndpointsBatchCommandOutput}
 * @see {@link UpdateEndpointsBatchCommandInput} for command's `input` shape.
 * @see {@link UpdateEndpointsBatchCommandOutput} for command's `response` shape.
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
 * @public
 */
export class UpdateEndpointsBatchCommand extends $Command
  .classBuilder<
    UpdateEndpointsBatchCommandInput,
    UpdateEndpointsBatchCommandOutput,
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
  .s("Pinpoint", "UpdateEndpointsBatch", {})
  .n("PinpointClient", "UpdateEndpointsBatchCommand")
  .f(void 0, void 0)
  .ser(se_UpdateEndpointsBatchCommand)
  .de(de_UpdateEndpointsBatchCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEndpointsBatchRequest;
      output: UpdateEndpointsBatchResponse;
    };
    sdk: {
      input: UpdateEndpointsBatchCommandInput;
      output: UpdateEndpointsBatchCommandOutput;
    };
  };
}
