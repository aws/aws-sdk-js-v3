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
  GetContainerServiceMetricDataRequest,
  GetContainerServiceMetricDataRequestFilterSensitiveLog,
  GetContainerServiceMetricDataResult,
  GetContainerServiceMetricDataResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetContainerServiceMetricDataCommand,
  serializeAws_json1_1GetContainerServiceMetricDataCommand,
} from "../protocols/Aws_json1_1";

export interface GetContainerServiceMetricDataCommandInput extends GetContainerServiceMetricDataRequest {}
export interface GetContainerServiceMetricDataCommandOutput
  extends GetContainerServiceMetricDataResult,
    __MetadataBearer {}

/**
 * <p>Returns the data points of a specific metric of your Amazon Lightsail container
 *       service.</p>
 *          <p>Metrics report the utilization of your resources. Monitor and collect metric data
 *       regularly to maintain the reliability, availability, and performance of your resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetContainerServiceMetricDataCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetContainerServiceMetricDataCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetContainerServiceMetricDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContainerServiceMetricDataCommandInput} for command's `input` shape.
 * @see {@link GetContainerServiceMetricDataCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class GetContainerServiceMetricDataCommand extends $Command<
  GetContainerServiceMetricDataCommandInput,
  GetContainerServiceMetricDataCommandOutput,
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

  constructor(readonly input: GetContainerServiceMetricDataCommandInput) {
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
  ): Handler<GetContainerServiceMetricDataCommandInput, GetContainerServiceMetricDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetContainerServiceMetricDataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetContainerServiceMetricDataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetContainerServiceMetricDataRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetContainerServiceMetricDataResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetContainerServiceMetricDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetContainerServiceMetricDataCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetContainerServiceMetricDataCommandOutput> {
    return deserializeAws_json1_1GetContainerServiceMetricDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
