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
  ListPipesRequest,
  ListPipesRequestFilterSensitiveLog,
  ListPipesResponse,
  ListPipesResponseFilterSensitiveLog,
} from "../models/models_0";
import { PipesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PipesClient";
import {
  deserializeAws_restJson1ListPipesCommand,
  serializeAws_restJson1ListPipesCommand,
} from "../protocols/Aws_restJson1";

export interface ListPipesCommandInput extends ListPipesRequest {}
export interface ListPipesCommandOutput extends ListPipesResponse, __MetadataBearer {}

/**
 * <p>Get the pipes associated with this account. For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html">Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PipesClient, ListPipesCommand } from "@aws-sdk/client-pipes"; // ES Modules import
 * // const { PipesClient, ListPipesCommand } = require("@aws-sdk/client-pipes"); // CommonJS import
 * const client = new PipesClient(config);
 * const command = new ListPipesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPipesCommandInput} for command's `input` shape.
 * @see {@link ListPipesCommandOutput} for command's `response` shape.
 * @see {@link PipesClientResolvedConfig | config} for PipesClient's `config` shape.
 *
 */
export class ListPipesCommand extends $Command<
  ListPipesCommandInput,
  ListPipesCommandOutput,
  PipesClientResolvedConfig
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

  constructor(readonly input: ListPipesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PipesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPipesCommandInput, ListPipesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListPipesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PipesClient";
    const commandName = "ListPipesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPipesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListPipesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPipesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListPipesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPipesCommandOutput> {
    return deserializeAws_restJson1ListPipesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
