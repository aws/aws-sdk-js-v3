// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { DeleteOutcomeRequest, DeleteOutcomeResult } from "../models/models_0";
import { de_DeleteOutcomeCommand, se_DeleteOutcomeCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteOutcomeCommand}.
 */
export interface DeleteOutcomeCommandInput extends DeleteOutcomeRequest {}
/**
 * @public
 *
 * The output of {@link DeleteOutcomeCommand}.
 */
export interface DeleteOutcomeCommandOutput extends DeleteOutcomeResult, __MetadataBearer {}

/**
 * <p>Deletes an outcome.</p>
 *          <p>You cannot delete an outcome that is used in a rule version.</p>
 *          <p>When you delete an outcome, Amazon Fraud Detector permanently deletes that outcome and the data is no longer stored in Amazon Fraud Detector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, DeleteOutcomeCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, DeleteOutcomeCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const input = { // DeleteOutcomeRequest
 *   name: "STRING_VALUE", // required
 * };
 * const command = new DeleteOutcomeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteOutcomeCommandInput - {@link DeleteOutcomeCommandInput}
 * @returns {@link DeleteOutcomeCommandOutput}
 * @see {@link DeleteOutcomeCommandInput} for command's `input` shape.
 * @see {@link DeleteOutcomeCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DeleteOutcomeCommand extends $Command
  .classBuilder<
    DeleteOutcomeCommandInput,
    DeleteOutcomeCommandOutput,
    FraudDetectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: FraudDetectorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSHawksNestServiceFacade", "DeleteOutcome", {})
  .n("FraudDetectorClient", "DeleteOutcomeCommand")
  .f(void 0, void 0)
  .ser(se_DeleteOutcomeCommand)
  .de(de_DeleteOutcomeCommand)
  .build() {}
