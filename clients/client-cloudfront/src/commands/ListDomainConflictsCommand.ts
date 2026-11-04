// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDomainConflictsRequest, ListDomainConflictsResult } from "../models/models_1";
import { ListDomainConflicts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDomainConflictsCommand}.
 */
export interface ListDomainConflictsCommandInput extends ListDomainConflictsRequest {}
/**
 * @public
 *
 * The output of {@link ListDomainConflictsCommand}.
 */
export interface ListDomainConflictsCommandOutput extends ListDomainConflictsResult, __MetadataBearer {}

/**
 * > **Note:** We recommend that you use the `ListDomainConflicts` API operation to check for domain conflicts, as it supports both standard distributions and distribution tenants. [ListConflictingAliases](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListConflictingAliases.html) performs similar checks but only supports standard distributions.
 *
 * Lists existing domain associations that conflict with the domain that you specify.
 *
 * You can use this API operation to identify potential domain conflicts when moving domains between standard distributions and/or distribution tenants. Domain conflicts must be resolved first before they can be moved.
 *
 * For example, if you provide `www.example.com` as input, the returned list can include `www.example.com` and the overlapping wildcard alternate domain name (`*.example.com`), if they exist. If you provide `*.example.com` as input, the returned list can include `*.example.com` and any alternate domain names covered by that wildcard (for example, `www.example.com`, `test.example.com`, `dev.example.com`, and so on), if they exist.
 *
 * To list conflicting domains, specify the following:
 *
 * - The domain to search for
 * - The ID of a standard distribution or distribution tenant in your account that has an attached TLS certificate, which covers the specified domain
 *
 * For more information, including how to set up the standard distribution or distribution tenant, and the certificate, see [Moving an alternate domain name to a different standard distribution or distribution tenant](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/CNAMEs.html#alternate-domain-names-move) in the *Amazon CloudFront Developer Guide*.
 *
 * You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the `NextMarker` value from the current response as the `Marker` value in the subsequent request.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListDomainConflictsCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListDomainConflictsCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // ListDomainConflictsRequest
 *   Domain: "STRING_VALUE", // required
 *   DomainControlValidationResource: { // DistributionResourceId
 *     DistributionId: "STRING_VALUE",
 *     DistributionTenantId: "STRING_VALUE",
 *   },
 *   MaxItems: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new ListDomainConflictsCommand(input);
 * const response = await client.send(command);
 * // { // ListDomainConflictsResult
 * //   DomainConflicts: [ // DomainConflictsList
 * //     { // DomainConflict
 * //       Domain: "STRING_VALUE", // required
 * //       ResourceType: "distribution" || "distribution-tenant", // required
 * //       ResourceId: "STRING_VALUE", // required
 * //       AccountId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDomainConflictsCommandInput - {@link ListDomainConflictsCommandInput}
 * @returns {@link ListDomainConflictsCommandOutput}
 * @see {@link ListDomainConflictsCommandInput} for command's `input` shape.
 * @see {@link ListDomainConflictsCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidArgument} (client fault)
 *
 * An argument is invalid.
 *
 * @throws {@link CloudFrontServiceException}
 *
 * Base exception class for all service exceptions from CloudFront service.
 *
 * @public
 */
export class ListDomainConflictsCommand extends command<ListDomainConflictsCommandInput, ListDomainConflictsCommandOutput>(
  _ep0,
  _mw0,
  "ListDomainConflicts",
  ListDomainConflicts$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDomainConflictsRequest;
      output: ListDomainConflictsResult;
    };
    sdk: {
      input: ListDomainConflictsCommandInput;
      output: ListDomainConflictsCommandOutput;
    };
  };
}
