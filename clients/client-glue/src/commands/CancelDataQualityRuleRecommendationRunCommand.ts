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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import {
  CancelDataQualityRuleRecommendationRunRequest,
  CancelDataQualityRuleRecommendationRunResponse,
} from "../models/models_0";
import {
  de_CancelDataQualityRuleRecommendationRunCommand,
  se_CancelDataQualityRuleRecommendationRunCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * const input = { // CancelDataQualityRuleRecommendationRunRequest
 *   RunId: "STRING_VALUE", // required
 * };
 * const command = new CancelDataQualityRuleRecommendationRunCommand(input);
 * const response = await client.send(command);
 * // {};
 *
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
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
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
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "CancelDataQualityRuleRecommendationRun",
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
    input: CancelDataQualityRuleRecommendationRunCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CancelDataQualityRuleRecommendationRunCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CancelDataQualityRuleRecommendationRunCommandOutput> {
    return de_CancelDataQualityRuleRecommendationRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
