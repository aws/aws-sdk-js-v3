// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { DeleteRouteCalculatorRequest, DeleteRouteCalculatorResponse } from "../models/models_0";
import { de_DeleteRouteCalculatorCommand, se_DeleteRouteCalculatorCommand } from "../protocols/Aws_restJson1";

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
 * <p>Deletes a route calculator resource from your Amazon Web Services account.</p>
 *          <note>
 *             <p>This operation deletes the resource permanently.</p>
 *          </note>
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LocationService", "DeleteRouteCalculator", {})
  .n("LocationClient", "DeleteRouteCalculatorCommand")
  .f(void 0, void 0)
  .ser(se_DeleteRouteCalculatorCommand)
  .de(de_DeleteRouteCalculatorCommand)
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
