// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EnableImportFindingsForProductRequest, EnableImportFindingsForProductResponse } from "../models/models_2";
import {
  de_EnableImportFindingsForProductCommand,
  se_EnableImportFindingsForProductCommand,
} from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableImportFindingsForProductCommand}.
 */
export interface EnableImportFindingsForProductCommandInput extends EnableImportFindingsForProductRequest {}
/**
 * @public
 *
 * The output of {@link EnableImportFindingsForProductCommand}.
 */
export interface EnableImportFindingsForProductCommandOutput
  extends EnableImportFindingsForProductResponse,
    __MetadataBearer {}

/**
 * <p>Enables the integration of a partner product with Security Hub. Integrated products send
 *          findings to Security Hub.</p>
 *          <p>When you enable a product integration, a permissions policy that grants permission for
 *          the product to send findings to Security Hub is applied.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, EnableImportFindingsForProductCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, EnableImportFindingsForProductCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SecurityHubClient(config);
 * const input = { // EnableImportFindingsForProductRequest
 *   ProductArn: "STRING_VALUE", // required
 * };
 * const command = new EnableImportFindingsForProductCommand(input);
 * const response = await client.send(command);
 * // { // EnableImportFindingsForProductResponse
 * //   ProductSubscriptionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param EnableImportFindingsForProductCommandInput - {@link EnableImportFindingsForProductCommandInput}
 * @returns {@link EnableImportFindingsForProductCommandOutput}
 * @see {@link EnableImportFindingsForProductCommandInput} for command's `input` shape.
 * @see {@link EnableImportFindingsForProductCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>The resource specified in the request conflicts with an existing resource.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 * @public
 * @example To activate an integration
 * ```javascript
 * // The following example activates an integration between Security Hub and a third party partner product that sends findings to Security Hub.
 * const input = {
 *   "ProductArn": "arn:aws:securityhub:us-east-1:517716713836:product/crowdstrike/crowdstrike-falcon"
 * };
 * const command = new EnableImportFindingsForProductCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ProductSubscriptionArn": "arn:aws:securityhub:us-east-1:517716713836:product-subscription/crowdstrike/crowdstrike-falcon"
 * }
 * *\/
 * // example id: to-activate-an-integration-1676918918114
 * ```
 *
 */
export class EnableImportFindingsForProductCommand extends $Command
  .classBuilder<
    EnableImportFindingsForProductCommandInput,
    EnableImportFindingsForProductCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SecurityHubAPIService", "EnableImportFindingsForProduct", {})
  .n("SecurityHubClient", "EnableImportFindingsForProductCommand")
  .f(void 0, void 0)
  .ser(se_EnableImportFindingsForProductCommand)
  .de(de_EnableImportFindingsForProductCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableImportFindingsForProductRequest;
      output: EnableImportFindingsForProductResponse;
    };
    sdk: {
      input: EnableImportFindingsForProductCommandInput;
      output: EnableImportFindingsForProductCommandOutput;
    };
  };
}
