// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeProductsV2Request, DescribeProductsV2Response } from "../models/models_2";
import { de_DescribeProductsV2Command, se_DescribeProductsV2Command } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeProductsV2Command}.
 */
export interface DescribeProductsV2CommandInput extends DescribeProductsV2Request {}
/**
 * @public
 *
 * The output of {@link DescribeProductsV2Command}.
 */
export interface DescribeProductsV2CommandOutput extends DescribeProductsV2Response, __MetadataBearer {}

/**
 * <p>Gets information about the product integration. This API is in private preview and subject to change.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DescribeProductsV2Command } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DescribeProductsV2Command } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // DescribeProductsV2Request
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeProductsV2Command(input);
 * const response = await client.send(command);
 * // { // DescribeProductsV2Response
 * //   ProductsV2: [ // ProductsV2List // required
 * //     { // ProductV2
 * //       ProductV2Name: "STRING_VALUE",
 * //       CompanyName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Categories: [ // CategoryList
 * //         "STRING_VALUE",
 * //       ],
 * //       IntegrationV2Types: [ // IntegrationV2TypeList
 * //         "SEND_FINDINGS_TO_SECURITY_HUB" || "RECEIVE_FINDINGS_FROM_SECURITY_HUB" || "UPDATE_FINDINGS_IN_SECURITY_HUB",
 * //       ],
 * //       MarketplaceUrl: "STRING_VALUE",
 * //       ActivationUrl: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeProductsV2CommandInput - {@link DescribeProductsV2CommandInput}
 * @returns {@link DescribeProductsV2CommandOutput}
 * @see {@link DescribeProductsV2CommandInput} for command's `input` shape.
 * @see {@link DescribeProductsV2CommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action specified in the request.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request causes conflict with the current state of the service resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *          The request has failed due to an internal failure of the service.
 *       </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>
 *          The limit on the number of requests per second was exceeded.
 *       </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation because it's missing required fields or has invalid inputs.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @public
 */
export class DescribeProductsV2Command extends $Command
  .classBuilder<
    DescribeProductsV2CommandInput,
    DescribeProductsV2CommandOutput,
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
  .s("SecurityHubAPIService", "DescribeProductsV2", {})
  .n("SecurityHubClient", "DescribeProductsV2Command")
  .f(void 0, void 0)
  .ser(se_DescribeProductsV2Command)
  .de(de_DescribeProductsV2Command)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeProductsV2Request;
      output: DescribeProductsV2Response;
    };
    sdk: {
      input: DescribeProductsV2CommandInput;
      output: DescribeProductsV2CommandOutput;
    };
  };
}
