// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateModelVersionStatusRequest, UpdateModelVersionStatusResult } from "../models/models_0";
import { UpdateModelVersionStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateModelVersionStatusCommand}.
 */
export interface UpdateModelVersionStatusCommandInput extends UpdateModelVersionStatusRequest {}
/**
 * @public
 *
 * The output of {@link UpdateModelVersionStatusCommand}.
 */
export interface UpdateModelVersionStatusCommandOutput extends UpdateModelVersionStatusResult, __MetadataBearer {}

/**
 * Updates the status of a model version.
 *
 * You can perform the following status updates:
 *
 * 1. Change the `TRAINING_IN_PROGRESS` status to `TRAINING_CANCELLED`.
 * 2. Change the `TRAINING_COMPLETE` status to `ACTIVE`.
 * 3. Change `ACTIVE` to `INACTIVE`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, UpdateModelVersionStatusCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, UpdateModelVersionStatusCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * // import type { FraudDetectorClientConfig } from "@aws-sdk/client-frauddetector";
 * const config = {}; // type is FraudDetectorClientConfig
 * const client = new FraudDetectorClient(config);
 * const input = { // UpdateModelVersionStatusRequest
 *   modelId: "STRING_VALUE", // required
 *   modelType: "ONLINE_FRAUD_INSIGHTS" || "TRANSACTION_FRAUD_INSIGHTS" || "ACCOUNT_TAKEOVER_INSIGHTS", // required
 *   modelVersionNumber: "STRING_VALUE", // required
 *   status: "ACTIVE" || "INACTIVE" || "TRAINING_CANCELLED", // required
 * };
 * const command = new UpdateModelVersionStatusCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateModelVersionStatusCommandInput - {@link UpdateModelVersionStatusCommandInput}
 * @returns {@link UpdateModelVersionStatusCommandOutput}
 * @see {@link UpdateModelVersionStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateModelVersionStatusCommandOutput} for command's `response` shape.
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
export class UpdateModelVersionStatusCommand extends command<UpdateModelVersionStatusCommandInput, UpdateModelVersionStatusCommandOutput>(
  _ep0,
  _mw0,
  "UpdateModelVersionStatus",
  UpdateModelVersionStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateModelVersionStatusRequest;
      output: {};
    };
    sdk: {
      input: UpdateModelVersionStatusCommandInput;
      output: UpdateModelVersionStatusCommandOutput;
    };
  };
}
