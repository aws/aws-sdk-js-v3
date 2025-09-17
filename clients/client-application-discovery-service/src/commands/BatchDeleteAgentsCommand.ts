// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BatchDeleteAgentsRequest, BatchDeleteAgentsResponse } from "../models/models_0";
import { de_BatchDeleteAgentsCommand, se_BatchDeleteAgentsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDeleteAgentsCommand}.
 */
export interface BatchDeleteAgentsCommandInput extends BatchDeleteAgentsRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeleteAgentsCommand}.
 */
export interface BatchDeleteAgentsCommandOutput extends BatchDeleteAgentsResponse, __MetadataBearer {}

/**
 * <p>
 *       Deletes one or more agents or collectors as specified by ID. Deleting an agent or collector does not
 *       delete the previously discovered data.
 *       To delete the data collected, use <code>StartBatchDeleteConfigurationTask</code>.
 *
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, BatchDeleteAgentsCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, BatchDeleteAgentsCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * // import type { ApplicationDiscoveryServiceClientConfig } from "@aws-sdk/client-application-discovery-service";
 * const config = {}; // type is ApplicationDiscoveryServiceClientConfig
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const input = { // BatchDeleteAgentsRequest
 *   deleteAgents: [ // DeleteAgents // required
 *     { // DeleteAgent
 *       agentId: "STRING_VALUE", // required
 *       force: true || false,
 *     },
 *   ],
 * };
 * const command = new BatchDeleteAgentsCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteAgentsResponse
 * //   errors: [ // BatchDeleteAgentErrors
 * //     { // BatchDeleteAgentError
 * //       agentId: "STRING_VALUE", // required
 * //       errorMessage: "STRING_VALUE", // required
 * //       errorCode: "NOT_FOUND" || "INTERNAL_SERVER_ERROR" || "AGENT_IN_USE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDeleteAgentsCommandInput - {@link BatchDeleteAgentsCommandInput}
 * @returns {@link BatchDeleteAgentsCommandOutput}
 * @see {@link BatchDeleteAgentsCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteAgentsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for ApplicationDiscoveryServiceClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *  <p>The user does not have permission to perform the action. Check the IAM
 *       policy associated with this user.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid. Verify the parameters and try again.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of one or more parameters are either invalid or out of range. Verify the
 *       parameter values and try again.</p>
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
export class BatchDeleteAgentsCommand extends $Command
  .classBuilder<
    BatchDeleteAgentsCommandInput,
    BatchDeleteAgentsCommandOutput,
    ApplicationDiscoveryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationDiscoveryServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSPoseidonService_V2015_11_01", "BatchDeleteAgents", {})
  .n("ApplicationDiscoveryServiceClient", "BatchDeleteAgentsCommand")
  .f(void 0, void 0)
  .ser(se_BatchDeleteAgentsCommand)
  .de(de_BatchDeleteAgentsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDeleteAgentsRequest;
      output: BatchDeleteAgentsResponse;
    };
    sdk: {
      input: BatchDeleteAgentsCommandInput;
      output: BatchDeleteAgentsCommandOutput;
    };
  };
}
