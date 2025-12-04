// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import type { ListInputRoutingsRequest, ListInputRoutingsResponse } from "../models/models_0";
import { ListInputRoutings } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListInputRoutingsCommand}.
 */
export interface ListInputRoutingsCommandInput extends ListInputRoutingsRequest {}
/**
 * @public
 *
 * The output of {@link ListInputRoutingsCommand}.
 */
export interface ListInputRoutingsCommandOutput extends ListInputRoutingsResponse, __MetadataBearer {}

/**
 * <p>
 *       Lists one or more input routings.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, ListInputRoutingsCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, ListInputRoutingsCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * // import type { IoTEventsClientConfig } from "@aws-sdk/client-iot-events";
 * const config = {}; // type is IoTEventsClientConfig
 * const client = new IoTEventsClient(config);
 * const input = { // ListInputRoutingsRequest
 *   inputIdentifier: { // InputIdentifier
 *     iotEventsInputIdentifier: { // IotEventsInputIdentifier
 *       inputName: "STRING_VALUE", // required
 *     },
 *     iotSiteWiseInputIdentifier: { // IotSiteWiseInputIdentifier
 *       iotSiteWiseAssetModelPropertyIdentifier: { // IotSiteWiseAssetModelPropertyIdentifier
 *         assetModelId: "STRING_VALUE", // required
 *         propertyId: "STRING_VALUE", // required
 *       },
 *     },
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListInputRoutingsCommand(input);
 * const response = await client.send(command);
 * // { // ListInputRoutingsResponse
 * //   routedResources: [ // RoutedResources
 * //     { // RoutedResource
 * //       name: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInputRoutingsCommandInput - {@link ListInputRoutingsCommandInput}
 * @returns {@link ListInputRoutingsCommandOutput}
 * @see {@link ListInputRoutingsCommandInput} for command's `input` shape.
 * @see {@link ListInputRoutingsCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for IoTEventsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource was not found.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request could not be completed due to throttling.</p>
 *
 * @throws {@link IoTEventsServiceException}
 * <p>Base exception class for all service exceptions from IoTEvents service.</p>
 *
 *
 * @public
 */
export class ListInputRoutingsCommand extends $Command
  .classBuilder<
    ListInputRoutingsCommandInput,
    ListInputRoutingsCommandOutput,
    IoTEventsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTEventsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotColumboService", "ListInputRoutings", {})
  .n("IoTEventsClient", "ListInputRoutingsCommand")
  .sc(ListInputRoutings)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListInputRoutingsRequest;
      output: ListInputRoutingsResponse;
    };
    sdk: {
      input: ListInputRoutingsCommandInput;
      output: ListInputRoutingsCommandOutput;
    };
  };
}
