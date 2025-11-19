// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartUserImportJobRequest, StartUserImportJobResponse } from "../models/models_0";
import { StartUserImportJob } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartUserImportJobCommand}.
 */
export interface StartUserImportJobCommandInput extends StartUserImportJobRequest {}
/**
 * @public
 *
 * The output of {@link StartUserImportJobCommand}.
 */
export interface StartUserImportJobCommandOutput extends StartUserImportJobResponse, __MetadataBearer {}

/**
 * <p>Instructs your user pool to start importing users from a CSV file that contains their
 *             usernames and attributes. For more information about importing users from a CSV file,
 *             see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-using-import-tool.html">Importing users from a CSV file</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, StartUserImportJobCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, StartUserImportJobCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // StartUserImportJobRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new StartUserImportJobCommand(input);
 * const response = await client.send(command);
 * // { // StartUserImportJobResponse
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
 * @param StartUserImportJobCommandInput - {@link StartUserImportJobCommandInput}
 * @returns {@link StartUserImportJobCommandOutput}
 * @see {@link StartUserImportJobCommandInput} for command's `input` shape.
 * @see {@link StartUserImportJobCommandOutput} for command's `response` shape.
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
export class StartUserImportJobCommand extends $Command
  .classBuilder<
    StartUserImportJobCommandInput,
    StartUserImportJobCommandOutput,
    CognitoIdentityProviderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CognitoIdentityProviderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSCognitoIdentityProviderService", "StartUserImportJob", {})
  .n("CognitoIdentityProviderClient", "StartUserImportJobCommand")
  .sc(StartUserImportJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartUserImportJobRequest;
      output: StartUserImportJobResponse;
    };
    sdk: {
      input: StartUserImportJobCommandInput;
      output: StartUserImportJobCommandOutput;
    };
  };
}
