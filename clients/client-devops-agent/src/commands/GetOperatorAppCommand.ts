// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DevOpsAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetOperatorAppInput, GetOperatorAppOutput } from "../models/models_0";
import { GetOperatorApp$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetOperatorAppCommand}.
 */
export interface GetOperatorAppCommandInput extends GetOperatorAppInput {}
/**
 * @public
 *
 * The output of {@link GetOperatorAppCommand}.
 */
export interface GetOperatorAppCommandOutput extends GetOperatorAppOutput, __MetadataBearer {}

/**
 * Get the full auth configuration of operator including any enabled auth flow
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsAgentClient, GetOperatorAppCommand } from "@aws-sdk/client-devops-agent"; // ES Modules import
 * // const { DevOpsAgentClient, GetOperatorAppCommand } = require("@aws-sdk/client-devops-agent"); // CommonJS import
 * // import type { DevOpsAgentClientConfig } from "@aws-sdk/client-devops-agent";
 * const config = {}; // type is DevOpsAgentClientConfig
 * const client = new DevOpsAgentClient(config);
 * const input = { // GetOperatorAppInput
 *   agentSpaceId: "STRING_VALUE", // required
 * };
 * const command = new GetOperatorAppCommand(input);
 * const response = await client.send(command);
 * // { // GetOperatorAppOutput
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
 * @param GetOperatorAppCommandInput - {@link GetOperatorAppCommandInput}
 * @returns {@link GetOperatorAppCommandOutput}
 * @see {@link GetOperatorAppCommandInput} for command's `input` shape.
 * @see {@link GetOperatorAppCommandOutput} for command's `response` shape.
 * @see {@link DevOpsAgentClientResolvedConfig | config} for DevOpsAgentClient's `config` shape.
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
export class GetOperatorAppCommand extends $Command
  .classBuilder<
    GetOperatorAppCommandInput,
    GetOperatorAppCommandOutput,
    DevOpsAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DevOpsAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DevOpsAgent", "GetOperatorApp", {})
  .n("DevOpsAgentClient", "GetOperatorAppCommand")
  .sc(GetOperatorApp$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetOperatorAppInput;
      output: GetOperatorAppOutput;
    };
    sdk: {
      input: GetOperatorAppCommandInput;
      output: GetOperatorAppCommandOutput;
    };
  };
}
