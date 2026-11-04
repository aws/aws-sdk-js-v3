// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateDistributionTenantRequest, UpdateDistributionTenantResult } from "../models/models_1";
import { UpdateDistributionTenant$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateDistributionTenantCommand}.
 */
export interface UpdateDistributionTenantCommandInput extends UpdateDistributionTenantRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDistributionTenantCommand}.
 */
export interface UpdateDistributionTenantCommandOutput extends UpdateDistributionTenantResult, __MetadataBearer {}

/**
 * Updates a distribution tenant.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateDistributionTenantCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateDistributionTenantCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // UpdateDistributionTenantRequest
 *   Id: "STRING_VALUE", // required
 *   DistributionId: "STRING_VALUE",
 *   Domains: [ // DomainList
 *     { // DomainItem
 *       Domain: "STRING_VALUE", // required
 *     },
 *   ],
 *   Customizations: { // Customizations
 *     WebAcl: { // WebAclCustomization
 *       Action: "override" || "disable", // required
 *       Arn: "STRING_VALUE",
 *     },
 *     Certificate: { // Certificate
 *       Arn: "STRING_VALUE", // required
 *     },
 *     GeoRestrictions: { // GeoRestrictionCustomization
 *       RestrictionType: "blacklist" || "whitelist" || "none", // required
 *       Locations: [ // LocationList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   Parameters: [ // Parameters
 *     { // Parameter
 *       Name: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ConnectionGroupId: "STRING_VALUE",
 *   IfMatch: "STRING_VALUE", // required
 *   ManagedCertificateRequest: { // ManagedCertificateRequest
 *     ValidationTokenHost: "cloudfront" || "self-hosted", // required
 *     PrimaryDomainName: "STRING_VALUE",
 *     CertificateTransparencyLoggingPreference: "enabled" || "disabled",
 *   },
 *   Enabled: true || false,
 * };
 * const command = new UpdateDistributionTenantCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDistributionTenantResult
 * //   DistributionTenant: { // DistributionTenant
 * //     Id: "STRING_VALUE",
 * //     DistributionId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     Domains: [ // DomainResultList
 * //       { // DomainResult
 * //         Domain: "STRING_VALUE", // required
 * //         Status: "active" || "inactive",
 * //       },
 * //     ],
 * //     Tags: { // Tags
 * //       Items: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     Customizations: { // Customizations
 * //       WebAcl: { // WebAclCustomization
 * //         Action: "override" || "disable", // required
 * //         Arn: "STRING_VALUE",
 * //       },
 * //       Certificate: { // Certificate
 * //         Arn: "STRING_VALUE", // required
 * //       },
 * //       GeoRestrictions: { // GeoRestrictionCustomization
 * //         RestrictionType: "blacklist" || "whitelist" || "none", // required
 * //         Locations: [ // LocationList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //     Parameters: [ // Parameters
 * //       { // Parameter
 * //         Name: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     ConnectionGroupId: "STRING_VALUE",
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //     Enabled: true || false,
 * //     Status: "STRING_VALUE",
 * //   },
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateDistributionTenantCommandInput - {@link UpdateDistributionTenantCommandInput}
 * @returns {@link UpdateDistributionTenantCommandOutput}
 * @see {@link UpdateDistributionTenantCommandInput} for command's `input` shape.
 * @see {@link UpdateDistributionTenantCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *
 * Access denied.
 *
 * @throws {@link CNAMEAlreadyExists} (client fault)
 *
 * The CNAME specified is already defined for CloudFront.
 *
 * @throws {@link EntityAlreadyExists} (client fault)
 *
 * The entity already exists. You must provide a unique entity.
 *
 * @throws {@link EntityLimitExceeded} (client fault)
 *
 * The entity limit has been exceeded.
 *
 * @throws {@link EntityNotFound} (client fault)
 *
 * The entity was not found.
 *
 * @throws {@link InvalidArgument} (client fault)
 *
 * An argument is invalid.
 *
 * @throws {@link InvalidAssociation} (client fault)
 *
 * The specified CloudFront resource can't be associated.
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
export class UpdateDistributionTenantCommand extends command<UpdateDistributionTenantCommandInput, UpdateDistributionTenantCommandOutput>(
  _ep0,
  _mw0,
  "UpdateDistributionTenant",
  UpdateDistributionTenant$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDistributionTenantRequest;
      output: UpdateDistributionTenantResult;
    };
    sdk: {
      input: UpdateDistributionTenantCommandInput;
      output: UpdateDistributionTenantCommandOutput;
    };
  };
}
