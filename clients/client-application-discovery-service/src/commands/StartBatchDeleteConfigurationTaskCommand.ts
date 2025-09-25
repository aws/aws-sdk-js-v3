// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  StartBatchDeleteConfigurationTaskRequest,
  StartBatchDeleteConfigurationTaskResponse,
} from "../models/models_0";
import { StartBatchDeleteConfigurationTask } from "../schemas/schemas_2_Configuration";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartBatchDeleteConfigurationTaskCommand}.
 */
export interface StartBatchDeleteConfigurationTaskCommandInput extends StartBatchDeleteConfigurationTaskRequest {}
/**
 * @public
 *
 * The output of {@link StartBatchDeleteConfigurationTaskCommand}.
 */
export interface StartBatchDeleteConfigurationTaskCommandOutput
  extends StartBatchDeleteConfigurationTaskResponse,
    __MetadataBearer {}

/**
 * <p>
 *         Takes a list of configurationId as input and starts an asynchronous deletion
 *         task to remove the configurationItems. Returns a unique deletion task identifier.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, StartBatchDeleteConfigurationTaskCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, StartBatchDeleteConfigurationTaskCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * // import type { ApplicationDiscoveryServiceClientConfig } from "@aws-sdk/client-application-discovery-service";
 * const config = {}; // type is ApplicationDiscoveryServiceClientConfig
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const input = { // StartBatchDeleteConfigurationTaskRequest
 *   configurationType: "SERVER", // required
 *   configurationIds: [ // ConfigurationIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new StartBatchDeleteConfigurationTaskCommand(input);
 * const response = await client.send(command);
 * // { // StartBatchDeleteConfigurationTaskResponse
 * //   taskId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartBatchDeleteConfigurationTaskCommandInput - {@link StartBatchDeleteConfigurationTaskCommandInput}
 * @returns {@link StartBatchDeleteConfigurationTaskCommandOutput}
 * @see {@link StartBatchDeleteConfigurationTaskCommandInput} for command's `input` shape.
 * @see {@link StartBatchDeleteConfigurationTaskCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for ApplicationDiscoveryServiceClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *  <p>The user does not have permission to perform the action. Check the IAM
 *       policy associated with this user.</p>
 *
 * @throws {@link HomeRegionNotSetException} (client fault)
 *  <p>The home Region is not set. Set the home Region to continue.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid. Verify the parameters and try again.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of one or more parameters are either invalid or out of range. Verify the
 *       parameter values and try again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>
 *       The limit of 200 configuration IDs per request has been exceeded.
 *     </p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This operation is not permitted.</p>
 *
 * @throws {@link ServerInternalErrorException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 * @throws {@link ApplicationDiscoveryServiceServiceException}
 * <p>Base exception class for all service exceptions from ApplicationDiscoveryService service.</p>
 *
 *
 * @public
 */
export class StartBatchDeleteConfigurationTaskCommand extends $Command
  .classBuilder<
    StartBatchDeleteConfigurationTaskCommandInput,
    StartBatchDeleteConfigurationTaskCommandOutput,
    ApplicationDiscoveryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationDiscoveryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSPoseidonService_V2015_11_01", "StartBatchDeleteConfigurationTask", {})
  .n("ApplicationDiscoveryServiceClient", "StartBatchDeleteConfigurationTaskCommand")
  .sc(StartBatchDeleteConfigurationTask)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartBatchDeleteConfigurationTaskRequest;
      output: StartBatchDeleteConfigurationTaskResponse;
    };
    sdk: {
      input: StartBatchDeleteConfigurationTaskCommandInput;
      output: StartBatchDeleteConfigurationTaskCommandOutput;
    };
  };
}
