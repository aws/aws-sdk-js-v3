// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListServiceActionsInput, ListServiceActionsOutput } from "../models/models_0";
import { ListServiceActions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListServiceActionsCommand}.
 */
export interface ListServiceActionsCommandInput extends ListServiceActionsInput {}
/**
 * @public
 *
 * The output of {@link ListServiceActionsCommand}.
 */
export interface ListServiceActionsCommandOutput extends ListServiceActionsOutput, __MetadataBearer {}

/**
 * <p>Lists all self-service actions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListServiceActionsCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListServiceActionsCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // ListServiceActionsInput
 *   AcceptLanguage: "STRING_VALUE",
 *   PageSize: Number("int"),
 *   PageToken: "STRING_VALUE",
 * };
 * const command = new ListServiceActionsCommand(input);
 * const response = await client.send(command);
 * // { // ListServiceActionsOutput
 * //   ServiceActionSummaries: [ // ServiceActionSummaries
 * //     { // ServiceActionSummary
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       DefinitionType: "SSM_AUTOMATION",
 * //     },
 * //   ],
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListServiceActionsCommandInput - {@link ListServiceActionsCommandInput}
 * @returns {@link ListServiceActionsCommandOutput}
 * @see {@link ListServiceActionsCommandInput} for command's `input` shape.
 * @see {@link ListServiceActionsCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 *
 * @public
 */
export class ListServiceActionsCommand extends command<ListServiceActionsCommandInput, ListServiceActionsCommandOutput>(
  _ep0,
  _mw0,
  "ListServiceActions",
  ListServiceActions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServiceActionsInput;
      output: ListServiceActionsOutput;
    };
    sdk: {
      input: ListServiceActionsCommandInput;
      output: ListServiceActionsCommandOutput;
    };
  };
}
