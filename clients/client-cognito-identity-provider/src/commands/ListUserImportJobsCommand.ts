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
import { ListUserImportJobsRequest, ListUserImportJobsResponse } from "../models/models_1";
import { de_ListUserImportJobsCommand, se_ListUserImportJobsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListUserImportJobsCommand}.
 */
export interface ListUserImportJobsCommandInput extends ListUserImportJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListUserImportJobsCommand}.
 */
export interface ListUserImportJobsCommandOutput extends ListUserImportJobsResponse, __MetadataBearer {}

/**
 * <p>Lists user import jobs for a user pool.</p>
 *          <note>
 *             <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 *     this operation, you must use IAM credentials to authorize requests, and you must
 *     grant yourself the corresponding IAM permission in a policy.</p>
 *             <p class="title">
 *                <b>Learn more</b>
 *             </p>
 *             <ul>
 *                <li>
 *                   <p>
 *                      <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a>
 *                   </p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, ListUserImportJobsCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, ListUserImportJobsCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // ListUserImportJobsRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   MaxResults: Number("int"), // required
 *   PaginationToken: "STRING_VALUE",
 * };
 * const command = new ListUserImportJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListUserImportJobsResponse
 * //   UserImportJobs: [ // UserImportJobsListType
 * //     { // UserImportJobType
 * //       JobName: "STRING_VALUE",
 * //       JobId: "STRING_VALUE",
 * //       UserPoolId: "STRING_VALUE",
 * //       PreSignedUrl: "STRING_VALUE",
 * //       CreationDate: new Date("TIMESTAMP"),
 * //       StartDate: new Date("TIMESTAMP"),
 * //       CompletionDate: new Date("TIMESTAMP"),
 * //       Status: "Created" || "Pending" || "InProgress" || "Stopping" || "Expired" || "Stopped" || "Failed" || "Succeeded",
 * //       CloudWatchLogsRoleArn: "STRING_VALUE",
 * //       ImportedUsers: Number("long"),
 * //       SkippedUsers: Number("long"),
 * //       FailedUsers: Number("long"),
 * //       CompletionMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   PaginationToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListUserImportJobsCommandInput - {@link ListUserImportJobsCommandInput}
 * @returns {@link ListUserImportJobsCommandOutput}
 * @see {@link ListUserImportJobsCommandInput} for command's `input` shape.
 * @see {@link ListUserImportJobsCommandOutput} for command's `response` shape.
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
export class ListUserImportJobsCommand extends $Command
  .classBuilder<
    ListUserImportJobsCommandInput,
    ListUserImportJobsCommandOutput,
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
  .s("AWSCognitoIdentityProviderService", "ListUserImportJobs", {})
  .n("CognitoIdentityProviderClient", "ListUserImportJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListUserImportJobsCommand)
  .de(de_ListUserImportJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListUserImportJobsRequest;
      output: ListUserImportJobsResponse;
    };
    sdk: {
      input: ListUserImportJobsCommandInput;
      output: ListUserImportJobsCommandOutput;
    };
  };
}
