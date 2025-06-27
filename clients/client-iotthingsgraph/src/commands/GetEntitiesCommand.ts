// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { GetEntitiesRequest, GetEntitiesResponse } from "../models/models_0";
import { de_GetEntitiesCommand, se_GetEntitiesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEntitiesCommand}.
 */
export interface GetEntitiesCommandInput extends GetEntitiesRequest {}
/**
 * @public
 *
 * The output of {@link GetEntitiesCommand}.
 */
export interface GetEntitiesCommandOutput extends GetEntitiesResponse, __MetadataBearer {}

/**
 * <p>Gets definitions of the specified entities. Uses the latest version of the user's namespace by default. This API returns the
 *       following TDM entities.</p>
 *          <ul>
 *             <li>
 *                <p>Properties</p>
 *             </li>
 *             <li>
 *                <p>States</p>
 *             </li>
 *             <li>
 *                <p>Events</p>
 *             </li>
 *             <li>
 *                <p>Actions</p>
 *             </li>
 *             <li>
 *                <p>Capabilities</p>
 *             </li>
 *             <li>
 *                <p>Mappings</p>
 *             </li>
 *             <li>
 *                <p>Devices</p>
 *             </li>
 *             <li>
 *                <p>Device Models</p>
 *             </li>
 *             <li>
 *                <p>Services</p>
 *             </li>
 *          </ul>
 *          <p>This action doesn't return definitions for systems, flows, and deployments.</p>
 *
 * @deprecated since: 2022-08-30
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, GetEntitiesCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, GetEntitiesCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const input = { // GetEntitiesRequest
 *   ids: [ // Urns // required
 *     "STRING_VALUE",
 *   ],
 *   namespaceVersion: Number("long"),
 * };
 * const command = new GetEntitiesCommand(input);
 * const response = await client.send(command);
 * // { // GetEntitiesResponse
 * //   descriptions: [ // EntityDescriptions
 * //     { // EntityDescription
 * //       id: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       type: "DEVICE" || "SERVICE" || "DEVICE_MODEL" || "CAPABILITY" || "STATE" || "ACTION" || "EVENT" || "PROPERTY" || "MAPPING" || "ENUM",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       definition: { // DefinitionDocument
 * //         language: "GRAPHQL", // required
 * //         text: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetEntitiesCommandInput - {@link GetEntitiesCommandInput}
 * @returns {@link GetEntitiesCommandOutput}
 * @see {@link GetEntitiesCommandInput} for command's `input` shape.
 * @see {@link GetEntitiesCommandOutput} for command's `response` shape.
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
export class GetEntitiesCommand extends $Command
  .classBuilder<
    GetEntitiesCommandInput,
    GetEntitiesCommandOutput,
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
  .s("IotThingsGraphFrontEndService", "GetEntities", {})
  .n("IoTThingsGraphClient", "GetEntitiesCommand")
  .f(void 0, void 0)
  .ser(se_GetEntitiesCommand)
  .de(de_GetEntitiesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEntitiesRequest;
      output: GetEntitiesResponse;
    };
    sdk: {
      input: GetEntitiesCommandInput;
      output: GetEntitiesCommandOutput;
    };
  };
}
