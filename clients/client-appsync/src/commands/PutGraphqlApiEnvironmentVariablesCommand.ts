// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  PutGraphqlApiEnvironmentVariablesRequest,
  PutGraphqlApiEnvironmentVariablesResponse,
} from "../models/models_0";
import { PutGraphqlApiEnvironmentVariables } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutGraphqlApiEnvironmentVariablesCommand}.
 */
export interface PutGraphqlApiEnvironmentVariablesCommandInput extends PutGraphqlApiEnvironmentVariablesRequest {}
/**
 * @public
 *
 * The output of {@link PutGraphqlApiEnvironmentVariablesCommand}.
 */
export interface PutGraphqlApiEnvironmentVariablesCommandOutput
  extends PutGraphqlApiEnvironmentVariablesResponse,
    __MetadataBearer {}

/**
 * <p>Creates a list of environmental variables in an API by its ID value. </p>
 *          <p>When creating an environmental variable, it must follow the constraints below:</p>
 *          <ul>
 *             <li>
 *                <p>Both JavaScript and VTL templates support environmental variables.</p>
 *             </li>
 *             <li>
 *                <p>Environmental variables are not evaluated before function invocation.</p>
 *             </li>
 *             <li>
 *                <p>Environmental variables only support string values.</p>
 *             </li>
 *             <li>
 *                <p>Any defined value in an environmental variable is considered a string literal
 *                and not expanded.</p>
 *             </li>
 *             <li>
 *                <p>Variable evaluations should ideally be performed in the function
 *                code.</p>
 *             </li>
 *          </ul>
 *          <p>When creating an environmental variable key-value pair, it must follow the additional
 *          constraints below:</p>
 *          <ul>
 *             <li>
 *                <p>Keys must begin with a letter.</p>
 *             </li>
 *             <li>
 *                <p>Keys must be at least two characters long.</p>
 *             </li>
 *             <li>
 *                <p>Keys can only contain letters, numbers, and the underscore character
 *                (_).</p>
 *             </li>
 *             <li>
 *                <p>Values can be up to 512 characters long.</p>
 *             </li>
 *             <li>
 *                <p>You can configure up to 50 key-value pairs in a GraphQL API.</p>
 *             </li>
 *          </ul>
 *          <p>You can create a list of environmental variables by adding it to the
 *             <code>environmentVariables</code> payload as a list in the format
 *             <code>\{"key1":"value1","key2":"value2", …\}</code>. Note that each call of the
 *             <code>PutGraphqlApiEnvironmentVariables</code> action will result in the overwriting of
 *          the existing environmental variable list of that API. This means the existing environmental
 *          variables will be lost. To avoid this, you must include all existing and new environmental
 *          variables in the list each time you call this action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, PutGraphqlApiEnvironmentVariablesCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, PutGraphqlApiEnvironmentVariablesCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * // import type { AppSyncClientConfig } from "@aws-sdk/client-appsync";
 * const config = {}; // type is AppSyncClientConfig
 * const client = new AppSyncClient(config);
 * const input = { // PutGraphqlApiEnvironmentVariablesRequest
 *   apiId: "STRING_VALUE", // required
 *   environmentVariables: { // EnvironmentVariableMap // required
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new PutGraphqlApiEnvironmentVariablesCommand(input);
 * const response = await client.send(command);
 * // { // PutGraphqlApiEnvironmentVariablesResponse
 * //   environmentVariables: { // EnvironmentVariableMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param PutGraphqlApiEnvironmentVariablesCommandInput - {@link PutGraphqlApiEnvironmentVariablesCommandInput}
 * @returns {@link PutGraphqlApiEnvironmentVariablesCommandOutput}
 * @see {@link PutGraphqlApiEnvironmentVariablesCommandInput} for command's `input` shape.
 * @see {@link PutGraphqlApiEnvironmentVariablesCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to perform this operation on this resource.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or a required field is
 *          missing. Check the field values, and then try again.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Another modification is in progress at this time and it must complete before you can
 *          make your change.</p>
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
export class PutGraphqlApiEnvironmentVariablesCommand extends $Command
  .classBuilder<
    PutGraphqlApiEnvironmentVariablesCommandInput,
    PutGraphqlApiEnvironmentVariablesCommandOutput,
    AppSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppSyncClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSDeepdishControlPlaneService", "PutGraphqlApiEnvironmentVariables", {})
  .n("AppSyncClient", "PutGraphqlApiEnvironmentVariablesCommand")
  .sc(PutGraphqlApiEnvironmentVariables)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutGraphqlApiEnvironmentVariablesRequest;
      output: PutGraphqlApiEnvironmentVariablesResponse;
    };
    sdk: {
      input: PutGraphqlApiEnvironmentVariablesCommandInput;
      output: PutGraphqlApiEnvironmentVariablesCommandOutput;
    };
  };
}
