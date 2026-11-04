// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateDomainAssociationRequest, UpdateDomainAssociationResult } from "../models/models_1";
import { UpdateDomainAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateDomainAssociationCommand}.
 */
export interface UpdateDomainAssociationCommandInput extends UpdateDomainAssociationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDomainAssociationCommand}.
 */
export interface UpdateDomainAssociationCommandOutput extends UpdateDomainAssociationResult, __MetadataBearer {}

/**
 * > **Note:** We recommend that you use the `UpdateDomainAssociation` API operation to move a domain association, as it supports both standard distributions and distribution tenants. [AssociateAlias](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_AssociateAlias.html) performs similar checks but only supports standard distributions.
 *
 * Moves a domain from its current standard distribution or distribution tenant to another one.
 *
 * You must first disable the source distribution (standard distribution or distribution tenant) and then separately call this operation to move the domain to another target distribution (standard distribution or distribution tenant).
 *
 * To use this operation, specify the domain and the ID of the target resource (standard distribution or distribution tenant). For more information, including how to set up the target resource, prerequisites that you must complete, and other restrictions, see [Moving an alternate domain name to a different standard distribution or distribution tenant](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/CNAMEs.html#alternate-domain-names-move) in the *Amazon CloudFront Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateDomainAssociationCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateDomainAssociationCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // UpdateDomainAssociationRequest
 *   Domain: "STRING_VALUE", // required
 *   TargetResource: { // DistributionResourceId
 *     DistributionId: "STRING_VALUE",
 *     DistributionTenantId: "STRING_VALUE",
 *   },
 *   IfMatch: "STRING_VALUE",
 * };
 * const command = new UpdateDomainAssociationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDomainAssociationResult
 * //   Domain: "STRING_VALUE",
 * //   ResourceId: "STRING_VALUE",
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateDomainAssociationCommandInput - {@link UpdateDomainAssociationCommandInput}
 * @returns {@link UpdateDomainAssociationCommandOutput}
 * @see {@link UpdateDomainAssociationCommandInput} for command's `input` shape.
 * @see {@link UpdateDomainAssociationCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *
 * Access denied.
 *
 * @throws {@link EntityNotFound} (client fault)
 *
 * The entity was not found.
 *
 * @throws {@link IllegalUpdate} (client fault)
 *
 * The update contains modifications that are not allowed.
 *
 * @throws {@link InvalidArgument} (client fault)
 *
 * An argument is invalid.
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *
 * The `If-Match` version is missing or not valid.
 *
 * @throws {@link PreconditionFailed} (client fault)
 *
 * The precondition in one or more of the request fields evaluated to `false`.
 *
 * @throws {@link CloudFrontServiceException}
 *
 * Base exception class for all service exceptions from CloudFront service.
 *
 * @public
 */
export class UpdateDomainAssociationCommand extends command<UpdateDomainAssociationCommandInput, UpdateDomainAssociationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateDomainAssociation",
  UpdateDomainAssociation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDomainAssociationRequest;
      output: UpdateDomainAssociationResult;
    };
    sdk: {
      input: UpdateDomainAssociationCommandInput;
      output: UpdateDomainAssociationCommandOutput;
    };
  };
}
