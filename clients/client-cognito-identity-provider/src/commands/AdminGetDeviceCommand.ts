// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AdminGetDeviceRequest, AdminGetDeviceResponse } from "../models/models_0";
import { AdminGetDevice$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AdminGetDeviceCommand}.
 */
export interface AdminGetDeviceCommandInput extends AdminGetDeviceRequest {}
/**
 * @public
 *
 * The output of {@link AdminGetDeviceCommand}.
 */
export interface AdminGetDeviceCommandOutput extends AdminGetDeviceResponse, __MetadataBearer {}

/**
 * Given the device key, returns details for a user's device. For more information, see [Working with devices](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html).
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
 * import { CognitoIdentityProviderClient, AdminGetDeviceCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminGetDeviceCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // AdminGetDeviceRequest
 *   DeviceKey: "STRING_VALUE", // required
 *   UserPoolId: "STRING_VALUE", // required
 *   Username: "STRING_VALUE", // required
 * };
 * const command = new AdminGetDeviceCommand(input);
 * const response = await client.send(command);
 * // { // AdminGetDeviceResponse
 * //   Device: { // DeviceType
 * //     DeviceKey: "STRING_VALUE",
 * //     DeviceAttributes: [ // AttributeListType
 * //       { // AttributeType
 * //         Name: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     DeviceCreateDate: new Date("TIMESTAMP"),
 * //     DeviceLastModifiedDate: new Date("TIMESTAMP"),
 * //     DeviceLastAuthenticatedDate: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param AdminGetDeviceCommandInput - {@link AdminGetDeviceCommandInput}
 * @returns {@link AdminGetDeviceCommandOutput}
 * @see {@link AdminGetDeviceCommandInput} for command's `input` shape.
 * @see {@link AdminGetDeviceCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidUserPoolConfigurationException} (client fault)
 *
 * This exception is thrown when the user pool configuration is not valid.
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
 * @throws {@link CognitoIdentityProviderServiceException}
 *
 * Base exception class for all service exceptions from CognitoIdentityProvider service.
 *
 * @public
 */
export class AdminGetDeviceCommand extends command<AdminGetDeviceCommandInput, AdminGetDeviceCommandOutput>(
  _ep0,
  _mw0,
  "AdminGetDevice",
  AdminGetDevice$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AdminGetDeviceRequest;
      output: AdminGetDeviceResponse;
    };
    sdk: {
      input: AdminGetDeviceCommandInput;
      output: AdminGetDeviceCommandOutput;
    };
  };
}
