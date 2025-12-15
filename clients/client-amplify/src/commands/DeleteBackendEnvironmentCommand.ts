// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AmplifyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteBackendEnvironmentRequest, DeleteBackendEnvironmentResult } from "../models/models_0";
import { DeleteBackendEnvironment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteBackendEnvironmentCommand}.
 */
export interface DeleteBackendEnvironmentCommandInput extends DeleteBackendEnvironmentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBackendEnvironmentCommand}.
 */
export interface DeleteBackendEnvironmentCommandOutput extends DeleteBackendEnvironmentResult, __MetadataBearer {}

/**
 * <p>Deletes a backend environment for an Amplify app. </p>
 *          <p>This API is available only to Amplify Gen 1 applications where the
 *             backend is created using Amplify Studio or the Amplify
 *             command line interface (CLI). This API isn’t available to Amplify Gen 2
 *             applications. When you deploy an application with Amplify Gen 2, you provision the app's
 *             backend infrastructure using Typescript code.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, DeleteBackendEnvironmentCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, DeleteBackendEnvironmentCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * // import type { AmplifyClientConfig } from "@aws-sdk/client-amplify";
 * const config = {}; // type is AmplifyClientConfig
 * const client = new AmplifyClient(config);
 * const input = { // DeleteBackendEnvironmentRequest
 *   appId: "STRING_VALUE", // required
 *   environmentName: "STRING_VALUE", // required
 * };
 * const command = new DeleteBackendEnvironmentCommand(input);
 * const response = await client.send(command);
 * // { // DeleteBackendEnvironmentResult
 * //   backendEnvironment: { // BackendEnvironment
 * //     backendEnvironmentArn: "STRING_VALUE", // required
 * //     environmentName: "STRING_VALUE", // required
 * //     stackName: "STRING_VALUE",
 * //     deploymentArtifacts: "STRING_VALUE",
 * //     createTime: new Date("TIMESTAMP"), // required
 * //     updateTime: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteBackendEnvironmentCommandInput - {@link DeleteBackendEnvironmentCommandInput}
 * @returns {@link DeleteBackendEnvironmentCommandOutput}
 * @see {@link DeleteBackendEnvironmentCommandInput} for command's `input` shape.
 * @see {@link DeleteBackendEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for AmplifyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>A request contains unexpected data. </p>
 *
 * @throws {@link DependentServiceFailureException} (server fault)
 *  <p>An operation failed because a dependent service threw an exception. </p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>The service failed to perform an operation due to an internal issue. </p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>An entity was not found during an operation. </p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>An operation failed due to a lack of access. </p>
 *
 * @throws {@link AmplifyServiceException}
 * <p>Base exception class for all service exceptions from Amplify service.</p>
 *
 *
 * @public
 */
export class DeleteBackendEnvironmentCommand extends $Command
  .classBuilder<
    DeleteBackendEnvironmentCommandInput,
    DeleteBackendEnvironmentCommandOutput,
    AmplifyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmplifyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Amplify", "DeleteBackendEnvironment", {})
  .n("AmplifyClient", "DeleteBackendEnvironmentCommand")
  .sc(DeleteBackendEnvironment$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBackendEnvironmentRequest;
      output: DeleteBackendEnvironmentResult;
    };
    sdk: {
      input: DeleteBackendEnvironmentCommandInput;
      output: DeleteBackendEnvironmentCommandOutput;
    };
  };
}
