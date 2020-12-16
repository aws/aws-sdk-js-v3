import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { DescribeDomainControllersRequest, DescribeDomainControllersResult } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeDomainControllersCommand,
  serializeAws_json1_1DescribeDomainControllersCommand,
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

export type DescribeDomainControllersCommandInput = DescribeDomainControllersRequest;
export type DescribeDomainControllersCommandOutput = DescribeDomainControllersResult & __MetadataBearer;

/**
 * <p>Provides information about any domain controllers in your directory.</p>
 */
export class DescribeDomainControllersCommand extends $Command<
  DescribeDomainControllersCommandInput,
  DescribeDomainControllersCommandOutput,
  DirectoryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDomainControllersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDomainControllersCommandInput, DescribeDomainControllersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "DescribeDomainControllersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDomainControllersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDomainControllersResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDomainControllersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeDomainControllersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDomainControllersCommandOutput> {
    return deserializeAws_json1_1DescribeDomainControllersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
