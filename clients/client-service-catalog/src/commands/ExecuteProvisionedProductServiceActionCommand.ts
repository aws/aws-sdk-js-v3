// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ExecuteProvisionedProductServiceActionInput,
  ExecuteProvisionedProductServiceActionOutput,
} from "../models/models_0";
import { ExecuteProvisionedProductServiceAction$ } from "../schemas/schemas_0";
import type {
  ServiceCatalogClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExecuteProvisionedProductServiceActionCommand}.
 */
export interface ExecuteProvisionedProductServiceActionCommandInput
  extends ExecuteProvisionedProductServiceActionInput {}
/**
 * @public
 *
 * The output of {@link ExecuteProvisionedProductServiceActionCommand}.
 */
export interface ExecuteProvisionedProductServiceActionCommandOutput
  extends ExecuteProvisionedProductServiceActionOutput,
    __MetadataBearer {}

/**
 * <p>Executes a self-service action against a provisioned product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ExecuteProvisionedProductServiceActionCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ExecuteProvisionedProductServiceActionCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // ExecuteProvisionedProductServiceActionInput
 *   ProvisionedProductId: "STRING_VALUE", // required
 *   ServiceActionId: "STRING_VALUE", // required
 *   ExecuteToken: "STRING_VALUE", // required
 *   AcceptLanguage: "STRING_VALUE",
 *   Parameters: { // ExecutionParameterMap
 *     "<keys>": [ // ExecutionParameterValueList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new ExecuteProvisionedProductServiceActionCommand(input);
 * const response = await client.send(command);
 * // { // ExecuteProvisionedProductServiceActionOutput
 * //   RecordDetail: { // RecordDetail
 * //     RecordId: "STRING_VALUE",
 * //     ProvisionedProductName: "STRING_VALUE",
 * //     Status: "CREATED" || "IN_PROGRESS" || "IN_PROGRESS_IN_ERROR" || "SUCCEEDED" || "FAILED",
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     UpdatedTime: new Date("TIMESTAMP"),
 * //     ProvisionedProductType: "STRING_VALUE",
 * //     RecordType: "STRING_VALUE",
 * //     ProvisionedProductId: "STRING_VALUE",
 * //     ProductId: "STRING_VALUE",
 * //     ProvisioningArtifactId: "STRING_VALUE",
 * //     PathId: "STRING_VALUE",
 * //     RecordErrors: [ // RecordErrors
 * //       { // RecordError
 * //         Code: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //       },
 * //     ],
 * //     RecordTags: [ // RecordTags
 * //       { // RecordTag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     LaunchRoleArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ExecuteProvisionedProductServiceActionCommandInput - {@link ExecuteProvisionedProductServiceActionCommandInput}
 * @returns {@link ExecuteProvisionedProductServiceActionCommandOutput}
 * @see {@link ExecuteProvisionedProductServiceActionCommandInput} for command's `input` shape.
 * @see {@link ExecuteProvisionedProductServiceActionCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>An attempt was made to modify a resource that is in a state that is not valid.
 *          Check your resources to ensure that they are in valid states before retrying the operation.</p>
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
export class ExecuteProvisionedProductServiceActionCommand extends $Command
  .classBuilder<
    ExecuteProvisionedProductServiceActionCommandInput,
    ExecuteProvisionedProductServiceActionCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWS242ServiceCatalogService", "ExecuteProvisionedProductServiceAction", {})
  .n("ServiceCatalogClient", "ExecuteProvisionedProductServiceActionCommand")
  .sc(ExecuteProvisionedProductServiceAction$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExecuteProvisionedProductServiceActionInput;
      output: ExecuteProvisionedProductServiceActionOutput;
    };
    sdk: {
      input: ExecuteProvisionedProductServiceActionCommandInput;
      output: ExecuteProvisionedProductServiceActionCommandOutput;
    };
  };
}
