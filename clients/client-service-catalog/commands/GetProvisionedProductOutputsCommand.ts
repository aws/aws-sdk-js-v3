import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { GetProvisionedProductOutputsInput, GetProvisionedProductOutputsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1GetProvisionedProductOutputsCommand,
  serializeAws_json1_1GetProvisionedProductOutputsCommand,
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

export type GetProvisionedProductOutputsCommandInput = GetProvisionedProductOutputsInput;
export type GetProvisionedProductOutputsCommandOutput = GetProvisionedProductOutputsOutput & __MetadataBearer;

/**
 * <p>This API takes either a <code>ProvisonedProductId</code> or a <code>ProvisionedProductName</code>, along with a list of one or more output keys, and responds with the key/value pairs of those outputs.</p>
 */
export class GetProvisionedProductOutputsCommand extends $Command<
  GetProvisionedProductOutputsCommandInput,
  GetProvisionedProductOutputsCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetProvisionedProductOutputsCommandInput) {
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
  ): Handler<GetProvisionedProductOutputsCommandInput, GetProvisionedProductOutputsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "GetProvisionedProductOutputsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetProvisionedProductOutputsInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetProvisionedProductOutputsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetProvisionedProductOutputsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetProvisionedProductOutputsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetProvisionedProductOutputsCommandOutput> {
    return deserializeAws_json1_1GetProvisionedProductOutputsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
