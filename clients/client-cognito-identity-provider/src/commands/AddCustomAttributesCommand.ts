// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AddCustomAttributesRequest, AddCustomAttributesResponse } from "../models/models_0";
import { AddCustomAttributes } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddCustomAttributesCommand}.
 */
export interface AddCustomAttributesCommandInput extends AddCustomAttributesRequest {}
/**
 * @public
 *
 * The output of {@link AddCustomAttributesCommand}.
 */
export interface AddCustomAttributesCommandOutput extends AddCustomAttributesResponse, __MetadataBearer {}

/**
 * <p>Adds additional user attributes to the user pool schema. Custom attributes can be
 *             mutable or immutable and have a <code>custom:</code> or <code>dev:</code> prefix. For
 *             more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-attributes.html#user-pool-settings-custom-attributes">Custom attributes</a>.</p>
 *          <note>
 *             <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 *     this operation, you must use IAM credentials to authorize requests, and you must
 *     grant yourself the corresponding IAM permission in a policy.</p>
 *             <p class="title">
 *                <b>Learn more</b>
 *             </p>
 *             <ul>
 *                <li>
 *                   <p>
 *                      <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a>
 *                   </p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AddCustomAttributesCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AddCustomAttributesCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // AddCustomAttributesRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   CustomAttributes: [ // CustomAttributesListType // required
 *     { // SchemaAttributeType
 *       Name: "STRING_VALUE",
 *       AttributeDataType: "String" || "Number" || "DateTime" || "Boolean",
 *       DeveloperOnlyAttribute: true || false,
 *       Mutable: true || false,
 *       Required: true || false,
 *       NumberAttributeConstraints: { // NumberAttributeConstraintsType
 *         MinValue: "STRING_VALUE",
 *         MaxValue: "STRING_VALUE",
 *       },
 *       StringAttributeConstraints: { // StringAttributeConstraintsType
 *         MinLength: "STRING_VALUE",
 *         MaxLength: "STRING_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new AddCustomAttributesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AddCustomAttributesCommandInput - {@link AddCustomAttributesCommandInput}
 * @returns {@link AddCustomAttributesCommandOutput}
 * @see {@link AddCustomAttributesCommandInput} for command's `input` shape.
 * @see {@link AddCustomAttributesCommandOutput} for command's `response` shape.
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
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>This exception is thrown when the user has made too many requests for a given
 *             operation.</p>
 *
 * @throws {@link UserImportInProgressException} (client fault)
 *  <p>This exception is thrown when you're trying to modify a user pool while a user import
 *             job is in progress for that pool.</p>
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 *
 * @public
 */
export class AddCustomAttributesCommand extends $Command
  .classBuilder<
    AddCustomAttributesCommandInput,
    AddCustomAttributesCommandOutput,
    CognitoIdentityProviderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CognitoIdentityProviderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSCognitoIdentityProviderService", "AddCustomAttributes", {})
  .n("CognitoIdentityProviderClient", "AddCustomAttributesCommand")
  .sc(AddCustomAttributes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddCustomAttributesRequest;
      output: {};
    };
    sdk: {
      input: AddCustomAttributesCommandInput;
      output: AddCustomAttributesCommandOutput;
    };
  };
}
