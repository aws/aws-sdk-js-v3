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

import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import {
  BatchGetAccountStatusRequest,
  BatchGetAccountStatusRequestFilterSensitiveLog,
  BatchGetAccountStatusResponse,
  BatchGetAccountStatusResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1BatchGetAccountStatusCommand,
  serializeAws_restJson1BatchGetAccountStatusCommand,
} from "../protocols/Aws_restJson1";

export interface BatchGetAccountStatusCommandInput extends BatchGetAccountStatusRequest {}
export interface BatchGetAccountStatusCommandOutput extends BatchGetAccountStatusResponse, __MetadataBearer {}

/**
 * <p>Retrieves the Amazon Inspector status of multiple Amazon Web Services accounts within your environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, BatchGetAccountStatusCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, BatchGetAccountStatusCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * const client = new Inspector2Client(config);
 * const command = new BatchGetAccountStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetAccountStatusCommandInput} for command's `input` shape.
 * @see {@link BatchGetAccountStatusCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 */
export class BatchGetAccountStatusCommand extends $Command<
  BatchGetAccountStatusCommandInput,
  BatchGetAccountStatusCommandOutput,
  Inspector2ClientResolvedConfig
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

  constructor(readonly input: BatchGetAccountStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Inspector2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetAccountStatusCommandInput, BatchGetAccountStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetAccountStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Inspector2Client";
    const commandName = "BatchGetAccountStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchGetAccountStatusRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchGetAccountStatusResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchGetAccountStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchGetAccountStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetAccountStatusCommandOutput> {
    return deserializeAws_restJson1BatchGetAccountStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
