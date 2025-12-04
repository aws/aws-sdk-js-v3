// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import type { CancelJobExecutionRequest } from "../models/models_0";
import { CancelJobExecution } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelJobExecutionCommand}.
 */
export interface CancelJobExecutionCommandInput extends CancelJobExecutionRequest {}
/**
 * @public
 *
 * The output of {@link CancelJobExecutionCommand}.
 */
export interface CancelJobExecutionCommandOutput extends __MetadataBearer {}

/**
 * <p>Cancels the execution of a job for a given thing.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelJobExecution</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CancelJobExecutionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CancelJobExecutionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // CancelJobExecutionRequest
 *   jobId: "STRING_VALUE", // required
 *   thingName: "STRING_VALUE", // required
 *   force: true || false,
 *   expectedVersion: Number("long"),
 *   statusDetails: { // DetailsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CancelJobExecutionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelJobExecutionCommandInput - {@link CancelJobExecutionCommandInput}
 * @returns {@link CancelJobExecutionCommandOutput}
 * @see {@link CancelJobExecutionCommandInput} for command's `input` shape.
 * @see {@link CancelJobExecutionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link InvalidStateTransitionException} (client fault)
 *  <p>An attempt was made to change to an invalid state, for example by deleting a job or a
 *          job execution which is "IN_PROGRESS" without setting the <code>force</code>
 *          parameter.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link VersionConflictException} (client fault)
 *  <p>An exception thrown when the version of an entity specified with the
 *             <code>expectedVersion</code> parameter does not match the latest version in the
 *          system.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class CancelJobExecutionCommand extends $Command
  .classBuilder<
    CancelJobExecutionCommandInput,
    CancelJobExecutionCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "CancelJobExecution", {})
  .n("IoTClient", "CancelJobExecutionCommand")
  .sc(CancelJobExecution)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelJobExecutionRequest;
      output: {};
    };
    sdk: {
      input: CancelJobExecutionCommandInput;
      output: CancelJobExecutionCommandOutput;
    };
  };
}
