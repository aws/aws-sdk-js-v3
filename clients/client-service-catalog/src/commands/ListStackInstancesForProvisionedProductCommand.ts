// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListStackInstancesForProvisionedProductInput,
  ListStackInstancesForProvisionedProductOutput,
} from "../models/models_0";
import {
  de_ListStackInstancesForProvisionedProductCommand,
  se_ListStackInstancesForProvisionedProductCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListStackInstancesForProvisionedProductCommand}.
 */
export interface ListStackInstancesForProvisionedProductCommandInput
  extends ListStackInstancesForProvisionedProductInput {}
/**
 * @public
 *
 * The output of {@link ListStackInstancesForProvisionedProductCommand}.
 */
export interface ListStackInstancesForProvisionedProductCommandOutput
  extends ListStackInstancesForProvisionedProductOutput,
    __MetadataBearer {}

/**
 * <p>Returns summary information about stack instances that are associated with the specified <code>CFN_STACKSET</code> type provisioned product. You can filter for stack instances that are associated with a specific Amazon Web Services account name or Region. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListStackInstancesForProvisionedProductCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListStackInstancesForProvisionedProductCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // ListStackInstancesForProvisionedProductInput
 *   AcceptLanguage: "STRING_VALUE",
 *   ProvisionedProductId: "STRING_VALUE", // required
 *   PageToken: "STRING_VALUE",
 *   PageSize: Number("int"),
 * };
 * const command = new ListStackInstancesForProvisionedProductCommand(input);
 * const response = await client.send(command);
 * // { // ListStackInstancesForProvisionedProductOutput
 * //   StackInstances: [ // StackInstances
 * //     { // StackInstance
 * //       Account: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //       StackInstanceStatus: "CURRENT" || "OUTDATED" || "INOPERABLE",
 * //     },
 * //   ],
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStackInstancesForProvisionedProductCommandInput - {@link ListStackInstancesForProvisionedProductCommandInput}
 * @returns {@link ListStackInstancesForProvisionedProductCommandOutput}
 * @see {@link ListStackInstancesForProvisionedProductCommandInput} for command's `input` shape.
 * @see {@link ListStackInstancesForProvisionedProductCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 *
 * @public
 */
export class ListStackInstancesForProvisionedProductCommand extends $Command
  .classBuilder<
    ListStackInstancesForProvisionedProductCommandInput,
    ListStackInstancesForProvisionedProductCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWS242ServiceCatalogService", "ListStackInstancesForProvisionedProduct", {})
  .n("ServiceCatalogClient", "ListStackInstancesForProvisionedProductCommand")
  .f(void 0, void 0)
  .ser(se_ListStackInstancesForProvisionedProductCommand)
  .de(de_ListStackInstancesForProvisionedProductCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStackInstancesForProvisionedProductInput;
      output: ListStackInstancesForProvisionedProductOutput;
    };
    sdk: {
      input: ListStackInstancesForProvisionedProductCommandInput;
      output: ListStackInstancesForProvisionedProductCommandOutput;
    };
  };
}
