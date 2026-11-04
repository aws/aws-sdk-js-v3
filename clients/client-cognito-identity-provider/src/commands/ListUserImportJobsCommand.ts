// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListUserImportJobsRequest, ListUserImportJobsResponse } from "../models/models_0";
import { ListUserImportJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Given a user pool ID, returns user import jobs and their details. Import jobs are retained in user pool configuration so that you can stage, stop, start, review, and delete them. For more information about user import, see [Importing users from a CSV file](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-using-import-tool.html).
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
 * import { CognitoIdentityProviderClient, ListUserImportJobsCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, ListUserImportJobsCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
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
 * //       PasswordHashingAlgorithm: "BCRYPT" || "SCRYPT" || "ARGON2ID" || "PBKDF2_SHA256",
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
export class ListUserImportJobsCommand extends command<ListUserImportJobsCommandInput, ListUserImportJobsCommandOutput>(
  _ep0,
  _mw0,
  "ListUserImportJobs",
  ListUserImportJobs$
) {
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
