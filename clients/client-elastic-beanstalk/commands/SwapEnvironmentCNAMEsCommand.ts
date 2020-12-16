import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { SwapEnvironmentCNAMEsMessage } from "../models/models_0";
import {
  deserializeAws_querySwapEnvironmentCNAMEsCommand,
  serializeAws_querySwapEnvironmentCNAMEsCommand,
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

export type SwapEnvironmentCNAMEsCommandInput = SwapEnvironmentCNAMEsMessage;
export type SwapEnvironmentCNAMEsCommandOutput = __MetadataBearer;

/**
 * <p>Swaps the CNAMEs of two environments.</p>
 */
export class SwapEnvironmentCNAMEsCommand extends $Command<
  SwapEnvironmentCNAMEsCommandInput,
  SwapEnvironmentCNAMEsCommandOutput,
  ElasticBeanstalkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SwapEnvironmentCNAMEsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticBeanstalkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SwapEnvironmentCNAMEsCommandInput, SwapEnvironmentCNAMEsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "SwapEnvironmentCNAMEsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SwapEnvironmentCNAMEsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SwapEnvironmentCNAMEsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySwapEnvironmentCNAMEsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SwapEnvironmentCNAMEsCommandOutput> {
    return deserializeAws_querySwapEnvironmentCNAMEsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
