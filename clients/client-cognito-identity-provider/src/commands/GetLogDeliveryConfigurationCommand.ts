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
import { GetLogDeliveryConfigurationRequest, GetLogDeliveryConfigurationResponse } from "../models/models_0";
import { de_GetLogDeliveryConfigurationCommand, se_GetLogDeliveryConfigurationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface GetLogDeliveryConfigurationCommandOutput
  extends GetLogDeliveryConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Gets the logging configuration of a user pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, GetLogDeliveryConfigurationCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, GetLogDeliveryConfigurationCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 * @public
 */
export class GetLogDeliveryConfigurationCommand extends $Command
  .classBuilder<
    GetLogDeliveryConfigurationCommandInput,
    GetLogDeliveryConfigurationCommandOutput,
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
  .s("AWSCognitoIdentityProviderService", "GetLogDeliveryConfiguration", {})
  .n("CognitoIdentityProviderClient", "GetLogDeliveryConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_GetLogDeliveryConfigurationCommand)
  .de(de_GetLogDeliveryConfigurationCommand)
  .build() {
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
