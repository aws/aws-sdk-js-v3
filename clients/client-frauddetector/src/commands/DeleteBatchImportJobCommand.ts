// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { DeleteBatchImportJobRequest, DeleteBatchImportJobResult } from "../models/models_0";
import { de_DeleteBatchImportJobCommand, se_DeleteBatchImportJobCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteBatchImportJobCommand}.
 */
export interface DeleteBatchImportJobCommandInput extends DeleteBatchImportJobRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBatchImportJobCommand}.
 */
export interface DeleteBatchImportJobCommandOutput extends DeleteBatchImportJobResult, __MetadataBearer {}

/**
 * <p>Deletes the specified batch import job ID record. This action does not delete the data that was batch imported.  </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, DeleteBatchImportJobCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, DeleteBatchImportJobCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const input = { // DeleteBatchImportJobRequest
 *   jobId: "STRING_VALUE", // required
 * };
 * const command = new DeleteBatchImportJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBatchImportJobCommandInput - {@link DeleteBatchImportJobCommandInput}
 * @returns {@link DeleteBatchImportJobCommandOutput}
 * @see {@link DeleteBatchImportJobCommandInput} for command's `input` shape.
 * @see {@link DeleteBatchImportJobCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for FraudDetectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An exception indicating Amazon Fraud Detector does not have the needed permissions. This can occur if you submit a request, such as <code>PutExternalModel</code>, that specifies a role that is not in your account.</p>
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
export class DeleteBatchImportJobCommand extends $Command
  .classBuilder<
    DeleteBatchImportJobCommandInput,
    DeleteBatchImportJobCommandOutput,
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
  .s("AWSHawksNestServiceFacade", "DeleteBatchImportJob", {})
  .n("FraudDetectorClient", "DeleteBatchImportJobCommand")
  .f(void 0, void 0)
  .ser(se_DeleteBatchImportJobCommand)
  .de(de_DeleteBatchImportJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBatchImportJobRequest;
      output: {};
    };
    sdk: {
      input: DeleteBatchImportJobCommandInput;
      output: DeleteBatchImportJobCommandOutput;
    };
  };
}
