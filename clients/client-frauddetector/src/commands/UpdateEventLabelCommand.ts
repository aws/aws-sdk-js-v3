// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { UpdateEventLabelRequest, UpdateEventLabelResult } from "../models/models_0";
import { de_UpdateEventLabelCommand, se_UpdateEventLabelCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateEventLabelCommand}.
 */
export interface UpdateEventLabelCommandInput extends UpdateEventLabelRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEventLabelCommand}.
 */
export interface UpdateEventLabelCommandOutput extends UpdateEventLabelResult, __MetadataBearer {}

/**
 * <p>Updates the specified event with a new label.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, UpdateEventLabelCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, UpdateEventLabelCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new FraudDetectorClient(config);
 * const input = { // UpdateEventLabelRequest
 *   eventId: "STRING_VALUE", // required
 *   eventTypeName: "STRING_VALUE", // required
 *   assignedLabel: "STRING_VALUE", // required
 *   labelTimestamp: "STRING_VALUE", // required
 * };
 * const command = new UpdateEventLabelCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateEventLabelCommandInput - {@link UpdateEventLabelCommandInput}
 * @returns {@link UpdateEventLabelCommandOutput}
 * @see {@link UpdateEventLabelCommandInput} for command's `input` shape.
 * @see {@link UpdateEventLabelCommandOutput} for command's `response` shape.
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
 * @public
 */
export class UpdateEventLabelCommand extends $Command
  .classBuilder<
    UpdateEventLabelCommandInput,
    UpdateEventLabelCommandOutput,
    FraudDetectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FraudDetectorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSHawksNestServiceFacade", "UpdateEventLabel", {})
  .n("FraudDetectorClient", "UpdateEventLabelCommand")
  .f(void 0, void 0)
  .ser(se_UpdateEventLabelCommand)
  .de(de_UpdateEventLabelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEventLabelRequest;
      output: {};
    };
    sdk: {
      input: UpdateEventLabelCommandInput;
      output: UpdateEventLabelCommandOutput;
    };
  };
}
