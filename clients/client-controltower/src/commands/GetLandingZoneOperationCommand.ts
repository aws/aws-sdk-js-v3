// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ControlTowerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ControlTowerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetLandingZoneOperationInput, GetLandingZoneOperationOutput } from "../models/models_0";
import { de_GetLandingZoneOperationCommand, se_GetLandingZoneOperationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLandingZoneOperationCommand}.
 */
export interface GetLandingZoneOperationCommandInput extends GetLandingZoneOperationInput {}
/**
 * @public
 *
 * The output of {@link GetLandingZoneOperationCommand}.
 */
export interface GetLandingZoneOperationCommandOutput extends GetLandingZoneOperationOutput, __MetadataBearer {}

/**
 * <p>Returns the status of the specified landing zone operation. Details for an operation are available for 90 days.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlTowerClient, GetLandingZoneOperationCommand } from "@aws-sdk/client-controltower"; // ES Modules import
 * // const { ControlTowerClient, GetLandingZoneOperationCommand } = require("@aws-sdk/client-controltower"); // CommonJS import
 * const client = new ControlTowerClient(config);
 * const input = { // GetLandingZoneOperationInput
 *   operationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetLandingZoneOperationCommand(input);
 * const response = await client.send(command);
 * // { // GetLandingZoneOperationOutput
 * //   operationDetails: { // LandingZoneOperationDetail
 * //     operationType: "DELETE" || "CREATE" || "UPDATE" || "RESET",
 * //     operationIdentifier: "STRING_VALUE",
 * //     status: "SUCCEEDED" || "FAILED" || "IN_PROGRESS",
 * //     startTime: new Date("TIMESTAMP"),
 * //     endTime: new Date("TIMESTAMP"),
 * //     statusMessage: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetLandingZoneOperationCommandInput - {@link GetLandingZoneOperationCommandInput}
 * @returns {@link GetLandingZoneOperationCommandOutput}
 * @see {@link GetLandingZoneOperationCommandInput} for command's `input` shape.
 * @see {@link GetLandingZoneOperationCommandOutput} for command's `response` shape.
 * @see {@link ControlTowerClientResolvedConfig | config} for ControlTowerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during processing of a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link ControlTowerServiceException}
 * <p>Base exception class for all service exceptions from ControlTower service.</p>
 *
 *
 * @public
 */
export class GetLandingZoneOperationCommand extends $Command
  .classBuilder<
    GetLandingZoneOperationCommandInput,
    GetLandingZoneOperationCommandOutput,
    ControlTowerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ControlTowerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSControlTowerApis", "GetLandingZoneOperation", {})
  .n("ControlTowerClient", "GetLandingZoneOperationCommand")
  .f(void 0, void 0)
  .ser(se_GetLandingZoneOperationCommand)
  .de(de_GetLandingZoneOperationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLandingZoneOperationInput;
      output: GetLandingZoneOperationOutput;
    };
    sdk: {
      input: GetLandingZoneOperationCommandInput;
      output: GetLandingZoneOperationCommandOutput;
    };
  };
}
