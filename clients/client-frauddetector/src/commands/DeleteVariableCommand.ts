// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import type { DeleteVariableRequest, DeleteVariableResult } from "../models/models_0";
import { DeleteVariable } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteVariableCommand}.
 */
export interface DeleteVariableCommandInput extends DeleteVariableRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVariableCommand}.
 */
export interface DeleteVariableCommandOutput extends DeleteVariableResult, __MetadataBearer {}

/**
 * <p>Deletes a variable.</p>
 *          <p>You can't delete variables that are included in an event type in Amazon Fraud Detector.</p>
 *          <p>Amazon Fraud Detector automatically deletes model output variables and SageMaker model output variables when you delete the model. You can't delete these variables manually.</p>
 *          <p>When you delete a variable, Amazon Fraud Detector permanently deletes that variable and the data is no longer stored in Amazon Fraud Detector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, DeleteVariableCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, DeleteVariableCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * // import type { FraudDetectorClientConfig } from "@aws-sdk/client-frauddetector";
 * const config = {}; // type is FraudDetectorClientConfig
 * const client = new FraudDetectorClient(config);
 * const input = { // DeleteVariableRequest
 *   name: "STRING_VALUE", // required
 * };
 * const command = new DeleteVariableCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteVariableCommandInput - {@link DeleteVariableCommandInput}
 * @returns {@link DeleteVariableCommandOutput}
 * @see {@link DeleteVariableCommandInput} for command's `input` shape.
 * @see {@link DeleteVariableCommandOutput} for command's `response` shape.
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
export class DeleteVariableCommand extends $Command
  .classBuilder<
    DeleteVariableCommandInput,
    DeleteVariableCommandOutput,
    FraudDetectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FraudDetectorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHawksNestServiceFacade", "DeleteVariable", {})
  .n("FraudDetectorClient", "DeleteVariableCommand")
  .sc(DeleteVariable)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVariableRequest;
      output: {};
    };
    sdk: {
      input: DeleteVariableCommandInput;
      output: DeleteVariableCommandOutput;
    };
  };
}
