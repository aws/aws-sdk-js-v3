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

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import {
  PutAutoScalingPolicyInput,
  PutAutoScalingPolicyInputFilterSensitiveLog,
  PutAutoScalingPolicyOutput,
  PutAutoScalingPolicyOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1PutAutoScalingPolicyCommand,
  serializeAws_json1_1PutAutoScalingPolicyCommand,
} from "../protocols/Aws_json1_1";

export interface PutAutoScalingPolicyCommandInput extends PutAutoScalingPolicyInput {}
export interface PutAutoScalingPolicyCommandOutput extends PutAutoScalingPolicyOutput, __MetadataBearer {}

/**
 * <p>Creates or updates an automatic scaling policy for a core instance group or task
 *          instance group in an Amazon EMR cluster. The automatic scaling policy defines how
 *          an instance group dynamically adds and terminates EC2 instances in response to the value of
 *          a CloudWatch metric.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, PutAutoScalingPolicyCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, PutAutoScalingPolicyCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new PutAutoScalingPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAutoScalingPolicyCommandInput} for command's `input` shape.
 * @see {@link PutAutoScalingPolicyCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 */
export class PutAutoScalingPolicyCommand extends $Command<
  PutAutoScalingPolicyCommandInput,
  PutAutoScalingPolicyCommandOutput,
  EMRClientResolvedConfig
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

  constructor(readonly input: PutAutoScalingPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutAutoScalingPolicyCommandInput, PutAutoScalingPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutAutoScalingPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "PutAutoScalingPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutAutoScalingPolicyInputFilterSensitiveLog,
      outputFilterSensitiveLog: PutAutoScalingPolicyOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutAutoScalingPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutAutoScalingPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutAutoScalingPolicyCommandOutput> {
    return deserializeAws_json1_1PutAutoScalingPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
