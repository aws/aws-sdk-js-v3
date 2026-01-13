// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import type {
  ListFunctionVersionsByCapacityProviderRequest,
  ListFunctionVersionsByCapacityProviderResponse,
} from "../models/models_0";
import { ListFunctionVersionsByCapacityProvider$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns a list of function versions that are configured to use a specific capacity provider.</p>
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
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>The Lambda service encountered an internal error.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request throughput limit was exceeded. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#api-requests">Lambda quotas</a>.</p>
 *
 * @throws {@link LambdaServiceException}
 * <p>Base exception class for all service exceptions from Lambda service.</p>
 *
 *
 * @public
 */
export class ListFunctionVersionsByCapacityProviderCommand extends $Command
  .classBuilder<
    ListFunctionVersionsByCapacityProviderCommandInput,
    ListFunctionVersionsByCapacityProviderCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGirApiService", "ListFunctionVersionsByCapacityProvider", {})
  .n("LambdaClient", "ListFunctionVersionsByCapacityProviderCommand")
  .sc(ListFunctionVersionsByCapacityProvider$)
  .build() {
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
