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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import {
  CancelDataQualityRuleRecommendationRunRequest,
  CancelDataQualityRuleRecommendationRunResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1CancelDataQualityRuleRecommendationRunCommand,
  serializeAws_json1_1CancelDataQualityRuleRecommendationRunCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link CancelDataQualityRuleRecommendationRunCommand}.
 */
export interface CancelDataQualityRuleRecommendationRunCommandInput
  extends CancelDataQualityRuleRecommendationRunRequest {}
/**
 * @public
 *
 * The output of {@link CancelDataQualityRuleRecommendationRunCommand}.
 */
export interface CancelDataQualityRuleRecommendationRunCommandOutput
  extends CancelDataQualityRuleRecommendationRunResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Cancels the specified recommendation run that was being used to generate rules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CancelDataQualityRuleRecommendationRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CancelDataQualityRuleRecommendationRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new CancelDataQualityRuleRecommendationRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CancelDataQualityRuleRecommendationRunCommandInput - {@link CancelDataQualityRuleRecommendationRunCommandInput}
 * @returns {@link CancelDataQualityRuleRecommendationRunCommandOutput}
 * @see {@link CancelDataQualityRuleRecommendationRunCommandInput} for command's `input` shape.
 * @see {@link CancelDataQualityRuleRecommendationRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 *
 */
export class CancelDataQualityRuleRecommendationRunCommand extends $Command<
  CancelDataQualityRuleRecommendationRunCommandInput,
  CancelDataQualityRuleRecommendationRunCommandOutput,
  GlueClientResolvedConfig
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
  constructor(readonly input: CancelDataQualityRuleRecommendationRunCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CancelDataQualityRuleRecommendationRunCommandInput, CancelDataQualityRuleRecommendationRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CancelDataQualityRuleRecommendationRunCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "CancelDataQualityRuleRecommendationRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
    input: CancelDataQualityRuleRecommendationRunCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CancelDataQualityRuleRecommendationRunCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CancelDataQualityRuleRecommendationRunCommandOutput> {
    return deserializeAws_json1_1CancelDataQualityRuleRecommendationRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
