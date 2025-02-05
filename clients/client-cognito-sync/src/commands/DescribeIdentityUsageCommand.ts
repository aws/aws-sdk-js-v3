// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CognitoSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeIdentityUsageRequest, DescribeIdentityUsageResponse } from "../models/models_0";
import { de_DescribeIdentityUsageCommand, se_DescribeIdentityUsageCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeIdentityUsageCommand}.
 */
export interface DescribeIdentityUsageCommandInput extends DescribeIdentityUsageRequest {}
/**
 * @public
 *
 * The output of {@link DescribeIdentityUsageCommand}.
 */
export interface DescribeIdentityUsageCommandOutput extends DescribeIdentityUsageResponse, __MetadataBearer {}

/**
 * <p>Gets usage information for an identity, including number of datasets and data usage.</p>
 *       <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>
 *       <examples>
 *          <example>
 *             <name>DescribeIdentityUsage</name>
 *             <description>The following examples have been edited for readability.</description>
 *             <request>
 * POST / HTTP/1.1
 * CONTENT-TYPE: application/json
 * X-AMZN-REQUESTID: 33f9b4e4-a177-4aad-a3bb-6edb7980b283
 * X-AMZ-TARGET: com.amazonaws.cognito.sync.model.AWSCognitoSyncService.DescribeIdentityUsage
 * HOST: cognito-sync.us-east-1.amazonaws.com:443
 * X-AMZ-DATE: 20141111T215129Z
 * AUTHORIZATION: AWS4-HMAC-SHA256 Credential=<credential>, SignedHeaders=content-type;host;x-amz-date;x-amz-target;x-amzn-requestid, Signature=<signature>
 *
 * \{
 *     "Operation": "com.amazonaws.cognito.sync.model#DescribeIdentityUsage",
 *     "Service": "com.amazonaws.cognito.sync.model#AWSCognitoSyncService",
 *     "Input":
 *     \{
 *         "IdentityPoolId": "IDENTITY_POOL_ID",
 *         "IdentityId": "IDENTITY_ID"
 *     \}
 * \}
 *                </request>
 *             <response>
 *                1.1 200 OK
 * x-amzn-requestid: 33f9b4e4-a177-4aad-a3bb-6edb7980b283
 * content-type: application/json
 * content-length: 318
 * date: Tue, 11 Nov 2014 21:51:29 GMT
 *
 * \{
 *     "Output":
 *     \{
 *         "__type": "com.amazonaws.cognito.sync.model#DescribeIdentityUsageResponse",
 *         "IdentityUsage":
 *         \{
 *             "DataStorage": 16,
 *             "DatasetCount": 1,
 *             "IdentityId": "IDENTITY_ID",
 *             "IdentityPoolId": "IDENTITY_POOL_ID",
 *             "LastModifiedDate": 1.412974081336E9
 *         \}
 *     \},
 *     "Version": "1.0"
 * \}
 *                </response>
 *          </example>
 *       </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoSyncClient, DescribeIdentityUsageCommand } from "@aws-sdk/client-cognito-sync"; // ES Modules import
 * // const { CognitoSyncClient, DescribeIdentityUsageCommand } = require("@aws-sdk/client-cognito-sync"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CognitoSyncClient(config);
 * const input = { // DescribeIdentityUsageRequest
 *   IdentityPoolId: "STRING_VALUE", // required
 *   IdentityId: "STRING_VALUE", // required
 * };
 * const command = new DescribeIdentityUsageCommand(input);
 * const response = await client.send(command);
 * // { // DescribeIdentityUsageResponse
 * //   IdentityUsage: { // IdentityUsage
 * //     IdentityId: "STRING_VALUE",
 * //     IdentityPoolId: "STRING_VALUE",
 * //     LastModifiedDate: new Date("TIMESTAMP"),
 * //     DatasetCount: Number("int"),
 * //     DataStorage: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeIdentityUsageCommandInput - {@link DescribeIdentityUsageCommandInput}
 * @returns {@link DescribeIdentityUsageCommandOutput}
 * @see {@link DescribeIdentityUsageCommandInput} for command's `input` shape.
 * @see {@link DescribeIdentityUsageCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DescribeIdentityUsageCommand extends $Command
  .classBuilder<
    DescribeIdentityUsageCommandInput,
    DescribeIdentityUsageCommandOutput,
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
  .s("AWSCognitoSyncService", "DescribeIdentityUsage", {})
  .n("CognitoSyncClient", "DescribeIdentityUsageCommand")
  .f(void 0, void 0)
  .ser(se_DescribeIdentityUsageCommand)
  .de(de_DescribeIdentityUsageCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeIdentityUsageRequest;
      output: DescribeIdentityUsageResponse;
    };
    sdk: {
      input: DescribeIdentityUsageCommandInput;
      output: DescribeIdentityUsageCommandOutput;
    };
  };
}
