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

import { HoneycodeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HoneycodeClient";
import {
  InvokeScreenAutomationRequest,
  InvokeScreenAutomationRequestFilterSensitiveLog,
  InvokeScreenAutomationResult,
  InvokeScreenAutomationResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1InvokeScreenAutomationCommand,
  serializeAws_restJson1InvokeScreenAutomationCommand,
} from "../protocols/Aws_restJson1";

export interface InvokeScreenAutomationCommandInput extends InvokeScreenAutomationRequest {}
export interface InvokeScreenAutomationCommandOutput extends InvokeScreenAutomationResult, __MetadataBearer {}

/**
 * <p>
 *             The InvokeScreenAutomation API allows invoking an action defined in a screen in a Honeycode app.
 *             The API allows setting local variables, which can then be used in the automation being invoked.
 *             This allows automating the Honeycode app interactions to write, update or delete data in the workbook.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HoneycodeClient, InvokeScreenAutomationCommand } from "@aws-sdk/client-honeycode"; // ES Modules import
 * // const { HoneycodeClient, InvokeScreenAutomationCommand } = require("@aws-sdk/client-honeycode"); // CommonJS import
 * const client = new HoneycodeClient(config);
 * const command = new InvokeScreenAutomationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InvokeScreenAutomationCommandInput} for command's `input` shape.
 * @see {@link InvokeScreenAutomationCommandOutput} for command's `response` shape.
 * @see {@link HoneycodeClientResolvedConfig | config} for HoneycodeClient's `config` shape.
 *
 */
export class InvokeScreenAutomationCommand extends $Command<
  InvokeScreenAutomationCommandInput,
  InvokeScreenAutomationCommandOutput,
  HoneycodeClientResolvedConfig
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

  constructor(readonly input: InvokeScreenAutomationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: HoneycodeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<InvokeScreenAutomationCommandInput, InvokeScreenAutomationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, InvokeScreenAutomationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HoneycodeClient";
    const commandName = "InvokeScreenAutomationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: InvokeScreenAutomationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: InvokeScreenAutomationResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: InvokeScreenAutomationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1InvokeScreenAutomationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<InvokeScreenAutomationCommandOutput> {
    return deserializeAws_restJson1InvokeScreenAutomationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
