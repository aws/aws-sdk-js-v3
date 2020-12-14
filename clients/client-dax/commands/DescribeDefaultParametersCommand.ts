import { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient";
import { DescribeDefaultParametersRequest, DescribeDefaultParametersResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeDefaultParametersCommand,
  serializeAws_json1_1DescribeDefaultParametersCommand,
} from "../protocols/Aws_json1_1";
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

export type DescribeDefaultParametersCommandInput = DescribeDefaultParametersRequest;
export type DescribeDefaultParametersCommandOutput = DescribeDefaultParametersResponse & __MetadataBearer;

/**
 * <p>Returns the default system parameter information for the DAX caching
 *             software.</p>
 */
export class DescribeDefaultParametersCommand extends $Command<
  DescribeDefaultParametersCommandInput,
  DescribeDefaultParametersCommandOutput,
  DAXClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDefaultParametersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DAXClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDefaultParametersCommandInput, DescribeDefaultParametersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DAXClient";
    const commandName = "DescribeDefaultParametersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDefaultParametersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDefaultParametersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDefaultParametersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeDefaultParametersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDefaultParametersCommandOutput> {
    return deserializeAws_json1_1DescribeDefaultParametersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
