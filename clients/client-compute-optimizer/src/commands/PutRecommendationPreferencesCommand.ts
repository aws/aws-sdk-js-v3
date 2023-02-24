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

import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import {
  PutRecommendationPreferencesRequest,
  PutRecommendationPreferencesRequestFilterSensitiveLog,
  PutRecommendationPreferencesResponse,
  PutRecommendationPreferencesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0PutRecommendationPreferencesCommand,
  serializeAws_json1_0PutRecommendationPreferencesCommand,
} from "../protocols/Aws_json1_0";

export interface PutRecommendationPreferencesCommandInput extends PutRecommendationPreferencesRequest {}
export interface PutRecommendationPreferencesCommandOutput
  extends PutRecommendationPreferencesResponse,
    __MetadataBearer {}

/**
 * <p>Creates a new recommendation preference or updates an existing recommendation
 *             preference, such as enhanced infrastructure metrics.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating
 *                 enhanced infrastructure metrics</a> in the <i>Compute Optimizer User
 *                 Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, PutRecommendationPreferencesCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, PutRecommendationPreferencesCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * const client = new ComputeOptimizerClient(config);
 * const command = new PutRecommendationPreferencesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutRecommendationPreferencesCommandInput} for command's `input` shape.
 * @see {@link PutRecommendationPreferencesCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerClientResolvedConfig | config} for ComputeOptimizerClient's `config` shape.
 *
 */
export class PutRecommendationPreferencesCommand extends $Command<
  PutRecommendationPreferencesCommandInput,
  PutRecommendationPreferencesCommandOutput,
  ComputeOptimizerClientResolvedConfig
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

  constructor(readonly input: PutRecommendationPreferencesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComputeOptimizerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutRecommendationPreferencesCommandInput, PutRecommendationPreferencesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutRecommendationPreferencesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComputeOptimizerClient";
    const commandName = "PutRecommendationPreferencesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutRecommendationPreferencesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutRecommendationPreferencesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutRecommendationPreferencesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0PutRecommendationPreferencesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutRecommendationPreferencesCommandOutput> {
    return deserializeAws_json1_0PutRecommendationPreferencesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
