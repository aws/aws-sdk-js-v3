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
  BatchGetUserAccessTasksRequest,
  BatchGetUserAccessTasksResponse,
  BatchGetUserAccessTasksResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_BatchGetUserAccessTasksCommand, se_BatchGetUserAccessTasksCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchGetUserAccessTasksCommand}.
 */
export interface BatchGetUserAccessTasksCommandInput extends BatchGetUserAccessTasksRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetUserAccessTasksCommand}.
 */
export interface BatchGetUserAccessTasksCommandOutput extends BatchGetUserAccessTasksResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets user access details in a batch request.</p>
 *          <p>This action polls data from the tasks that are kicked off by the
 *             <code>StartUserAccessTasks</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppFabricClient, BatchGetUserAccessTasksCommand } from "@aws-sdk/client-appfabric"; // ES Modules import
 * // const { AppFabricClient, BatchGetUserAccessTasksCommand } = require("@aws-sdk/client-appfabric"); // CommonJS import
 * const client = new AppFabricClient(config);
 * const input = { // BatchGetUserAccessTasksRequest
 *   appBundleIdentifier: "STRING_VALUE", // required
 *   taskIdList: [ // TaskIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetUserAccessTasksCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetUserAccessTasksResponse
 * //   userAccessResultsList: [ // UserAccessResultsList
 * //     { // UserAccessResultItem
 * //       app: "STRING_VALUE",
 * //       tenantId: "STRING_VALUE",
 * //       tenantDisplayName: "STRING_VALUE",
 * //       taskId: "STRING_VALUE",
 * //       resultStatus: "IN_PROGRESS" || "COMPLETED" || "FAILED" || "EXPIRED",
 * //       email: "STRING_VALUE",
 * //       userId: "STRING_VALUE",
 * //       userFullName: "STRING_VALUE",
 * //       userFirstName: "STRING_VALUE",
 * //       userLastName: "STRING_VALUE",
 * //       userStatus: "STRING_VALUE",
 * //       taskError: { // TaskError
 * //         errorCode: "STRING_VALUE",
 * //         errorMessage: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetUserAccessTasksCommandInput - {@link BatchGetUserAccessTasksCommandInput}
 * @returns {@link BatchGetUserAccessTasksCommandOutput}
 * @see {@link BatchGetUserAccessTasksCommandInput} for command's `input` shape.
 * @see {@link BatchGetUserAccessTasksCommandOutput} for command's `response` shape.
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
export class BatchGetUserAccessTasksCommand extends $Command<
  BatchGetUserAccessTasksCommandInput,
  BatchGetUserAccessTasksCommandOutput,
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
  constructor(readonly input: BatchGetUserAccessTasksCommandInput) {
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
  ): Handler<BatchGetUserAccessTasksCommandInput, BatchGetUserAccessTasksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetUserAccessTasksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppFabricClient";
    const commandName = "BatchGetUserAccessTasksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: BatchGetUserAccessTasksResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "FabricFrontEndService",
        operation: "BatchGetUserAccessTasks",
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
  private serialize(input: BatchGetUserAccessTasksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchGetUserAccessTasksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetUserAccessTasksCommandOutput> {
    return de_BatchGetUserAccessTasksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
