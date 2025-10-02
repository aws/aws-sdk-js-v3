// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetGraphqlApiEnvironmentVariablesRequest,
  GetGraphqlApiEnvironmentVariablesResponse,
} from "../models/models_0";
import {
  de_GetGraphqlApiEnvironmentVariablesCommand,
  se_GetGraphqlApiEnvironmentVariablesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetGraphqlApiEnvironmentVariablesCommand}.
 */
export interface GetGraphqlApiEnvironmentVariablesCommandInput extends GetGraphqlApiEnvironmentVariablesRequest {}
/**
 * @public
 *
 * The output of {@link GetGraphqlApiEnvironmentVariablesCommand}.
 */
export interface GetGraphqlApiEnvironmentVariablesCommandOutput
  extends GetGraphqlApiEnvironmentVariablesResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the list of environmental variable key-value pairs associated with an API by
 *          its ID value.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, GetGraphqlApiEnvironmentVariablesCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, GetGraphqlApiEnvironmentVariablesCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * // import type { AppSyncClientConfig } from "@aws-sdk/client-appsync";
 * const config = {}; // type is AppSyncClientConfig
 * const client = new AppSyncClient(config);
 * const input = { // GetGraphqlApiEnvironmentVariablesRequest
 *   apiId: "STRING_VALUE", // required
 * };
 * const command = new GetGraphqlApiEnvironmentVariablesCommand(input);
 * const response = await client.send(command);
 * // { // GetGraphqlApiEnvironmentVariablesResponse
 * //   environmentVariables: { // EnvironmentVariableMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetGraphqlApiEnvironmentVariablesCommandInput - {@link GetGraphqlApiEnvironmentVariablesCommandInput}
 * @returns {@link GetGraphqlApiEnvironmentVariablesCommandOutput}
 * @see {@link GetGraphqlApiEnvironmentVariablesCommandInput} for command's `input` shape.
 * @see {@link GetGraphqlApiEnvironmentVariablesCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to perform this operation on this resource.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or a required field is
 *          missing. Check the field values, and then try again.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal AppSync error occurred. Try your request again.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Check the resource, and then try
 *          again.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You aren't authorized to perform this operation.</p>
 *
 * @throws {@link AppSyncServiceException}
 * <p>Base exception class for all service exceptions from AppSync service.</p>
 *
 *
 * @public
 */
export class GetGraphqlApiEnvironmentVariablesCommand extends $Command
  .classBuilder<
    GetGraphqlApiEnvironmentVariablesCommandInput,
    GetGraphqlApiEnvironmentVariablesCommandOutput,
    AppSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppSyncClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSDeepdishControlPlaneService", "GetGraphqlApiEnvironmentVariables", {})
  .n("AppSyncClient", "GetGraphqlApiEnvironmentVariablesCommand")
  .f(void 0, void 0)
  .ser(se_GetGraphqlApiEnvironmentVariablesCommand)
  .de(de_GetGraphqlApiEnvironmentVariablesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetGraphqlApiEnvironmentVariablesRequest;
      output: GetGraphqlApiEnvironmentVariablesResponse;
    };
    sdk: {
      input: GetGraphqlApiEnvironmentVariablesCommandInput;
      output: GetGraphqlApiEnvironmentVariablesCommandOutput;
    };
  };
}
