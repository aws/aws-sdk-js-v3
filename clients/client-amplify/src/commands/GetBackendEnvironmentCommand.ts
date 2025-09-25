// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetBackendEnvironmentRequest, GetBackendEnvironmentResult } from "../models/models_0";
import { GetBackendEnvironment } from "../schemas/schemas_3_Branch";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns a backend environment for an Amplify app. </p>
 *          <p>This API is available only to Amplify Gen 1 applications where the
 *             backend is created using Amplify Studio or the Amplify
 *             command line interface (CLI). This API isn’t available to Amplify Gen 2
 *             applications. When you deploy an application with Amplify Gen 2, you provision the app's
 *             backend infrastructure using Typescript code.</p>
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
 *  <p>A request contains unexpected data. </p>
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
export class GetBackendEnvironmentCommand extends $Command
  .classBuilder<
    GetBackendEnvironmentCommandInput,
    GetBackendEnvironmentCommandOutput,
    AmplifyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmplifyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Amplify", "GetBackendEnvironment", {})
  .n("AmplifyClient", "GetBackendEnvironmentCommand")
  .sc(GetBackendEnvironment)
  .build() {
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
