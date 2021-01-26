import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ListProvisionedProductPlansInput, ListProvisionedProductPlansOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ListProvisionedProductPlansCommand,
  serializeAws_json1_1ListProvisionedProductPlansCommand,
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

export type ListProvisionedProductPlansCommandInput = ListProvisionedProductPlansInput;
export type ListProvisionedProductPlansCommandOutput = ListProvisionedProductPlansOutput & __MetadataBearer;

/**
 * <p>Lists the plans for the specified provisioned product or all plans to which the user has access.</p>
 */
export class ListProvisionedProductPlansCommand extends $Command<
  ListProvisionedProductPlansCommandInput,
  ListProvisionedProductPlansCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListProvisionedProductPlansCommandInput) {
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
  ): Handler<ListProvisionedProductPlansCommandInput, ListProvisionedProductPlansCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "ListProvisionedProductPlansCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListProvisionedProductPlansInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListProvisionedProductPlansOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListProvisionedProductPlansCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListProvisionedProductPlansCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListProvisionedProductPlansCommandOutput> {
    return deserializeAws_json1_1ListProvisionedProductPlansCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
