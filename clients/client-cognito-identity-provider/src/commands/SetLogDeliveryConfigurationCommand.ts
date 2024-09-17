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
import { SetLogDeliveryConfigurationRequest, SetLogDeliveryConfigurationResponse } from "../models/models_1";
import { de_SetLogDeliveryConfigurationCommand, se_SetLogDeliveryConfigurationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetLogDeliveryConfigurationCommand}.
 */
export interface SetLogDeliveryConfigurationCommandInput extends SetLogDeliveryConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link SetLogDeliveryConfigurationCommand}.
 */
export interface SetLogDeliveryConfigurationCommandOutput
  extends SetLogDeliveryConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Sets up or modifies the logging configuration of a user pool. User pools can export
 *             user notification logs and advanced security features user activity logs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, SetLogDeliveryConfigurationCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, SetLogDeliveryConfigurationCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // SetLogDeliveryConfigurationRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   LogConfigurations: [ // LogConfigurationListType // required
 *     { // LogConfigurationType
 *       LogLevel: "ERROR" || "INFO", // required
 *       EventSource: "userNotification" || "userAuthEvents", // required
 *       CloudWatchLogsConfiguration: { // CloudWatchLogsConfigurationType
 *         LogGroupArn: "STRING_VALUE",
 *       },
 *       S3Configuration: { // S3ConfigurationType
 *         BucketArn: "STRING_VALUE",
 *       },
 *       FirehoseConfiguration: { // FirehoseConfigurationType
 *         StreamArn: "STRING_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new SetLogDeliveryConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // SetLogDeliveryConfigurationResponse
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
 * @param SetLogDeliveryConfigurationCommandInput - {@link SetLogDeliveryConfigurationCommandInput}
 * @returns {@link SetLogDeliveryConfigurationCommandOutput}
 * @see {@link SetLogDeliveryConfigurationCommandInput} for command's `input` shape.
 * @see {@link SetLogDeliveryConfigurationCommandOutput} for command's `response` shape.
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
export class SetLogDeliveryConfigurationCommand extends $Command
  .classBuilder<
    SetLogDeliveryConfigurationCommandInput,
    SetLogDeliveryConfigurationCommandOutput,
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
  .s("AWSCognitoIdentityProviderService", "SetLogDeliveryConfiguration", {})
  .n("CognitoIdentityProviderClient", "SetLogDeliveryConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_SetLogDeliveryConfigurationCommand)
  .de(de_SetLogDeliveryConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetLogDeliveryConfigurationRequest;
      output: SetLogDeliveryConfigurationResponse;
    };
    sdk: {
      input: SetLogDeliveryConfigurationCommandInput;
      output: SetLogDeliveryConfigurationCommandOutput;
    };
  };
}
