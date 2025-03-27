// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BraketClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BraketClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CancelQuantumTaskRequest, CancelQuantumTaskResponse } from "../models/models_0";
import { de_CancelQuantumTaskCommand, se_CancelQuantumTaskCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelQuantumTaskCommand}.
 */
export interface CancelQuantumTaskCommandInput extends CancelQuantumTaskRequest {}
/**
 * @public
 *
 * The output of {@link CancelQuantumTaskCommand}.
 */
export interface CancelQuantumTaskCommandOutput extends CancelQuantumTaskResponse, __MetadataBearer {}

/**
 * <p>Cancels the specified task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BraketClient, CancelQuantumTaskCommand } from "@aws-sdk/client-braket"; // ES Modules import
 * // const { BraketClient, CancelQuantumTaskCommand } = require("@aws-sdk/client-braket"); // CommonJS import
 * const client = new BraketClient(config);
 * const input = { // CancelQuantumTaskRequest
 *   quantumTaskArn: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE", // required
 * };
 * const command = new CancelQuantumTaskCommand(input);
 * const response = await client.send(command);
 * // { // CancelQuantumTaskResponse
 * //   quantumTaskArn: "STRING_VALUE", // required
 * //   cancellationStatus: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CancelQuantumTaskCommandInput - {@link CancelQuantumTaskCommandInput}
 * @returns {@link CancelQuantumTaskCommandOutput}
 * @see {@link CancelQuantumTaskCommandInput} for command's `input` shape.
 * @see {@link CancelQuantumTaskCommandOutput} for command's `response` shape.
 * @see {@link BraketClientResolvedConfig | config} for BraketClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>An error occurred due to a conflict.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or
 *          failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling rate limit is met.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link BraketServiceException}
 * <p>Base exception class for all service exceptions from Braket service.</p>
 *
 *
 * @public
 */
export class CancelQuantumTaskCommand extends $Command
  .classBuilder<
    CancelQuantumTaskCommandInput,
    CancelQuantumTaskCommandOutput,
    BraketClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BraketClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Braket", "CancelQuantumTask", {})
  .n("BraketClient", "CancelQuantumTaskCommand")
  .f(void 0, void 0)
  .ser(se_CancelQuantumTaskCommand)
  .de(de_CancelQuantumTaskCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelQuantumTaskRequest;
      output: CancelQuantumTaskResponse;
    };
    sdk: {
      input: CancelQuantumTaskCommandInput;
      output: CancelQuantumTaskCommandOutput;
    };
  };
}
