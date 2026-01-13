// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodeCatalystClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCatalystClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { StartDevEnvironmentRequest, StartDevEnvironmentResponse } from "../models/models_0";
import { StartDevEnvironment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartDevEnvironmentCommand}.
 */
export interface StartDevEnvironmentCommandInput extends StartDevEnvironmentRequest {}
/**
 * @public
 *
 * The output of {@link StartDevEnvironmentCommand}.
 */
export interface StartDevEnvironmentCommandOutput extends StartDevEnvironmentResponse, __MetadataBearer {}

/**
 * <p>Starts a specified Dev Environment and puts it into an active state. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCatalystClient, StartDevEnvironmentCommand } from "@aws-sdk/client-codecatalyst"; // ES Modules import
 * // const { CodeCatalystClient, StartDevEnvironmentCommand } = require("@aws-sdk/client-codecatalyst"); // CommonJS import
 * // import type { CodeCatalystClientConfig } from "@aws-sdk/client-codecatalyst";
 * const config = {}; // type is CodeCatalystClientConfig
 * const client = new CodeCatalystClient(config);
 * const input = { // StartDevEnvironmentRequest
 *   spaceName: "STRING_VALUE", // required
 *   projectName: "STRING_VALUE", // required
 *   id: "STRING_VALUE", // required
 *   ides: [ // IdeConfigurationList
 *     { // IdeConfiguration
 *       runtime: "STRING_VALUE",
 *       name: "STRING_VALUE",
 *     },
 *   ],
 *   instanceType: "STRING_VALUE",
 *   inactivityTimeoutMinutes: Number("int"),
 * };
 * const command = new StartDevEnvironmentCommand(input);
 * const response = await client.send(command);
 * // { // StartDevEnvironmentResponse
 * //   spaceName: "STRING_VALUE", // required
 * //   projectName: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartDevEnvironmentCommandInput - {@link StartDevEnvironmentCommandInput}
 * @returns {@link StartDevEnvironmentCommandOutput}
 * @see {@link StartDevEnvironmentCommandInput} for command's `input` shape.
 * @see {@link StartDevEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link CodeCatalystClientResolvedConfig | config} for CodeCatalystClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient access to perform this action. Verify that you are a member of a role that allows this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request was denied because the requested operation would cause a conflict with the current state of a service resource associated with the request.
 *        Another user might have updated the resource. Reload, make sure you have the latest data, and then try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was denied because the specified resource was not found. Verify that the spelling is correct and that you have access to the resource.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request was denied because one or more resources has reached its limits for the tier the space belongs to. Either reduce
 *       the number of resources, or change the tier if applicable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was denied because an input failed to satisfy the constraints specified by the service. Check the spelling and input requirements, and then try again.</p>
 *
 * @throws {@link CodeCatalystServiceException}
 * <p>Base exception class for all service exceptions from CodeCatalyst service.</p>
 *
 *
 * @public
 */
export class StartDevEnvironmentCommand extends $Command
  .classBuilder<
    StartDevEnvironmentCommandInput,
    StartDevEnvironmentCommandOutput,
    CodeCatalystClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeCatalystClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeCatalyst", "StartDevEnvironment", {})
  .n("CodeCatalystClient", "StartDevEnvironmentCommand")
  .sc(StartDevEnvironment$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartDevEnvironmentRequest;
      output: StartDevEnvironmentResponse;
    };
    sdk: {
      input: StartDevEnvironmentCommandInput;
      output: StartDevEnvironmentCommandOutput;
    };
  };
}
