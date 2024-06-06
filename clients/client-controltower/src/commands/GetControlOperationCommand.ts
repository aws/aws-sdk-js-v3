// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ControlTowerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ControlTowerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetControlOperationInput, GetControlOperationOutput } from "../models/models_0";
import { de_GetControlOperationCommand, se_GetControlOperationCommand } from "../protocols/Aws_restJson1";

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
 * <p>Returns the status of a particular <code>EnableControl</code> or
 *          <code>DisableControl</code> operation. Displays a message in case of error. Details for an
 *          operation are available for 90 days. For usage examples, see <a href="https://docs.aws.amazon.com/controltower/latest/userguide/control-api-examples-short.html">
 *                <i>the Amazon Web Services Control Tower User Guide</i>
 *             </a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlTowerClient, GetControlOperationCommand } from "@aws-sdk/client-controltower"; // ES Modules import
 * // const { ControlTowerClient, GetControlOperationCommand } = require("@aws-sdk/client-controltower"); // CommonJS import
 * const client = new ControlTowerClient(config);
 * const input = { // GetControlOperationInput
 *   operationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetControlOperationCommand(input);
 * const response = await client.send(command);
 * // { // GetControlOperationOutput
 * //   controlOperation: { // ControlOperation
 * //     operationType: "ENABLE_CONTROL" || "DISABLE_CONTROL" || "UPDATE_ENABLED_CONTROL",
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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ControlTowerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSControlTowerApis", "GetControlOperation", {})
  .n("ControlTowerClient", "GetControlOperationCommand")
  .f(void 0, void 0)
  .ser(se_GetControlOperationCommand)
  .de(de_GetControlOperationCommand)
  .build() {}
