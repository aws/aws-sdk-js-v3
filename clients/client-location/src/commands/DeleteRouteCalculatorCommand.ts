// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import type { DeleteRouteCalculatorRequest, DeleteRouteCalculatorResponse } from "../models/models_0";
import { DeleteRouteCalculator } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRouteCalculatorCommand}.
 */
export interface DeleteRouteCalculatorCommandInput extends DeleteRouteCalculatorRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRouteCalculatorCommand}.
 */
export interface DeleteRouteCalculatorCommandOutput extends DeleteRouteCalculatorResponse, __MetadataBearer {}

/**
 * <important> <p>This operation is no longer current and may be deprecated in the future. We recommend you upgrade to the Routes API V2 unless you require Grab data.</p> <ul> <li> <p> <code>DeleteRouteCalculator</code> is part of a previous Amazon Location Service Routes API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2).</p> </li> <li> <p>The Routes API version 2 has a simplified interface that can be used without creating or managing route calculator resources.</p> </li> <li> <p>If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Routes API version 2 is found under <code>geo-routes</code> or <code>geo_routes</code>, not under <code>location</code>.</p> </li> <li> <p>Since Grab is not yet fully supported in Routes API version 2, we recommend you continue using API version 1 when using Grab.</p> </li> <li> <p>Start your version 2 API journey with the Routes V2 <a href="/location/latest/APIReference/API_Operations_Amazon_Location_Service_Routes_V2.html">API Reference</a> or the <a href="/location/latest/developerguide/routes.html">Developer Guide</a>.</p> </li> </ul> </important> <p>Deletes a route calculator resource from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, DeleteRouteCalculatorCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, DeleteRouteCalculatorCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
 * const client = new LocationClient(config);
 * const input = { // DeleteRouteCalculatorRequest
 *   CalculatorName: "STRING_VALUE", // required
 * };
 * const command = new DeleteRouteCalculatorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRouteCalculatorCommandInput - {@link DeleteRouteCalculatorCommandInput}
 * @returns {@link DeleteRouteCalculatorCommandOutput}
 * @see {@link DeleteRouteCalculatorCommandInput} for command's `input` shape.
 * @see {@link DeleteRouteCalculatorCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because of insufficient access or permissions. Check with an administrator to verify your permissions.</p>
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
export class DeleteRouteCalculatorCommand extends $Command
  .classBuilder<
    DeleteRouteCalculatorCommandInput,
    DeleteRouteCalculatorCommandOutput,
    LocationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LocationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LocationService", "DeleteRouteCalculator", {})
  .n("LocationClient", "DeleteRouteCalculatorCommand")
  .sc(DeleteRouteCalculator)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRouteCalculatorRequest;
      output: {};
    };
    sdk: {
      input: DeleteRouteCalculatorCommandInput;
      output: DeleteRouteCalculatorCommandOutput;
    };
  };
}
