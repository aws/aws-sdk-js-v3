import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DisassociateProductFromPortfolioInput, DisassociateProductFromPortfolioOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DisassociateProductFromPortfolioCommand,
  serializeAws_json1_1DisassociateProductFromPortfolioCommand,
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

export type DisassociateProductFromPortfolioCommandInput = DisassociateProductFromPortfolioInput;
export type DisassociateProductFromPortfolioCommandOutput = DisassociateProductFromPortfolioOutput & __MetadataBearer;

/**
 * <p>Disassociates the specified product from the specified portfolio. </p>
 *          <p>A delegated admin is authorized to invoke this command.</p>
 */
export class DisassociateProductFromPortfolioCommand extends $Command<
  DisassociateProductFromPortfolioCommandInput,
  DisassociateProductFromPortfolioCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateProductFromPortfolioCommandInput) {
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
  ): Handler<DisassociateProductFromPortfolioCommandInput, DisassociateProductFromPortfolioCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "DisassociateProductFromPortfolioCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateProductFromPortfolioInput.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateProductFromPortfolioOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateProductFromPortfolioCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateProductFromPortfolioCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateProductFromPortfolioCommandOutput> {
    return deserializeAws_json1_1DisassociateProductFromPortfolioCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
