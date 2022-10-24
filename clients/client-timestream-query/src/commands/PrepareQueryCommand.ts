// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getEndpointDiscoveryPlugin } from "@aws-sdk/middleware-endpoint-discovery";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  PrepareQueryRequest,
  PrepareQueryRequestFilterSensitiveLog,
  PrepareQueryResponse,
  PrepareQueryResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0PrepareQueryCommand,
  serializeAws_json1_0PrepareQueryCommand,
} from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, TimestreamQueryClientResolvedConfig } from "../TimestreamQueryClient";

export interface PrepareQueryCommandInput extends PrepareQueryRequest {}
export interface PrepareQueryCommandOutput extends PrepareQueryResponse, __MetadataBearer {}

/**
 * <p>A synchronous operation that allows you to submit a query with parameters to be stored
 *             by Timestream for later running. Timestream only supports using this operation with the
 *                 <code>PrepareQueryRequest$ValidateOnly</code> set to <code>true</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamQueryClient, PrepareQueryCommand } from "@aws-sdk/client-timestream-query"; // ES Modules import
 * // const { TimestreamQueryClient, PrepareQueryCommand } = require("@aws-sdk/client-timestream-query"); // CommonJS import
 * const client = new TimestreamQueryClient(config);
 * const command = new PrepareQueryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PrepareQueryCommandInput} for command's `input` shape.
 * @see {@link PrepareQueryCommandOutput} for command's `response` shape.
 * @see {@link TimestreamQueryClientResolvedConfig | config} for TimestreamQueryClient's `config` shape.
 *
 */
export class PrepareQueryCommand extends $Command<
  PrepareQueryCommandInput,
  PrepareQueryCommandOutput,
  TimestreamQueryClientResolvedConfig
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

  constructor(readonly input: PrepareQueryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TimestreamQueryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PrepareQueryCommandInput, PrepareQueryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PrepareQueryCommand.getEndpointParameterInstructions()));
    this.middlewareStack.use(
      getEndpointDiscoveryPlugin(configuration, { clientStack, options, isDiscoveredEndpointRequired: true })
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TimestreamQueryClient";
    const commandName = "PrepareQueryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PrepareQueryRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PrepareQueryResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PrepareQueryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0PrepareQueryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PrepareQueryCommandOutput> {
    return deserializeAws_json1_0PrepareQueryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
