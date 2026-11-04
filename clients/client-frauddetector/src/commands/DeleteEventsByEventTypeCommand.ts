// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteEventsByEventTypeRequest, DeleteEventsByEventTypeResult } from "../models/models_0";
import { DeleteEventsByEventType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes all events of a particular event type.
 *
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * An exception indicating the specified resource was not found.
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
export class DeleteEventsByEventTypeCommand extends command<DeleteEventsByEventTypeCommandInput, DeleteEventsByEventTypeCommandOutput>(
  _ep0,
  _mw0,
  "DeleteEventsByEventType",
  DeleteEventsByEventType$
) {
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
