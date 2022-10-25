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

import { EvidentlyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvidentlyClient";
import {
  PutProjectEventsRequest,
  PutProjectEventsRequestFilterSensitiveLog,
  PutProjectEventsResponse,
  PutProjectEventsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutProjectEventsCommand,
  serializeAws_restJson1PutProjectEventsCommand,
} from "../protocols/Aws_restJson1";

export interface PutProjectEventsCommandInput extends PutProjectEventsRequest {}
export interface PutProjectEventsCommandOutput extends PutProjectEventsResponse, __MetadataBearer {}

/**
 * <p>Sends performance events to Evidently. These events can be used to evaluate a launch or
 *       an experiment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, PutProjectEventsCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, PutProjectEventsCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * const client = new EvidentlyClient(config);
 * const command = new PutProjectEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutProjectEventsCommandInput} for command's `input` shape.
 * @see {@link PutProjectEventsCommandOutput} for command's `response` shape.
 * @see {@link EvidentlyClientResolvedConfig | config} for EvidentlyClient's `config` shape.
 *
 */
export class PutProjectEventsCommand extends $Command<
  PutProjectEventsCommandInput,
  PutProjectEventsCommandOutput,
  EvidentlyClientResolvedConfig
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

  constructor(readonly input: PutProjectEventsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EvidentlyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutProjectEventsCommandInput, PutProjectEventsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutProjectEventsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EvidentlyClient";
    const commandName = "PutProjectEventsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutProjectEventsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutProjectEventsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutProjectEventsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutProjectEventsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutProjectEventsCommandOutput> {
    return deserializeAws_restJson1PutProjectEventsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
