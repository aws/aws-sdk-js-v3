// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteProjectVersionRequest, DeleteProjectVersionResponse } from "../models/models_0";
import { DeleteProjectVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteProjectVersionCommand}.
 */
export interface DeleteProjectVersionCommandInput extends DeleteProjectVersionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteProjectVersionCommand}.
 */
export interface DeleteProjectVersionCommandOutput extends DeleteProjectVersionResponse, __MetadataBearer {}

/**
 * Deletes a Rekognition project model or project version, like a Amazon Rekognition Custom Labels model or a custom adapter.
 *
 * You can't delete a project version if it is running or if it is training. To check the status of a project version, use the Status field returned from DescribeProjectVersions. To stop a project version call StopProjectVersion. If the project version is training, wait until it finishes.
 *
 * This operation requires permissions to perform the `rekognition:DeleteProjectVersion` action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, DeleteProjectVersionCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, DeleteProjectVersionCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * // import type { RekognitionClientConfig } from "@aws-sdk/client-rekognition";
 * const config = {}; // type is RekognitionClientConfig
 * const client = new RekognitionClient(config);
 * const input = { // DeleteProjectVersionRequest
 *   ProjectVersionArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteProjectVersionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteProjectVersionResponse
 * //   Status: "TRAINING_IN_PROGRESS" || "TRAINING_COMPLETED" || "TRAINING_FAILED" || "STARTING" || "RUNNING" || "FAILED" || "STOPPING" || "STOPPED" || "DELETING" || "COPYING_IN_PROGRESS" || "COPYING_COMPLETED" || "COPYING_FAILED" || "DEPRECATED" || "EXPIRED",
 * // };
 *
 * ```
 *
 * @param DeleteProjectVersionCommandInput - {@link DeleteProjectVersionCommandInput}
 * @returns {@link DeleteProjectVersionCommandOutput}
 * @see {@link DeleteProjectVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteProjectVersionCommandOutput} for command's `response` shape.
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
 * @example To delete an Amazon Rekognition Custom Labels model
 * ```javascript
 * // Deletes a version of an Amazon Rekognition Custom Labels model.
 * const input = {
 *   ProjectVersionArn: "arn:aws:rekognition:us-east-1:111122223333:project/my-project/version/1/1690556751958"
 * };
 * const command = new DeleteProjectVersionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Status: "DELETING"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteProjectVersionCommand extends command<DeleteProjectVersionCommandInput, DeleteProjectVersionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteProjectVersion",
  DeleteProjectVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteProjectVersionRequest;
      output: DeleteProjectVersionResponse;
    };
    sdk: {
      input: DeleteProjectVersionCommandInput;
      output: DeleteProjectVersionCommandOutput;
    };
  };
}
