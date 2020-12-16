import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";
import { DescribeAddressesRequest, DescribeAddressesResult } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeAddressesCommand,
  serializeAws_json1_1DescribeAddressesCommand,
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

export type DescribeAddressesCommandInput = DescribeAddressesRequest;
export type DescribeAddressesCommandOutput = DescribeAddressesResult & __MetadataBearer;

/**
 * <p>Returns a specified number of <code>ADDRESS</code> objects. Calling this API in one of
 *       the US regions will return addresses from the list of all addresses associated with this
 *       account in all US regions.</p>
 */
export class DescribeAddressesCommand extends $Command<
  DescribeAddressesCommandInput,
  DescribeAddressesCommandOutput,
  SnowballClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAddressesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SnowballClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAddressesCommandInput, DescribeAddressesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowballClient";
    const commandName = "DescribeAddressesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAddressesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAddressesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAddressesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeAddressesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAddressesCommandOutput> {
    return deserializeAws_json1_1DescribeAddressesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
