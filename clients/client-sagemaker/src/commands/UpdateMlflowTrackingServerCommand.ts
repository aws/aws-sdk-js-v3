// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateMlflowTrackingServerRequest, UpdateMlflowTrackingServerResponse } from "../models/models_5";
import { UpdateMlflowTrackingServer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateMlflowTrackingServerCommand}.
 */
export interface UpdateMlflowTrackingServerCommandInput extends UpdateMlflowTrackingServerRequest {}
/**
 * @public
 *
 * The output of {@link UpdateMlflowTrackingServerCommand}.
 */
export interface UpdateMlflowTrackingServerCommandOutput extends UpdateMlflowTrackingServerResponse, __MetadataBearer {}

/**
 * Updates properties of an existing MLflow Tracking Server.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateMlflowTrackingServerCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateMlflowTrackingServerCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // UpdateMlflowTrackingServerRequest
 *   TrackingServerName: "STRING_VALUE", // required
 *   ArtifactStoreUri: "STRING_VALUE",
 *   TrackingServerSize: "Small" || "Medium" || "Large",
 *   AutomaticModelRegistration: true || false,
 *   WeeklyMaintenanceWindowStart: "STRING_VALUE",
 *   S3BucketOwnerAccountId: "STRING_VALUE",
 *   S3BucketOwnerVerification: true || false,
 * };
 * const command = new UpdateMlflowTrackingServerCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMlflowTrackingServerResponse
 * //   TrackingServerArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateMlflowTrackingServerCommandInput - {@link UpdateMlflowTrackingServerCommandInput}
 * @returns {@link UpdateMlflowTrackingServerCommandOutput}
 * @see {@link UpdateMlflowTrackingServerCommandInput} for command's `input` shape.
 * @see {@link UpdateMlflowTrackingServerCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There was a conflict when you attempted to modify a SageMaker entity such as an `Experiment` or `Artifact`.
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *
 * You have exceeded an SageMaker resource limit. For example, you might have too many training jobs created.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *
 * Resource being access is not found.
 *
 * @throws {@link SageMakerServiceException}
 *
 * Base exception class for all service exceptions from SageMaker service.
 *
 * @public
 */
export class UpdateMlflowTrackingServerCommand extends command<UpdateMlflowTrackingServerCommandInput, UpdateMlflowTrackingServerCommandOutput>(
  _ep0,
  _mw0,
  "UpdateMlflowTrackingServer",
  UpdateMlflowTrackingServer$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMlflowTrackingServerRequest;
      output: UpdateMlflowTrackingServerResponse;
    };
    sdk: {
      input: UpdateMlflowTrackingServerCommandInput;
      output: UpdateMlflowTrackingServerCommandOutput;
    };
  };
}
