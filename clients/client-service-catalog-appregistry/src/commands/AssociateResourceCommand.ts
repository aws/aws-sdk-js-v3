// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateResourceRequest, AssociateResourceResponse } from "../models/models_0";
import { AssociateResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateResourceCommand}.
 */
export interface AssociateResourceCommandInput extends AssociateResourceRequest {}
/**
 * @public
 *
 * The output of {@link AssociateResourceCommand}.
 */
export interface AssociateResourceCommandOutput extends AssociateResourceResponse, __MetadataBearer {}

/**
 * Associates a resource with an application. The resource can be specified by its ARN or name. The application can be specified by ARN, ID, or name.
 *
 * **Minimum permissions**
 *
 * You must have the following permissions to associate a resource using the `OPTIONS` parameter set to `APPLY_APPLICATION_TAG`.
 *
 * - `tag:GetResources`
 * - `tag:TagResources`
 *
 * You must also have these additional permissions if you don't use the `AWSServiceCatalogAppRegistryFullAccess` policy. For more information, see [AWSServiceCatalogAppRegistryFullAccess](https://docs.aws.amazon.com/servicecatalog/latest/arguide/full.html) in the AppRegistry Administrator Guide.
 *
 * - `resource-groups:AssociateResource`
 * - `cloudformation:UpdateStack`
 * - `cloudformation:DescribeStacks`
 *
 * > **Note:** In addition, you must have the tagging permission defined by the Amazon Web Services service that creates the resource. For more information, see [TagResources](https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_TagResources.html) in the *Resource Groups Tagging API Reference*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, AssociateResourceCommand } from "@aws-sdk/client-service-catalog-appregistry"; // ES Modules import
 * // const { ServiceCatalogAppRegistryClient, AssociateResourceCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * // import type { ServiceCatalogAppRegistryClientConfig } from "@aws-sdk/client-service-catalog-appregistry";
 * const config = {}; // type is ServiceCatalogAppRegistryClientConfig
 * const client = new ServiceCatalogAppRegistryClient(config);
 * const input = { // AssociateResourceRequest
 *   application: "STRING_VALUE", // required
 *   resourceType: "CFN_STACK" || "RESOURCE_TAG_VALUE", // required
 *   resource: "STRING_VALUE", // required
 *   options: [ // Options
 *     "APPLY_APPLICATION_TAG" || "SKIP_APPLICATION_TAG",
 *   ],
 * };
 * const command = new AssociateResourceCommand(input);
 * const response = await client.send(command);
 * // { // AssociateResourceResponse
 * //   applicationArn: "STRING_VALUE",
 * //   resourceArn: "STRING_VALUE",
 * //   options: [ // Options
 * //     "APPLY_APPLICATION_TAG" || "SKIP_APPLICATION_TAG",
 * //   ],
 * // };
 *
 * ```
 *
 * @param AssociateResourceCommandInput - {@link AssociateResourceCommandInput}
 * @returns {@link AssociateResourceCommandOutput}
 * @see {@link AssociateResourceCommandInput} for command's `input` shape.
 * @see {@link AssociateResourceCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogAppRegistryClientResolvedConfig | config} for ServiceCatalogAppRegistryClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There was a conflict when processing the request (for example, a resource with the given name already exists within the account).
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The service is experiencing internal problems.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The maximum number of resources per account has been reached.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The maximum number of API requests has been exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has invalid or missing parameters.
 *
 * @throws {@link ServiceCatalogAppRegistryServiceException}
 *
 * Base exception class for all service exceptions from ServiceCatalogAppRegistry service.
 *
 * @public
 */
export class AssociateResourceCommand extends command<AssociateResourceCommandInput, AssociateResourceCommandOutput>(
  _ep0,
  _mw0,
  "AssociateResource",
  AssociateResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateResourceRequest;
      output: AssociateResourceResponse;
    };
    sdk: {
      input: AssociateResourceCommandInput;
      output: AssociateResourceCommandOutput;
    };
  };
}
