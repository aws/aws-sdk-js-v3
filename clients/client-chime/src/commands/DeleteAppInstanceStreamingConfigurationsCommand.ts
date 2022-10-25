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

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  DeleteAppInstanceStreamingConfigurationsRequest,
  DeleteAppInstanceStreamingConfigurationsRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteAppInstanceStreamingConfigurationsCommand,
  serializeAws_restJson1DeleteAppInstanceStreamingConfigurationsCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteAppInstanceStreamingConfigurationsCommandInput
  extends DeleteAppInstanceStreamingConfigurationsRequest {}
export interface DeleteAppInstanceStreamingConfigurationsCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the streaming configurations of an <code>AppInstance</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DeleteAppInstanceStreamingConfigurationsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DeleteAppInstanceStreamingConfigurationsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new DeleteAppInstanceStreamingConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAppInstanceStreamingConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DeleteAppInstanceStreamingConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 */
export class DeleteAppInstanceStreamingConfigurationsCommand extends $Command<
  DeleteAppInstanceStreamingConfigurationsCommandInput,
  DeleteAppInstanceStreamingConfigurationsCommandOutput,
  ChimeClientResolvedConfig
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

  constructor(readonly input: DeleteAppInstanceStreamingConfigurationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteAppInstanceStreamingConfigurationsCommandInput,
    DeleteAppInstanceStreamingConfigurationsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DeleteAppInstanceStreamingConfigurationsCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "DeleteAppInstanceStreamingConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteAppInstanceStreamingConfigurationsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteAppInstanceStreamingConfigurationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteAppInstanceStreamingConfigurationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteAppInstanceStreamingConfigurationsCommandOutput> {
    return deserializeAws_restJson1DeleteAppInstanceStreamingConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
