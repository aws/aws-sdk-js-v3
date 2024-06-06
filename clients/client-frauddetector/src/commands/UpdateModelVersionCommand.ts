// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { UpdateModelVersionRequest, UpdateModelVersionResult } from "../models/models_0";
import { de_UpdateModelVersionCommand, se_UpdateModelVersionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateModelVersionCommand}.
 */
export interface UpdateModelVersionCommandInput extends UpdateModelVersionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateModelVersionCommand}.
 */
export interface UpdateModelVersionCommandOutput extends UpdateModelVersionResult, __MetadataBearer {}

/**
 * <p>Updates a model version. Updating a model version retrains an existing model version using updated training data and produces a new minor version of the model. You can update the training data set location and data access role attributes using this action. This action creates and trains a new minor version of the model, for example version 1.01, 1.02, 1.03.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, UpdateModelVersionCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, UpdateModelVersionCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const input = { // UpdateModelVersionRequest
 *   modelId: "STRING_VALUE", // required
 *   modelType: "ONLINE_FRAUD_INSIGHTS" || "TRANSACTION_FRAUD_INSIGHTS" || "ACCOUNT_TAKEOVER_INSIGHTS", // required
 *   majorVersionNumber: "STRING_VALUE", // required
 *   externalEventsDetail: { // ExternalEventsDetail
 *     dataLocation: "STRING_VALUE", // required
 *     dataAccessRoleArn: "STRING_VALUE", // required
 *   },
 *   ingestedEventsDetail: { // IngestedEventsDetail
 *     ingestedEventsTimeWindow: { // IngestedEventsTimeWindow
 *       startTime: "STRING_VALUE", // required
 *       endTime: "STRING_VALUE", // required
 *     },
 *   },
 *   tags: [ // tagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new UpdateModelVersionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateModelVersionResult
 * //   modelId: "STRING_VALUE",
 * //   modelType: "ONLINE_FRAUD_INSIGHTS" || "TRANSACTION_FRAUD_INSIGHTS" || "ACCOUNT_TAKEOVER_INSIGHTS",
 * //   modelVersionNumber: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateModelVersionCommandInput - {@link UpdateModelVersionCommandInput}
 * @returns {@link UpdateModelVersionCommandOutput}
 * @see {@link UpdateModelVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateModelVersionCommandOutput} for command's `response` shape.
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
export class UpdateModelVersionCommand extends $Command
  .classBuilder<
    UpdateModelVersionCommandInput,
    UpdateModelVersionCommandOutput,
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
  .s("AWSHawksNestServiceFacade", "UpdateModelVersion", {})
  .n("FraudDetectorClient", "UpdateModelVersionCommand")
  .f(void 0, void 0)
  .ser(se_UpdateModelVersionCommand)
  .de(de_UpdateModelVersionCommand)
  .build() {}
