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
  CancelDataQualityRulesetEvaluationRunRequest,
  CancelDataQualityRulesetEvaluationRunResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1CancelDataQualityRulesetEvaluationRunCommand,
  serializeAws_json1_1CancelDataQualityRulesetEvaluationRunCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link CancelDataQualityRulesetEvaluationRunCommand}.
 */
export interface CancelDataQualityRulesetEvaluationRunCommandInput
  extends CancelDataQualityRulesetEvaluationRunRequest {}
/**
 * @public
 *
 * The output of {@link CancelDataQualityRulesetEvaluationRunCommand}.
 */
export interface CancelDataQualityRulesetEvaluationRunCommandOutput
  extends CancelDataQualityRulesetEvaluationRunResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Cancels a run where a ruleset is being evaluated against a data source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CancelDataQualityRulesetEvaluationRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CancelDataQualityRulesetEvaluationRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = {
 *   RunId: "STRING_VALUE", // required
 * };
 * const command = new CancelDataQualityRulesetEvaluationRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CancelDataQualityRulesetEvaluationRunCommandInput - {@link CancelDataQualityRulesetEvaluationRunCommandInput}
 * @returns {@link CancelDataQualityRulesetEvaluationRunCommandOutput}
 * @see {@link CancelDataQualityRulesetEvaluationRunCommandInput} for command's `input` shape.
 * @see {@link CancelDataQualityRulesetEvaluationRunCommandOutput} for command's `response` shape.
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
export class CancelDataQualityRulesetEvaluationRunCommand extends $Command<
  CancelDataQualityRulesetEvaluationRunCommandInput,
  CancelDataQualityRulesetEvaluationRunCommandOutput,
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
  constructor(readonly input: CancelDataQualityRulesetEvaluationRunCommandInput) {
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
  ): Handler<CancelDataQualityRulesetEvaluationRunCommandInput, CancelDataQualityRulesetEvaluationRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CancelDataQualityRulesetEvaluationRunCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "CancelDataQualityRulesetEvaluationRunCommand";
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
    input: CancelDataQualityRulesetEvaluationRunCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CancelDataQualityRulesetEvaluationRunCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CancelDataQualityRulesetEvaluationRunCommandOutput> {
    return deserializeAws_json1_1CancelDataQualityRulesetEvaluationRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
