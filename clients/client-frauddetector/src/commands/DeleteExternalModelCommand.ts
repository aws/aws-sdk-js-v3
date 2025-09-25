// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { DeleteExternalModelRequest, DeleteExternalModelResult } from "../models/models_0";
import { DeleteExternalModel } from "../schemas/schemas_16_Model";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteExternalModelCommand}.
 */
export interface DeleteExternalModelCommandInput extends DeleteExternalModelRequest {}
/**
 * @public
 *
 * The output of {@link DeleteExternalModelCommand}.
 */
export interface DeleteExternalModelCommandOutput extends DeleteExternalModelResult, __MetadataBearer {}

/**
 * <p>Removes a SageMaker model from Amazon Fraud Detector.</p>
 *          <p>You can remove an Amazon SageMaker model if it is not associated with a detector version. Removing a SageMaker model disconnects it from Amazon Fraud Detector, but the model remains available in SageMaker.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, DeleteExternalModelCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, DeleteExternalModelCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * // import type { FraudDetectorClientConfig } from "@aws-sdk/client-frauddetector";
 * const config = {}; // type is FraudDetectorClientConfig
 * const client = new FraudDetectorClient(config);
 * const input = { // DeleteExternalModelRequest
 *   modelEndpoint: "STRING_VALUE", // required
 * };
 * const command = new DeleteExternalModelCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteExternalModelCommandInput - {@link DeleteExternalModelCommandInput}
 * @returns {@link DeleteExternalModelCommandOutput}
 * @see {@link DeleteExternalModelCommandInput} for command's `input` shape.
 * @see {@link DeleteExternalModelCommandOutput} for command's `response` shape.
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
export class DeleteExternalModelCommand extends $Command
  .classBuilder<
    DeleteExternalModelCommandInput,
    DeleteExternalModelCommandOutput,
    FraudDetectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FraudDetectorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHawksNestServiceFacade", "DeleteExternalModel", {})
  .n("FraudDetectorClient", "DeleteExternalModelCommand")
  .sc(DeleteExternalModel)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteExternalModelRequest;
      output: {};
    };
    sdk: {
      input: DeleteExternalModelCommandInput;
      output: DeleteExternalModelCommandOutput;
    };
  };
}
