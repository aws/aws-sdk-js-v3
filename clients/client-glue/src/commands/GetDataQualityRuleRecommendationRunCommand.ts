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
  GetDataQualityRuleRecommendationRunRequest,
  GetDataQualityRuleRecommendationRunRequestFilterSensitiveLog,
  GetDataQualityRuleRecommendationRunResponse,
  GetDataQualityRuleRecommendationRunResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1GetDataQualityRuleRecommendationRunCommand,
  serializeAws_json1_1GetDataQualityRuleRecommendationRunCommand,
} from "../protocols/Aws_json1_1";

export interface GetDataQualityRuleRecommendationRunCommandInput extends GetDataQualityRuleRecommendationRunRequest {}
export interface GetDataQualityRuleRecommendationRunCommandOutput
  extends GetDataQualityRuleRecommendationRunResponse,
    __MetadataBearer {}

/**
 * <p>Gets the specified recommendation run that was used to generate rules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetDataQualityRuleRecommendationRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetDataQualityRuleRecommendationRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetDataQualityRuleRecommendationRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDataQualityRuleRecommendationRunCommandInput} for command's `input` shape.
 * @see {@link GetDataQualityRuleRecommendationRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 */
export class GetDataQualityRuleRecommendationRunCommand extends $Command<
  GetDataQualityRuleRecommendationRunCommandInput,
  GetDataQualityRuleRecommendationRunCommandOutput,
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

  constructor(readonly input: GetDataQualityRuleRecommendationRunCommandInput) {
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
  ): Handler<GetDataQualityRuleRecommendationRunCommandInput, GetDataQualityRuleRecommendationRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDataQualityRuleRecommendationRunCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetDataQualityRuleRecommendationRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDataQualityRuleRecommendationRunRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetDataQualityRuleRecommendationRunResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetDataQualityRuleRecommendationRunCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetDataQualityRuleRecommendationRunCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetDataQualityRuleRecommendationRunCommandOutput> {
    return deserializeAws_json1_1GetDataQualityRuleRecommendationRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
