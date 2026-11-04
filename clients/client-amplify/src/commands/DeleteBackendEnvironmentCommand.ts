// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteBackendEnvironmentRequest, DeleteBackendEnvironmentResult } from "../models/models_0";
import { DeleteBackendEnvironment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes a backend environment for an Amplify app.
 *
 * This API is available only to Amplify Gen 1 applications where the backend is created using Amplify Studio or the Amplify command line interface (CLI). This API isn’t available to Amplify Gen 2 applications. When you deploy an application with Amplify Gen 2, you provision the app's backend infrastructure using Typescript code.
 *
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
 *
 * A request contains unexpected data.
 *
 * @throws {@link DependentServiceFailureException} (server fault)
 *
 * An operation failed because a dependent service threw an exception.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * The service failed to perform an operation due to an internal issue.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * An entity was not found during an operation.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * An operation failed due to a lack of access.
 *
 * @throws {@link AmplifyServiceException}
 *
 * Base exception class for all service exceptions from Amplify service.
 *
 * @public
 */
export class DeleteBackendEnvironmentCommand extends command<DeleteBackendEnvironmentCommandInput, DeleteBackendEnvironmentCommandOutput>(
  _ep0,
  _mw0,
  "DeleteBackendEnvironment",
  DeleteBackendEnvironment$
) {
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
