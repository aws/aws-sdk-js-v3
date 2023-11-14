// smithy-typescript generated code
import { getEndpointDiscoveryPlugin } from "@aws-sdk/middleware-endpoint-discovery";
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

import { ExecuteScheduledQueryRequest, ExecuteScheduledQueryRequestFilterSensitiveLog } from "../models/models_0";
import { de_ExecuteScheduledQueryCommand, se_ExecuteScheduledQueryCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, TimestreamQueryClientResolvedConfig } from "../TimestreamQueryClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ExecuteScheduledQueryCommand}.
 */
export interface ExecuteScheduledQueryCommandInput extends ExecuteScheduledQueryRequest {}
/**
 * @public
 *
 * The output of {@link ExecuteScheduledQueryCommand}.
 */
export interface ExecuteScheduledQueryCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p> You can use this API to run a scheduled query manually. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamQueryClient, ExecuteScheduledQueryCommand } from "@aws-sdk/client-timestream-query"; // ES Modules import
 * // const { TimestreamQueryClient, ExecuteScheduledQueryCommand } = require("@aws-sdk/client-timestream-query"); // CommonJS import
 * const client = new TimestreamQueryClient(config);
 * const input = { // ExecuteScheduledQueryRequest
 *   ScheduledQueryArn: "STRING_VALUE", // required
 *   InvocationTime: new Date("TIMESTAMP"), // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new ExecuteScheduledQueryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ExecuteScheduledQueryCommandInput - {@link ExecuteScheduledQueryCommandInput}
 * @returns {@link ExecuteScheduledQueryCommandOutput}
 * @see {@link ExecuteScheduledQueryCommandInput} for command's `input` shape.
 * @see {@link ExecuteScheduledQueryCommandOutput} for command's `response` shape.
 * @see {@link TimestreamQueryClientResolvedConfig | config} for TimestreamQueryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You are not authorized to perform this action. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *             Timestream was unable to fully process this request because of an internal
 *             server error. </p>
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *  <p>The requested endpoint was not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> Invalid or malformed request. </p>
 *
 * @throws {@link TimestreamQueryServiceException}
 * <p>Base exception class for all service exceptions from TimestreamQuery service.</p>
 *
 */
export class ExecuteScheduledQueryCommand extends $Command<
  ExecuteScheduledQueryCommandInput,
  ExecuteScheduledQueryCommandOutput,
  TimestreamQueryClientResolvedConfig
> {
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
  constructor(readonly input: ExecuteScheduledQueryCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TimestreamQueryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExecuteScheduledQueryCommandInput, ExecuteScheduledQueryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ExecuteScheduledQueryCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(
      getEndpointDiscoveryPlugin(configuration, { clientStack, options, isDiscoveredEndpointRequired: true })
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TimestreamQueryClient";
    const commandName = "ExecuteScheduledQueryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExecuteScheduledQueryRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Timestream_20181101",
        operation: "ExecuteScheduledQuery",
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
  private serialize(input: ExecuteScheduledQueryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ExecuteScheduledQueryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExecuteScheduledQueryCommandOutput> {
    return de_ExecuteScheduledQueryCommand(output, context);
  }
}
