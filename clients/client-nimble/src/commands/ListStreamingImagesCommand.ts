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
  ListStreamingImagesRequest,
  ListStreamingImagesRequestFilterSensitiveLog,
  ListStreamingImagesResponse,
  ListStreamingImagesResponseFilterSensitiveLog,
} from "../models/models_0";
import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import {
  deserializeAws_restJson1ListStreamingImagesCommand,
  serializeAws_restJson1ListStreamingImagesCommand,
} from "../protocols/Aws_restJson1";

export interface ListStreamingImagesCommandInput extends ListStreamingImagesRequest {}
export interface ListStreamingImagesCommandOutput extends ListStreamingImagesResponse, __MetadataBearer {}

/**
 * <p>List the streaming image resources available to this studio.</p>
 *         <p>This list will contain both images provided by Amazon Web Services, as well as
 *             streaming images that you have created in your studio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, ListStreamingImagesCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, ListStreamingImagesCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new ListStreamingImagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStreamingImagesCommandInput} for command's `input` shape.
 * @see {@link ListStreamingImagesCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for NimbleClient's `config` shape.
 *
 */
export class ListStreamingImagesCommand extends $Command<
  ListStreamingImagesCommandInput,
  ListStreamingImagesCommandOutput,
  NimbleClientResolvedConfig
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

  constructor(readonly input: ListStreamingImagesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NimbleClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListStreamingImagesCommandInput, ListStreamingImagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListStreamingImagesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "ListStreamingImagesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListStreamingImagesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListStreamingImagesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListStreamingImagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListStreamingImagesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListStreamingImagesCommandOutput> {
    return deserializeAws_restJson1ListStreamingImagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
