// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ControlTowerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ControlTowerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetControlOperationInput, GetControlOperationOutput } from "../models/models_0";
import { GetControlOperation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetControlOperationCommand}.
 */
export interface GetControlOperationCommandInput extends GetControlOperationInput {}
/**
 * @public
 *
 * The output of {@link GetControlOperationCommand}.
 */
export interface GetControlOperationCommandOutput extends GetControlOperationOutput, __MetadataBearer {}

/**
 * <p>Returns the status of a particular <code>EnableControl</code> or <code>DisableControl</code> operation. Displays a message in case of error. Details for an operation are available for 90 days. For usage examples, see the <a href="https://docs.aws.amazon.com/controltower/latest/controlreference/control-api-examples-short.html"> <i>Controls Reference Guide</i> </a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlTowerClient, GetControlOperationCommand } from "@aws-sdk/client-controltower"; // ES Modules import
 * // const { ControlTowerClient, GetControlOperationCommand } = require("@aws-sdk/client-controltower"); // CommonJS import
 * // import type { ControlTowerClientConfig } from "@aws-sdk/client-controltower";
 * const config = {}; // type is ControlTowerClientConfig
 * const client = new ControlTowerClient(config);
 * const input = { // GetControlOperationInput
 *   operationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetControlOperationCommand(input);
 * const response = await client.send(command);
 * // { // GetControlOperationOutput
 * //   controlOperation: { // ControlOperation
 * //     operationType: "ENABLE_CONTROL" || "DISABLE_CONTROL" || "UPDATE_ENABLED_CONTROL" || "RESET_ENABLED_CONTROL",
 * //     startTime: new Date("TIMESTAMP"),
 * //     endTime: new Date("TIMESTAMP"),
 * //     status: "SUCCEEDED" || "FAILED" || "IN_PROGRESS",
 * //     statusMessage: "STRING_VALUE",
 * //     operationIdentifier: "STRING_VALUE",
 * //     controlIdentifier: "STRING_VALUE",
 * //     targetIdentifier: "STRING_VALUE",
 * //     enabledControlIdentifier: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetControlOperationCommandInput - {@link GetControlOperationCommandInput}
 * @returns {@link GetControlOperationCommandOutput}
 * @see {@link GetControlOperationCommandInput} for command's `input` shape.
 * @see {@link GetControlOperationCommandOutput} for command's `response` shape.
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
export class GetControlOperationCommand extends $Command
  .classBuilder<
    GetControlOperationCommandInput,
    GetControlOperationCommandOutput,
    ControlTowerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ControlTowerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSControlTowerApis", "GetControlOperation", {})
  .n("ControlTowerClient", "GetControlOperationCommand")
  .sc(GetControlOperation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetControlOperationInput;
      output: GetControlOperationOutput;
    };
    sdk: {
      input: GetControlOperationCommandInput;
      output: GetControlOperationCommandOutput;
    };
  };
}
