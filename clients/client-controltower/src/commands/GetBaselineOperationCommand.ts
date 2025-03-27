// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ControlTowerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ControlTowerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetBaselineOperationInput, GetBaselineOperationOutput } from "../models/models_0";
import { de_GetBaselineOperationCommand, se_GetBaselineOperationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBaselineOperationCommand}.
 */
export interface GetBaselineOperationCommandInput extends GetBaselineOperationInput {}
/**
 * @public
 *
 * The output of {@link GetBaselineOperationCommand}.
 */
export interface GetBaselineOperationCommandOutput extends GetBaselineOperationOutput, __MetadataBearer {}

/**
 * <p>Returns the details of an asynchronous baseline operation, as initiated by any of these APIs: <code>EnableBaseline</code>, <code>DisableBaseline</code>, <code>UpdateEnabledBaseline</code>, <code>ResetEnabledBaseline</code>. A status message is displayed in case of operation failure. For usage examples, see <a href="https://docs.aws.amazon.com/controltower/latest/userguide/baseline-api-examples.html">
 *                <i>the Amazon Web Services Control Tower User Guide</i>
 *             </a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlTowerClient, GetBaselineOperationCommand } from "@aws-sdk/client-controltower"; // ES Modules import
 * // const { ControlTowerClient, GetBaselineOperationCommand } = require("@aws-sdk/client-controltower"); // CommonJS import
 * const client = new ControlTowerClient(config);
 * const input = { // GetBaselineOperationInput
 *   operationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetBaselineOperationCommand(input);
 * const response = await client.send(command);
 * // { // GetBaselineOperationOutput
 * //   baselineOperation: { // BaselineOperation
 * //     operationIdentifier: "STRING_VALUE",
 * //     operationType: "ENABLE_BASELINE" || "DISABLE_BASELINE" || "UPDATE_ENABLED_BASELINE" || "RESET_ENABLED_BASELINE",
 * //     status: "SUCCEEDED" || "FAILED" || "IN_PROGRESS",
 * //     startTime: new Date("TIMESTAMP"),
 * //     endTime: new Date("TIMESTAMP"),
 * //     statusMessage: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBaselineOperationCommandInput - {@link GetBaselineOperationCommandInput}
 * @returns {@link GetBaselineOperationCommandOutput}
 * @see {@link GetBaselineOperationCommandInput} for command's `input` shape.
 * @see {@link GetBaselineOperationCommandOutput} for command's `response` shape.
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
export class GetBaselineOperationCommand extends $Command
  .classBuilder<
    GetBaselineOperationCommandInput,
    GetBaselineOperationCommandOutput,
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
  .s("AWSControlTowerApis", "GetBaselineOperation", {})
  .n("ControlTowerClient", "GetBaselineOperationCommand")
  .f(void 0, void 0)
  .ser(se_GetBaselineOperationCommand)
  .de(de_GetBaselineOperationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBaselineOperationInput;
      output: GetBaselineOperationOutput;
    };
    sdk: {
      input: GetBaselineOperationCommandInput;
      output: GetBaselineOperationCommandOutput;
    };
  };
}
