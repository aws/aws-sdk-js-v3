// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateWebFunctionRequest, CreateWebFunctionResponse } from "../models/models_0";
import { CreateWebFunction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateWebFunctionCommand}.
 */
export interface CreateWebFunctionCommandInput extends CreateWebFunctionRequest {}
/**
 * @public
 *
 * The output of {@link CreateWebFunctionCommand}.
 */
export interface CreateWebFunctionCommandOutput extends CreateWebFunctionResponse, __MetadataBearer {}

/**
 * <p>Creates a web function with an initial revision and endpoint. To create a web function, you provide the function name, revision configuration (code and service settings), and endpoint configuration.</p> <p>To use this operation, you must have the <code>CreateWebFunction</code> permission on the web function. You don't need separate permissions for the initial revision or endpoint.</p> <note> <p>This API is experimental and for internal AWS use only. It is not yet available to external customers.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaWebClient, CreateWebFunctionCommand } from "@aws-sdk/client-lambda-web"; // ES Modules import
 * // const { LambdaWebClient, CreateWebFunctionCommand } = require("@aws-sdk/client-lambda-web"); // CommonJS import
 * // import type { LambdaWebClientConfig } from "@aws-sdk/client-lambda-web";
 * const config = {}; // type is LambdaWebClientConfig
 * const client = new LambdaWebClient(config);
 * const input = { // CreateWebFunctionRequest
 *   functionName: "STRING_VALUE", // required
 *   revisionConfig: { // RevisionConfig
 *     description: "STRING_VALUE",
 *     kmsKeyArn: "STRING_VALUE",
 *     buildConfig: { // BuildConfig
 *       codeConfig: { // CodeConfig
 *         s3Object: { // S3Object
 *           bucket: "STRING_VALUE", // required
 *           key: "STRING_VALUE", // required
 *           versionId: "STRING_VALUE",
 *         },
 *       },
 *       runtimeConfig: { // RuntimeConfig
 *         runtime: "STRING_VALUE", // required
 *       },
 *     },
 *     serviceConfig: { // ServiceConfig
 *       executionRoleArn: "STRING_VALUE", // required
 *       timeoutSeconds: Number("int"),
 *       maxConcurrencyPerEnvironment: Number("int"),
 *       environmentVariables: { // EnvironmentVariables
 *         "<keys>": "STRING_VALUE",
 *       },
 *       telemetryConfig: { // TelemetryConfig
 *         loggingConfig: { // LoggingConfig
 *           logGroup: "STRING_VALUE",
 *           applicationLogLevel: "TRACE" || "DEBUG" || "INFO" || "WARN" || "ERROR" || "FATAL",
 *           systemLogLevel: "DEBUG" || "INFO" || "WARN",
 *         },
 *       },
 *     },
 *   },
 *   endpointConfig: { // EndpointConfig
 *     endpointName: "STRING_VALUE", // required
 *     description: "STRING_VALUE",
 *     endpointType: "HomeRegion" || "MultiRegion" || "PerRegion", // required
 *     authType: "ApplicationManaged" || "IamAuth", // required
 *     autoDeploymentMode: "LatestRevision" || "Disabled",
 *     regions: [ // RegionList
 *       "STRING_VALUE",
 *     ],
 *     scalingConfig: { // ScalingConfig
 *       maxEnvironments: Number("int"),
 *     },
 *     throttleConfig: { // ThrottleConfig
 *       rateLimit: Number("int"),
 *     },
 *   },
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateWebFunctionCommand(input);
 * const response = await client.send(command);
 * // { // CreateWebFunctionResponse
 * //   functionName: "STRING_VALUE", // required
 * //   functionArn: "STRING_VALUE", // required
 * //   state: "Pending" || "Active" || "Failed" || "Deleting", // required
 * //   stateReason: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   revision: { // FunctionRevisionSummary
 * //     revisionArn: "STRING_VALUE", // required
 * //     revisionId: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     state: "Pending" || "Active" || "Failed", // required
 * //     stateReason: "STRING_VALUE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //   },
 * //   endpoint: { // FunctionEndpointSummary
 * //     endpointArn: "STRING_VALUE", // required
 * //     endpointName: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     endpointType: "HomeRegion" || "MultiRegion" || "PerRegion", // required
 * //     domainName: "STRING_VALUE", // required
 * //     authType: "ApplicationManaged" || "IamAuth", // required
 * //     autoDeploymentMode: "LatestRevision" || "Disabled", // required
 * //     revisionWeights: [ // RevisionWeightList // required
 * //       { // RevisionWeight
 * //         revisionId: "STRING_VALUE", // required
 * //         weight: Number("int"), // required
 * //       },
 * //     ],
 * //     regions: [ // RegionList // required
 * //       "STRING_VALUE",
 * //     ],
 * //     scalingConfig: { // ScalingConfig
 * //       maxEnvironments: Number("int"),
 * //     },
 * //     throttleConfig: { // ThrottleConfig
 * //       rateLimit: Number("int"),
 * //     },
 * //     state: "Pending" || "Active" || "Failed" || "Deleting", // required
 * //     stateReason: "STRING_VALUE", // required
 * //     updateStatus: "InProgress" || "Successful" || "Failed",
 * //     updateStatusReason: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //   },
 * //   tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateWebFunctionCommandInput - {@link CreateWebFunctionCommandInput}
 * @returns {@link CreateWebFunctionCommandOutput}
 * @see {@link CreateWebFunctionCommandInput} for command's `input` shape.
 * @see {@link CreateWebFunctionCommandOutput} for command's `response` shape.
 * @see {@link LambdaWebClientResolvedConfig | config} for LambdaWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource. Resolve the conflict and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found. Verify the resource identifier and try again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>A service quota was exceeded. Request a quota increase or reduce usage and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled. Reduce the frequency of requests and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation. Check the request parameters and try again.</p>
 *
 * @throws {@link LambdaWebServiceException}
 * <p>Base exception class for all service exceptions from LambdaWeb service.</p>
 *
 *
 * @public
 */
export class CreateWebFunctionCommand extends command<CreateWebFunctionCommandInput, CreateWebFunctionCommandOutput>(
  _ep0,
  _mw0,
  "CreateWebFunction",
  CreateWebFunction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWebFunctionRequest;
      output: CreateWebFunctionResponse;
    };
    sdk: {
      input: CreateWebFunctionCommandInput;
      output: CreateWebFunctionCommandOutput;
    };
  };
}
