// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeCatalystClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCatalystClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateDevEnvironmentRequest, UpdateDevEnvironmentResponse } from "../models/models_0";
import { UpdateDevEnvironment } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDevEnvironmentCommand}.
 */
export interface UpdateDevEnvironmentCommandInput extends UpdateDevEnvironmentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDevEnvironmentCommand}.
 */
export interface UpdateDevEnvironmentCommandOutput extends UpdateDevEnvironmentResponse, __MetadataBearer {}

/**
 * <p>Changes one or more values for a Dev Environment. Updating certain values of the Dev Environment will cause a restart.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCatalystClient, UpdateDevEnvironmentCommand } from "@aws-sdk/client-codecatalyst"; // ES Modules import
 * // const { CodeCatalystClient, UpdateDevEnvironmentCommand } = require("@aws-sdk/client-codecatalyst"); // CommonJS import
 * // import type { CodeCatalystClientConfig } from "@aws-sdk/client-codecatalyst";
 * const config = {}; // type is CodeCatalystClientConfig
 * const client = new CodeCatalystClient(config);
 * const input = { // UpdateDevEnvironmentRequest
 *   spaceName: "STRING_VALUE", // required
 *   projectName: "STRING_VALUE", // required
 *   id: "STRING_VALUE", // required
 *   alias: "STRING_VALUE",
 *   ides: [ // IdeConfigurationList
 *     { // IdeConfiguration
 *       runtime: "STRING_VALUE",
 *       name: "STRING_VALUE",
 *     },
 *   ],
 *   instanceType: "STRING_VALUE",
 *   inactivityTimeoutMinutes: Number("int"),
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateDevEnvironmentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDevEnvironmentResponse
 * //   id: "STRING_VALUE", // required
 * //   spaceName: "STRING_VALUE", // required
 * //   projectName: "STRING_VALUE", // required
 * //   alias: "STRING_VALUE",
 * //   ides: [ // IdeConfigurationList
 * //     { // IdeConfiguration
 * //       runtime: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //     },
 * //   ],
 * //   instanceType: "STRING_VALUE",
 * //   inactivityTimeoutMinutes: Number("int"),
 * //   clientToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateDevEnvironmentCommandInput - {@link UpdateDevEnvironmentCommandInput}
 * @returns {@link UpdateDevEnvironmentCommandOutput}
 * @see {@link UpdateDevEnvironmentCommandInput} for command's `input` shape.
 * @see {@link UpdateDevEnvironmentCommandOutput} for command's `response` shape.
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
export class UpdateDevEnvironmentCommand extends $Command
  .classBuilder<
    UpdateDevEnvironmentCommandInput,
    UpdateDevEnvironmentCommandOutput,
    CodeCatalystClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeCatalystClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeCatalyst", "UpdateDevEnvironment", {})
  .n("CodeCatalystClient", "UpdateDevEnvironmentCommand")
  .sc(UpdateDevEnvironment)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDevEnvironmentRequest;
      output: UpdateDevEnvironmentResponse;
    };
    sdk: {
      input: UpdateDevEnvironmentCommandInput;
      output: UpdateDevEnvironmentCommandOutput;
    };
  };
}
