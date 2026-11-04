// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopProjectVersionRequest, StopProjectVersionResponse } from "../models/models_0";
import { StopProjectVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopProjectVersionCommand}.
 */
export interface StopProjectVersionCommandInput extends StopProjectVersionRequest {}
/**
 * @public
 *
 * The output of {@link StopProjectVersionCommand}.
 */
export interface StopProjectVersionCommandOutput extends StopProjectVersionResponse, __MetadataBearer {}

/**
 * > **Note:** This operation applies only to Amazon Rekognition Custom Labels.
 *
 * Stops a running model. The operation might take a while to complete. To check the current status, call DescribeProjectVersions. Only applies to Custom Labels projects.
 *
 * This operation requires permissions to perform the `rekognition:StopProjectVersion` action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, StopProjectVersionCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, StopProjectVersionCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * // import type { RekognitionClientConfig } from "@aws-sdk/client-rekognition";
 * const config = {}; // type is RekognitionClientConfig
 * const client = new RekognitionClient(config);
 * const input = { // StopProjectVersionRequest
 *   ProjectVersionArn: "STRING_VALUE", // required
 * };
 * const command = new StopProjectVersionCommand(input);
 * const response = await client.send(command);
 * // { // StopProjectVersionResponse
 * //   Status: "TRAINING_IN_PROGRESS" || "TRAINING_COMPLETED" || "TRAINING_FAILED" || "STARTING" || "RUNNING" || "FAILED" || "STOPPING" || "STOPPED" || "DELETING" || "COPYING_IN_PROGRESS" || "COPYING_COMPLETED" || "COPYING_FAILED" || "DEPRECATED" || "EXPIRED",
 * // };
 *
 * ```
 *
 * @param StopProjectVersionCommandInput - {@link StopProjectVersionCommandInput}
 * @returns {@link StopProjectVersionCommandOutput}
 * @see {@link StopProjectVersionCommandInput} for command's `input` shape.
 * @see {@link StopProjectVersionCommandOutput} for command's `response` shape.
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
 * @example To stop an Amazon Rekognition Custom Labels model.
 * ```javascript
 * // Stops a version of an Amazon Rekognition Custom Labels model.
 * const input = {
 *   ProjectVersionArn: "arn:aws:rekognition:us-east-1:111122223333:project/my-project/version/1/1690556751958"
 * };
 * const command = new StopProjectVersionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Status: "STOPPING"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class StopProjectVersionCommand extends command<StopProjectVersionCommandInput, StopProjectVersionCommandOutput>(
  _ep0,
  _mw0,
  "StopProjectVersion",
  StopProjectVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopProjectVersionRequest;
      output: StopProjectVersionResponse;
    };
    sdk: {
      input: StopProjectVersionCommandInput;
      output: StopProjectVersionCommandOutput;
    };
  };
}
