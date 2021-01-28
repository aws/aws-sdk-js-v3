import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeOptionGroupOptionsMessage, OptionGroupOptionsMessage } from "../models/models_1";
import {
  deserializeAws_queryDescribeOptionGroupOptionsCommand,
  serializeAws_queryDescribeOptionGroupOptionsCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type DescribeOptionGroupOptionsCommandInput = DescribeOptionGroupOptionsMessage;
export type DescribeOptionGroupOptionsCommandOutput = OptionGroupOptionsMessage & __MetadataBearer;

/**
 * <p>Describes all available options.</p>
 */
export class DescribeOptionGroupOptionsCommand extends $Command<
  DescribeOptionGroupOptionsCommandInput,
  DescribeOptionGroupOptionsCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeOptionGroupOptionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeOptionGroupOptionsCommandInput, DescribeOptionGroupOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeOptionGroupOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeOptionGroupOptionsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: OptionGroupOptionsMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeOptionGroupOptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeOptionGroupOptionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeOptionGroupOptionsCommandOutput> {
    return deserializeAws_queryDescribeOptionGroupOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
