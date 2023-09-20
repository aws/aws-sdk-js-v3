// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeSpotFleetInstancesRequest, DescribeSpotFleetInstancesResponse } from "../models/models_4";
import { de_DescribeSpotFleetInstancesCommand, se_DescribeSpotFleetInstancesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeSpotFleetInstancesCommand}.
 */
export interface DescribeSpotFleetInstancesCommandInput extends DescribeSpotFleetInstancesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSpotFleetInstancesCommand}.
 */
export interface DescribeSpotFleetInstancesCommandOutput extends DescribeSpotFleetInstancesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes the running instances for the specified Spot Fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSpotFleetInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeSpotFleetInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeSpotFleetInstancesRequest
 *   DryRun: true || false,
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   SpotFleetRequestId: "STRING_VALUE", // required
 * };
 * const command = new DescribeSpotFleetInstancesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSpotFleetInstancesResponse
 * //   ActiveInstances: [ // ActiveInstanceSet
 * //     { // ActiveInstance
 * //       InstanceId: "STRING_VALUE",
 * //       InstanceType: "STRING_VALUE",
 * //       SpotInstanceRequestId: "STRING_VALUE",
 * //       InstanceHealth: "healthy" || "unhealthy",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   SpotFleetRequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSpotFleetInstancesCommandInput - {@link DescribeSpotFleetInstancesCommandInput}
 * @returns {@link DescribeSpotFleetInstancesCommandOutput}
 * @see {@link DescribeSpotFleetInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeSpotFleetInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To describe the Spot Instances associated with a Spot fleet
 * ```javascript
 * // This example lists the Spot Instances associated with the specified Spot fleet.
 * const input = {
 *   "SpotFleetRequestId": "sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE"
 * };
 * const command = new DescribeSpotFleetInstancesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ActiveInstances": [
 *     {
 *       "InstanceId": "i-1234567890abcdef0",
 *       "InstanceType": "m3.medium",
 *       "SpotInstanceRequestId": "sir-08b93456"
 *     }
 *   ],
 *   "SpotFleetRequestId": "sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE"
 * }
 * *\/
 * // example id: ec2-describe-spot-fleet-instances-1
 * ```
 *
 */
export class DescribeSpotFleetInstancesCommand extends $Command<
  DescribeSpotFleetInstancesCommandInput,
  DescribeSpotFleetInstancesCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: DescribeSpotFleetInstancesCommandInput) {
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
  ): Handler<DescribeSpotFleetInstancesCommandInput, DescribeSpotFleetInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSpotFleetInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeSpotFleetInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DescribeSpotFleetInstances",
      },
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
  private serialize(input: DescribeSpotFleetInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeSpotFleetInstancesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeSpotFleetInstancesCommandOutput> {
    return de_DescribeSpotFleetInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
