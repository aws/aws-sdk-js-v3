// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListProviderServicesInput, ListProviderServicesOutput } from "../models/models_0";
import { ListProviderServices$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListProviderServicesCommand}.
 */
export interface ListProviderServicesCommandInput extends ListProviderServicesInput {}
/**
 * @public
 *
 * The output of {@link ListProviderServicesCommand}.
 */
export interface ListProviderServicesCommandOutput extends ListProviderServicesOutput, __MetadataBearer {}

/**
 * <p>Returns a list of all the <code>ProviderServices</code> that are available in this Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, ListProviderServicesCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, ListProviderServicesCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * // import type { EntityResolutionClientConfig } from "@aws-sdk/client-entityresolution";
 * const config = {}; // type is EntityResolutionClientConfig
 * const client = new EntityResolutionClient(config);
 * const input = { // ListProviderServicesInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   providerName: "STRING_VALUE",
 * };
 * const command = new ListProviderServicesCommand(input);
 * const response = await client.send(command);
 * // { // ListProviderServicesOutput
 * //   providerServiceSummaries: [ // ProviderServiceList
 * //     { // ProviderServiceSummary
 * //       providerServiceArn: "STRING_VALUE", // required
 * //       providerName: "STRING_VALUE", // required
 * //       providerServiceDisplayName: "STRING_VALUE", // required
 * //       providerServiceName: "STRING_VALUE", // required
 * //       providerServiceType: "ASSIGNMENT" || "ID_MAPPING", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProviderServicesCommandInput - {@link ListProviderServicesCommandInput}
 * @returns {@link ListProviderServicesCommandOutput}
 * @see {@link ListProviderServicesCommandInput} for command's `input` shape.
 * @see {@link ListProviderServicesCommandOutput} for command's `response` shape.
 * @see {@link EntityResolutionClientResolvedConfig | config} for EntityResolutionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Entity Resolution service. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by Entity Resolution. </p>
 *
 * @throws {@link EntityResolutionServiceException}
 * <p>Base exception class for all service exceptions from EntityResolution service.</p>
 *
 *
 * @public
 */
export class ListProviderServicesCommand extends command<ListProviderServicesCommandInput, ListProviderServicesCommandOutput>(
  _ep0,
  _mw0,
  "ListProviderServices",
  ListProviderServices$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProviderServicesInput;
      output: ListProviderServicesOutput;
    };
    sdk: {
      input: ListProviderServicesCommandInput;
      output: ListProviderServicesCommandOutput;
    };
  };
}
