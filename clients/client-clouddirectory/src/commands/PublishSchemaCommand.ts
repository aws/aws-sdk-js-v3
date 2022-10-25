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

import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import {
  PublishSchemaRequest,
  PublishSchemaRequestFilterSensitiveLog,
  PublishSchemaResponse,
  PublishSchemaResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PublishSchemaCommand,
  serializeAws_restJson1PublishSchemaCommand,
} from "../protocols/Aws_restJson1";

export interface PublishSchemaCommandInput extends PublishSchemaRequest {}
export interface PublishSchemaCommandOutput extends PublishSchemaResponse, __MetadataBearer {}

/**
 * <p>Publishes a development schema with a major version and a recommended minor version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, PublishSchemaCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, PublishSchemaCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new PublishSchemaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PublishSchemaCommandInput} for command's `input` shape.
 * @see {@link PublishSchemaCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for CloudDirectoryClient's `config` shape.
 *
 */
export class PublishSchemaCommand extends $Command<
  PublishSchemaCommandInput,
  PublishSchemaCommandOutput,
  CloudDirectoryClientResolvedConfig
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

  constructor(readonly input: PublishSchemaCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PublishSchemaCommandInput, PublishSchemaCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PublishSchemaCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudDirectoryClient";
    const commandName = "PublishSchemaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PublishSchemaRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PublishSchemaResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PublishSchemaCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PublishSchemaCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PublishSchemaCommandOutput> {
    return deserializeAws_restJson1PublishSchemaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
