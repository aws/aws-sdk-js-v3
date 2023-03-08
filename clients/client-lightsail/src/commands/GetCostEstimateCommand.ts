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

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import {
  GetCostEstimateRequest,
  GetCostEstimateRequestFilterSensitiveLog,
  GetCostEstimateResult,
  GetCostEstimateResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1GetCostEstimateCommand,
  serializeAws_json1_1GetCostEstimateCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link GetCostEstimateCommand}.
 */
export interface GetCostEstimateCommandInput extends GetCostEstimateRequest {}
/**
 * The output of {@link GetCostEstimateCommand}.
 */
export interface GetCostEstimateCommandOutput extends GetCostEstimateResult, __MetadataBearer {}

/**
 * <p>Retrieves information about the cost estimate for a specified resource. A cost estimate will not generate for a resource that has been deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetCostEstimateCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetCostEstimateCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetCostEstimateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCostEstimateCommandInput} for command's `input` shape.
 * @see {@link GetCostEstimateCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class GetCostEstimateCommand extends $Command<
  GetCostEstimateCommandInput,
  GetCostEstimateCommandOutput,
  LightsailClientResolvedConfig
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

  constructor(readonly input: GetCostEstimateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCostEstimateCommandInput, GetCostEstimateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCostEstimateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetCostEstimateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCostEstimateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetCostEstimateResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCostEstimateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetCostEstimateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCostEstimateCommandOutput> {
    return deserializeAws_json1_1GetCostEstimateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
