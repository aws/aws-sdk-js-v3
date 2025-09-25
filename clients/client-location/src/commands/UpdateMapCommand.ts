// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { UpdateMapRequest, UpdateMapResponse } from "../models/models_0";
import { UpdateMap } from "../schemas/schemas_8_Describe";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateMapCommand}.
 */
export interface UpdateMapCommandInput extends UpdateMapRequest {}
/**
 * @public
 *
 * The output of {@link UpdateMapCommand}.
 */
export interface UpdateMapCommandOutput extends UpdateMapResponse, __MetadataBearer {}

/**
 * <p>Updates the specified properties of a given map resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, UpdateMapCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, UpdateMapCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
 * const client = new LocationClient(config);
 * const input = { // UpdateMapRequest
 *   MapName: "STRING_VALUE", // required
 *   PricingPlan: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   ConfigurationUpdate: { // MapConfigurationUpdate
 *     PoliticalView: "STRING_VALUE",
 *     CustomLayers: [ // CustomLayerList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new UpdateMapCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMapResponse
 * //   MapName: "STRING_VALUE", // required
 * //   MapArn: "STRING_VALUE", // required
 * //   UpdateTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateMapCommandInput - {@link UpdateMapCommandInput}
 * @returns {@link UpdateMapCommandOutput}
 * @see {@link UpdateMapCommandInput} for command's `input` shape.
 * @see {@link UpdateMapCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because of insufficient access or permissions. Check with an
 *       administrator to verify your permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed to process because of an unknown server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource that you've entered was not found in your AWS account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to meet the constraints specified by the AWS service. </p>
 *
 * @throws {@link LocationServiceException}
 * <p>Base exception class for all service exceptions from Location service.</p>
 *
 *
 * @public
 */
export class UpdateMapCommand extends $Command
  .classBuilder<
    UpdateMapCommandInput,
    UpdateMapCommandOutput,
    LocationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LocationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LocationService", "UpdateMap", {})
  .n("LocationClient", "UpdateMapCommand")
  .sc(UpdateMap)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMapRequest;
      output: UpdateMapResponse;
    };
    sdk: {
      input: UpdateMapCommandInput;
      output: UpdateMapCommandOutput;
    };
  };
}
