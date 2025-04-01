// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { SearchThingsRequest, SearchThingsResponse } from "../models/models_0";
import { de_SearchThingsCommand, se_SearchThingsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchThingsCommand}.
 */
export interface SearchThingsCommandInput extends SearchThingsRequest {}
/**
 * @public
 *
 * The output of {@link SearchThingsCommand}.
 */
export interface SearchThingsCommandOutput extends SearchThingsResponse, __MetadataBearer {}

/**
 * <p>Searches for things associated with the specified entity. You can search by both device and device model.</p>
 *          <p>For example, if two different devices, camera1 and camera2, implement the camera device model, the user can associate thing1 to camera1 and thing2 to camera2.
 *          <code>SearchThings(camera2)</code> will return only thing2, but <code>SearchThings(camera)</code> will return both thing1 and thing2.</p>
 *          <p>This action searches for exact matches and doesn't perform partial text matching.</p>
 *
 * @deprecated since: 2022-08-30
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, SearchThingsCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, SearchThingsCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const input = { // SearchThingsRequest
 *   entityId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   namespaceVersion: Number("long"),
 * };
 * const command = new SearchThingsCommand(input);
 * const response = await client.send(command);
 * // { // SearchThingsResponse
 * //   things: [ // Things
 * //     { // Thing
 * //       thingArn: "STRING_VALUE",
 * //       thingName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchThingsCommandInput - {@link SearchThingsCommandInput}
 * @returns {@link SearchThingsCommandOutput}
 * @see {@link SearchThingsCommandInput} for command's `input` shape.
 * @see {@link SearchThingsCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for IoTThingsGraphClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p></p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p></p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p></p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p></p>
 *
 * @throws {@link IoTThingsGraphServiceException}
 * <p>Base exception class for all service exceptions from IoTThingsGraph service.</p>
 *
 *
 * @public
 */
export class SearchThingsCommand extends $Command
  .classBuilder<
    SearchThingsCommandInput,
    SearchThingsCommandOutput,
    IoTThingsGraphClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTThingsGraphClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IotThingsGraphFrontEndService", "SearchThings", {})
  .n("IoTThingsGraphClient", "SearchThingsCommand")
  .f(void 0, void 0)
  .ser(se_SearchThingsCommand)
  .de(de_SearchThingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchThingsRequest;
      output: SearchThingsResponse;
    };
    sdk: {
      input: SearchThingsCommandInput;
      output: SearchThingsCommandOutput;
    };
  };
}
