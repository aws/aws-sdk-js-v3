// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DisableImportFindingsForProductRequest, DisableImportFindingsForProductResponse } from "../models/models_2";
import { DisableImportFindingsForProduct } from "../schemas/schemas_0";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableImportFindingsForProductCommand}.
 */
export interface DisableImportFindingsForProductCommandInput extends DisableImportFindingsForProductRequest {}
/**
 * @public
 *
 * The output of {@link DisableImportFindingsForProductCommand}.
 */
export interface DisableImportFindingsForProductCommandOutput
  extends DisableImportFindingsForProductResponse,
    __MetadataBearer {}

/**
 * <p>Disables the integration of the specified product with Security Hub. After the integration is
 *          disabled, findings from that product are no longer sent to Security Hub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DisableImportFindingsForProductCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DisableImportFindingsForProductCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // DisableImportFindingsForProductRequest
 *   ProductSubscriptionArn: "STRING_VALUE", // required
 * };
 * const command = new DisableImportFindingsForProductCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisableImportFindingsForProductCommandInput - {@link DisableImportFindingsForProductCommandInput}
 * @returns {@link DisableImportFindingsForProductCommandOutput}
 * @see {@link DisableImportFindingsForProductCommandInput} for command's `input` shape.
 * @see {@link DisableImportFindingsForProductCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @example To end a Security Hub integration
 * ```javascript
 * // The following example ends an integration between Security Hub and the specified product that sends findings to Security Hub. After the integration ends, the product no longer sends findings to Security  Hub.
 * const input = {
 *   ProductSubscriptionArn: "arn:aws:securityhub:us-east-1:517716713836:product/crowdstrike/crowdstrike-falcon"
 * };
 * const command = new DisableImportFindingsForProductCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DisableImportFindingsForProductCommand extends $Command
  .classBuilder<
    DisableImportFindingsForProductCommandInput,
    DisableImportFindingsForProductCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityHubAPIService", "DisableImportFindingsForProduct", {})
  .n("SecurityHubClient", "DisableImportFindingsForProductCommand")
  .sc(DisableImportFindingsForProduct)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableImportFindingsForProductRequest;
      output: {};
    };
    sdk: {
      input: DisableImportFindingsForProductCommandInput;
      output: DisableImportFindingsForProductCommandOutput;
    };
  };
}
