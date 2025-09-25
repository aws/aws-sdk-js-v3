// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { DeleteEventsByEventTypeRequest, DeleteEventsByEventTypeResult } from "../models/models_0";
import { DeleteEventsByEventType } from "../schemas/schemas_43_DeleteEventsByEventType";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEventsByEventTypeCommand}.
 */
export interface DeleteEventsByEventTypeCommandInput extends DeleteEventsByEventTypeRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEventsByEventTypeCommand}.
 */
export interface DeleteEventsByEventTypeCommandOutput extends DeleteEventsByEventTypeResult, __MetadataBearer {}

/**
 * <p>Deletes all events of a particular event type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, DeleteEventsByEventTypeCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, DeleteEventsByEventTypeCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * // import type { FraudDetectorClientConfig } from "@aws-sdk/client-frauddetector";
 * const config = {}; // type is FraudDetectorClientConfig
 * const client = new FraudDetectorClient(config);
 * const input = { // DeleteEventsByEventTypeRequest
 *   eventTypeName: "STRING_VALUE", // required
 * };
 * const command = new DeleteEventsByEventTypeCommand(input);
 * const response = await client.send(command);
 * // { // DeleteEventsByEventTypeResult
 * //   eventTypeName: "STRING_VALUE",
 * //   eventsDeletionStatus: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteEventsByEventTypeCommandInput - {@link DeleteEventsByEventTypeCommandInput}
 * @returns {@link DeleteEventsByEventTypeCommandOutput}
 * @see {@link DeleteEventsByEventTypeCommandInput} for command's `input` shape.
 * @see {@link DeleteEventsByEventTypeCommandOutput} for command's `response` shape.
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
export class DeleteEventsByEventTypeCommand extends $Command
  .classBuilder<
    DeleteEventsByEventTypeCommandInput,
    DeleteEventsByEventTypeCommandOutput,
    FraudDetectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FraudDetectorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHawksNestServiceFacade", "DeleteEventsByEventType", {})
  .n("FraudDetectorClient", "DeleteEventsByEventTypeCommand")
  .sc(DeleteEventsByEventType)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEventsByEventTypeRequest;
      output: DeleteEventsByEventTypeResult;
    };
    sdk: {
      input: DeleteEventsByEventTypeCommandInput;
      output: DeleteEventsByEventTypeCommandOutput;
    };
  };
}
