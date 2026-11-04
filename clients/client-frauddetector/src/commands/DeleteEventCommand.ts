// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteEventRequest, DeleteEventResult } from "../models/models_0";
import { DeleteEvent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteEventCommand}.
 */
export interface DeleteEventCommandInput extends DeleteEventRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEventCommand}.
 */
export interface DeleteEventCommandOutput extends DeleteEventResult, __MetadataBearer {}

/**
 * Deletes the specified event.
 *
 * When you delete an event, Amazon Fraud Detector permanently deletes that event and the event data is no longer stored in Amazon Fraud Detector. If `deleteAuditHistory` is `True`, event data is available through search for up to 30 seconds after the delete operation is completed.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, DeleteEventCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, DeleteEventCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * // import type { FraudDetectorClientConfig } from "@aws-sdk/client-frauddetector";
 * const config = {}; // type is FraudDetectorClientConfig
 * const client = new FraudDetectorClient(config);
 * const input = { // DeleteEventRequest
 *   eventId: "STRING_VALUE", // required
 *   eventTypeName: "STRING_VALUE", // required
 *   deleteAuditHistory: true || false,
 * };
 * const command = new DeleteEventCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEventCommandInput - {@link DeleteEventCommandInput}
 * @returns {@link DeleteEventCommandOutput}
 * @see {@link DeleteEventCommandInput} for command's `input` shape.
 * @see {@link DeleteEventCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for FraudDetectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * An exception indicating Amazon Fraud Detector does not have the needed permissions. This can occur if you submit a request, such as `PutExternalModel`, that specifies a role that is not in your account.
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
export class DeleteEventCommand extends command<DeleteEventCommandInput, DeleteEventCommandOutput>(
  _ep0,
  _mw0,
  "DeleteEvent",
  DeleteEvent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEventRequest;
      output: {};
    };
    sdk: {
      input: DeleteEventCommandInput;
      output: DeleteEventCommandOutput;
    };
  };
}
