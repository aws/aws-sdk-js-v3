// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CognitoSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListIdentityPoolUsageRequest, ListIdentityPoolUsageResponse } from "../models/models_0";
import { de_ListIdentityPoolUsageCommand, se_ListIdentityPoolUsageCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListIdentityPoolUsageCommand}.
 */
export interface ListIdentityPoolUsageCommandInput extends ListIdentityPoolUsageRequest {}
/**
 * @public
 *
 * The output of {@link ListIdentityPoolUsageCommand}.
 */
export interface ListIdentityPoolUsageCommandOutput extends ListIdentityPoolUsageResponse, __MetadataBearer {}

/**
 * <p>Gets a list of identity pools registered with Cognito.</p>
 *       <p>ListIdentityPoolUsage can only be called with developer credentials. You
 *          cannot make this API call with the temporary user credentials provided by Cognito
 *          Identity.</p>
 *       <examples>
 *          <example>
 *             <name>ListIdentityPoolUsage</name>
 *             <description>The following examples have been edited for readability.</description>
 *             <request>
 * POST / HTTP/1.1
 * CONTENT-TYPE: application/json
 * X-AMZN-REQUESTID: 9be7c425-ef05-48c0-aef3-9f0ff2fe17d3
 * X-AMZ-TARGET: com.amazonaws.cognito.sync.model.AWSCognitoSyncService.ListIdentityPoolUsage
 * HOST: cognito-sync.us-east-1.amazonaws.com:443
 * X-AMZ-DATE: 20141111T211414Z
 * AUTHORIZATION: AWS4-HMAC-SHA256 Credential=<credential>, SignedHeaders=content-type;host;x-amz-date;x-amz-target;x-amzn-requestid, Signature=<signature>
 *
 * \{
 *     "Operation": "com.amazonaws.cognito.sync.model#ListIdentityPoolUsage",
 *     "Service": "com.amazonaws.cognito.sync.model#AWSCognitoSyncService",
 *     "Input":
 *     \{
 *         "MaxResults": "2"
 *     \}
 * \}
 *                </request>
 *             <response>
 * 1.1 200 OK
 * x-amzn-requestid: 9be7c425-ef05-48c0-aef3-9f0ff2fe17d3
 * content-type: application/json
 * content-length: 519
 * date: Tue, 11 Nov 2014 21:14:14 GMT
 *
 * \{
 *     "Output":
 *     \{
 *         "__type": "com.amazonaws.cognito.sync.model#ListIdentityPoolUsageResponse",
 *         "Count": 2,
 *         "IdentityPoolUsages": [
 *         \{
 *             "DataStorage": 0,
 *             "IdentityPoolId": "IDENTITY_POOL_ID",
 *             "LastModifiedDate": 1.413836234607E9,
 *             "SyncSessionsCount": null
 *         \},
 *         \{
 *             "DataStorage": 0,
 *             "IdentityPoolId": "IDENTITY_POOL_ID",
 *             "LastModifiedDate": 1.410892165601E9,
 *             "SyncSessionsCount": null
 *         \}],
 *         "MaxResults": 2,
 *         "NextToken": "dXMtZWFzdC0xOjBjMWJhMDUyLWUwOTgtNDFmYS1hNzZlLWVhYTJjMTI1Zjg2MQ=="
 *     \},
 *     "Version": "1.0"
 * \}
 *                </response>
 *          </example>
 *       </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoSyncClient, ListIdentityPoolUsageCommand } from "@aws-sdk/client-cognito-sync"; // ES Modules import
 * // const { CognitoSyncClient, ListIdentityPoolUsageCommand } = require("@aws-sdk/client-cognito-sync"); // CommonJS import
 * const client = new CognitoSyncClient(config);
 * const input = { // ListIdentityPoolUsageRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListIdentityPoolUsageCommand(input);
 * const response = await client.send(command);
 * // { // ListIdentityPoolUsageResponse
 * //   IdentityPoolUsages: [ // IdentityPoolUsageList
 * //     { // IdentityPoolUsage
 * //       IdentityPoolId: "STRING_VALUE",
 * //       SyncSessionsCount: Number("long"),
 * //       DataStorage: Number("long"),
 * //       LastModifiedDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   MaxResults: Number("int"),
 * //   Count: Number("int"),
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIdentityPoolUsageCommandInput - {@link ListIdentityPoolUsageCommandInput}
 * @returns {@link ListIdentityPoolUsageCommandOutput}
 * @see {@link ListIdentityPoolUsageCommandInput} for command's `input` shape.
 * @see {@link ListIdentityPoolUsageCommandOutput} for command's `response` shape.
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
 * @throws {@link TooManyRequestsException} (client fault)
 *  Thrown if the request is
 *       throttled.
 *
 * @throws {@link CognitoSyncServiceException}
 * <p>Base exception class for all service exceptions from CognitoSync service.</p>
 *
 * @public
 */
export class ListIdentityPoolUsageCommand extends $Command
  .classBuilder<
    ListIdentityPoolUsageCommandInput,
    ListIdentityPoolUsageCommandOutput,
    CognitoSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CognitoSyncClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSCognitoSyncService", "ListIdentityPoolUsage", {})
  .n("CognitoSyncClient", "ListIdentityPoolUsageCommand")
  .f(void 0, void 0)
  .ser(se_ListIdentityPoolUsageCommand)
  .de(de_ListIdentityPoolUsageCommand)
  .build() {}
