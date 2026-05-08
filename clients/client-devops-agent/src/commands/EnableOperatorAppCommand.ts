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
 * Enable the Operator App to access the given AgentSpace
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
 *  Calls to the customer Identity Center have failed
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is thrown when an unexpected error occurs in the processing of a request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was throttled due to too many requests. Please slow down and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *  A standard error for input validation failures.
 * This should be thrown by services when a member of the input structure
 * falls outside of the modeled or documented constraints.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  Access to the requested resource is denied due to insufficient permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request conflicts with the current state of the resource.
 *
 * @throws {@link ContentSizeExceededException} (client fault)
 *  This exception is thrown when the content size exceeds the allowed limit.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  One or more parameters provided in the request are invalid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource could not be found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  The request would exceed the service quota limit.
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
