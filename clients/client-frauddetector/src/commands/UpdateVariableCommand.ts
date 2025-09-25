// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { UpdateVariableRequest, UpdateVariableResult } from "../models/models_0";
import { UpdateVariable } from "../schemas/schemas_34_UpdateVariable";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateVariableCommand}.
 */
export interface UpdateVariableCommandInput extends UpdateVariableRequest {}
/**
 * @public
 *
 * The output of {@link UpdateVariableCommand}.
 */
export interface UpdateVariableCommandOutput extends UpdateVariableResult, __MetadataBearer {}

/**
 * <p>Updates a variable.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, UpdateVariableCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, UpdateVariableCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * // import type { FraudDetectorClientConfig } from "@aws-sdk/client-frauddetector";
 * const config = {}; // type is FraudDetectorClientConfig
 * const client = new FraudDetectorClient(config);
 * const input = { // UpdateVariableRequest
 *   name: "STRING_VALUE", // required
 *   defaultValue: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   variableType: "STRING_VALUE",
 * };
 * const command = new UpdateVariableCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateVariableCommandInput - {@link UpdateVariableCommandInput}
 * @returns {@link UpdateVariableCommandOutput}
 * @see {@link UpdateVariableCommandInput} for command's `input` shape.
 * @see {@link UpdateVariableCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for FraudDetectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An exception indicating Amazon Fraud Detector does not have the needed permissions. This can occur if you submit a request, such as <code>PutExternalModel</code>, that specifies a role that is not in your account.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>An exception indicating there was a conflict during a delete operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception indicating an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception indicating the specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An exception indicating a throttling error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception indicating a specified value is not allowed.</p>
 *
 * @throws {@link FraudDetectorServiceException}
 * <p>Base exception class for all service exceptions from FraudDetector service.</p>
 *
 *
 * @public
 */
export class UpdateVariableCommand extends $Command
  .classBuilder<
    UpdateVariableCommandInput,
    UpdateVariableCommandOutput,
    FraudDetectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FraudDetectorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHawksNestServiceFacade", "UpdateVariable", {})
  .n("FraudDetectorClient", "UpdateVariableCommand")
  .sc(UpdateVariable)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateVariableRequest;
      output: {};
    };
    sdk: {
      input: UpdateVariableCommandInput;
      output: UpdateVariableCommandOutput;
    };
  };
}
