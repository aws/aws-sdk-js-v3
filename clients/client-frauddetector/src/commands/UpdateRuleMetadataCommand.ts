// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { UpdateRuleMetadataRequest, UpdateRuleMetadataResult } from "../models/models_0";
import { de_UpdateRuleMetadataCommand, se_UpdateRuleMetadataCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRuleMetadataCommand}.
 */
export interface UpdateRuleMetadataCommandInput extends UpdateRuleMetadataRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRuleMetadataCommand}.
 */
export interface UpdateRuleMetadataCommandOutput extends UpdateRuleMetadataResult, __MetadataBearer {}

/**
 * <p>Updates a rule's metadata. The description attribute can be updated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, UpdateRuleMetadataCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, UpdateRuleMetadataCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const input = { // UpdateRuleMetadataRequest
 *   rule: { // Rule
 *     detectorId: "STRING_VALUE", // required
 *     ruleId: "STRING_VALUE", // required
 *     ruleVersion: "STRING_VALUE", // required
 *   },
 *   description: "STRING_VALUE", // required
 * };
 * const command = new UpdateRuleMetadataCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateRuleMetadataCommandInput - {@link UpdateRuleMetadataCommandInput}
 * @returns {@link UpdateRuleMetadataCommandOutput}
 * @see {@link UpdateRuleMetadataCommandInput} for command's `input` shape.
 * @see {@link UpdateRuleMetadataCommandOutput} for command's `response` shape.
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
export class UpdateRuleMetadataCommand extends $Command
  .classBuilder<
    UpdateRuleMetadataCommandInput,
    UpdateRuleMetadataCommandOutput,
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
  .s("AWSHawksNestServiceFacade", "UpdateRuleMetadata", {})
  .n("FraudDetectorClient", "UpdateRuleMetadataCommand")
  .f(void 0, void 0)
  .ser(se_UpdateRuleMetadataCommand)
  .de(de_UpdateRuleMetadataCommand)
  .build() {}
