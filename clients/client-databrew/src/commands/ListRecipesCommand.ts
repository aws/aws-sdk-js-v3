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

import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import {
  ListRecipesRequest,
  ListRecipesRequestFilterSensitiveLog,
  ListRecipesResponse,
  ListRecipesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListRecipesCommand,
  serializeAws_restJson1ListRecipesCommand,
} from "../protocols/Aws_restJson1";

export interface ListRecipesCommandInput extends ListRecipesRequest {}
export interface ListRecipesCommandOutput extends ListRecipesResponse, __MetadataBearer {}

/**
 * <p>Lists all of the DataBrew recipes that are defined.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, ListRecipesCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, ListRecipesCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new ListRecipesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRecipesCommandInput} for command's `input` shape.
 * @see {@link ListRecipesCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for DataBrewClient's `config` shape.
 *
 */
export class ListRecipesCommand extends $Command<
  ListRecipesCommandInput,
  ListRecipesCommandOutput,
  DataBrewClientResolvedConfig
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

  constructor(readonly input: ListRecipesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataBrewClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRecipesCommandInput, ListRecipesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListRecipesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataBrewClient";
    const commandName = "ListRecipesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRecipesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListRecipesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListRecipesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListRecipesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRecipesCommandOutput> {
    return deserializeAws_restJson1ListRecipesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
