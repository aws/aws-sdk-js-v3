// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CognitoSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetIdentityPoolConfigurationRequest, GetIdentityPoolConfigurationResponse } from "../models/models_0";
import { GetIdentityPoolConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetIdentityPoolConfigurationCommand}.
 */
export interface GetIdentityPoolConfigurationCommandInput extends GetIdentityPoolConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetIdentityPoolConfigurationCommand}.
 */
export interface GetIdentityPoolConfigurationCommandOutput
  extends GetIdentityPoolConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Gets the configuration settings of an identity pool.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
 *       <examples>
 *          <example>
 *             <name>GetIdentityPoolConfiguration</name>
 *             <description>The following examples have been edited for readability.</description>
 *             <request>
 * POST / HTTP/1.1
 * CONTENT-TYPE: application/json
 * X-AMZN-REQUESTID: b1cfdd4b-f620-4fe4-be0f-02024a1d33da
 * X-AMZ-TARGET: com.amazonaws.cognito.sync.model.AWSCognitoSyncService.GetIdentityPoolConfiguration
 * HOST: cognito-sync.us-east-1.amazonaws.com
 * X-AMZ-DATE: 20141004T195722Z
 * AUTHORIZATION: AWS4-HMAC-SHA256 Credential=<credential>, SignedHeaders=content-type;content-length;host;x-amz-date;x-amz-target, Signature=<signature>
 *
 * \{
 *     "Operation": "com.amazonaws.cognito.sync.model#GetIdentityPoolConfiguration",
 *     "Service": "com.amazonaws.cognito.sync.model#AWSCognitoSyncService",
 *     "Input":
 *     \{
 *         "IdentityPoolId": "ID_POOL_ID"
 *     \}
 * \}
 *
 *             </request>
 *             <response>
 * 1.1 200 OK
 * x-amzn-requestid: b1cfdd4b-f620-4fe4-be0f-02024a1d33da
 * date: Sat, 04 Oct 2014 19:57:22 GMT
 * content-type: application/json
 * content-length: 332
 *
 * \{
 *     "Output":
 *     \{
 *         "__type": "com.amazonaws.cognito.sync.model#GetIdentityPoolConfigurationResponse",
 *         "IdentityPoolId": "ID_POOL_ID",
 *         "PushSync":
 *         \{
 *             "ApplicationArns": ["PLATFORMARN1", "PLATFORMARN2"],
 *             "RoleArn": "ROLEARN"
 *         \}
 *     \},
 *     "Version": "1.0"
 * \}
 *  </response>
 *          </example>
 *       </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoSyncClient, GetIdentityPoolConfigurationCommand } from "@aws-sdk/client-cognito-sync"; // ES Modules import
 * // const { CognitoSyncClient, GetIdentityPoolConfigurationCommand } = require("@aws-sdk/client-cognito-sync"); // CommonJS import
 * // import type { CognitoSyncClientConfig } from "@aws-sdk/client-cognito-sync";
 * const config = {}; // type is CognitoSyncClientConfig
 * const client = new CognitoSyncClient(config);
 * const input = { // GetIdentityPoolConfigurationRequest
 *   IdentityPoolId: "STRING_VALUE", // required
 * };
 * const command = new GetIdentityPoolConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetIdentityPoolConfigurationResponse
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
 * @param GetIdentityPoolConfigurationCommandInput - {@link GetIdentityPoolConfigurationCommandInput}
 * @returns {@link GetIdentityPoolConfigurationCommandOutput}
 * @see {@link GetIdentityPoolConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetIdentityPoolConfigurationCommandOutput} for command's `response` shape.
 * @see {@link CognitoSyncClientResolvedConfig | config} for CognitoSyncClient's `config` shape.
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
 *
 * @public
 */
export class GetIdentityPoolConfigurationCommand extends $Command
  .classBuilder<
    GetIdentityPoolConfigurationCommandInput,
    GetIdentityPoolConfigurationCommandOutput,
    CognitoSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CognitoSyncClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSCognitoSyncService", "GetIdentityPoolConfiguration", {})
  .n("CognitoSyncClient", "GetIdentityPoolConfigurationCommand")
  .sc(GetIdentityPoolConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIdentityPoolConfigurationRequest;
      output: GetIdentityPoolConfigurationResponse;
    };
    sdk: {
      input: GetIdentityPoolConfigurationCommandInput;
      output: GetIdentityPoolConfigurationCommandOutput;
    };
  };
}
