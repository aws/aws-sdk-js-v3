import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { DescribeServiceUpdatesMessage, ServiceUpdatesMessage } from "../models/models_0";
import {
  deserializeAws_queryDescribeServiceUpdatesCommand,
  serializeAws_queryDescribeServiceUpdatesCommand,
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

export type DescribeServiceUpdatesCommandInput = DescribeServiceUpdatesMessage;
export type DescribeServiceUpdatesCommandOutput = ServiceUpdatesMessage & __MetadataBearer;

/**
 * <p>Returns details of the service updates</p>
 */
export class DescribeServiceUpdatesCommand extends $Command<
  DescribeServiceUpdatesCommandInput,
  DescribeServiceUpdatesCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeServiceUpdatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElastiCacheClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeServiceUpdatesCommandInput, DescribeServiceUpdatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DescribeServiceUpdatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeServiceUpdatesMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ServiceUpdatesMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeServiceUpdatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeServiceUpdatesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeServiceUpdatesCommandOutput> {
    return deserializeAws_queryDescribeServiceUpdatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
