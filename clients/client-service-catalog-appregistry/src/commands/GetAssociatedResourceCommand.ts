// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetAssociatedResourceRequest, GetAssociatedResourceResponse } from "../models/models_0";
import { de_GetAssociatedResourceCommand, se_GetAssociatedResourceCommand } from "../protocols/Aws_restJson1";
import {
  ServiceCatalogAppRegistryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ServiceCatalogAppRegistryClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAssociatedResourceCommand}.
 */
export interface GetAssociatedResourceCommandInput extends GetAssociatedResourceRequest {}
/**
 * @public
 *
 * The output of {@link GetAssociatedResourceCommand}.
 */
export interface GetAssociatedResourceCommandOutput extends GetAssociatedResourceResponse, __MetadataBearer {}

/**
 * <p>Gets the resource associated with the application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, GetAssociatedResourceCommand } from "@aws-sdk/client-service-catalog-appregistry"; // ES Modules import
 * // const { ServiceCatalogAppRegistryClient, GetAssociatedResourceCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * // import type { ServiceCatalogAppRegistryClientConfig } from "@aws-sdk/client-service-catalog-appregistry";
 * const config = {}; // type is ServiceCatalogAppRegistryClientConfig
 * const client = new ServiceCatalogAppRegistryClient(config);
 * const input = { // GetAssociatedResourceRequest
 *   application: "STRING_VALUE", // required
 *   resourceType: "CFN_STACK" || "RESOURCE_TAG_VALUE", // required
 *   resource: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   resourceTagStatus: [ // GetAssociatedResourceFilter
 *     "SUCCESS" || "FAILED" || "IN_PROGRESS" || "SKIPPED",
 *   ],
 *   maxResults: Number("int"),
 * };
 * const command = new GetAssociatedResourceCommand(input);
 * const response = await client.send(command);
 * // { // GetAssociatedResourceResponse
 * //   resource: { // Resource
 * //     name: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     associationTime: new Date("TIMESTAMP"),
 * //     integrations: { // ResourceIntegrations
 * //       resourceGroup: { // ResourceGroup
 * //         state: "CREATING" || "CREATE_COMPLETE" || "CREATE_FAILED" || "UPDATING" || "UPDATE_COMPLETE" || "UPDATE_FAILED",
 * //         arn: "STRING_VALUE",
 * //         errorMessage: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   options: [ // Options
 * //     "APPLY_APPLICATION_TAG" || "SKIP_APPLICATION_TAG",
 * //   ],
 * //   applicationTagResult: { // ApplicationTagResult
 * //     applicationTagStatus: "IN_PROGRESS" || "SUCCESS" || "FAILURE",
 * //     errorMessage: "STRING_VALUE",
 * //     resources: [ // ResourcesList
 * //       { // ResourcesListItem
 * //         resourceArn: "STRING_VALUE",
 * //         errorMessage: "STRING_VALUE",
 * //         status: "STRING_VALUE",
 * //         resourceType: "STRING_VALUE",
 * //       },
 * //     ],
 * //     nextToken: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAssociatedResourceCommandInput - {@link GetAssociatedResourceCommandInput}
 * @returns {@link GetAssociatedResourceCommandOutput}
 * @see {@link GetAssociatedResourceCommandInput} for command's `input` shape.
 * @see {@link GetAssociatedResourceCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogAppRegistryClientResolvedConfig | config} for ServiceCatalogAppRegistryClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service is experiencing internal problems.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has invalid or missing parameters.</p>
 *
 * @throws {@link ServiceCatalogAppRegistryServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalogAppRegistry service.</p>
 *
 *
 * @public
 */
export class GetAssociatedResourceCommand extends $Command
  .classBuilder<
    GetAssociatedResourceCommandInput,
    GetAssociatedResourceCommandOutput,
    ServiceCatalogAppRegistryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogAppRegistryClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWS242AppRegistry", "GetAssociatedResource", {})
  .n("ServiceCatalogAppRegistryClient", "GetAssociatedResourceCommand")
  .f(void 0, void 0)
  .ser(se_GetAssociatedResourceCommand)
  .de(de_GetAssociatedResourceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAssociatedResourceRequest;
      output: GetAssociatedResourceResponse;
    };
    sdk: {
      input: GetAssociatedResourceCommandInput;
      output: GetAssociatedResourceCommandOutput;
    };
  };
}
