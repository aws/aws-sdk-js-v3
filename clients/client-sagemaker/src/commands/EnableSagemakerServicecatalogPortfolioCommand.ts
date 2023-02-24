// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  EnableSagemakerServicecatalogPortfolioInput,
  EnableSagemakerServicecatalogPortfolioInputFilterSensitiveLog,
  EnableSagemakerServicecatalogPortfolioOutput,
  EnableSagemakerServicecatalogPortfolioOutputFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_json1_1EnableSagemakerServicecatalogPortfolioCommand,
  serializeAws_json1_1EnableSagemakerServicecatalogPortfolioCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

export interface EnableSagemakerServicecatalogPortfolioCommandInput
  extends EnableSagemakerServicecatalogPortfolioInput {}
export interface EnableSagemakerServicecatalogPortfolioCommandOutput
  extends EnableSagemakerServicecatalogPortfolioOutput,
    __MetadataBearer {}

/**
 * <p>Enables using Service Catalog in SageMaker. Service Catalog is used to create
 *             SageMaker projects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, EnableSagemakerServicecatalogPortfolioCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, EnableSagemakerServicecatalogPortfolioCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new EnableSagemakerServicecatalogPortfolioCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableSagemakerServicecatalogPortfolioCommandInput} for command's `input` shape.
 * @see {@link EnableSagemakerServicecatalogPortfolioCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 */
export class EnableSagemakerServicecatalogPortfolioCommand extends $Command<
  EnableSagemakerServicecatalogPortfolioCommandInput,
  EnableSagemakerServicecatalogPortfolioCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: EnableSagemakerServicecatalogPortfolioCommandInput) {
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
  ): Handler<EnableSagemakerServicecatalogPortfolioCommandInput, EnableSagemakerServicecatalogPortfolioCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, EnableSagemakerServicecatalogPortfolioCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "EnableSagemakerServicecatalogPortfolioCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableSagemakerServicecatalogPortfolioInputFilterSensitiveLog,
      outputFilterSensitiveLog: EnableSagemakerServicecatalogPortfolioOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: EnableSagemakerServicecatalogPortfolioCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1EnableSagemakerServicecatalogPortfolioCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EnableSagemakerServicecatalogPortfolioCommandOutput> {
    return deserializeAws_json1_1EnableSagemakerServicecatalogPortfolioCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
