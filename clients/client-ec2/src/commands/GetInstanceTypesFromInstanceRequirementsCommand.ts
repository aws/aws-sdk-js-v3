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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  GetInstanceTypesFromInstanceRequirementsRequest,
  GetInstanceTypesFromInstanceRequirementsRequestFilterSensitiveLog,
  GetInstanceTypesFromInstanceRequirementsResult,
  GetInstanceTypesFromInstanceRequirementsResultFilterSensitiveLog,
} from "../models/models_5";
import {
  deserializeAws_ec2GetInstanceTypesFromInstanceRequirementsCommand,
  serializeAws_ec2GetInstanceTypesFromInstanceRequirementsCommand,
} from "../protocols/Aws_ec2";

export interface GetInstanceTypesFromInstanceRequirementsCommandInput
  extends GetInstanceTypesFromInstanceRequirementsRequest {}
export interface GetInstanceTypesFromInstanceRequirementsCommandOutput
  extends GetInstanceTypesFromInstanceRequirementsResult,
    __MetadataBearer {}

/**
 * <p>Returns a list of instance types with the specified instance attributes. You can
 *          use the response to preview the instance types without launching instances. Note
 *          that the response does not consider capacity.</p>
 *          <p>When you specify multiple parameters, you get instance types that satisfy all of the
 *          specified parameters. If you specify multiple values for a parameter, you get instance
 *          types that satisfy any of the specified values.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-attribute-based-instance-type-selection.html#spotfleet-get-instance-types-from-instance-requirements">Preview instance types with specified attributes</a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-attribute-based-instance-type-selection.html">Attribute-based instance type selection for EC2 Fleet</a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-attribute-based-instance-type-selection.html">Attribute-based instance type selection for Spot Fleet</a>, and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-placement-score.html">Spot
 *             placement score</a> in the <i>Amazon EC2 User Guide</i>, and <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-asg-instance-type-requirements.html">Creating an
 *             Auto Scaling group using attribute-based instance type selection</a> in the
 *             <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetInstanceTypesFromInstanceRequirementsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetInstanceTypesFromInstanceRequirementsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetInstanceTypesFromInstanceRequirementsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInstanceTypesFromInstanceRequirementsCommandInput} for command's `input` shape.
 * @see {@link GetInstanceTypesFromInstanceRequirementsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class GetInstanceTypesFromInstanceRequirementsCommand extends $Command<
  GetInstanceTypesFromInstanceRequirementsCommandInput,
  GetInstanceTypesFromInstanceRequirementsCommandOutput,
  EC2ClientResolvedConfig
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

  constructor(readonly input: GetInstanceTypesFromInstanceRequirementsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetInstanceTypesFromInstanceRequirementsCommandInput,
    GetInstanceTypesFromInstanceRequirementsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        GetInstanceTypesFromInstanceRequirementsCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetInstanceTypesFromInstanceRequirementsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetInstanceTypesFromInstanceRequirementsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetInstanceTypesFromInstanceRequirementsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetInstanceTypesFromInstanceRequirementsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2GetInstanceTypesFromInstanceRequirementsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetInstanceTypesFromInstanceRequirementsCommandOutput> {
    return deserializeAws_ec2GetInstanceTypesFromInstanceRequirementsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
