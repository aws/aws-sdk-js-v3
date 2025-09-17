// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import { GetVehicleRequest, GetVehicleResponse } from "../models/models_0";
import { de_GetVehicleCommand, se_GetVehicleCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetVehicleCommand}.
 */
export interface GetVehicleCommandInput extends GetVehicleRequest {}
/**
 * @public
 *
 * The output of {@link GetVehicleCommand}.
 */
export interface GetVehicleCommandOutput extends GetVehicleResponse, __MetadataBearer {}

/**
 * <p> Retrieves information about a vehicle. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, GetVehicleCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, GetVehicleCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * // import type { IoTFleetWiseClientConfig } from "@aws-sdk/client-iotfleetwise";
 * const config = {}; // type is IoTFleetWiseClientConfig
 * const client = new IoTFleetWiseClient(config);
 * const input = { // GetVehicleRequest
 *   vehicleName: "STRING_VALUE", // required
 * };
 * const command = new GetVehicleCommand(input);
 * const response = await client.send(command);
 * // { // GetVehicleResponse
 * //   vehicleName: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   modelManifestArn: "STRING_VALUE",
 * //   decoderManifestArn: "STRING_VALUE",
 * //   attributes: { // attributesMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   stateTemplates: [ // StateTemplateAssociations
 * //     { // StateTemplateAssociation
 * //       identifier: "STRING_VALUE", // required
 * //       stateTemplateUpdateStrategy: { // StateTemplateUpdateStrategy Union: only one key present
 * //         periodic: { // PeriodicStateTemplateUpdateStrategy
 * //           stateTemplateUpdateRate: { // TimePeriod
 * //             unit: "MILLISECOND" || "SECOND" || "MINUTE" || "HOUR", // required
 * //             value: Number("int"), // required
 * //           },
 * //         },
 * //         onChange: {},
 * //       },
 * //     },
 * //   ],
 * //   creationTime: new Date("TIMESTAMP"),
 * //   lastModificationTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetVehicleCommandInput - {@link GetVehicleCommandInput}
 * @returns {@link GetVehicleCommandOutput}
 * @see {@link GetVehicleCommandInput} for command's `input` shape.
 * @see {@link GetVehicleCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request couldn't be completed because the server temporarily failed.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource wasn't found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request couldn't be completed due to throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link IoTFleetWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTFleetWise service.</p>
 *
 *
 * @public
 */
export class GetVehicleCommand extends $Command
  .classBuilder<
    GetVehicleCommandInput,
    GetVehicleCommandOutput,
    IoTFleetWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTFleetWiseClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IoTAutobahnControlPlane", "GetVehicle", {})
  .n("IoTFleetWiseClient", "GetVehicleCommand")
  .f(void 0, void 0)
  .ser(se_GetVehicleCommand)
  .de(de_GetVehicleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetVehicleRequest;
      output: GetVehicleResponse;
    };
    sdk: {
      input: GetVehicleCommandInput;
      output: GetVehicleCommandOutput;
    };
  };
}
