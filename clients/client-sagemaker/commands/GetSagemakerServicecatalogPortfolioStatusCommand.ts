import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import {
  GetSagemakerServicecatalogPortfolioStatusInput,
  GetSagemakerServicecatalogPortfolioStatusOutput,
} from "../models/models_2";
import {
  deserializeAws_json1_1GetSagemakerServicecatalogPortfolioStatusCommand,
  serializeAws_json1_1GetSagemakerServicecatalogPortfolioStatusCommand,
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

export type GetSagemakerServicecatalogPortfolioStatusCommandInput = GetSagemakerServicecatalogPortfolioStatusInput;
export type GetSagemakerServicecatalogPortfolioStatusCommandOutput = GetSagemakerServicecatalogPortfolioStatusOutput &
  __MetadataBearer;

/**
 * <p>Gets the status of Service Catalog in SageMaker. Service Catalog is used to create
 *             SageMaker projects.</p>
 */
export class GetSagemakerServicecatalogPortfolioStatusCommand extends $Command<
  GetSagemakerServicecatalogPortfolioStatusCommandInput,
  GetSagemakerServicecatalogPortfolioStatusCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSagemakerServicecatalogPortfolioStatusCommandInput) {
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
    GetSagemakerServicecatalogPortfolioStatusCommandInput,
    GetSagemakerServicecatalogPortfolioStatusCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "GetSagemakerServicecatalogPortfolioStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSagemakerServicecatalogPortfolioStatusInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetSagemakerServicecatalogPortfolioStatusOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetSagemakerServicecatalogPortfolioStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetSagemakerServicecatalogPortfolioStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetSagemakerServicecatalogPortfolioStatusCommandOutput> {
    return deserializeAws_json1_1GetSagemakerServicecatalogPortfolioStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
