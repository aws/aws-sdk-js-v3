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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { AmplifyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyClient";
import { ListBranchesRequest, ListBranchesResult, ListBranchesResultFilterSensitiveLog } from "../models/models_0";
import { de_ListBranchesCommand, se_ListBranchesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListBranchesCommand}.
 */
export interface ListBranchesCommandInput extends ListBranchesRequest {}
/**
 * @public
 *
 * The output of {@link ListBranchesCommand}.
 */
export interface ListBranchesCommandOutput extends ListBranchesResult, __MetadataBearer {}

/**
 * @public
 * <p> Lists the branches of an Amplify app. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, ListBranchesCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, ListBranchesCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const input = { // ListBranchesRequest
 *   appId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListBranchesCommand(input);
 * const response = await client.send(command);
 * // { // ListBranchesResult
 * //   branches: [ // Branches // required
 * //     { // Branch
 * //       branchArn: "STRING_VALUE", // required
 * //       branchName: "STRING_VALUE", // required
 * //       description: "STRING_VALUE", // required
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       stage: "PRODUCTION" || "BETA" || "DEVELOPMENT" || "EXPERIMENTAL" || "PULL_REQUEST", // required
 * //       displayName: "STRING_VALUE", // required
 * //       enableNotification: true || false, // required
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       environmentVariables: { // EnvironmentVariables // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       enableAutoBuild: true || false, // required
 * //       customDomains: [ // CustomDomains // required
 * //         "STRING_VALUE",
 * //       ],
 * //       framework: "STRING_VALUE", // required
 * //       activeJobId: "STRING_VALUE", // required
 * //       totalNumberOfJobs: "STRING_VALUE", // required
 * //       enableBasicAuth: true || false, // required
 * //       enablePerformanceMode: true || false,
 * //       thumbnailUrl: "STRING_VALUE",
 * //       basicAuthCredentials: "STRING_VALUE",
 * //       buildSpec: "STRING_VALUE",
 * //       ttl: "STRING_VALUE", // required
 * //       associatedResources: [ // AssociatedResources
 * //         "STRING_VALUE",
 * //       ],
 * //       enablePullRequestPreview: true || false, // required
 * //       pullRequestEnvironmentName: "STRING_VALUE",
 * //       destinationBranch: "STRING_VALUE",
 * //       sourceBranch: "STRING_VALUE",
 * //       backendEnvironmentArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBranchesCommandInput - {@link ListBranchesCommandInput}
 * @returns {@link ListBranchesCommandOutput}
 * @see {@link ListBranchesCommandInput} for command's `input` shape.
 * @see {@link ListBranchesCommandOutput} for command's `response` shape.
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
export class ListBranchesCommand extends $Command<
  ListBranchesCommandInput,
  ListBranchesCommandOutput,
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
  constructor(readonly input: ListBranchesCommandInput) {
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
  ): Handler<ListBranchesCommandInput, ListBranchesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListBranchesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyClient";
    const commandName = "ListBranchesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListBranchesResultFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "Amplify",
        operation: "ListBranches",
      },
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
  private serialize(input: ListBranchesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListBranchesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBranchesCommandOutput> {
    return de_ListBranchesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
