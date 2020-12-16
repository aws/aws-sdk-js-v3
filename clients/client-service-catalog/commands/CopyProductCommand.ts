import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { CopyProductInput, CopyProductOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CopyProductCommand,
  serializeAws_json1_1CopyProductCommand,
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

export type CopyProductCommandInput = CopyProductInput;
export type CopyProductCommandOutput = CopyProductOutput & __MetadataBearer;

/**
 * <p>Copies the specified source product to the specified target product or a new product.</p>
 *          <p>You can copy a product to the same account or another account.
 *          You can copy a product to the same region or another region.</p>
 *          <p>This operation is performed asynchronously. To track the progress of the
 *          operation, use <a>DescribeCopyProductStatus</a>.</p>
 */
export class CopyProductCommand extends $Command<
  CopyProductCommandInput,
  CopyProductCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CopyProductCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CopyProductCommandInput, CopyProductCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "CopyProductCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CopyProductInput.filterSensitiveLog,
      outputFilterSensitiveLog: CopyProductOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CopyProductCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CopyProductCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CopyProductCommandOutput> {
    return deserializeAws_json1_1CopyProductCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
