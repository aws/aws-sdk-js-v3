// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateAttributeGroupRequest, AssociateAttributeGroupResponse } from "../models/models_0";
import { AssociateAttributeGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateAttributeGroupCommand}.
 */
export interface AssociateAttributeGroupCommandInput extends AssociateAttributeGroupRequest {}
/**
 * @public
 *
 * The output of {@link AssociateAttributeGroupCommand}.
 */
export interface AssociateAttributeGroupCommandOutput extends AssociateAttributeGroupResponse, __MetadataBearer {}

/**
 * Associates an attribute group with an application to augment the application's metadata with the group's attributes. This feature enables applications to be described with user-defined details that are machine-readable, such as third-party integrations.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, AssociateAttributeGroupCommand } from "@aws-sdk/client-service-catalog-appregistry"; // ES Modules import
 * // const { ServiceCatalogAppRegistryClient, AssociateAttributeGroupCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * // import type { ServiceCatalogAppRegistryClientConfig } from "@aws-sdk/client-service-catalog-appregistry";
 * const config = {}; // type is ServiceCatalogAppRegistryClientConfig
 * const client = new ServiceCatalogAppRegistryClient(config);
 * const input = { // AssociateAttributeGroupRequest
 *   application: "STRING_VALUE", // required
 *   attributeGroup: "STRING_VALUE", // required
 * };
 * const command = new AssociateAttributeGroupCommand(input);
 * const response = await client.send(command);
 * // { // AssociateAttributeGroupResponse
 * //   applicationArn: "STRING_VALUE",
 * //   attributeGroupArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateAttributeGroupCommandInput - {@link AssociateAttributeGroupCommandInput}
 * @returns {@link AssociateAttributeGroupCommandOutput}
 * @see {@link AssociateAttributeGroupCommandInput} for command's `input` shape.
 * @see {@link AssociateAttributeGroupCommandOutput} for command's `response` shape.
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
export class AssociateAttributeGroupCommand extends command<AssociateAttributeGroupCommandInput, AssociateAttributeGroupCommandOutput>(
  _ep0,
  _mw0,
  "AssociateAttributeGroup",
  AssociateAttributeGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateAttributeGroupRequest;
      output: AssociateAttributeGroupResponse;
    };
    sdk: {
      input: AssociateAttributeGroupCommandInput;
      output: AssociateAttributeGroupCommandOutput;
    };
  };
}
