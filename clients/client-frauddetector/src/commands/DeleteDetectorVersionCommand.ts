// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { DeleteDetectorVersionRequest, DeleteDetectorVersionResult } from "../models/models_0";
import { DeleteDetectorVersion } from "../schemas/schemas_46_DeleteDetectorVersion";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDetectorVersionCommand}.
 */
export interface DeleteDetectorVersionCommandInput extends DeleteDetectorVersionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDetectorVersionCommand}.
 */
export interface DeleteDetectorVersionCommandOutput extends DeleteDetectorVersionResult, __MetadataBearer {}

/**
 * <p>Deletes the detector version. You cannot delete detector versions that are in <code>ACTIVE</code> status.</p>
 *          <p>When you delete a detector version, Amazon Fraud Detector permanently deletes the detector and the data is no longer stored in Amazon Fraud Detector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, DeleteDetectorVersionCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, DeleteDetectorVersionCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * // import type { FraudDetectorClientConfig } from "@aws-sdk/client-frauddetector";
 * const config = {}; // type is FraudDetectorClientConfig
 * const client = new FraudDetectorClient(config);
 * const input = { // DeleteDetectorVersionRequest
 *   detectorId: "STRING_VALUE", // required
 *   detectorVersionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteDetectorVersionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDetectorVersionCommandInput - {@link DeleteDetectorVersionCommandInput}
 * @returns {@link DeleteDetectorVersionCommandOutput}
 * @see {@link DeleteDetectorVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteDetectorVersionCommandOutput} for command's `response` shape.
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
export class DeleteDetectorVersionCommand extends $Command
  .classBuilder<
    DeleteDetectorVersionCommandInput,
    DeleteDetectorVersionCommandOutput,
    FraudDetectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FraudDetectorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHawksNestServiceFacade", "DeleteDetectorVersion", {})
  .n("FraudDetectorClient", "DeleteDetectorVersionCommand")
  .sc(DeleteDetectorVersion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDetectorVersionRequest;
      output: {};
    };
    sdk: {
      input: DeleteDetectorVersionCommandInput;
      output: DeleteDetectorVersionCommandOutput;
    };
  };
}
