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
  PublishMetricsInput,
  PublishMetricsInputFilterSensitiveLog,
  PublishMetricsOutput,
  PublishMetricsOutputFilterSensitiveLog,
} from "../models/models_0";
import { MWAAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MWAAClient";
import {
  deserializeAws_restJson1PublishMetricsCommand,
  serializeAws_restJson1PublishMetricsCommand,
} from "../protocols/Aws_restJson1";

export interface PublishMetricsCommandInput extends PublishMetricsInput {}
export interface PublishMetricsCommandOutput extends PublishMetricsOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>Internal only</b>. Publishes environment health metrics to Amazon CloudWatch.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MWAAClient, PublishMetricsCommand } from "@aws-sdk/client-mwaa"; // ES Modules import
 * // const { MWAAClient, PublishMetricsCommand } = require("@aws-sdk/client-mwaa"); // CommonJS import
 * const client = new MWAAClient(config);
 * const command = new PublishMetricsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PublishMetricsCommandInput} for command's `input` shape.
 * @see {@link PublishMetricsCommandOutput} for command's `response` shape.
 * @see {@link MWAAClientResolvedConfig | config} for MWAAClient's `config` shape.
 *
 */
export class PublishMetricsCommand extends $Command<
  PublishMetricsCommandInput,
  PublishMetricsCommandOutput,
  MWAAClientResolvedConfig
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

  constructor(readonly input: PublishMetricsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MWAAClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PublishMetricsCommandInput, PublishMetricsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PublishMetricsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MWAAClient";
    const commandName = "PublishMetricsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PublishMetricsInputFilterSensitiveLog,
      outputFilterSensitiveLog: PublishMetricsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PublishMetricsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PublishMetricsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PublishMetricsCommandOutput> {
    return deserializeAws_restJson1PublishMetricsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
