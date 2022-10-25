// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
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
  GetDiscoveredSchemaRequest,
  GetDiscoveredSchemaRequestFilterSensitiveLog,
  GetDiscoveredSchemaResponse,
  GetDiscoveredSchemaResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetDiscoveredSchemaCommand,
  serializeAws_restJson1GetDiscoveredSchemaCommand,
} from "../protocols/Aws_restJson1";
import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";

export interface GetDiscoveredSchemaCommandInput extends GetDiscoveredSchemaRequest {}
export interface GetDiscoveredSchemaCommandOutput extends GetDiscoveredSchemaResponse, __MetadataBearer {}

/**
 * <p>Get the discovered schema that was generated based on sampled events.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, GetDiscoveredSchemaCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, GetDiscoveredSchemaCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const command = new GetDiscoveredSchemaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDiscoveredSchemaCommandInput} for command's `input` shape.
 * @see {@link GetDiscoveredSchemaCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for SchemasClient's `config` shape.
 *
 */
export class GetDiscoveredSchemaCommand extends $Command<
  GetDiscoveredSchemaCommandInput,
  GetDiscoveredSchemaCommandOutput,
  SchemasClientResolvedConfig
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

  constructor(readonly input: GetDiscoveredSchemaCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SchemasClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDiscoveredSchemaCommandInput, GetDiscoveredSchemaCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDiscoveredSchemaCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SchemasClient";
    const commandName = "GetDiscoveredSchemaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDiscoveredSchemaRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetDiscoveredSchemaResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDiscoveredSchemaCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetDiscoveredSchemaCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDiscoveredSchemaCommandOutput> {
    return deserializeAws_restJson1GetDiscoveredSchemaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
