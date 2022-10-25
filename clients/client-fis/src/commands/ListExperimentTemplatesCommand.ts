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

import { FisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FisClient";
import {
  ListExperimentTemplatesRequest,
  ListExperimentTemplatesRequestFilterSensitiveLog,
  ListExperimentTemplatesResponse,
  ListExperimentTemplatesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListExperimentTemplatesCommand,
  serializeAws_restJson1ListExperimentTemplatesCommand,
} from "../protocols/Aws_restJson1";

export interface ListExperimentTemplatesCommandInput extends ListExperimentTemplatesRequest {}
export interface ListExperimentTemplatesCommandOutput extends ListExperimentTemplatesResponse, __MetadataBearer {}

/**
 * <p>Lists your experiment templates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, ListExperimentTemplatesCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, ListExperimentTemplatesCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * const client = new FisClient(config);
 * const command = new ListExperimentTemplatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListExperimentTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListExperimentTemplatesCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for FisClient's `config` shape.
 *
 */
export class ListExperimentTemplatesCommand extends $Command<
  ListExperimentTemplatesCommandInput,
  ListExperimentTemplatesCommandOutput,
  FisClientResolvedConfig
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

  constructor(readonly input: ListExperimentTemplatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListExperimentTemplatesCommandInput, ListExperimentTemplatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListExperimentTemplatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FisClient";
    const commandName = "ListExperimentTemplatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListExperimentTemplatesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListExperimentTemplatesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListExperimentTemplatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListExperimentTemplatesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListExperimentTemplatesCommandOutput> {
    return deserializeAws_restJson1ListExperimentTemplatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
