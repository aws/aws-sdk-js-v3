// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartProjectVersionRequest, StartProjectVersionResponse } from "../models/models_0";
import { StartProjectVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartProjectVersionCommand}.
 */
export interface StartProjectVersionCommandInput extends StartProjectVersionRequest {}
/**
 * @public
 *
 * The output of {@link StartProjectVersionCommand}.
 */
export interface StartProjectVersionCommandOutput extends StartProjectVersionResponse, __MetadataBearer {}

/**
 * > **Note:** This operation applies only to Amazon Rekognition Custom Labels.
 *
 * Starts the running of the version of a model. Starting a model takes a while to complete. To check the current state of the model, use DescribeProjectVersions.
 *
 * Once the model is running, you can detect custom labels in new images by calling DetectCustomLabels.
 *
 * > **Note:** You are charged for the amount of time that the model is running. To stop a running model, call StopProjectVersion.
 *
 * This operation requires permissions to perform the `rekognition:StartProjectVersion` action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, StartProjectVersionCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, StartProjectVersionCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * // import type { RekognitionClientConfig } from "@aws-sdk/client-rekognition";
 * const config = {}; // type is RekognitionClientConfig
 * const client = new RekognitionClient(config);
 * const input = { // StartProjectVersionRequest
 *   ProjectVersionArn: "STRING_VALUE", // required
 *   MinInferenceUnits: Number("int"), // required
 *   MaxInferenceUnits: Number("int"),
 * };
 * const command = new StartProjectVersionCommand(input);
 * const response = await client.send(command);
 * // { // StartProjectVersionResponse
 * //   Status: "TRAINING_IN_PROGRESS" || "TRAINING_COMPLETED" || "TRAINING_FAILED" || "STARTING" || "RUNNING" || "FAILED" || "STOPPING" || "STOPPED" || "DELETING" || "COPYING_IN_PROGRESS" || "COPYING_COMPLETED" || "COPYING_FAILED" || "DEPRECATED" || "EXPIRED",
 * // };
 *
 * ```
 *
 * @param StartProjectVersionCommandInput - {@link StartProjectVersionCommandInput}
 * @returns {@link StartProjectVersionCommandOutput}
 * @see {@link StartProjectVersionCommandInput} for command's `input` shape.
 * @see {@link StartProjectVersionCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You are not authorized to perform the action.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * Amazon Rekognition experienced a service issue. Try your call again.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * Input parameter violated a constraint. Validate your parameter before calling the API operation again.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * An Amazon Rekognition service limit was exceeded. For example, if you start too many jobs concurrently, subsequent calls to start operations (ex: `StartLabelDetection`) will raise a `LimitExceededException` exception (HTTP status code: 400) until the number of concurrently running jobs is below the Amazon Rekognition service limit.
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *
 * The number of requests exceeded your throughput limit. If you want to increase this limit, contact Amazon Rekognition.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The specified resource is already being used.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource specified in the request cannot be found.
 *
 * @throws {@link ThrottlingException} (server fault)
 *
 * Amazon Rekognition is temporarily unable to process the request. Try your call again.
 *
 * @throws {@link RekognitionServiceException}
 *
 * Base exception class for all service exceptions from Rekognition service.
 *
 * @example To start an Amazon Rekognition Custom Labels model
 * ```javascript
 * // Starts a version of an Amazon Rekognition Custom Labels model.
 * const input = {
 *   MaxInferenceUnits: 1,
 *   MinInferenceUnits: 1,
 *   ProjectVersionArn: "arn:aws:rekognition:us-east-1:111122223333:project/my-project/version/1/1690556751958"
 * };
 * const command = new StartProjectVersionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Status: "STARTING"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class StartProjectVersionCommand extends command<StartProjectVersionCommandInput, StartProjectVersionCommandOutput>(
  _ep0,
  _mw0,
  "StartProjectVersion",
  StartProjectVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartProjectVersionRequest;
      output: StartProjectVersionResponse;
    };
    sdk: {
      input: StartProjectVersionCommandInput;
      output: StartProjectVersionCommandOutput;
    };
  };
}
