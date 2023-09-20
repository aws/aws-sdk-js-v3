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

import { AppFabricClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppFabricClient";
import {
  StartUserAccessTasksRequest,
  StartUserAccessTasksRequestFilterSensitiveLog,
  StartUserAccessTasksResponse,
} from "../models/models_0";
import { de_StartUserAccessTasksCommand, se_StartUserAccessTasksCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartUserAccessTasksCommand}.
 */
export interface StartUserAccessTasksCommandInput extends StartUserAccessTasksRequest {}
/**
 * @public
 *
 * The output of {@link StartUserAccessTasksCommand}.
 */
export interface StartUserAccessTasksCommandOutput extends StartUserAccessTasksResponse, __MetadataBearer {}

/**
 * @public
 * <p>Starts the tasks to search user access status for a specific email address.</p>
 *          <p>The tasks are stopped when the user access status data is found. The tasks are
 *          terminated when the API calls to the application time out.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppFabricClient, StartUserAccessTasksCommand } from "@aws-sdk/client-appfabric"; // ES Modules import
 * // const { AppFabricClient, StartUserAccessTasksCommand } = require("@aws-sdk/client-appfabric"); // CommonJS import
 * const client = new AppFabricClient(config);
 * const input = { // StartUserAccessTasksRequest
 *   appBundleIdentifier: "STRING_VALUE", // required
 *   email: "STRING_VALUE", // required
 * };
 * const command = new StartUserAccessTasksCommand(input);
 * const response = await client.send(command);
 * // { // StartUserAccessTasksResponse
 * //   userAccessTasksList: [ // UserAccessTasksList
 * //     { // UserAccessTaskItem
 * //       app: "STRING_VALUE", // required
 * //       tenantId: "STRING_VALUE", // required
 * //       taskId: "STRING_VALUE",
 * //       error: { // TaskError
 * //         errorCode: "STRING_VALUE",
 * //         errorMessage: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param StartUserAccessTasksCommandInput - {@link StartUserAccessTasksCommandInput}
 * @returns {@link StartUserAccessTasksCommandOutput}
 * @see {@link StartUserAccessTasksCommandInput} for command's `input` shape.
 * @see {@link StartUserAccessTasksCommandOutput} for command's `response` shape.
 * @see {@link AppFabricClientResolvedConfig | config} for AppFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure
 *          with an internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has invalid or missing parameters.</p>
 *
 * @throws {@link AppFabricServiceException}
 * <p>Base exception class for all service exceptions from AppFabric service.</p>
 *
 */
export class StartUserAccessTasksCommand extends $Command<
  StartUserAccessTasksCommandInput,
  StartUserAccessTasksCommandOutput,
  AppFabricClientResolvedConfig
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
  constructor(readonly input: StartUserAccessTasksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppFabricClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartUserAccessTasksCommandInput, StartUserAccessTasksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartUserAccessTasksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppFabricClient";
    const commandName = "StartUserAccessTasksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartUserAccessTasksRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "FabricFrontEndService",
        operation: "StartUserAccessTasks",
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
  private serialize(input: StartUserAccessTasksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartUserAccessTasksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartUserAccessTasksCommandOutput> {
    return de_StartUserAccessTasksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
