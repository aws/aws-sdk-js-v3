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

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import {
  DescribeAnomalyDetectorsInput,
  DescribeAnomalyDetectorsInputFilterSensitiveLog,
  DescribeAnomalyDetectorsOutput,
  DescribeAnomalyDetectorsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribeAnomalyDetectorsCommand,
  serializeAws_queryDescribeAnomalyDetectorsCommand,
} from "../protocols/Aws_query";

export interface DescribeAnomalyDetectorsCommandInput extends DescribeAnomalyDetectorsInput {}
export interface DescribeAnomalyDetectorsCommandOutput extends DescribeAnomalyDetectorsOutput, __MetadataBearer {}

/**
 * <p>Lists the anomaly detection models that you have created in your account.
 * 			For single metric anomaly detectors,
 * 			you can list all of the models in your account or filter the results
 * 			to only the models that are related to a certain namespace, metric name, or metric dimension.
 * 			For metric math anomaly detectors,
 * 			you can list them by adding <code>METRIC_MATH</code> to the <code>AnomalyDetectorTypes</code> array.
 * 			This will return all metric math anomaly detectors in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DescribeAnomalyDetectorsCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DescribeAnomalyDetectorsCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new DescribeAnomalyDetectorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAnomalyDetectorsCommandInput} for command's `input` shape.
 * @see {@link DescribeAnomalyDetectorsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 */
export class DescribeAnomalyDetectorsCommand extends $Command<
  DescribeAnomalyDetectorsCommandInput,
  DescribeAnomalyDetectorsCommandOutput,
  CloudWatchClientResolvedConfig
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

  constructor(readonly input: DescribeAnomalyDetectorsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAnomalyDetectorsCommandInput, DescribeAnomalyDetectorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAnomalyDetectorsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "DescribeAnomalyDetectorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAnomalyDetectorsInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeAnomalyDetectorsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAnomalyDetectorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeAnomalyDetectorsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAnomalyDetectorsCommandOutput> {
    return deserializeAws_queryDescribeAnomalyDetectorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
