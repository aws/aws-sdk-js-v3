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

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { CreateLogStreamRequest } from "../models/models_0";
import { de_CreateLogStreamCommand, se_CreateLogStreamCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateLogStreamCommand}.
 */
export interface CreateLogStreamCommandInput extends CreateLogStreamRequest {}
/**
 * @public
 *
 * The output of {@link CreateLogStreamCommand}.
 */
export interface CreateLogStreamCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Creates a log stream for the specified log group. A log stream is a sequence of log events
 *       that originate from a single source, such as an application instance or a resource that is
 *       being monitored.</p>
 *          <p>There is no limit on the number of log streams that you can create for a log group. There is a limit
 *     of 50 TPS on <code>CreateLogStream</code> operations, after which transactions are throttled.</p>
 *          <p>You must use the following guidelines when naming a log stream:</p>
 *          <ul>
 *             <li>
 *                <p>Log stream names must be unique within the log group.</p>
 *             </li>
 *             <li>
 *                <p>Log stream names can be between 1 and 512 characters long.</p>
 *             </li>
 *             <li>
 *                <p>Don't use ':' (colon) or '*' (asterisk) characters.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, CreateLogStreamCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, CreateLogStreamCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // CreateLogStreamRequest
 *   logGroupName: "STRING_VALUE", // required
 *   logStreamName: "STRING_VALUE", // required
 * };
 * const command = new CreateLogStreamCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateLogStreamCommandInput - {@link CreateLogStreamCommandInput}
 * @returns {@link CreateLogStreamCommandOutput}
 * @see {@link CreateLogStreamCommandInput} for command's `input` shape.
 * @see {@link CreateLogStreamCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified resource already exists.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 */
export class CreateLogStreamCommand extends $Command<
  CreateLogStreamCommandInput,
  CreateLogStreamCommandOutput,
  CloudWatchLogsClientResolvedConfig
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
  constructor(readonly input: CreateLogStreamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateLogStreamCommandInput, CreateLogStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateLogStreamCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchLogsClient";
    const commandName = "CreateLogStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Logs_20140328",
        operation: "CreateLogStream",
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
  private serialize(input: CreateLogStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateLogStreamCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLogStreamCommandOutput> {
    return de_CreateLogStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
