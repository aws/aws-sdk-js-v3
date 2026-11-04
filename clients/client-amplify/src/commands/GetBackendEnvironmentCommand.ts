// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetBackendEnvironmentRequest, GetBackendEnvironmentResult } from "../models/models_0";
import { GetBackendEnvironment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetBackendEnvironmentCommand}.
 */
export interface GetBackendEnvironmentCommandInput extends GetBackendEnvironmentRequest {}
/**
 * @public
 *
 * The output of {@link GetBackendEnvironmentCommand}.
 */
export interface GetBackendEnvironmentCommandOutput extends GetBackendEnvironmentResult, __MetadataBearer {}

/**
 * Returns a backend environment for an Amplify app.
 *
 * This API is available only to Amplify Gen 1 applications where the backend is created using Amplify Studio or the Amplify command line interface (CLI). This API isn’t available to Amplify Gen 2 applications. When you deploy an application with Amplify Gen 2, you provision the app's backend infrastructure using Typescript code.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, GetBackendEnvironmentCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, GetBackendEnvironmentCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * // import type { AmplifyClientConfig } from "@aws-sdk/client-amplify";
 * const config = {}; // type is AmplifyClientConfig
 * const client = new AmplifyClient(config);
 * const input = { // GetBackendEnvironmentRequest
 *   appId: "STRING_VALUE", // required
 *   environmentName: "STRING_VALUE", // required
 * };
 * const command = new GetBackendEnvironmentCommand(input);
 * const response = await client.send(command);
 * // { // GetBackendEnvironmentResult
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
 * @param GetBackendEnvironmentCommandInput - {@link GetBackendEnvironmentCommandInput}
 * @returns {@link GetBackendEnvironmentCommandOutput}
 * @see {@link GetBackendEnvironmentCommandInput} for command's `input` shape.
 * @see {@link GetBackendEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for AmplifyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * A request contains unexpected data.
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
export class GetBackendEnvironmentCommand extends command<GetBackendEnvironmentCommandInput, GetBackendEnvironmentCommandOutput>(
  _ep0,
  _mw0,
  "GetBackendEnvironment",
  GetBackendEnvironment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBackendEnvironmentRequest;
      output: GetBackendEnvironmentResult;
    };
    sdk: {
      input: GetBackendEnvironmentCommandInput;
      output: GetBackendEnvironmentCommandOutput;
    };
  };
}
