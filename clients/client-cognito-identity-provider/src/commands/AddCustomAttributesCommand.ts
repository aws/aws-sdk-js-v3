// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AddCustomAttributesRequest, AddCustomAttributesResponse } from "../models/models_0";
import { AddCustomAttributes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Adds additional user attributes to the user pool schema. Custom attributes can be mutable or immutable and have a `custom:` or `dev:` prefix. For more information, see [Custom attributes](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-attributes.html#user-pool-settings-custom-attributes).
 *
 * > **Note:**
 * >
 * > Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.
 * >
 * > **Learn more**
 * >
 * > - [Signing Amazon Web Services API Requests](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html)
 * > - [Using the Amazon Cognito user pools API and user pool endpoints](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html)
 *
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
 *
 * This exception is thrown when Amazon Cognito encounters an internal error.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * This exception is thrown when the Amazon Cognito service encounters an invalid parameter.
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *
 * This exception is thrown when a user isn't authorized.
 *
 * @throws {@link OperationNotEnabledException} (client fault)
 *
 * This exception is thrown when an operation is not available in the current region or for the current user pool configuration. This can occur when attempting to perform operations that are not supported in secondary replica regions.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * This exception is thrown when the Amazon Cognito service can't find the requested resource.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * This exception is thrown when the user has made too many requests for a given operation.
 *
 * @throws {@link UserImportInProgressException} (client fault)
 *
 * This exception is thrown when you're trying to modify a user pool while a user import job is in progress for that pool.
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 *
 * Base exception class for all service exceptions from CognitoIdentityProvider service.
 *
 * @public
 */
export class AddCustomAttributesCommand extends command<AddCustomAttributesCommandInput, AddCustomAttributesCommandOutput>(
  _ep0,
  _mw0,
  "AddCustomAttributes",
  AddCustomAttributes$
) {
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
