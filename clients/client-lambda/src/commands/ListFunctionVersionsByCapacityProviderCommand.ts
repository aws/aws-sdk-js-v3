// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListFunctionVersionsByCapacityProviderRequest,
  ListFunctionVersionsByCapacityProviderResponse,
} from "../models/models_0";
import { ListFunctionVersionsByCapacityProvider$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListFunctionVersionsByCapacityProviderCommand}.
 */
export interface ListFunctionVersionsByCapacityProviderCommandInput extends ListFunctionVersionsByCapacityProviderRequest {}
/**
 * @public
 *
 * The output of {@link ListFunctionVersionsByCapacityProviderCommand}.
 */
export interface ListFunctionVersionsByCapacityProviderCommandOutput extends ListFunctionVersionsByCapacityProviderResponse, __MetadataBearer {}

/**
 * Returns a list of function versions that are configured to use a specific capacity provider.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListFunctionVersionsByCapacityProviderCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListFunctionVersionsByCapacityProviderCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // ListFunctionVersionsByCapacityProviderRequest
 *   CapacityProviderName: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListFunctionVersionsByCapacityProviderCommand(input);
 * const response = await client.send(command);
 * // { // ListFunctionVersionsByCapacityProviderResponse
 * //   CapacityProviderArn: "STRING_VALUE", // required
 * //   FunctionVersions: [ // FunctionVersionsByCapacityProviderList // required
 * //     { // FunctionVersionsByCapacityProviderListItem
 * //       FunctionArn: "STRING_VALUE", // required
 * //       State: "Pending" || "Active" || "Inactive" || "Failed" || "Deactivating" || "Deactivated" || "ActiveNonInvocable" || "Deleting", // required
 * //     },
 * //   ],
 * //   NextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFunctionVersionsByCapacityProviderCommandInput - {@link ListFunctionVersionsByCapacityProviderCommandInput}
 * @returns {@link ListFunctionVersionsByCapacityProviderCommandOutput}
 * @see {@link ListFunctionVersionsByCapacityProviderCommandInput} for command's `input` shape.
 * @see {@link ListFunctionVersionsByCapacityProviderCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One of the parameters in the request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource specified in the request does not exist.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * The Lambda service encountered an internal error.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The request throughput limit was exceeded. For more information, see [Lambda quotas](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#api-requests).
 *
 * @throws {@link LambdaServiceException}
 *
 * Base exception class for all service exceptions from Lambda service.
 *
 * @public
 */
export class ListFunctionVersionsByCapacityProviderCommand extends command<ListFunctionVersionsByCapacityProviderCommandInput, ListFunctionVersionsByCapacityProviderCommandOutput>(
  _ep0,
  _mw0,
  "ListFunctionVersionsByCapacityProvider",
  ListFunctionVersionsByCapacityProvider$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFunctionVersionsByCapacityProviderRequest;
      output: ListFunctionVersionsByCapacityProviderResponse;
    };
    sdk: {
      input: ListFunctionVersionsByCapacityProviderCommandInput;
      output: ListFunctionVersionsByCapacityProviderCommandOutput;
    };
  };
}
