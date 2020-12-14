import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeNodeConfigurationOptionsMessage, NodeConfigurationOptionsMessage } from "../models/models_0";
import {
  deserializeAws_queryDescribeNodeConfigurationOptionsCommand,
  serializeAws_queryDescribeNodeConfigurationOptionsCommand,
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

export type DescribeNodeConfigurationOptionsCommandInput = DescribeNodeConfigurationOptionsMessage;
export type DescribeNodeConfigurationOptionsCommandOutput = NodeConfigurationOptionsMessage & __MetadataBearer;

/**
 * <p>Returns properties of possible node configurations such as node type, number of nodes, and
 *             disk usage for the specified action type.</p>
 */
export class DescribeNodeConfigurationOptionsCommand extends $Command<
  DescribeNodeConfigurationOptionsCommandInput,
  DescribeNodeConfigurationOptionsCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeNodeConfigurationOptionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeNodeConfigurationOptionsCommandInput, DescribeNodeConfigurationOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeNodeConfigurationOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeNodeConfigurationOptionsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: NodeConfigurationOptionsMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeNodeConfigurationOptionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeNodeConfigurationOptionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeNodeConfigurationOptionsCommandOutput> {
    return deserializeAws_queryDescribeNodeConfigurationOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
