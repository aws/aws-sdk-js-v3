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

import { LookoutVisionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutVisionClient";
import {
  ListModelsRequest,
  ListModelsRequestFilterSensitiveLog,
  ListModelsResponse,
  ListModelsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListModelsCommand,
  serializeAws_restJson1ListModelsCommand,
} from "../protocols/Aws_restJson1";

export interface ListModelsCommandInput extends ListModelsRequest {}
export interface ListModelsCommandOutput extends ListModelsResponse, __MetadataBearer {}

/**
 * <p>Lists the versions of a model in an Amazon Lookout for Vision project.</p>
 *          <p>The <code>ListModels</code> operation is eventually consistent.
 *          Recent calls to <code>CreateModel</code> might
 *          take a while to appear in the response from <code>ListProjects</code>.</p>
 *          <p>This operation requires permissions to perform the
 *          <code>lookoutvision:ListModels</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutVisionClient, ListModelsCommand } from "@aws-sdk/client-lookoutvision"; // ES Modules import
 * // const { LookoutVisionClient, ListModelsCommand } = require("@aws-sdk/client-lookoutvision"); // CommonJS import
 * const client = new LookoutVisionClient(config);
 * const command = new ListModelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListModelsCommandInput} for command's `input` shape.
 * @see {@link ListModelsCommandOutput} for command's `response` shape.
 * @see {@link LookoutVisionClientResolvedConfig | config} for LookoutVisionClient's `config` shape.
 *
 */
export class ListModelsCommand extends $Command<
  ListModelsCommandInput,
  ListModelsCommandOutput,
  LookoutVisionClientResolvedConfig
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

  constructor(readonly input: ListModelsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutVisionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListModelsCommandInput, ListModelsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListModelsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutVisionClient";
    const commandName = "ListModelsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListModelsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListModelsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListModelsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListModelsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListModelsCommandOutput> {
    return deserializeAws_restJson1ListModelsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
