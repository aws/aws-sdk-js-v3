// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetGraphqlApiEnvironmentVariablesRequest,
  GetGraphqlApiEnvironmentVariablesResponse,
} from "../models/models_0";
import { GetGraphqlApiEnvironmentVariables$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface GetGraphqlApiEnvironmentVariablesCommandOutput extends GetGraphqlApiEnvironmentVariablesResponse, __MetadataBearer {}

/**
 * Retrieves the list of environmental variable key-value pairs associated with an API by its ID value.
 *
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
 *
 * You don't have access to perform this operation on this resource.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and then try again.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal AppSync error occurred. Try your request again.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The resource specified in the request was not found. Check the resource, and then try again.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You aren't authorized to perform this operation.
 *
 * @throws {@link AppSyncServiceException}
 *
 * Base exception class for all service exceptions from AppSync service.
 *
 * @public
 */
export class GetGraphqlApiEnvironmentVariablesCommand extends command<GetGraphqlApiEnvironmentVariablesCommandInput, GetGraphqlApiEnvironmentVariablesCommandOutput>(
  _ep0,
  _mw0,
  "GetGraphqlApiEnvironmentVariables",
  GetGraphqlApiEnvironmentVariables$
) {
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
