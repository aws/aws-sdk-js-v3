// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { DeleteLabelRequest, DeleteLabelResult } from "../models/models_0";
import { DeleteLabel } from "../schemas/schemas_8_DeleteLabel";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteLabelCommand}.
 */
export interface DeleteLabelCommandInput extends DeleteLabelRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLabelCommand}.
 */
export interface DeleteLabelCommandOutput extends DeleteLabelResult, __MetadataBearer {}

/**
 * <p>Deletes a label.</p>
 *          <p>You cannot delete labels that are included in an event type in Amazon Fraud Detector.</p>
 *          <p>You cannot delete a label assigned to an event ID. You must first delete the relevant event ID.</p>
 *          <p>When you delete a label, Amazon Fraud Detector permanently deletes that label and the data is no longer stored in Amazon Fraud Detector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, DeleteLabelCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, DeleteLabelCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * // import type { FraudDetectorClientConfig } from "@aws-sdk/client-frauddetector";
 * const config = {}; // type is FraudDetectorClientConfig
 * const client = new FraudDetectorClient(config);
 * const input = { // DeleteLabelRequest
 *   name: "STRING_VALUE", // required
 * };
 * const command = new DeleteLabelCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLabelCommandInput - {@link DeleteLabelCommandInput}
 * @returns {@link DeleteLabelCommandOutput}
 * @see {@link DeleteLabelCommandInput} for command's `input` shape.
 * @see {@link DeleteLabelCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for FraudDetectorClient's `config` shape.
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
export class DeleteLabelCommand extends $Command
  .classBuilder<
    DeleteLabelCommandInput,
    DeleteLabelCommandOutput,
    FraudDetectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FraudDetectorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHawksNestServiceFacade", "DeleteLabel", {})
  .n("FraudDetectorClient", "DeleteLabelCommand")
  .sc(DeleteLabel)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLabelRequest;
      output: {};
    };
    sdk: {
      input: DeleteLabelCommandInput;
      output: DeleteLabelCommandOutput;
    };
  };
}
