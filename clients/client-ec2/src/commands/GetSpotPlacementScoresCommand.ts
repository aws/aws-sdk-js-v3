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
  GetSpotPlacementScoresRequest,
  GetSpotPlacementScoresRequestFilterSensitiveLog,
  GetSpotPlacementScoresResult,
  GetSpotPlacementScoresResultFilterSensitiveLog,
} from "../models/models_5";
import {
  deserializeAws_ec2GetSpotPlacementScoresCommand,
  serializeAws_ec2GetSpotPlacementScoresCommand,
} from "../protocols/Aws_ec2";

export interface GetSpotPlacementScoresCommandInput extends GetSpotPlacementScoresRequest {}
export interface GetSpotPlacementScoresCommandOutput extends GetSpotPlacementScoresResult, __MetadataBearer {}

/**
 * <p>Calculates the Spot placement score for a Region or Availability Zone based on the
 *          specified target capacity and compute requirements.</p>
 *          <p>You can specify your compute requirements either by using
 *             <code>InstanceRequirementsWithMetadata</code> and letting Amazon EC2 choose the optimal
 *          instance types to fulfill your Spot request, or you can specify the instance types by using
 *             <code>InstanceTypes</code>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-placement-score.html">Spot placement score</a> in
 *          the Amazon EC2 User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetSpotPlacementScoresCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetSpotPlacementScoresCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetSpotPlacementScoresCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSpotPlacementScoresCommandInput} for command's `input` shape.
 * @see {@link GetSpotPlacementScoresCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class GetSpotPlacementScoresCommand extends $Command<
  GetSpotPlacementScoresCommandInput,
  GetSpotPlacementScoresCommandOutput,
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

  constructor(readonly input: GetSpotPlacementScoresCommandInput) {
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
  ): Handler<GetSpotPlacementScoresCommandInput, GetSpotPlacementScoresCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSpotPlacementScoresCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetSpotPlacementScoresCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSpotPlacementScoresRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetSpotPlacementScoresResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSpotPlacementScoresCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2GetSpotPlacementScoresCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSpotPlacementScoresCommandOutput> {
    return deserializeAws_ec2GetSpotPlacementScoresCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
