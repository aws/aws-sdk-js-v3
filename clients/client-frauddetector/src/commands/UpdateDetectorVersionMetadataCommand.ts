// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateDetectorVersionMetadataRequest, UpdateDetectorVersionMetadataResult } from "../models/models_0";
import { UpdateDetectorVersionMetadata$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateDetectorVersionMetadataCommand}.
 */
export interface UpdateDetectorVersionMetadataCommandInput extends UpdateDetectorVersionMetadataRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDetectorVersionMetadataCommand}.
 */
export interface UpdateDetectorVersionMetadataCommandOutput extends UpdateDetectorVersionMetadataResult, __MetadataBearer {}

/**
 * Updates the detector version's description. You can update the metadata for any detector version (`DRAFT, ACTIVE,` or `INACTIVE`).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, UpdateDetectorVersionMetadataCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, UpdateDetectorVersionMetadataCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * // import type { FraudDetectorClientConfig } from "@aws-sdk/client-frauddetector";
 * const config = {}; // type is FraudDetectorClientConfig
 * const client = new FraudDetectorClient(config);
 * const input = { // UpdateDetectorVersionMetadataRequest
 *   detectorId: "STRING_VALUE", // required
 *   detectorVersionId: "STRING_VALUE", // required
 *   description: "STRING_VALUE", // required
 * };
 * const command = new UpdateDetectorVersionMetadataCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDetectorVersionMetadataCommandInput - {@link UpdateDetectorVersionMetadataCommandInput}
 * @returns {@link UpdateDetectorVersionMetadataCommandOutput}
 * @see {@link UpdateDetectorVersionMetadataCommandInput} for command's `input` shape.
 * @see {@link UpdateDetectorVersionMetadataCommandOutput} for command's `response` shape.
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
export class UpdateDetectorVersionMetadataCommand extends command<UpdateDetectorVersionMetadataCommandInput, UpdateDetectorVersionMetadataCommandOutput>(
  _ep0,
  _mw0,
  "UpdateDetectorVersionMetadata",
  UpdateDetectorVersionMetadata$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDetectorVersionMetadataRequest;
      output: {};
    };
    sdk: {
      input: UpdateDetectorVersionMetadataCommandInput;
      output: UpdateDetectorVersionMetadataCommandOutput;
    };
  };
}
