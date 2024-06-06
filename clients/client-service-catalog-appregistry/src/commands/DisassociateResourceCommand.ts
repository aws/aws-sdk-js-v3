// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateResourceRequest, DisassociateResourceResponse } from "../models/models_0";
import { de_DisassociateResourceCommand, se_DisassociateResourceCommand } from "../protocols/Aws_restJson1";
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
 * The input for {@link DisassociateResourceCommand}.
 */
export interface DisassociateResourceCommandInput extends DisassociateResourceRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateResourceCommand}.
 */
export interface DisassociateResourceCommandOutput extends DisassociateResourceResponse, __MetadataBearer {}

/**
 * <p>
 *        Disassociates a resource from application.
 *        Both the resource and the application can be specified either by ID or name.
 *      </p>
 *          <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>
 *        You must have the following permissions to remove a resource that's been associated with an application using the <code>APPLY_APPLICATION_TAG</code> option for <a href="https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_AssociateResource.html">AssociateResource</a>.
 *      </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>tag:GetResources</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>tag:UntagResources</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>
 *        You must also have the following permissions if you don't use the <code>AWSServiceCatalogAppRegistryFullAccess</code> policy.
 *        For more information, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/arguide/full.html">AWSServiceCatalogAppRegistryFullAccess</a> in the AppRegistry Administrator Guide.
 *      </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>resource-groups:DisassociateResource</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>cloudformation:UpdateStack</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>cloudformation:DescribeStacks</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>
 *          In addition, you must have the tagging permission defined by the Amazon Web Services service that creates the resource.
 *          For more information, see <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_UntTagResources.html">UntagResources</a> in the <i>Resource Groups Tagging API Reference</i>.
 *        </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, DisassociateResourceCommand } from "@aws-sdk/client-service-catalog-appregistry"; // ES Modules import
 * // const { ServiceCatalogAppRegistryClient, DisassociateResourceCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * const client = new ServiceCatalogAppRegistryClient(config);
 * const input = { // DisassociateResourceRequest
 *   application: "STRING_VALUE", // required
 *   resourceType: "CFN_STACK" || "RESOURCE_TAG_VALUE", // required
 *   resource: "STRING_VALUE", // required
 * };
 * const command = new DisassociateResourceCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateResourceResponse
 * //   applicationArn: "STRING_VALUE",
 * //   resourceArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DisassociateResourceCommandInput - {@link DisassociateResourceCommandInput}
 * @returns {@link DisassociateResourceCommandOutput}
 * @see {@link DisassociateResourceCommandInput} for command's `input` shape.
 * @see {@link DisassociateResourceCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogAppRegistryClientResolvedConfig | config} for ServiceCatalogAppRegistryClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service is experiencing internal problems.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>
 *       The maximum number
 *       of API requests
 *       has been exceeded.
 *     </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has invalid or missing parameters.</p>
 *
 * @throws {@link ServiceCatalogAppRegistryServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalogAppRegistry service.</p>
 *
 * @public
 */
export class DisassociateResourceCommand extends $Command
  .classBuilder<
    DisassociateResourceCommandInput,
    DisassociateResourceCommandOutput,
    ServiceCatalogAppRegistryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogAppRegistryClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWS242AppRegistry", "DisassociateResource", {})
  .n("ServiceCatalogAppRegistryClient", "DisassociateResourceCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateResourceCommand)
  .de(de_DisassociateResourceCommand)
  .build() {}
