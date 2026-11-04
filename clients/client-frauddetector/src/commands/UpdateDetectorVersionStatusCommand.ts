// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateDetectorVersionStatusRequest, UpdateDetectorVersionStatusResult } from "../models/models_0";
import { UpdateDetectorVersionStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateDetectorVersionStatusCommand}.
 */
export interface UpdateDetectorVersionStatusCommandInput extends UpdateDetectorVersionStatusRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDetectorVersionStatusCommand}.
 */
export interface UpdateDetectorVersionStatusCommandOutput extends UpdateDetectorVersionStatusResult, __MetadataBearer {}

/**
 * Updates the detector version’s status. You can perform the following promotions or demotions using `UpdateDetectorVersionStatus`: `DRAFT` to `ACTIVE`, `ACTIVE` to `INACTIVE`, and `INACTIVE` to `ACTIVE`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, UpdateDetectorVersionStatusCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, UpdateDetectorVersionStatusCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * // import type { FraudDetectorClientConfig } from "@aws-sdk/client-frauddetector";
 * const config = {}; // type is FraudDetectorClientConfig
 * const client = new FraudDetectorClient(config);
 * const input = { // UpdateDetectorVersionStatusRequest
 *   detectorId: "STRING_VALUE", // required
 *   detectorVersionId: "STRING_VALUE", // required
 *   status: "DRAFT" || "ACTIVE" || "INACTIVE", // required
 * };
 * const command = new UpdateDetectorVersionStatusCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDetectorVersionStatusCommandInput - {@link UpdateDetectorVersionStatusCommandInput}
 * @returns {@link UpdateDetectorVersionStatusCommandOutput}
 * @see {@link UpdateDetectorVersionStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateDetectorVersionStatusCommandOutput} for command's `response` shape.
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
export class UpdateDetectorVersionStatusCommand extends command<UpdateDetectorVersionStatusCommandInput, UpdateDetectorVersionStatusCommandOutput>(
  _ep0,
  _mw0,
  "UpdateDetectorVersionStatus",
  UpdateDetectorVersionStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDetectorVersionStatusRequest;
      output: {};
    };
    sdk: {
      input: UpdateDetectorVersionStatusCommandInput;
      output: UpdateDetectorVersionStatusCommandOutput;
    };
  };
}
