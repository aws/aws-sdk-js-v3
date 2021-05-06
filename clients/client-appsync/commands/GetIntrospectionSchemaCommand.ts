import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { GetIntrospectionSchemaRequest, GetIntrospectionSchemaResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetIntrospectionSchemaCommand,
  serializeAws_restJson1GetIntrospectionSchemaCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface GetIntrospectionSchemaCommandInput extends GetIntrospectionSchemaRequest {}
export interface GetIntrospectionSchemaCommandOutput extends GetIntrospectionSchemaResponse, __MetadataBearer {}

/**
 * <p>Retrieves the introspection schema for a GraphQL API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, GetIntrospectionSchemaCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, GetIntrospectionSchemaCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new GetIntrospectionSchemaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetIntrospectionSchemaCommandInput} for command's `input` shape.
 * @see {@link GetIntrospectionSchemaCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetIntrospectionSchemaCommand extends $Command<
  GetIntrospectionSchemaCommandInput,
  GetIntrospectionSchemaCommandOutput,
  AppSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetIntrospectionSchemaCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetIntrospectionSchemaCommandInput, GetIntrospectionSchemaCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppSyncClient";
    const commandName = "GetIntrospectionSchemaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetIntrospectionSchemaRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetIntrospectionSchemaResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetIntrospectionSchemaCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetIntrospectionSchemaCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetIntrospectionSchemaCommandOutput> {
    return deserializeAws_restJson1GetIntrospectionSchemaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
