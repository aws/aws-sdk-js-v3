// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StopProjectVersionRequest, StopProjectVersionResponse } from "../models/models_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { StopProjectVersion } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <note>
 *             <p>This operation applies only to Amazon Rekognition Custom Labels.</p>
 *          </note>
 *          <p>Stops a running model. The operation might take a while to complete. To check the
 *          current status, call <a>DescribeProjectVersions</a>. Only applies to Custom
 *          Labels projects.</p>
 *          <p>This operation requires permissions to perform the <code>rekognition:StopProjectVersion</code> action.</p>
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
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Amazon Rekognition experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Input parameter violated a constraint. Validate your parameter before calling the API
 *       operation again.</p>
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *  <p>The number of requests exceeded your throughput limit. If you want to increase this
 *       limit, contact Amazon Rekognition.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is already being used.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Amazon Rekognition is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RekognitionServiceException}
 * <p>Base exception class for all service exceptions from Rekognition service.</p>
 *
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
export class StopProjectVersionCommand extends $Command
  .classBuilder<
    StopProjectVersionCommandInput,
    StopProjectVersionCommandOutput,
    RekognitionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RekognitionClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RekognitionService", "StopProjectVersion", {})
  .n("RekognitionClient", "StopProjectVersionCommand")
  .sc(StopProjectVersion)
  .build() {
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
