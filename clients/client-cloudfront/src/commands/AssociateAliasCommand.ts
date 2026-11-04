// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateAliasRequest } from "../models/models_0";
import { AssociateAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateAliasCommand}.
 */
export interface AssociateAliasCommandInput extends AssociateAliasRequest {}
/**
 * @public
 *
 * The output of {@link AssociateAliasCommand}.
 */
export interface AssociateAliasCommandOutput extends __MetadataBearer {}

/**
 * > **Note:** The `AssociateAlias` API operation only supports standard distributions. To move domains between distribution tenants and/or standard distributions, we recommend that you use the [UpdateDomainAssociation](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDomainAssociation.html) API operation instead.
 *
 * Associates an alias with a CloudFront standard distribution. An alias is commonly known as a custom domain or vanity domain. It can also be called a CNAME or alternate domain name.
 *
 * With this operation, you can move an alias that's already used for a standard distribution to a different standard distribution. This prevents the downtime that could occur if you first remove the alias from one standard distribution and then separately add the alias to another standard distribution.
 *
 * To use this operation, specify the alias and the ID of the target standard distribution.
 *
 * For more information, including how to set up the target standard distribution, prerequisites that you must complete, and other restrictions, see [Moving an alternate domain name to a different standard distribution or distribution tenant](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/CNAMEs.html#alternate-domain-names-move) in the *Amazon CloudFront Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, AssociateAliasCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, AssociateAliasCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // AssociateAliasRequest
 *   TargetDistributionId: "STRING_VALUE", // required
 *   Alias: "STRING_VALUE", // required
 * };
 * const command = new AssociateAliasCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateAliasCommandInput - {@link AssociateAliasCommandInput}
 * @returns {@link AssociateAliasCommandOutput}
 * @see {@link AssociateAliasCommandInput} for command's `input` shape.
 * @see {@link AssociateAliasCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *
 * Access denied.
 *
 * @throws {@link IllegalUpdate} (client fault)
 *
 * The update contains modifications that are not allowed.
 *
 * @throws {@link InvalidArgument} (client fault)
 *
 * An argument is invalid.
 *
 * @throws {@link NoSuchDistribution} (client fault)
 *
 * The specified distribution does not exist.
 *
 * @throws {@link TooManyDistributionCNAMEs} (client fault)
 *
 * Your request contains more CNAMEs than are allowed per distribution.
 *
 * @throws {@link CloudFrontServiceException}
 *
 * Base exception class for all service exceptions from CloudFront service.
 *
 * @public
 */
export class AssociateAliasCommand extends command<AssociateAliasCommandInput, AssociateAliasCommandOutput>(
  _ep0,
  _mw0,
  "AssociateAlias",
  AssociateAlias$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateAliasRequest;
      output: {};
    };
    sdk: {
      input: AssociateAliasCommandInput;
      output: AssociateAliasCommandOutput;
    };
  };
}
