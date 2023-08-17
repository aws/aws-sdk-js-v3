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
} from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { PurchaseReservedInstancesOfferingRequest, PurchaseReservedInstancesOfferingResult } from "../models/models_6";
import {
  de_PurchaseReservedInstancesOfferingCommand,
  se_PurchaseReservedInstancesOfferingCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PurchaseReservedInstancesOfferingCommand}.
 */
export interface PurchaseReservedInstancesOfferingCommandInput extends PurchaseReservedInstancesOfferingRequest {}
/**
 * @public
 *
 * The output of {@link PurchaseReservedInstancesOfferingCommand}.
 */
export interface PurchaseReservedInstancesOfferingCommandOutput
  extends PurchaseReservedInstancesOfferingResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Purchases a Reserved Instance for use with your account. With Reserved Instances, you pay a lower
 *        hourly rate compared to On-Demand instance pricing.</p>
 *          <p>Use <a>DescribeReservedInstancesOfferings</a> to get a list of Reserved Instance offerings
 * 			that match your specifications. After you've purchased a Reserved Instance, you can check for your
 * 			new Reserved Instance with <a>DescribeReservedInstances</a>.</p>
 *          <p>To queue a purchase for a future date and time, specify a purchase time. If you do not specify a
 *       purchase time, the default is the current time.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts-on-demand-reserved-instances.html">Reserved Instances</a> and
 *    	   <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html">Reserved Instance Marketplace</a>
 *    	   in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, PurchaseReservedInstancesOfferingCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, PurchaseReservedInstancesOfferingCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // PurchaseReservedInstancesOfferingRequest
 *   InstanceCount: Number("int"), // required
 *   ReservedInstancesOfferingId: "STRING_VALUE", // required
 *   DryRun: true || false,
 *   LimitPrice: { // ReservedInstanceLimitPrice
 *     Amount: Number("double"),
 *     CurrencyCode: "USD",
 *   },
 *   PurchaseTime: new Date("TIMESTAMP"),
 * };
 * const command = new PurchaseReservedInstancesOfferingCommand(input);
 * const response = await client.send(command);
 * // { // PurchaseReservedInstancesOfferingResult
 * //   ReservedInstancesId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PurchaseReservedInstancesOfferingCommandInput - {@link PurchaseReservedInstancesOfferingCommandInput}
 * @returns {@link PurchaseReservedInstancesOfferingCommandOutput}
 * @see {@link PurchaseReservedInstancesOfferingCommandInput} for command's `input` shape.
 * @see {@link PurchaseReservedInstancesOfferingCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class PurchaseReservedInstancesOfferingCommand extends $Command<
  PurchaseReservedInstancesOfferingCommandInput,
  PurchaseReservedInstancesOfferingCommandOutput,
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
  constructor(readonly input: PurchaseReservedInstancesOfferingCommandInput) {
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
  ): Handler<PurchaseReservedInstancesOfferingCommandInput, PurchaseReservedInstancesOfferingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PurchaseReservedInstancesOfferingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "PurchaseReservedInstancesOfferingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(
    input: PurchaseReservedInstancesOfferingCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_PurchaseReservedInstancesOfferingCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PurchaseReservedInstancesOfferingCommandOutput> {
    return de_PurchaseReservedInstancesOfferingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
