// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DevOpsAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateOperatorAppIdpConfigInput, UpdateOperatorAppIdpConfigOutput } from "../models/models_0";
import { UpdateOperatorAppIdpConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateOperatorAppIdpConfigCommand}.
 */
export interface UpdateOperatorAppIdpConfigCommandInput extends UpdateOperatorAppIdpConfigInput {}
/**
 * @public
 *
 * The output of {@link UpdateOperatorAppIdpConfigCommand}.
 */
export interface UpdateOperatorAppIdpConfigCommandOutput extends UpdateOperatorAppIdpConfigOutput, __MetadataBearer {}

/**
 * <p>Update the external Identity Provider configuration for the Operator App</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsAgentClient, UpdateOperatorAppIdpConfigCommand } from "@aws-sdk/client-devops-agent"; // ES Modules import
 * // const { DevOpsAgentClient, UpdateOperatorAppIdpConfigCommand } = require("@aws-sdk/client-devops-agent"); // CommonJS import
 * // import type { DevOpsAgentClientConfig } from "@aws-sdk/client-devops-agent";
 * const config = {}; // type is DevOpsAgentClientConfig
 * const client = new DevOpsAgentClient(config);
 * const input = { // UpdateOperatorAppIdpConfigInput
 *   agentSpaceId: "STRING_VALUE", // required
 *   idpClientSecret: "STRING_VALUE",
 * };
 * const command = new UpdateOperatorAppIdpConfigCommand(input);
 * const response = await client.send(command);
 * // { // UpdateOperatorAppIdpConfigOutput
 * //   agentSpaceId: "STRING_VALUE", // required
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
 * @param UpdateOperatorAppIdpConfigCommandInput - {@link UpdateOperatorAppIdpConfigCommandInput}
 * @returns {@link UpdateOperatorAppIdpConfigCommandOutput}
 * @see {@link UpdateOperatorAppIdpConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateOperatorAppIdpConfigCommandOutput} for command's `response` shape.
 * @see {@link DevOpsAgentClientResolvedConfig | config} for DevOpsAgentClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown when an unexpected error occurs in the processing of a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would exceed the service quota limit.</p>
 *
 * @throws {@link DevOpsAgentServiceException}
 * <p>Base exception class for all service exceptions from DevOpsAgent service.</p>
 *
 *
 * @public
 */
export class UpdateOperatorAppIdpConfigCommand extends $Command
  .classBuilder<
    UpdateOperatorAppIdpConfigCommandInput,
    UpdateOperatorAppIdpConfigCommandOutput,
    DevOpsAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DevOpsAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DevOpsAgent", "UpdateOperatorAppIdpConfig", {})
  .n("DevOpsAgentClient", "UpdateOperatorAppIdpConfigCommand")
  .sc(UpdateOperatorAppIdpConfig$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateOperatorAppIdpConfigInput;
      output: UpdateOperatorAppIdpConfigOutput;
    };
    sdk: {
      input: UpdateOperatorAppIdpConfigCommandInput;
      output: UpdateOperatorAppIdpConfigCommandOutput;
    };
  };
}
