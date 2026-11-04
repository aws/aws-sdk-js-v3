// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteExternalModelRequest, DeleteExternalModelResult } from "../models/models_0";
import { DeleteExternalModel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Removes a SageMaker model from Amazon Fraud Detector.
 *
 * You can remove an Amazon SageMaker model if it is not associated with a detector version. Removing a SageMaker model disconnects it from Amazon Fraud Detector, but the model remains available in SageMaker.
 *
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
export class DeleteExternalModelCommand extends command<DeleteExternalModelCommandInput, DeleteExternalModelCommandOutput>(
  _ep0,
  _mw0,
  "DeleteExternalModel",
  DeleteExternalModel$
) {
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
