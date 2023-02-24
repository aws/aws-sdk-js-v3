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
  StartDataQualityRulesetEvaluationRunRequest,
  StartDataQualityRulesetEvaluationRunRequestFilterSensitiveLog,
  StartDataQualityRulesetEvaluationRunResponse,
  StartDataQualityRulesetEvaluationRunResponseFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_json1_1StartDataQualityRulesetEvaluationRunCommand,
  serializeAws_json1_1StartDataQualityRulesetEvaluationRunCommand,
} from "../protocols/Aws_json1_1";

export interface StartDataQualityRulesetEvaluationRunCommandInput extends StartDataQualityRulesetEvaluationRunRequest {}
export interface StartDataQualityRulesetEvaluationRunCommandOutput
  extends StartDataQualityRulesetEvaluationRunResponse,
    __MetadataBearer {}

/**
 * <p>Once you have a ruleset definition (either recommended or your own), you call this operation to evaluate the ruleset against a data source (Glue table). The evaluation computes results which you can retrieve with the <code>GetDataQualityResult</code> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StartDataQualityRulesetEvaluationRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StartDataQualityRulesetEvaluationRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new StartDataQualityRulesetEvaluationRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartDataQualityRulesetEvaluationRunCommandInput} for command's `input` shape.
 * @see {@link StartDataQualityRulesetEvaluationRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 */
export class StartDataQualityRulesetEvaluationRunCommand extends $Command<
  StartDataQualityRulesetEvaluationRunCommandInput,
  StartDataQualityRulesetEvaluationRunCommandOutput,
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

  constructor(readonly input: StartDataQualityRulesetEvaluationRunCommandInput) {
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
  ): Handler<StartDataQualityRulesetEvaluationRunCommandInput, StartDataQualityRulesetEvaluationRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartDataQualityRulesetEvaluationRunCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "StartDataQualityRulesetEvaluationRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartDataQualityRulesetEvaluationRunRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartDataQualityRulesetEvaluationRunResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: StartDataQualityRulesetEvaluationRunCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1StartDataQualityRulesetEvaluationRunCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartDataQualityRulesetEvaluationRunCommandOutput> {
    return deserializeAws_json1_1StartDataQualityRulesetEvaluationRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
