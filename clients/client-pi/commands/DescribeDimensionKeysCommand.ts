import { PIClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PIClient";
import { DescribeDimensionKeysRequest, DescribeDimensionKeysResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeDimensionKeysCommand,
  serializeAws_json1_1DescribeDimensionKeysCommand,
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

export type DescribeDimensionKeysCommandInput = DescribeDimensionKeysRequest;
export type DescribeDimensionKeysCommandOutput = DescribeDimensionKeysResponse & __MetadataBearer;

/**
 * <p>For a specific time period, retrieve the top <code>N</code> dimension keys for a
 *       metric.</p>
 */
export class DescribeDimensionKeysCommand extends $Command<
  DescribeDimensionKeysCommandInput,
  DescribeDimensionKeysCommandOutput,
  PIClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDimensionKeysCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PIClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDimensionKeysCommandInput, DescribeDimensionKeysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PIClient";
    const commandName = "DescribeDimensionKeysCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDimensionKeysRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDimensionKeysResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDimensionKeysCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeDimensionKeysCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDimensionKeysCommandOutput> {
    return deserializeAws_json1_1DescribeDimensionKeysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
