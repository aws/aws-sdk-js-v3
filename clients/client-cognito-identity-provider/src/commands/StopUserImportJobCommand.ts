// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopUserImportJobRequest, StopUserImportJobResponse } from "../models/models_1";
import { StopUserImportJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopUserImportJobCommand}.
 */
export interface StopUserImportJobCommandInput extends StopUserImportJobRequest {}
/**
 * @public
 *
 * The output of {@link StopUserImportJobCommand}.
 */
export interface StopUserImportJobCommandOutput extends StopUserImportJobResponse, __MetadataBearer {}

/**
 * <p>Instructs your user pool to stop a running job that's importing users from a CSV
 *             file that contains their usernames and attributes. For more information about importing
 *             users from a CSV file, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-using-import-tool.html">Importing users from a CSV file</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, StopUserImportJobCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, StopUserImportJobCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // StopUserImportJobRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new StopUserImportJobCommand(input);
 * const response = await client.send(command);
 * // { // StopUserImportJobResponse
 * //   UserImportJob: { // UserImportJobType
 * //     JobName: "STRING_VALUE",
 * //     JobId: "STRING_VALUE",
 * //     UserPoolId: "STRING_VALUE",
 * //     PreSignedUrl: "STRING_VALUE",
 * //     CreationDate: new Date("TIMESTAMP"),
 * //     StartDate: new Date("TIMESTAMP"),
 * //     CompletionDate: new Date("TIMESTAMP"),
 * //     Status: "Created" || "Pending" || "InProgress" || "Stopping" || "Expired" || "Stopped" || "Failed" || "Succeeded",
 * //     CloudWatchLogsRoleArn: "STRING_VALUE",
 * //     ImportedUsers: Number("long"),
 * //     SkippedUsers: Number("long"),
 * //     FailedUsers: Number("long"),
 * //     CompletionMessage: "STRING_VALUE",
 * //     PasswordHashingAlgorithm: "BCRYPT" || "SCRYPT" || "ARGON2ID" || "PBKDF2_SHA256",
 * //   },
 * // };
 *
 * ```
 *
 * @param StopUserImportJobCommandInput - {@link StopUserImportJobCommandInput}
 * @returns {@link StopUserImportJobCommandOutput}
 * @see {@link StopUserImportJobCommandInput} for command's `input` shape.
 * @see {@link StopUserImportJobCommandOutput} for command's `response` shape.
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
 * @throws {@link OperationNotEnabledException} (client fault)
 *  <p>This exception is thrown when an operation is not available in the current region or for the current user pool configuration. This can occur when attempting to perform operations that are not supported in secondary replica regions.</p>
 *
 * @throws {@link PreconditionNotMetException} (client fault)
 *  <p>This exception is thrown when a precondition is not met.</p>
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
 *
 * @public
 */
export class StopUserImportJobCommand extends command<StopUserImportJobCommandInput, StopUserImportJobCommandOutput>(
  _ep0,
  _mw0,
  "StopUserImportJob",
  StopUserImportJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopUserImportJobRequest;
      output: StopUserImportJobResponse;
    };
    sdk: {
      input: StopUserImportJobCommandInput;
      output: StopUserImportJobCommandOutput;
    };
  };
}
