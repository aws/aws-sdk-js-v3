// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodeCatalystClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCatalystClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { StopDevEnvironmentSessionRequest, StopDevEnvironmentSessionResponse } from "../models/models_0";
import { StopDevEnvironmentSession } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopDevEnvironmentSessionCommand}.
 */
export interface StopDevEnvironmentSessionCommandInput extends StopDevEnvironmentSessionRequest {}
/**
 * @public
 *
 * The output of {@link StopDevEnvironmentSessionCommand}.
 */
export interface StopDevEnvironmentSessionCommandOutput extends StopDevEnvironmentSessionResponse, __MetadataBearer {}

/**
 * <p>Stops a session for a specified Dev Environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCatalystClient, StopDevEnvironmentSessionCommand } from "@aws-sdk/client-codecatalyst"; // ES Modules import
 * // const { CodeCatalystClient, StopDevEnvironmentSessionCommand } = require("@aws-sdk/client-codecatalyst"); // CommonJS import
 * // import type { CodeCatalystClientConfig } from "@aws-sdk/client-codecatalyst";
 * const config = {}; // type is CodeCatalystClientConfig
 * const client = new CodeCatalystClient(config);
 * const input = { // StopDevEnvironmentSessionRequest
 *   spaceName: "STRING_VALUE", // required
 *   projectName: "STRING_VALUE", // required
 *   id: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 * };
 * const command = new StopDevEnvironmentSessionCommand(input);
 * const response = await client.send(command);
 * // { // StopDevEnvironmentSessionResponse
 * //   spaceName: "STRING_VALUE", // required
 * //   projectName: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   sessionId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StopDevEnvironmentSessionCommandInput - {@link StopDevEnvironmentSessionCommandInput}
 * @returns {@link StopDevEnvironmentSessionCommandOutput}
 * @see {@link StopDevEnvironmentSessionCommandInput} for command's `input` shape.
 * @see {@link StopDevEnvironmentSessionCommandOutput} for command's `response` shape.
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
export class StopDevEnvironmentSessionCommand extends $Command
  .classBuilder<
    StopDevEnvironmentSessionCommandInput,
    StopDevEnvironmentSessionCommandOutput,
    CodeCatalystClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeCatalystClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeCatalyst", "StopDevEnvironmentSession", {})
  .n("CodeCatalystClient", "StopDevEnvironmentSessionCommand")
  .sc(StopDevEnvironmentSession)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopDevEnvironmentSessionRequest;
      output: StopDevEnvironmentSessionResponse;
    };
    sdk: {
      input: StopDevEnvironmentSessionCommandInput;
      output: StopDevEnvironmentSessionCommandOutput;
    };
  };
}
