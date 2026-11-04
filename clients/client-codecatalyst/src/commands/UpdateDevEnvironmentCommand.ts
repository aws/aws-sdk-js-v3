// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateDevEnvironmentRequest, UpdateDevEnvironmentResponse } from "../models/models_0";
import { UpdateDevEnvironment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Changes one or more values for a Dev Environment. Updating certain values of the Dev Environment will cause a restart.
 *
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
 *
 * The request was denied because you don't have sufficient access to perform this action. Verify that you are a member of a role that allows this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request was denied because the requested operation would cause a conflict with the current state of a service resource associated with the request. Another user might have updated the resource. Reload, make sure you have the latest data, and then try again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request was denied because the specified resource was not found. Verify that the spelling is correct and that you have access to the resource.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request was denied because one or more resources has reached its limits for the tier the space belongs to. Either reduce the number of resources, or change the tier if applicable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request was denied because an input failed to satisfy the constraints specified by the service. Check the spelling and input requirements, and then try again.
 *
 * @throws {@link CodeCatalystServiceException}
 *
 * Base exception class for all service exceptions from CodeCatalyst service.
 *
 * @public
 */
export class UpdateDevEnvironmentCommand extends command<UpdateDevEnvironmentCommandInput, UpdateDevEnvironmentCommandOutput>(
  _ep0,
  _mw0,
  "UpdateDevEnvironment",
  UpdateDevEnvironment$
) {
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
