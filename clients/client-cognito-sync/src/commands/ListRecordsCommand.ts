// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CognitoSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListRecordsRequest, ListRecordsResponse } from "../models/models_0";
import { de_ListRecordsCommand, se_ListRecordsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRecordsCommand}.
 */
export interface ListRecordsCommandInput extends ListRecordsRequest {}
/**
 * @public
 *
 * The output of {@link ListRecordsCommand}.
 */
export interface ListRecordsCommandOutput extends ListRecordsResponse, __MetadataBearer {}

/**
 * <p>Gets paginated records, optionally changed after a particular sync count for a dataset and
 *          identity. With Amazon Cognito Sync, each identity has access only to its own data. Thus,
 *          the credentials used to make this API call need to have access to the identity data.</p>
 *       <p>ListRecords can be called with temporary user credentials provided by Cognito
 *          Identity or with developer credentials. You should use Cognito Identity credentials to make
 *          this API call.</p>
 *       <examples>
 *          <example>
 *             <name>ListRecords</name>
 *             <description>The following examples have been edited for readability.</description>
 *             <request>
 * POST / HTTP/1.1
 * CONTENT-TYPE: application/json
 * X-AMZN-REQUESTID: b3d2e31e-d6b7-4612-8e84-c9ba288dab5d
 * X-AMZ-TARGET: com.amazonaws.cognito.sync.model.AWSCognitoSyncService.ListRecords
 * HOST: cognito-sync.us-east-1.amazonaws.com:443
 * X-AMZ-DATE: 20141111T183230Z
 * AUTHORIZATION: AWS4-HMAC-SHA256 Credential=<credential>, SignedHeaders=content-type;host;x-amz-date;x-amz-target;x-amzn-requestid, Signature=<signature>
 *
 * \{
 *     "Operation": "com.amazonaws.cognito.sync.model#ListRecords",
 *     "Service": "com.amazonaws.cognito.sync.model#AWSCognitoSyncService",
 *     "Input":
 *     \{
 *         "IdentityPoolId": "IDENTITY_POOL_ID",
 *         "IdentityId": "IDENTITY_ID",
 *         "DatasetName": "newDataSet"
 *     \}
 * \}
 *                </request>
 *             <response>
 * 1.1 200 OK
 * x-amzn-requestid: b3d2e31e-d6b7-4612-8e84-c9ba288dab5d
 * content-type: application/json
 * content-length: 623
 * date: Tue, 11 Nov 2014 18:32:30 GMT
 *
 * \{
 *     "Output":
 *     \{
 *         "__type": "com.amazonaws.cognito.sync.model#ListRecordsResponse",
 *         "Count": 0,
 *         "DatasetDeletedAfterRequestedSyncCount": false,
 *         "DatasetExists": false,
 *         "DatasetSyncCount": 0,
 *         "LastModifiedBy": null,
 *         "MergedDatasetNames": null,
 *         "NextToken": null,
 *         "Records": [],
 *         "SyncSessionToken": "SYNC_SESSION_TOKEN"
 *     \},
 *     "Version": "1.0"
 * \}
 *                </response>
 *          </example>
 *       </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoSyncClient, ListRecordsCommand } from "@aws-sdk/client-cognito-sync"; // ES Modules import
 * // const { CognitoSyncClient, ListRecordsCommand } = require("@aws-sdk/client-cognito-sync"); // CommonJS import
 * const client = new CognitoSyncClient(config);
 * const input = { // ListRecordsRequest
 *   IdentityPoolId: "STRING_VALUE", // required
 *   IdentityId: "STRING_VALUE", // required
 *   DatasetName: "STRING_VALUE", // required
 *   LastSyncCount: Number("long"),
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   SyncSessionToken: "STRING_VALUE",
 * };
 * const command = new ListRecordsCommand(input);
 * const response = await client.send(command);
 * // { // ListRecordsResponse
 * //   Records: [ // RecordList
 * //     { // Record
 * //       Key: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //       SyncCount: Number("long"),
 * //       LastModifiedDate: new Date("TIMESTAMP"),
 * //       LastModifiedBy: "STRING_VALUE",
 * //       DeviceLastModifiedDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   Count: Number("int"),
 * //   DatasetSyncCount: Number("long"),
 * //   LastModifiedBy: "STRING_VALUE",
 * //   MergedDatasetNames: [ // MergedDatasetNameList
 * //     "STRING_VALUE",
 * //   ],
 * //   DatasetExists: true || false,
 * //   DatasetDeletedAfterRequestedSyncCount: true || false,
 * //   SyncSessionToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRecordsCommandInput - {@link ListRecordsCommandInput}
 * @returns {@link ListRecordsCommandOutput}
 * @see {@link ListRecordsCommandInput} for command's `input` shape.
 * @see {@link ListRecordsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListRecordsCommand extends $Command
  .classBuilder<
    ListRecordsCommandInput,
    ListRecordsCommandOutput,
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
  .s("AWSCognitoSyncService", "ListRecords", {})
  .n("CognitoSyncClient", "ListRecordsCommand")
  .f(void 0, void 0)
  .ser(se_ListRecordsCommand)
  .de(de_ListRecordsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRecordsRequest;
      output: ListRecordsResponse;
    };
    sdk: {
      input: ListRecordsCommandInput;
      output: ListRecordsCommandOutput;
    };
  };
}
