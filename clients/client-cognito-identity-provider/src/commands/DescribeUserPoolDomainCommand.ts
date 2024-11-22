// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeUserPoolDomainRequest, DescribeUserPoolDomainResponse } from "../models/models_0";
import { de_DescribeUserPoolDomainCommand, se_DescribeUserPoolDomainCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeUserPoolDomainCommand}.
 */
export interface DescribeUserPoolDomainCommandInput extends DescribeUserPoolDomainRequest {}
/**
 * @public
 *
 * The output of {@link DescribeUserPoolDomainCommand}.
 */
export interface DescribeUserPoolDomainCommandOutput extends DescribeUserPoolDomainResponse, __MetadataBearer {}

/**
 * <p>Gets information about a domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, DescribeUserPoolDomainCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, DescribeUserPoolDomainCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // DescribeUserPoolDomainRequest
 *   Domain: "STRING_VALUE", // required
 * };
 * const command = new DescribeUserPoolDomainCommand(input);
 * const response = await client.send(command);
 * // { // DescribeUserPoolDomainResponse
 * //   DomainDescription: { // DomainDescriptionType
 * //     UserPoolId: "STRING_VALUE",
 * //     AWSAccountId: "STRING_VALUE",
 * //     Domain: "STRING_VALUE",
 * //     S3Bucket: "STRING_VALUE",
 * //     CloudFrontDistribution: "STRING_VALUE",
 * //     Version: "STRING_VALUE",
 * //     Status: "CREATING" || "DELETING" || "UPDATING" || "ACTIVE" || "FAILED",
 * //     CustomDomainConfig: { // CustomDomainConfigType
 * //       CertificateArn: "STRING_VALUE", // required
 * //     },
 * //     ManagedLoginVersion: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeUserPoolDomainCommandInput - {@link DescribeUserPoolDomainCommandInput}
 * @returns {@link DescribeUserPoolDomainCommandOutput}
 * @see {@link DescribeUserPoolDomainCommandInput} for command's `input` shape.
 * @see {@link DescribeUserPoolDomainCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service encounters an invalid
 *             parameter.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>This exception is thrown when a user isn't authorized.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service can't find the requested
 *             resource.</p>
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 * @public
 */
export class DescribeUserPoolDomainCommand extends $Command
  .classBuilder<
    DescribeUserPoolDomainCommandInput,
    DescribeUserPoolDomainCommandOutput,
    CognitoIdentityProviderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CognitoIdentityProviderClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSCognitoIdentityProviderService", "DescribeUserPoolDomain", {})
  .n("CognitoIdentityProviderClient", "DescribeUserPoolDomainCommand")
  .f(void 0, void 0)
  .ser(se_DescribeUserPoolDomainCommand)
  .de(de_DescribeUserPoolDomainCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeUserPoolDomainRequest;
      output: DescribeUserPoolDomainResponse;
    };
    sdk: {
      input: DescribeUserPoolDomainCommandInput;
      output: DescribeUserPoolDomainCommandOutput;
    };
  };
}
