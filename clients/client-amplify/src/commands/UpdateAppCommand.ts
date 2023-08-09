// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { AmplifyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyClient";
import {
  UpdateAppRequest,
  UpdateAppRequestFilterSensitiveLog,
  UpdateAppResult,
  UpdateAppResultFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateAppCommand, se_UpdateAppCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateAppCommand}.
 */
export interface UpdateAppCommandInput extends UpdateAppRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAppCommand}.
 */
export interface UpdateAppCommandOutput extends UpdateAppResult, __MetadataBearer {}

/**
 * @public
 * <p> Updates an existing Amplify app. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, UpdateAppCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, UpdateAppCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const input = { // UpdateAppRequest
 *   appId: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   platform: "WEB" || "WEB_DYNAMIC" || "WEB_COMPUTE",
 *   iamServiceRoleArn: "STRING_VALUE",
 *   environmentVariables: { // EnvironmentVariables
 *     "<keys>": "STRING_VALUE",
 *   },
 *   enableBranchAutoBuild: true || false,
 *   enableBranchAutoDeletion: true || false,
 *   enableBasicAuth: true || false,
 *   basicAuthCredentials: "STRING_VALUE",
 *   customRules: [ // CustomRules
 *     { // CustomRule
 *       source: "STRING_VALUE", // required
 *       target: "STRING_VALUE", // required
 *       status: "STRING_VALUE",
 *       condition: "STRING_VALUE",
 *     },
 *   ],
 *   buildSpec: "STRING_VALUE",
 *   customHeaders: "STRING_VALUE",
 *   enableAutoBranchCreation: true || false,
 *   autoBranchCreationPatterns: [ // AutoBranchCreationPatterns
 *     "STRING_VALUE",
 *   ],
 *   autoBranchCreationConfig: { // AutoBranchCreationConfig
 *     stage: "PRODUCTION" || "BETA" || "DEVELOPMENT" || "EXPERIMENTAL" || "PULL_REQUEST",
 *     framework: "STRING_VALUE",
 *     enableAutoBuild: true || false,
 *     environmentVariables: {
 *       "<keys>": "STRING_VALUE",
 *     },
 *     basicAuthCredentials: "STRING_VALUE",
 *     enableBasicAuth: true || false,
 *     enablePerformanceMode: true || false,
 *     buildSpec: "STRING_VALUE",
 *     enablePullRequestPreview: true || false,
 *     pullRequestEnvironmentName: "STRING_VALUE",
 *   },
 *   repository: "STRING_VALUE",
 *   oauthToken: "STRING_VALUE",
 *   accessToken: "STRING_VALUE",
 * };
 * const command = new UpdateAppCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAppResult
 * //   app: { // App
 * //     appId: "STRING_VALUE", // required
 * //     appArn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     description: "STRING_VALUE", // required
 * //     repository: "STRING_VALUE", // required
 * //     platform: "WEB" || "WEB_DYNAMIC" || "WEB_COMPUTE", // required
 * //     createTime: new Date("TIMESTAMP"), // required
 * //     updateTime: new Date("TIMESTAMP"), // required
 * //     iamServiceRoleArn: "STRING_VALUE",
 * //     environmentVariables: { // EnvironmentVariables // required
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     defaultDomain: "STRING_VALUE", // required
 * //     enableBranchAutoBuild: true || false, // required
 * //     enableBranchAutoDeletion: true || false,
 * //     enableBasicAuth: true || false, // required
 * //     basicAuthCredentials: "STRING_VALUE",
 * //     customRules: [ // CustomRules
 * //       { // CustomRule
 * //         source: "STRING_VALUE", // required
 * //         target: "STRING_VALUE", // required
 * //         status: "STRING_VALUE",
 * //         condition: "STRING_VALUE",
 * //       },
 * //     ],
 * //     productionBranch: { // ProductionBranch
 * //       lastDeployTime: new Date("TIMESTAMP"),
 * //       status: "STRING_VALUE",
 * //       thumbnailUrl: "STRING_VALUE",
 * //       branchName: "STRING_VALUE",
 * //     },
 * //     buildSpec: "STRING_VALUE",
 * //     customHeaders: "STRING_VALUE",
 * //     enableAutoBranchCreation: true || false,
 * //     autoBranchCreationPatterns: [ // AutoBranchCreationPatterns
 * //       "STRING_VALUE",
 * //     ],
 * //     autoBranchCreationConfig: { // AutoBranchCreationConfig
 * //       stage: "PRODUCTION" || "BETA" || "DEVELOPMENT" || "EXPERIMENTAL" || "PULL_REQUEST",
 * //       framework: "STRING_VALUE",
 * //       enableAutoBuild: true || false,
 * //       environmentVariables: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       basicAuthCredentials: "STRING_VALUE",
 * //       enableBasicAuth: true || false,
 * //       enablePerformanceMode: true || false,
 * //       buildSpec: "STRING_VALUE",
 * //       enablePullRequestPreview: true || false,
 * //       pullRequestEnvironmentName: "STRING_VALUE",
 * //     },
 * //     repositoryCloneMethod: "SSH" || "TOKEN" || "SIGV4",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateAppCommandInput - {@link UpdateAppCommandInput}
 * @returns {@link UpdateAppCommandOutput}
 * @see {@link UpdateAppCommandInput} for command's `input` shape.
 * @see {@link UpdateAppCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for AmplifyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p> A request contains unexpected data. </p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p> The service failed to perform an operation due to an internal issue. </p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p> An entity was not found during an operation. </p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p> An operation failed due to a lack of access. </p>
 *
 * @throws {@link AmplifyServiceException}
 * <p>Base exception class for all service exceptions from Amplify service.</p>
 *
 */
export class UpdateAppCommand extends $Command<
  UpdateAppCommandInput,
  UpdateAppCommandOutput,
  AmplifyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: UpdateAppCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateAppCommandInput, UpdateAppCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateAppCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyClient";
    const commandName = "UpdateAppCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateAppRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateAppResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: UpdateAppCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateAppCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAppCommandOutput> {
    return de_UpdateAppCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
