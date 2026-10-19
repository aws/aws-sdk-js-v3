// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetWebFunctionRevisionRequest, GetWebFunctionRevisionResponse } from "../models/models_0";
import { GetWebFunctionRevision$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetWebFunctionRevisionCommand}.
 */
export interface GetWebFunctionRevisionCommandInput extends GetWebFunctionRevisionRequest {}
/**
 * @public
 *
 * The output of {@link GetWebFunctionRevisionCommand}.
 */
export interface GetWebFunctionRevisionCommandOutput extends GetWebFunctionRevisionResponse, __MetadataBearer {}

/**
 * <p>Retrieves details about a web function revision, including its state and configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaWebClient, GetWebFunctionRevisionCommand } from "@aws-sdk/client-lambda-web"; // ES Modules import
 * // const { LambdaWebClient, GetWebFunctionRevisionCommand } = require("@aws-sdk/client-lambda-web"); // CommonJS import
 * // import type { LambdaWebClientConfig } from "@aws-sdk/client-lambda-web";
 * const config = {}; // type is LambdaWebClientConfig
 * const client = new LambdaWebClient(config);
 * const input = { // GetWebFunctionRevisionRequest
 *   functionName: "STRING_VALUE", // required
 *   revisionId: "STRING_VALUE", // required
 * };
 * const command = new GetWebFunctionRevisionCommand(input);
 * const response = await client.send(command);
 * // { // GetWebFunctionRevisionResponse
 * //   functionArn: "STRING_VALUE", // required
 * //   revisionArn: "STRING_VALUE", // required
 * //   revisionId: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   kmsKeyArn: "STRING_VALUE",
 * //   buildConfig: { // BuildConfig
 * //     codeConfig: { // CodeConfig
 * //       s3Object: { // S3Object
 * //         bucket: "STRING_VALUE", // required
 * //         key: "STRING_VALUE", // required
 * //         versionId: "STRING_VALUE",
 * //       },
 * //     },
 * //     runtimeConfig: { // RuntimeConfig
 * //       runtime: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   serviceConfig: { // ServiceConfig
 * //     executionRoleArn: "STRING_VALUE", // required
 * //     timeoutSeconds: Number("int"),
 * //     egressNetworkConnectorArn: "STRING_VALUE",
 * //     maxConcurrencyPerEnvironment: Number("int"),
 * //     environmentVariables: { // EnvironmentVariables
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     telemetryConfig: { // TelemetryConfig
 * //       loggingConfig: { // LoggingConfig
 * //         logGroup: "STRING_VALUE",
 * //         applicationLogLevel: "TRACE" || "DEBUG" || "INFO" || "WARN" || "ERROR" || "FATAL",
 * //         systemLogLevel: "DEBUG" || "INFO" || "WARN",
 * //       },
 * //     },
 * //   },
 * //   state: "Pending" || "Active" || "Failed", // required
 * //   stateReason: "STRING_VALUE", // required
 * //   errors: [ // RevisionErrors
 * //     { // RevisionError
 * //       attribute: "STRING_VALUE", // required
 * //       errorCode: "STRING_VALUE", // required
 * //       errorMessage: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   createdAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetWebFunctionRevisionCommandInput - {@link GetWebFunctionRevisionCommandInput}
 * @returns {@link GetWebFunctionRevisionCommandOutput}
 * @see {@link GetWebFunctionRevisionCommandInput} for command's `input` shape.
 * @see {@link GetWebFunctionRevisionCommandOutput} for command's `response` shape.
 * @see {@link LambdaWebClientResolvedConfig | config} for LambdaWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform this operation. Check the IAM policies for your identity and any resource-based policy on the web function.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed because of an internal error in the service. Retry the request. If the error persists, open a support case.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified web function, revision, endpoint, or resource-based policy doesn't exist. Verify the resource identifier and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded the request rate that Lambda allows for your account. Reduce the frequency of requests and retry with exponential backoff.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation because a parameter was missing, malformed, or outside the allowed range. Check the request parameters and try again.</p>
 *
 * @throws {@link LambdaWebServiceException}
 * <p>Base exception class for all service exceptions from LambdaWeb service.</p>
 *
 *
 * @public
 */
export class GetWebFunctionRevisionCommand extends command<GetWebFunctionRevisionCommandInput, GetWebFunctionRevisionCommandOutput>(
  _ep0,
  _mw0,
  "GetWebFunctionRevision",
  GetWebFunctionRevision$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWebFunctionRevisionRequest;
      output: GetWebFunctionRevisionResponse;
    };
    sdk: {
      input: GetWebFunctionRevisionCommandInput;
      output: GetWebFunctionRevisionCommandOutput;
    };
  };
}
