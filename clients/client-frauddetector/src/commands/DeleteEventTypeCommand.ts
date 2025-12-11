// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import type { DeleteEventTypeRequest, DeleteEventTypeResult } from "../models/models_0";
import { DeleteEventType } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEventTypeCommand}.
 */
export interface DeleteEventTypeCommandInput extends DeleteEventTypeRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEventTypeCommand}.
 */
export interface DeleteEventTypeCommandOutput extends DeleteEventTypeResult, __MetadataBearer {}

/**
 * <p>Deletes an event type.</p>
 *          <p>You cannot delete an event type that is used in a detector or a model.</p>
 *          <p>When you delete an event type, Amazon Fraud Detector permanently deletes that event type and the data is no longer stored in Amazon Fraud Detector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, DeleteEventTypeCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, DeleteEventTypeCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * // import type { FraudDetectorClientConfig } from "@aws-sdk/client-frauddetector";
 * const config = {}; // type is FraudDetectorClientConfig
 * const client = new FraudDetectorClient(config);
 * const input = { // DeleteEventTypeRequest
 *   name: "STRING_VALUE", // required
 * };
 * const command = new DeleteEventTypeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEventTypeCommandInput - {@link DeleteEventTypeCommandInput}
 * @returns {@link DeleteEventTypeCommandOutput}
 * @see {@link DeleteEventTypeCommandInput} for command's `input` shape.
 * @see {@link DeleteEventTypeCommandOutput} for command's `response` shape.
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
export class DeleteEventTypeCommand extends $Command
  .classBuilder<
    DeleteEventTypeCommandInput,
    DeleteEventTypeCommandOutput,
    FraudDetectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FraudDetectorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHawksNestServiceFacade", "DeleteEventType", {})
  .n("FraudDetectorClient", "DeleteEventTypeCommand")
  .sc(DeleteEventType)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEventTypeRequest;
      output: {};
    };
    sdk: {
      input: DeleteEventTypeCommandInput;
      output: DeleteEventTypeCommandOutput;
    };
  };
}
