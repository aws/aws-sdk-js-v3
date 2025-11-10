// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListEnabledProductsForImportRequest, ListEnabledProductsForImportResponse } from "../models/models_3";
import { ListEnabledProductsForImport } from "../schemas/schemas_0";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEnabledProductsForImportCommand}.
 */
export interface ListEnabledProductsForImportCommandInput extends ListEnabledProductsForImportRequest {}
/**
 * @public
 *
 * The output of {@link ListEnabledProductsForImportCommand}.
 */
export interface ListEnabledProductsForImportCommandOutput
  extends ListEnabledProductsForImportResponse,
    __MetadataBearer {}

/**
 * <p>Lists all findings-generating solutions (products) that you are subscribed to receive
 *          findings from in Security Hub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, ListEnabledProductsForImportCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, ListEnabledProductsForImportCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // ListEnabledProductsForImportRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListEnabledProductsForImportCommand(input);
 * const response = await client.send(command);
 * // { // ListEnabledProductsForImportResponse
 * //   ProductSubscriptions: [ // ProductSubscriptionArnList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEnabledProductsForImportCommandInput - {@link ListEnabledProductsForImportCommandInput}
 * @returns {@link ListEnabledProductsForImportCommandOutput}
 * @see {@link ListEnabledProductsForImportCommandInput} for command's `input` shape.
 * @see {@link ListEnabledProductsForImportCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @example To list ARNs for enabled integrations
 * ```javascript
 * // The following example returns a list of subscription Amazon Resource Names (ARNs) for the product integrations that you have currently enabled in Security Hub.
 * const input = { /* empty *\/ };
 * const command = new ListEnabledProductsForImportCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ProductSubscriptions: [
 *     "arn:aws:securityhub:us-east-1:517716713836:product-subscription/crowdstrike/crowdstrike-falcon",
 *     "arn:aws:securityhub:us-east-1::product/3coresec/3coresec"
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListEnabledProductsForImportCommand extends $Command
  .classBuilder<
    ListEnabledProductsForImportCommandInput,
    ListEnabledProductsForImportCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityHubAPIService", "ListEnabledProductsForImport", {})
  .n("SecurityHubClient", "ListEnabledProductsForImportCommand")
  .sc(ListEnabledProductsForImport)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEnabledProductsForImportRequest;
      output: ListEnabledProductsForImportResponse;
    };
    sdk: {
      input: ListEnabledProductsForImportCommandInput;
      output: ListEnabledProductsForImportCommandOutput;
    };
  };
}
