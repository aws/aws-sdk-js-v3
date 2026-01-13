// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateUserImportJobRequest, CreateUserImportJobResponse } from "../models/models_0";
import { CreateUserImportJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateUserImportJobCommand}.
 */
export interface CreateUserImportJobCommandInput extends CreateUserImportJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateUserImportJobCommand}.
 */
export interface CreateUserImportJobCommandOutput extends CreateUserImportJobResponse, __MetadataBearer {}

/**
 * <p>Creates a user import job. You can import users into user pools from a comma-separated
 *             values (CSV) file without adding Amazon Cognito MAU costs to your Amazon Web Services bill.</p>
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
 * import { CognitoIdentityProviderClient, CreateUserImportJobCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, CreateUserImportJobCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // CreateUserImportJobRequest
 *   JobName: "STRING_VALUE", // required
 *   UserPoolId: "STRING_VALUE", // required
 *   CloudWatchLogsRoleArn: "STRING_VALUE", // required
 * };
 * const command = new CreateUserImportJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateUserImportJobResponse
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
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateUserImportJobCommandInput - {@link CreateUserImportJobCommandInput}
 * @returns {@link CreateUserImportJobCommandOutput}
 * @see {@link CreateUserImportJobCommandInput} for command's `input` shape.
 * @see {@link CreateUserImportJobCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service encounters an invalid
 *             parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>This exception is thrown when a user exceeds the limit for a requested Amazon Web Services
 *             resource.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>This exception is thrown when a user isn't authorized.</p>
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
export class CreateUserImportJobCommand extends $Command
  .classBuilder<
    CreateUserImportJobCommandInput,
    CreateUserImportJobCommandOutput,
    CognitoIdentityProviderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CognitoIdentityProviderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSCognitoIdentityProviderService", "CreateUserImportJob", {})
  .n("CognitoIdentityProviderClient", "CreateUserImportJobCommand")
  .sc(CreateUserImportJob$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateUserImportJobRequest;
      output: CreateUserImportJobResponse;
    };
    sdk: {
      input: CreateUserImportJobCommandInput;
      output: CreateUserImportJobCommandOutput;
    };
  };
}
