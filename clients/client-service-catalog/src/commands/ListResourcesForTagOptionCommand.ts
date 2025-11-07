// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListResourcesForTagOptionInput, ListResourcesForTagOptionOutput } from "../models/models_0";
import { ListResourcesForTagOption } from "../schemas/schemas_0";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListResourcesForTagOptionCommand}.
 */
export interface ListResourcesForTagOptionCommandInput extends ListResourcesForTagOptionInput {}
/**
 * @public
 *
 * The output of {@link ListResourcesForTagOptionCommand}.
 */
export interface ListResourcesForTagOptionCommandOutput extends ListResourcesForTagOptionOutput, __MetadataBearer {}

/**
 * <p>Lists the resources associated with the specified TagOption.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListResourcesForTagOptionCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListResourcesForTagOptionCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // ListResourcesForTagOptionInput
 *   TagOptionId: "STRING_VALUE", // required
 *   ResourceType: "STRING_VALUE",
 *   PageSize: Number("int"),
 *   PageToken: "STRING_VALUE",
 * };
 * const command = new ListResourcesForTagOptionCommand(input);
 * const response = await client.send(command);
 * // { // ListResourcesForTagOptionOutput
 * //   ResourceDetails: [ // ResourceDetails
 * //     { // ResourceDetail
 * //       Id: "STRING_VALUE",
 * //       ARN: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   PageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourcesForTagOptionCommandInput - {@link ListResourcesForTagOptionCommandInput}
 * @returns {@link ListResourcesForTagOptionCommandOutput}
 * @see {@link ListResourcesForTagOptionCommandInput} for command's `input` shape.
 * @see {@link ListResourcesForTagOptionCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link TagOptionNotMigratedException} (client fault)
 *  <p>An operation requiring TagOptions failed because the TagOptions migration process has
 *          not been performed for this account. Use the Amazon Web Services Management Console to perform the migration
 *          process before retrying the operation.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 *
 * @public
 */
export class ListResourcesForTagOptionCommand extends $Command
  .classBuilder<
    ListResourcesForTagOptionCommandInput,
    ListResourcesForTagOptionCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWS242ServiceCatalogService", "ListResourcesForTagOption", {})
  .n("ServiceCatalogClient", "ListResourcesForTagOptionCommand")
  .sc(ListResourcesForTagOption)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourcesForTagOptionInput;
      output: ListResourcesForTagOptionOutput;
    };
    sdk: {
      input: ListResourcesForTagOptionCommandInput;
      output: ListResourcesForTagOptionCommandOutput;
    };
  };
}
