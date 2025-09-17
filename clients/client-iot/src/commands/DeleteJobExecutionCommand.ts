// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeleteJobExecutionRequest } from "../models/models_1";
import { de_DeleteJobExecutionCommand, se_DeleteJobExecutionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteJobExecutionCommand}.
 */
export interface DeleteJobExecutionCommandInput extends DeleteJobExecutionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteJobExecutionCommand}.
 */
export interface DeleteJobExecutionCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a job execution.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteJobExecution</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteJobExecutionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteJobExecutionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DeleteJobExecutionRequest
 *   jobId: "STRING_VALUE", // required
 *   thingName: "STRING_VALUE", // required
 *   executionNumber: Number("long"), // required
 *   force: true || false,
 *   namespaceId: "STRING_VALUE",
 * };
 * const command = new DeleteJobExecutionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteJobExecutionCommandInput - {@link DeleteJobExecutionCommandInput}
 * @returns {@link DeleteJobExecutionCommandOutput}
 * @see {@link DeleteJobExecutionCommandInput} for command's `input` shape.
 * @see {@link DeleteJobExecutionCommandOutput} for command's `response` shape.
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
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class DeleteJobExecutionCommand extends $Command
  .classBuilder<
    DeleteJobExecutionCommandInput,
    DeleteJobExecutionCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "DeleteJobExecution", {})
  .n("IoTClient", "DeleteJobExecutionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteJobExecutionCommand)
  .de(de_DeleteJobExecutionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteJobExecutionRequest;
      output: {};
    };
    sdk: {
      input: DeleteJobExecutionCommandInput;
      output: DeleteJobExecutionCommandOutput;
    };
  };
}
