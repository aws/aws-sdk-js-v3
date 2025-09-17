// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListDomainConflictsRequest, ListDomainConflictsResult } from "../models/models_1";
import { de_ListDomainConflictsCommand, se_ListDomainConflictsCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <note> <p>We recommend that you use the <code>ListDomainConflicts</code> API operation to check for domain conflicts, as it supports both standard distributions and distribution tenants. <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListConflictingAliases.html">ListConflictingAliases</a> performs similar checks but only supports standard distributions.</p> </note> <p>Lists existing domain associations that conflict with the domain that you specify.</p> <p>You can use this API operation to identify potential domain conflicts when moving domains between standard distributions and/or distribution tenants. Domain conflicts must be resolved first before they can be moved. </p> <p>For example, if you provide <code>www.example.com</code> as input, the returned list can include <code>www.example.com</code> and the overlapping wildcard alternate domain name (<code>*.example.com</code>), if they exist. If you provide <code>*.example.com</code> as input, the returned list can include <code>*.example.com</code> and any alternate domain names covered by that wildcard (for example, <code>www.example.com</code>, <code>test.example.com</code>, <code>dev.example.com</code>, and so on), if they exist.</p> <p>To list conflicting domains, specify the following:</p> <ul> <li> <p>The domain to search for</p> </li> <li> <p>The ID of a standard distribution or distribution tenant in your account that has an attached TLS certificate, which covers the specified domain</p> </li> </ul> <p>For more information, including how to set up the standard distribution or distribution tenant, and the certificate, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/CNAMEs.html#alternate-domain-names-move">Moving an alternate domain name to a different standard distribution or distribution tenant</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
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
 *  <p>Access denied.</p>
 *
 * @throws {@link EntityNotFound} (client fault)
 *  <p>The entity was not found.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class ListDomainConflictsCommand extends $Command
  .classBuilder<
    ListDomainConflictsCommandInput,
    ListDomainConflictsCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Cloudfront2020_05_31", "ListDomainConflicts", {})
  .n("CloudFrontClient", "ListDomainConflictsCommand")
  .f(void 0, void 0)
  .ser(se_ListDomainConflictsCommand)
  .de(de_ListDomainConflictsCommand)
  .build() {
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
