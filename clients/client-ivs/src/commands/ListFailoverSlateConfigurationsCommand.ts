// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListFailoverSlateConfigurationsRequest,
  ListFailoverSlateConfigurationsResponse,
} from "../models/models_0";
import { ListFailoverSlateConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListFailoverSlateConfigurationsCommand}.
 */
export interface ListFailoverSlateConfigurationsCommandInput extends ListFailoverSlateConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListFailoverSlateConfigurationsCommand}.
 */
export interface ListFailoverSlateConfigurationsCommandOutput extends ListFailoverSlateConfigurationsResponse, __MetadataBearer {}

/**
 * <p>Gets summary information about all failover slate configurations in your account, in the Amazon Web Services region where the API request is processed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, ListFailoverSlateConfigurationsCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, ListFailoverSlateConfigurationsCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * // import type { IvsClientConfig } from "@aws-sdk/client-ivs";
 * const config = {}; // type is IvsClientConfig
 * const client = new IvsClient(config);
 * const input = { // ListFailoverSlateConfigurationsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListFailoverSlateConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListFailoverSlateConfigurationsResponse
 * //   failoverSlateConfigurations: [ // FailoverSlateConfigurationList // required
 * //     { // FailoverSlateConfigurationSummary
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE",
 * //       activationThresholdSeconds: Number("int"),
 * //       minSlateDisplaySeconds: Number("int"),
 * //       maxSlateDisplaySeconds: Number("int"),
 * //       state: "STRING_VALUE", // required
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFailoverSlateConfigurationsCommandInput - {@link ListFailoverSlateConfigurationsCommandInput}
 * @returns {@link ListFailoverSlateConfigurationsCommandOutput}
 * @see {@link ListFailoverSlateConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListFailoverSlateConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link IvsServiceException}
 * <p>Base exception class for all service exceptions from Ivs service.</p>
 *
 *
 * @public
 */
export class ListFailoverSlateConfigurationsCommand extends command<ListFailoverSlateConfigurationsCommandInput, ListFailoverSlateConfigurationsCommandOutput>(
  _ep0,
  _mw0,
  "ListFailoverSlateConfigurations",
  ListFailoverSlateConfigurations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFailoverSlateConfigurationsRequest;
      output: ListFailoverSlateConfigurationsResponse;
    };
    sdk: {
      input: ListFailoverSlateConfigurationsCommandInput;
      output: ListFailoverSlateConfigurationsCommandOutput;
    };
  };
}
