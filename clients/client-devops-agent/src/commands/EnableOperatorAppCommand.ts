// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DevOpsAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { EnableOperatorAppInput, EnableOperatorAppOutput } from "../models/models_0";
import { EnableOperatorApp$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableOperatorAppCommand}.
 */
export interface EnableOperatorAppCommandInput extends EnableOperatorAppInput {}
/**
 * @public
 *
 * The output of {@link EnableOperatorAppCommand}.
 */
export interface EnableOperatorAppCommandOutput extends EnableOperatorAppOutput, __MetadataBearer {}

/**
 * <p>Enable the Operator App to access the given AgentSpace</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsAgentClient, EnableOperatorAppCommand } from "@aws-sdk/client-devops-agent"; // ES Modules import
 * // const { DevOpsAgentClient, EnableOperatorAppCommand } = require("@aws-sdk/client-devops-agent"); // CommonJS import
 * // import type { DevOpsAgentClientConfig } from "@aws-sdk/client-devops-agent";
 * const config = {}; // type is DevOpsAgentClientConfig
 * const client = new DevOpsAgentClient(config);
 * const input = { // EnableOperatorAppInput
 *   agentSpaceId: "STRING_VALUE", // required
 *   authFlow: "iam" || "idc" || "idp", // required
 *   operatorAppRoleArn: "STRING_VALUE", // required
 *   idcInstanceArn: "STRING_VALUE",
 *   issuerUrl: "STRING_VALUE",
 *   idpClientId: "STRING_VALUE",
 *   idpClientSecret: "STRING_VALUE",
 *   provider: "STRING_VALUE",
 * };
 * const command = new EnableOperatorAppCommand(input);
 * const response = await client.send(command);
 * // { // EnableOperatorAppOutput
 * //   agentSpaceId: "STRING_VALUE", // required
 * //   iam: { // IamAuthConfiguration
 * //     operatorAppRoleArn: "STRING_VALUE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"),
 * //   },
 * //   idc: { // IdcAuthConfiguration
 * //     operatorAppRoleArn: "STRING_VALUE", // required
 * //     idcInstanceArn: "STRING_VALUE", // required
 * //     idcApplicationArn: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"),
 * //   },
 * //   idp: { // IdpAuthConfiguration
 * //     issuerUrl: "STRING_VALUE", // required
 * //     clientId: "STRING_VALUE", // required
 * //     operatorAppRoleArn: "STRING_VALUE", // required
 * //     provider: "STRING_VALUE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param EnableOperatorAppCommandInput - {@link EnableOperatorAppCommandInput}
 * @returns {@link EnableOperatorAppCommandOutput}
 * @see {@link EnableOperatorAppCommandInput} for command's `input` shape.
 * @see {@link EnableOperatorAppCommandOutput} for command's `response` shape.
 * @see {@link DevOpsAgentClientResolvedConfig | config} for DevOpsAgentClient's `config` shape.
 *
 * @throws {@link IdentityCenterServiceException} (client fault)
 *  <p>Calls to the customer Identity Center have failed</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown when an unexpected error occurs in the processing of a request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to too many requests. Please slow down and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to the requested resource is denied due to insufficient permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource.</p>
 *
 * @throws {@link ContentSizeExceededException} (client fault)
 *  <p>This exception is thrown when the content size exceeds the allowed limit.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters provided in the request are invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would exceed the service quota limit.</p>
 *
 * @throws {@link DevOpsAgentServiceException}
 * <p>Base exception class for all service exceptions from DevOpsAgent service.</p>
 *
 *
 * @public
 */
export class EnableOperatorAppCommand extends $Command
  .classBuilder<
    EnableOperatorAppCommandInput,
    EnableOperatorAppCommandOutput,
    DevOpsAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DevOpsAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DevOpsAgent", "EnableOperatorApp", {})
  .n("DevOpsAgentClient", "EnableOperatorAppCommand")
  .sc(EnableOperatorApp$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableOperatorAppInput;
      output: EnableOperatorAppOutput;
    };
    sdk: {
      input: EnableOperatorAppCommandInput;
      output: EnableOperatorAppCommandOutput;
    };
  };
}
