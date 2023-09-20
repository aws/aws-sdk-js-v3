// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  DisableSagemakerServicecatalogPortfolioInput,
  DisableSagemakerServicecatalogPortfolioOutput,
} from "../models/models_2";
import {
  de_DisableSagemakerServicecatalogPortfolioCommand,
  se_DisableSagemakerServicecatalogPortfolioCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisableSagemakerServicecatalogPortfolioCommand}.
 */
export interface DisableSagemakerServicecatalogPortfolioCommandInput
  extends DisableSagemakerServicecatalogPortfolioInput {}
/**
 * @public
 *
 * The output of {@link DisableSagemakerServicecatalogPortfolioCommand}.
 */
export interface DisableSagemakerServicecatalogPortfolioCommandOutput
  extends DisableSagemakerServicecatalogPortfolioOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Disables using Service Catalog in SageMaker. Service Catalog is used to create
 *             SageMaker projects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DisableSagemakerServicecatalogPortfolioCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DisableSagemakerServicecatalogPortfolioCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = {};
 * const command = new DisableSagemakerServicecatalogPortfolioCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisableSagemakerServicecatalogPortfolioCommandInput - {@link DisableSagemakerServicecatalogPortfolioCommandInput}
 * @returns {@link DisableSagemakerServicecatalogPortfolioCommandOutput}
 * @see {@link DisableSagemakerServicecatalogPortfolioCommandInput} for command's `input` shape.
 * @see {@link DisableSagemakerServicecatalogPortfolioCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class DisableSagemakerServicecatalogPortfolioCommand extends $Command<
  DisableSagemakerServicecatalogPortfolioCommandInput,
  DisableSagemakerServicecatalogPortfolioCommandOutput,
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

  /**
   * @public
   */
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
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DisableSagemakerServicecatalogPortfolioCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DisableSagemakerServicecatalogPortfolioCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "DisableSagemakerServicecatalogPortfolio",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: DisableSagemakerServicecatalogPortfolioCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DisableSagemakerServicecatalogPortfolioCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisableSagemakerServicecatalogPortfolioCommandOutput> {
    return de_DisableSagemakerServicecatalogPortfolioCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
