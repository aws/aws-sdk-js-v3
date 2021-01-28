import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DBEngineVersionMessage, DescribeDBEngineVersionsMessage } from "../models/models_0";
import {
  deserializeAws_queryDescribeDBEngineVersionsCommand,
  serializeAws_queryDescribeDBEngineVersionsCommand,
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

export type DescribeDBEngineVersionsCommandInput = DescribeDBEngineVersionsMessage;
export type DescribeDBEngineVersionsCommandOutput = DBEngineVersionMessage & __MetadataBearer;

/**
 * <p>Returns a list of the available DB engines.</p>
 */
export class DescribeDBEngineVersionsCommand extends $Command<
  DescribeDBEngineVersionsCommandInput,
  DescribeDBEngineVersionsCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDBEngineVersionsCommandInput) {
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
  ): Handler<DescribeDBEngineVersionsCommandInput, DescribeDBEngineVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeDBEngineVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDBEngineVersionsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DBEngineVersionMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDBEngineVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeDBEngineVersionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDBEngineVersionsCommandOutput> {
    return deserializeAws_queryDescribeDBEngineVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
