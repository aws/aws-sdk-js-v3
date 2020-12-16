import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import {
  DisableSagemakerServicecatalogPortfolioInput,
  DisableSagemakerServicecatalogPortfolioOutput,
} from "../models/models_1";
import {
  deserializeAws_json1_1DisableSagemakerServicecatalogPortfolioCommand,
  serializeAws_json1_1DisableSagemakerServicecatalogPortfolioCommand,
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

export type DisableSagemakerServicecatalogPortfolioCommandInput = DisableSagemakerServicecatalogPortfolioInput;
export type DisableSagemakerServicecatalogPortfolioCommandOutput = DisableSagemakerServicecatalogPortfolioOutput &
  __MetadataBearer;

/**
 * <p>Disables using Service Catalog in SageMaker. Service Catalog is used to create
 *             SageMaker projects.</p>
 */
export class DisableSagemakerServicecatalogPortfolioCommand extends $Command<
  DisableSagemakerServicecatalogPortfolioCommandInput,
  DisableSagemakerServicecatalogPortfolioCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisableSagemakerServicecatalogPortfolioCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DisableSagemakerServicecatalogPortfolioCommandInput,
    DisableSagemakerServicecatalogPortfolioCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DisableSagemakerServicecatalogPortfolioCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisableSagemakerServicecatalogPortfolioInput.filterSensitiveLog,
      outputFilterSensitiveLog: DisableSagemakerServicecatalogPortfolioOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisableSagemakerServicecatalogPortfolioCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DisableSagemakerServicecatalogPortfolioCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisableSagemakerServicecatalogPortfolioCommandOutput> {
    return deserializeAws_json1_1DisableSagemakerServicecatalogPortfolioCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
