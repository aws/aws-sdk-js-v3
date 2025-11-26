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
import type { DescribeUserImportJobRequest, DescribeUserImportJobResponse } from "../models/models_0";
import { DescribeUserImportJob } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeUserImportJobCommand}.
 */
export interface DescribeUserImportJobCommandInput extends DescribeUserImportJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeUserImportJobCommand}.
 */
export interface DescribeUserImportJobCommandOutput extends DescribeUserImportJobResponse, __MetadataBearer {}

/**
 * <p>Describes a user import job. For more information about user CSV import, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-using-import-tool.html">Importing users from a CSV file</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, DescribeUserImportJobCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, DescribeUserImportJobCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // DescribeUserImportJobRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new DescribeUserImportJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeUserImportJobResponse
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
 * @param DescribeUserImportJobCommandInput - {@link DescribeUserImportJobCommandInput}
 * @returns {@link DescribeUserImportJobCommandOutput}
 * @see {@link DescribeUserImportJobCommandInput} for command's `input` shape.
 * @see {@link DescribeUserImportJobCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DescribeUserImportJobCommand extends $Command
  .classBuilder<
    DescribeUserImportJobCommandInput,
    DescribeUserImportJobCommandOutput,
    CognitoIdentityProviderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CognitoIdentityProviderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSCognitoIdentityProviderService", "DescribeUserImportJob", {})
  .n("CognitoIdentityProviderClient", "DescribeUserImportJobCommand")
  .sc(DescribeUserImportJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeUserImportJobRequest;
      output: DescribeUserImportJobResponse;
    };
    sdk: {
      input: DescribeUserImportJobCommandInput;
      output: DescribeUserImportJobCommandOutput;
    };
  };
}
