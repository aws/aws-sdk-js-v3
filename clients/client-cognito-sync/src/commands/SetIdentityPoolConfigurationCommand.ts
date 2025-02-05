// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CognitoSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SetIdentityPoolConfigurationRequest, SetIdentityPoolConfigurationResponse } from "../models/models_0";
import {
  de_SetIdentityPoolConfigurationCommand,
  se_SetIdentityPoolConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetIdentityPoolConfigurationCommand}.
 */
export interface SetIdentityPoolConfigurationCommandInput extends SetIdentityPoolConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link SetIdentityPoolConfigurationCommand}.
 */
export interface SetIdentityPoolConfigurationCommandOutput
  extends SetIdentityPoolConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Sets the necessary configuration for push sync.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
 *       <examples>
 *          <example>
 *             <name>SetIdentityPoolConfiguration</name>
 *             <description>The following examples have been edited for readability.</description>
 *             <request>
 * POST / HTTP/1.1
 * CONTENT-TYPE: application/json
 * X-AMZN-REQUESTID: a46db021-f5dd-45d6-af5b-7069fa4a211b
 * X-AMZ-TARGET: com.amazonaws.cognito.sync.model.AWSCognitoSyncService.SetIdentityPoolConfiguration
 * HOST: cognito-sync.us-east-1.amazonaws.com
 * X-AMZ-DATE: 20141004T200006Z
 * AUTHORIZATION: AWS4-HMAC-SHA256 Credential=<credential>, SignedHeaders=content-type;content-length;host;x-amz-date;x-amz-target, Signature=<signature>
 *
 * \{
 *     "Operation": "com.amazonaws.cognito.sync.model#SetIdentityPoolConfiguration",
 *     "Service": "com.amazonaws.cognito.sync.model#AWSCognitoSyncService",
 *     "Input":
 *     \{
 *         "IdentityPoolId": "ID_POOL_ID",
 *         "PushSync":
 *         \{
 *             "ApplicationArns": ["PLATFORMARN1", "PLATFORMARN2"],
 *             "RoleArn": "ROLEARN"
 *         \}
 *     \}
 * \}
 *             </request>
 *             <response>
 * 1.1 200 OK
 * x-amzn-requestid: a46db021-f5dd-45d6-af5b-7069fa4a211b
 * date: Sat, 04 Oct 2014 20:00:06 GMT
 * content-type: application/json
 * content-length: 332
 *
 * \{
 *     "Output":
 *     \{
 *         "__type": "com.amazonaws.cognito.sync.model#SetIdentityPoolConfigurationResponse",
 *         "IdentityPoolId": "ID_POOL_ID",
 *         "PushSync":
 *         \{
 *             "ApplicationArns": ["PLATFORMARN1", "PLATFORMARN2"],
 *             "RoleArn": "ROLEARN"
 *         \}
 *     \},
 *     "Version": "1.0"
 * \}
 *             </response>
 *          </example>
 *       </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoSyncClient, SetIdentityPoolConfigurationCommand } from "@aws-sdk/client-cognito-sync"; // ES Modules import
 * // const { CognitoSyncClient, SetIdentityPoolConfigurationCommand } = require("@aws-sdk/client-cognito-sync"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CognitoSyncClient(config);
 * const input = { // SetIdentityPoolConfigurationRequest
 *   IdentityPoolId: "STRING_VALUE", // required
 *   PushSync: { // PushSync
 *     ApplicationArns: [ // ApplicationArnList
 *       "STRING_VALUE",
 *     ],
 *     RoleArn: "STRING_VALUE",
 *   },
 *   CognitoStreams: { // CognitoStreams
 *     StreamName: "STRING_VALUE",
 *     RoleArn: "STRING_VALUE",
 *     StreamingStatus: "ENABLED" || "DISABLED",
 *   },
 * };
 * const command = new SetIdentityPoolConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // SetIdentityPoolConfigurationResponse
 * //   IdentityPoolId: "STRING_VALUE",
 * //   PushSync: { // PushSync
 * //     ApplicationArns: [ // ApplicationArnList
 * //       "STRING_VALUE",
 * //     ],
 * //     RoleArn: "STRING_VALUE",
 * //   },
 * //   CognitoStreams: { // CognitoStreams
 * //     StreamName: "STRING_VALUE",
 * //     RoleArn: "STRING_VALUE",
 * //     StreamingStatus: "ENABLED" || "DISABLED",
 * //   },
 * // };
 *
 * ```
 *
 * @param SetIdentityPoolConfigurationCommandInput - {@link SetIdentityPoolConfigurationCommandInput}
 * @returns {@link SetIdentityPoolConfigurationCommandOutput}
 * @see {@link SetIdentityPoolConfigurationCommandInput} for command's `input` shape.
 * @see {@link SetIdentityPoolConfigurationCommandOutput} for command's `response` shape.
 * @see {@link CognitoSyncClientResolvedConfig | config} for CognitoSyncClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Thrown if there are parallel requests to modify a resource.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  Indicates an internal service
 *       error.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  Thrown when a request parameter does not comply
 *       with the associated constraints.
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  Thrown when a user is not authorized to access the
 *       requested resource.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  Thrown if the resource doesn't
 *       exist.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Thrown if the request is
 *       throttled.
 *
 * @throws {@link CognitoSyncServiceException}
 * <p>Base exception class for all service exceptions from CognitoSync service.</p>
 *
 * @public
 */
export class SetIdentityPoolConfigurationCommand extends $Command
  .classBuilder<
    SetIdentityPoolConfigurationCommandInput,
    SetIdentityPoolConfigurationCommandOutput,
    CognitoSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CognitoSyncClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSCognitoSyncService", "SetIdentityPoolConfiguration", {})
  .n("CognitoSyncClient", "SetIdentityPoolConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_SetIdentityPoolConfigurationCommand)
  .de(de_SetIdentityPoolConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetIdentityPoolConfigurationRequest;
      output: SetIdentityPoolConfigurationResponse;
    };
    sdk: {
      input: SetIdentityPoolConfigurationCommandInput;
      output: SetIdentityPoolConfigurationCommandOutput;
    };
  };
}
