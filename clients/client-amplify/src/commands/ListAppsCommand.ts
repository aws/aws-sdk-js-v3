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
import { ListAppsRequest, ListAppsResult, ListAppsResultFilterSensitiveLog } from "../models/models_0";
import { de_ListAppsCommand, se_ListAppsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAppsCommand}.
 */
export interface ListAppsCommandInput extends ListAppsRequest {}
/**
 * @public
 *
 * The output of {@link ListAppsCommand}.
 */
export interface ListAppsCommandOutput extends ListAppsResult, __MetadataBearer {}

/**
 * @public
 * <p> Returns a list of the existing Amplify apps. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, ListAppsCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, ListAppsCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const input = { // ListAppsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAppsCommand(input);
 * const response = await client.send(command);
 * // { // ListAppsResult
 * //   apps: [ // Apps // required
 * //     { // App
 * //       appId: "STRING_VALUE", // required
 * //       appArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       description: "STRING_VALUE", // required
 * //       repository: "STRING_VALUE", // required
 * //       platform: "WEB" || "WEB_DYNAMIC" || "WEB_COMPUTE", // required
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       iamServiceRoleArn: "STRING_VALUE",
 * //       environmentVariables: { // EnvironmentVariables // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       defaultDomain: "STRING_VALUE", // required
 * //       enableBranchAutoBuild: true || false, // required
 * //       enableBranchAutoDeletion: true || false,
 * //       enableBasicAuth: true || false, // required
 * //       basicAuthCredentials: "STRING_VALUE",
 * //       customRules: [ // CustomRules
 * //         { // CustomRule
 * //           source: "STRING_VALUE", // required
 * //           target: "STRING_VALUE", // required
 * //           status: "STRING_VALUE",
 * //           condition: "STRING_VALUE",
 * //         },
 * //       ],
 * //       productionBranch: { // ProductionBranch
 * //         lastDeployTime: new Date("TIMESTAMP"),
 * //         status: "STRING_VALUE",
 * //         thumbnailUrl: "STRING_VALUE",
 * //         branchName: "STRING_VALUE",
 * //       },
 * //       buildSpec: "STRING_VALUE",
 * //       customHeaders: "STRING_VALUE",
 * //       enableAutoBranchCreation: true || false,
 * //       autoBranchCreationPatterns: [ // AutoBranchCreationPatterns
 * //         "STRING_VALUE",
 * //       ],
 * //       autoBranchCreationConfig: { // AutoBranchCreationConfig
 * //         stage: "PRODUCTION" || "BETA" || "DEVELOPMENT" || "EXPERIMENTAL" || "PULL_REQUEST",
 * //         framework: "STRING_VALUE",
 * //         enableAutoBuild: true || false,
 * //         environmentVariables: {
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         basicAuthCredentials: "STRING_VALUE",
 * //         enableBasicAuth: true || false,
 * //         enablePerformanceMode: true || false,
 * //         buildSpec: "STRING_VALUE",
 * //         enablePullRequestPreview: true || false,
 * //         pullRequestEnvironmentName: "STRING_VALUE",
 * //       },
 * //       repositoryCloneMethod: "SSH" || "TOKEN" || "SIGV4",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAppsCommandInput - {@link ListAppsCommandInput}
 * @returns {@link ListAppsCommandOutput}
 * @see {@link ListAppsCommandInput} for command's `input` shape.
 * @see {@link ListAppsCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for AmplifyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p> A request contains unexpected data. </p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p> The service failed to perform an operation due to an internal issue. </p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p> An operation failed due to a lack of access. </p>
 *
 * @throws {@link AmplifyServiceException}
 * <p>Base exception class for all service exceptions from Amplify service.</p>
 *
 */
export class ListAppsCommand extends $Command<
  ListAppsCommandInput,
  ListAppsCommandOutput,
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
  constructor(readonly input: ListAppsCommandInput) {
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
  ): Handler<ListAppsCommandInput, ListAppsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListAppsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyClient";
    const commandName = "ListAppsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListAppsResultFilterSensitiveLog,
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
  private serialize(input: ListAppsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAppsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAppsCommandOutput> {
    return de_ListAppsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
