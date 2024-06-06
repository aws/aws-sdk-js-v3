// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListServiceActionsInput, ListServiceActionsOutput } from "../models/models_0";
import { de_ListServiceActionsCommand, se_ListServiceActionsCommand } from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * @public
 */
export class ListServiceActionsCommand extends $Command
  .classBuilder<
    ListServiceActionsCommandInput,
    ListServiceActionsCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWS242ServiceCatalogService", "ListServiceActions", {})
  .n("ServiceCatalogClient", "ListServiceActionsCommand")
  .f(void 0, void 0)
  .ser(se_ListServiceActionsCommand)
  .de(de_ListServiceActionsCommand)
  .build() {}
