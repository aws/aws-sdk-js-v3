// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import type { UpdateDetectorVersionStatusRequest, UpdateDetectorVersionStatusResult } from "../models/models_0";
import { UpdateDetectorVersionStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Updates the detector version’s status. You can perform the following promotions or
 *             demotions using <code>UpdateDetectorVersionStatus</code>: <code>DRAFT</code> to <code>ACTIVE</code>, <code>ACTIVE</code> to <code>INACTIVE</code>, and <code>INACTIVE</code> to <code>ACTIVE</code>.</p>
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
export class UpdateDetectorVersionStatusCommand extends $Command
  .classBuilder<
    UpdateDetectorVersionStatusCommandInput,
    UpdateDetectorVersionStatusCommandOutput,
    FraudDetectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FraudDetectorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHawksNestServiceFacade", "UpdateDetectorVersionStatus", {})
  .n("FraudDetectorClient", "UpdateDetectorVersionStatusCommand")
  .sc(UpdateDetectorVersionStatus$)
  .build() {
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
