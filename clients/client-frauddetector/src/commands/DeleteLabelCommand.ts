// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteLabelRequest, DeleteLabelResult } from "../models/models_0";
import { DeleteLabel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes a label.
 *
 * You cannot delete labels that are included in an event type in Amazon Fraud Detector.
 *
 * You cannot delete a label assigned to an event ID. You must first delete the relevant event ID.
 *
 * When you delete a label, Amazon Fraud Detector permanently deletes that label and the data is no longer stored in Amazon Fraud Detector.
 *
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
export class DeleteLabelCommand extends command<DeleteLabelCommandInput, DeleteLabelCommandOutput>(
  _ep0,
  _mw0,
  "DeleteLabel",
  DeleteLabel$
) {
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
