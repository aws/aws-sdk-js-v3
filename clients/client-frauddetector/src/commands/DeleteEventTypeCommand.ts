// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteEventTypeRequest, DeleteEventTypeResult } from "../models/models_0";
import { DeleteEventType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes an event type.
 *
 * You cannot delete an event type that is used in a detector or a model.
 *
 * When you delete an event type, Amazon Fraud Detector permanently deletes that event type and the data is no longer stored in Amazon Fraud Detector.
 *
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
 *
 * An exception indicating Amazon Fraud Detector does not have the needed permissions. This can occur if you submit a request, such as `PutExternalModel`, that specifies a role that is not in your account.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * An exception indicating there was a conflict during a delete operation.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An exception indicating an internal server error.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * An exception indicating a throttling error.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * An exception indicating a specified value is not allowed.
 *
 * @throws {@link FraudDetectorServiceException}
 *
 * Base exception class for all service exceptions from FraudDetector service.
 *
 * @public
 */
export class DeleteEventTypeCommand extends command<DeleteEventTypeCommandInput, DeleteEventTypeCommandOutput>(
  _ep0,
  _mw0,
  "DeleteEventType",
  DeleteEventType$
) {
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
