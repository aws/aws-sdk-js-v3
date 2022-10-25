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

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import {
  GetIntrospectionSchemaRequest,
  GetIntrospectionSchemaRequestFilterSensitiveLog,
  GetIntrospectionSchemaResponse,
  GetIntrospectionSchemaResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetIntrospectionSchemaCommand,
  serializeAws_restJson1GetIntrospectionSchemaCommand,
} from "../protocols/Aws_restJson1";

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
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 */
export class GetIntrospectionSchemaCommand extends $Command<
  GetIntrospectionSchemaCommandInput,
  GetIntrospectionSchemaCommandOutput,
  AppSyncClientResolvedConfig
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetIntrospectionSchemaCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppSyncClient";
    const commandName = "GetIntrospectionSchemaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetIntrospectionSchemaRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetIntrospectionSchemaResponseFilterSensitiveLog,
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
