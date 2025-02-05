// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListBackendEnvironmentsRequest, ListBackendEnvironmentsResult } from "../models/models_0";
import { de_ListBackendEnvironmentsCommand, se_ListBackendEnvironmentsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBackendEnvironmentsCommand}.
 */
export interface ListBackendEnvironmentsCommandInput extends ListBackendEnvironmentsRequest {}
/**
 * @public
 *
 * The output of {@link ListBackendEnvironmentsCommand}.
 */
export interface ListBackendEnvironmentsCommandOutput extends ListBackendEnvironmentsResult, __MetadataBearer {}

/**
 * <p>Lists the backend environments for an Amplify app. </p>
 *          <p>This API is available only to Amplify Gen 1 applications where the
 *             backend is created using Amplify Studio or the Amplify
 *             command line interface (CLI). This API isn’t available to Amplify Gen 2 applications.
 *             When you deploy an application with
 *             Amplify Gen 2, you provision the app's backend infrastructure using Typescript
 *             code.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, ListBackendEnvironmentsCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, ListBackendEnvironmentsCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AmplifyClient(config);
 * const input = { // ListBackendEnvironmentsRequest
 *   appId: "STRING_VALUE", // required
 *   environmentName: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListBackendEnvironmentsCommand(input);
 * const response = await client.send(command);
 * // { // ListBackendEnvironmentsResult
 * //   backendEnvironments: [ // BackendEnvironments // required
 * //     { // BackendEnvironment
 * //       backendEnvironmentArn: "STRING_VALUE", // required
 * //       environmentName: "STRING_VALUE", // required
 * //       stackName: "STRING_VALUE",
 * //       deploymentArtifacts: "STRING_VALUE",
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBackendEnvironmentsCommandInput - {@link ListBackendEnvironmentsCommandInput}
 * @returns {@link ListBackendEnvironmentsCommandOutput}
 * @see {@link ListBackendEnvironmentsCommandInput} for command's `input` shape.
 * @see {@link ListBackendEnvironmentsCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for AmplifyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>A request contains unexpected data. </p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>The service failed to perform an operation due to an internal issue. </p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>An operation failed due to a lack of access. </p>
 *
 * @throws {@link AmplifyServiceException}
 * <p>Base exception class for all service exceptions from Amplify service.</p>
 *
 * @public
 */
export class ListBackendEnvironmentsCommand extends $Command
  .classBuilder<
    ListBackendEnvironmentsCommandInput,
    ListBackendEnvironmentsCommandOutput,
    AmplifyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmplifyClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Amplify", "ListBackendEnvironments", {})
  .n("AmplifyClient", "ListBackendEnvironmentsCommand")
  .f(void 0, void 0)
  .ser(se_ListBackendEnvironmentsCommand)
  .de(de_ListBackendEnvironmentsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBackendEnvironmentsRequest;
      output: ListBackendEnvironmentsResult;
    };
    sdk: {
      input: ListBackendEnvironmentsCommandInput;
      output: ListBackendEnvironmentsCommandOutput;
    };
  };
}
