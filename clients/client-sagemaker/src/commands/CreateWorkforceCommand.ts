// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateWorkforceRequest,
  CreateWorkforceRequestFilterSensitiveLog,
  CreateWorkforceResponse,
} from "../models/models_2";
import { de_CreateWorkforceCommand, se_CreateWorkforceCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateWorkforceCommand}.
 */
export interface CreateWorkforceCommandInput extends CreateWorkforceRequest {}
/**
 * @public
 *
 * The output of {@link CreateWorkforceCommand}.
 */
export interface CreateWorkforceCommandOutput extends CreateWorkforceResponse, __MetadataBearer {}

/**
 * <p>Use this operation to create a workforce. This operation will return an error
 *           if a workforce already exists in the Amazon Web Services Region that you specify. You can only
 *           create one workforce in each Amazon Web Services Region per Amazon Web Services account.</p>
 *          <p>If you want to create a new workforce in an Amazon Web Services Region where
 *             a workforce already exists, use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DeleteWorkforce.html">DeleteWorkforce</a> API
 *       operation to delete the existing workforce and then use <code>CreateWorkforce</code>
 *       to create a new workforce.</p>
 *          <p>To create a private workforce using Amazon Cognito, you must specify a Cognito user pool
 *     in <code>CognitoConfig</code>.
 *     You can also create an Amazon Cognito workforce using the Amazon SageMaker console.
 *     For more information, see
 *       <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html">
 *       Create a Private Workforce (Amazon Cognito)</a>.</p>
 *          <p>To create a private workforce using your own OIDC Identity Provider (IdP), specify your IdP
 *       configuration in <code>OidcConfig</code>. Your OIDC IdP must support <i>groups</i>
 *       because groups are used by Ground Truth and Amazon A2I to create work teams.
 *       For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private-oidc.html">
 *       Create a Private Workforce (OIDC IdP)</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateWorkforceCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateWorkforceCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // CreateWorkforceRequest
 *   CognitoConfig: { // CognitoConfig
 *     UserPool: "STRING_VALUE", // required
 *     ClientId: "STRING_VALUE", // required
 *   },
 *   OidcConfig: { // OidcConfig
 *     ClientId: "STRING_VALUE", // required
 *     ClientSecret: "STRING_VALUE", // required
 *     Issuer: "STRING_VALUE", // required
 *     AuthorizationEndpoint: "STRING_VALUE", // required
 *     TokenEndpoint: "STRING_VALUE", // required
 *     UserInfoEndpoint: "STRING_VALUE", // required
 *     LogoutEndpoint: "STRING_VALUE", // required
 *     JwksUri: "STRING_VALUE", // required
 *   },
 *   SourceIpConfig: { // SourceIpConfig
 *     Cidrs: [ // Cidrs // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   WorkforceName: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   WorkforceVpcConfig: { // WorkforceVpcConfigRequest
 *     VpcId: "STRING_VALUE",
 *     SecurityGroupIds: [ // WorkforceSecurityGroupIds
 *       "STRING_VALUE",
 *     ],
 *     Subnets: [ // WorkforceSubnets
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new CreateWorkforceCommand(input);
 * const response = await client.send(command);
 * // { // CreateWorkforceResponse
 * //   WorkforceArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateWorkforceCommandInput - {@link CreateWorkforceCommandInput}
 * @returns {@link CreateWorkforceCommandOutput}
 * @see {@link CreateWorkforceCommandInput} for command's `input` shape.
 * @see {@link CreateWorkforceCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class CreateWorkforceCommand extends $Command
  .classBuilder<
    CreateWorkforceCommandInput,
    CreateWorkforceCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "CreateWorkforce", {})
  .n("SageMakerClient", "CreateWorkforceCommand")
  .f(CreateWorkforceRequestFilterSensitiveLog, void 0)
  .ser(se_CreateWorkforceCommand)
  .de(de_CreateWorkforceCommand)
  .build() {}
