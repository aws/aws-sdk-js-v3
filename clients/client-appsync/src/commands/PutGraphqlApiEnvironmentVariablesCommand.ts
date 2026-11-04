// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  PutGraphqlApiEnvironmentVariablesRequest,
  PutGraphqlApiEnvironmentVariablesResponse,
} from "../models/models_0";
import { PutGraphqlApiEnvironmentVariables$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface PutGraphqlApiEnvironmentVariablesCommandOutput extends PutGraphqlApiEnvironmentVariablesResponse, __MetadataBearer {}

/**
 * Creates a list of environmental variables in an API by its ID value.
 *
 * When creating an environmental variable, it must follow the constraints below:
 *
 * - Both JavaScript and VTL templates support environmental variables.
 * - Environmental variables are not evaluated before function invocation.
 * - Environmental variables only support string values.
 * - Any defined value in an environmental variable is considered a string literal and not expanded.
 * - Variable evaluations should ideally be performed in the function code.
 *
 * When creating an environmental variable key-value pair, it must follow the additional constraints below:
 *
 * - Keys must begin with a letter.
 * - Keys must be at least two characters long.
 * - Keys can only contain letters, numbers, and the underscore character (_).
 * - Values can be up to 512 characters long.
 * - You can configure up to 50 key-value pairs in a GraphQL API.
 *
 * You can create a list of environmental variables by adding it to the `environmentVariables` payload as a list in the format `\{"key1":"value1","key2":"value2", …\}`. Note that each call of the `PutGraphqlApiEnvironmentVariables` action will result in the overwriting of the existing environmental variable list of that API. This means the existing environmental variables will be lost. To avoid this, you must include all existing and new environmental variables in the list each time you call this action.
 *
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
 *
 * You don't have access to perform this operation on this resource.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and then try again.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * Another modification is in progress at this time and it must complete before you can make your change.
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
export class PutGraphqlApiEnvironmentVariablesCommand extends command<PutGraphqlApiEnvironmentVariablesCommandInput, PutGraphqlApiEnvironmentVariablesCommandOutput>(
  _ep0,
  _mw0,
  "PutGraphqlApiEnvironmentVariables",
  PutGraphqlApiEnvironmentVariables$
) {
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
