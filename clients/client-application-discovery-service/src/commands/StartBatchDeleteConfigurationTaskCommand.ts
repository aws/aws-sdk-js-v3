// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  StartBatchDeleteConfigurationTaskRequest,
  StartBatchDeleteConfigurationTaskResponse,
} from "../models/models_0";
import { StartBatchDeleteConfigurationTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface StartBatchDeleteConfigurationTaskCommandOutput extends StartBatchDeleteConfigurationTaskResponse, __MetadataBearer {}

/**
 * Takes a list of configurationId as input and starts an asynchronous deletion task to remove the configurationItems. Returns a unique deletion task identifier.
 *
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
 *
 * The user does not have permission to perform the action. Check the IAM policy associated with this user.
 *
 * @throws {@link HomeRegionNotSetException} (client fault)
 *
 * The home Region is not set. Set the home Region to continue.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters are not valid. Verify the parameters and try again.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * The value of one or more parameters are either invalid or out of range. Verify the parameter values and try again.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The limit of 200 configuration IDs per request has been exceeded.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *
 * This operation is not permitted.
 *
 * @throws {@link ServerInternalErrorException} (server fault)
 *
 * The server experienced an internal error. Try again.
 *
 * @throws {@link ApplicationDiscoveryServiceServiceException}
 *
 * Base exception class for all service exceptions from ApplicationDiscoveryService service.
 *
 * @public
 */
export class StartBatchDeleteConfigurationTaskCommand extends command<StartBatchDeleteConfigurationTaskCommandInput, StartBatchDeleteConfigurationTaskCommandOutput>(
  _ep0,
  _mw0,
  "StartBatchDeleteConfigurationTask",
  StartBatchDeleteConfigurationTask$
) {
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
