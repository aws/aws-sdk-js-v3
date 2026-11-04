// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetLogDeliveryConfigurationRequest, GetLogDeliveryConfigurationResponse } from "../models/models_0";
import { GetLogDeliveryConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetLogDeliveryConfigurationCommand}.
 */
export interface GetLogDeliveryConfigurationCommandInput extends GetLogDeliveryConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetLogDeliveryConfigurationCommand}.
 */
export interface GetLogDeliveryConfigurationCommandOutput extends GetLogDeliveryConfigurationResponse, __MetadataBearer {}

/**
 * Given a user pool ID, returns the logging configuration. User pools can export message-delivery error and threat-protection activity logs to external Amazon Web Services services. For more information, see [Exporting user pool logs](https://docs.aws.amazon.com/cognito/latest/developerguide/exporting-quotas-and-usage.html).
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
 * import { CognitoIdentityProviderClient, GetLogDeliveryConfigurationCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, GetLogDeliveryConfigurationCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // GetLogDeliveryConfigurationRequest
 *   UserPoolId: "STRING_VALUE", // required
 * };
 * const command = new GetLogDeliveryConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetLogDeliveryConfigurationResponse
 * //   LogDeliveryConfiguration: { // LogDeliveryConfigurationType
 * //     UserPoolId: "STRING_VALUE", // required
 * //     LogConfigurations: [ // LogConfigurationListType // required
 * //       { // LogConfigurationType
 * //         LogLevel: "ERROR" || "INFO", // required
 * //         EventSource: "userNotification" || "userAuthEvents", // required
 * //         CloudWatchLogsConfiguration: { // CloudWatchLogsConfigurationType
 * //           LogGroupArn: "STRING_VALUE",
 * //         },
 * //         S3Configuration: { // S3ConfigurationType
 * //           BucketArn: "STRING_VALUE",
 * //         },
 * //         FirehoseConfiguration: { // FirehoseConfigurationType
 * //           StreamArn: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetLogDeliveryConfigurationCommandInput - {@link GetLogDeliveryConfigurationCommandInput}
 * @returns {@link GetLogDeliveryConfigurationCommandOutput}
 * @see {@link GetLogDeliveryConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetLogDeliveryConfigurationCommandOutput} for command's `response` shape.
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
export class GetLogDeliveryConfigurationCommand extends command<GetLogDeliveryConfigurationCommandInput, GetLogDeliveryConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetLogDeliveryConfiguration",
  GetLogDeliveryConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLogDeliveryConfigurationRequest;
      output: GetLogDeliveryConfigurationResponse;
    };
    sdk: {
      input: GetLogDeliveryConfigurationCommandInput;
      output: GetLogDeliveryConfigurationCommandOutput;
    };
  };
}
