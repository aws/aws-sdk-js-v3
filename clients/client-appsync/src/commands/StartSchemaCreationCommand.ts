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
  StartSchemaCreationRequest,
  StartSchemaCreationRequestFilterSensitiveLog,
  StartSchemaCreationResponse,
  StartSchemaCreationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1StartSchemaCreationCommand,
  serializeAws_restJson1StartSchemaCreationCommand,
} from "../protocols/Aws_restJson1";

export interface StartSchemaCreationCommandInput extends StartSchemaCreationRequest {}
export interface StartSchemaCreationCommandOutput extends StartSchemaCreationResponse, __MetadataBearer {}

/**
 * <p>Adds a new schema to your GraphQL API.</p>
 *          <p>This operation is asynchronous. Use  to determine when it has
 *          completed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, StartSchemaCreationCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, StartSchemaCreationCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new StartSchemaCreationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartSchemaCreationCommandInput} for command's `input` shape.
 * @see {@link StartSchemaCreationCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 */
export class StartSchemaCreationCommand extends $Command<
  StartSchemaCreationCommandInput,
  StartSchemaCreationCommandOutput,
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

  constructor(readonly input: StartSchemaCreationCommandInput) {
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
  ): Handler<StartSchemaCreationCommandInput, StartSchemaCreationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartSchemaCreationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppSyncClient";
    const commandName = "StartSchemaCreationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartSchemaCreationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartSchemaCreationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartSchemaCreationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartSchemaCreationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartSchemaCreationCommandOutput> {
    return deserializeAws_restJson1StartSchemaCreationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
