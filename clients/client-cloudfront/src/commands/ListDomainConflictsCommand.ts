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
 * <p>Lists existing domain associations that conflict with the domain that you specify.</p> <p>You can use this API operation when transferring domains to identify potential domain conflicts. Domain conflicts must be resolved first before they can be moved.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListDomainConflictsCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListDomainConflictsCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
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
