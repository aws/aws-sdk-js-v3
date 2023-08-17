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
import { DescribeHostReservationOfferingsRequest, DescribeHostReservationOfferingsResult } from "../models/models_3";
import {
  de_DescribeHostReservationOfferingsCommand,
  se_DescribeHostReservationOfferingsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeHostReservationOfferingsCommand}.
 */
export interface DescribeHostReservationOfferingsCommandInput extends DescribeHostReservationOfferingsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeHostReservationOfferingsCommand}.
 */
export interface DescribeHostReservationOfferingsCommandOutput
  extends DescribeHostReservationOfferingsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the Dedicated Host reservations that are available to purchase.</p>
 *          <p>The results describe all of the Dedicated Host reservation offerings, including
 *             offerings that might not match the instance family and Region of your Dedicated Hosts.
 *             When purchasing an offering, ensure that the instance family and Region of the offering
 *             matches that of the Dedicated Hosts with which it is to be associated. For more
 *             information about supported instance types, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-overview.html">Dedicated Hosts</a>
 *             in the <i>Amazon EC2 User Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeHostReservationOfferingsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeHostReservationOfferingsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeHostReservationOfferingsRequest
 *   Filter: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxDuration: Number("int"),
 *   MaxResults: Number("int"),
 *   MinDuration: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   OfferingId: "STRING_VALUE",
 * };
 * const command = new DescribeHostReservationOfferingsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeHostReservationOfferingsResult
 * //   NextToken: "STRING_VALUE",
 * //   OfferingSet: [ // HostOfferingSet
 * //     { // HostOffering
 * //       CurrencyCode: "USD",
 * //       Duration: Number("int"),
 * //       HourlyPrice: "STRING_VALUE",
 * //       InstanceFamily: "STRING_VALUE",
 * //       OfferingId: "STRING_VALUE",
 * //       PaymentOption: "AllUpfront" || "PartialUpfront" || "NoUpfront",
 * //       UpfrontPrice: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeHostReservationOfferingsCommandInput - {@link DescribeHostReservationOfferingsCommandInput}
 * @returns {@link DescribeHostReservationOfferingsCommandOutput}
 * @see {@link DescribeHostReservationOfferingsCommandInput} for command's `input` shape.
 * @see {@link DescribeHostReservationOfferingsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeHostReservationOfferingsCommand extends $Command<
  DescribeHostReservationOfferingsCommandInput,
  DescribeHostReservationOfferingsCommandOutput,
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
  constructor(readonly input: DescribeHostReservationOfferingsCommandInput) {
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
  ): Handler<DescribeHostReservationOfferingsCommandInput, DescribeHostReservationOfferingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeHostReservationOfferingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeHostReservationOfferingsCommand";
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
    input: DescribeHostReservationOfferingsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeHostReservationOfferingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeHostReservationOfferingsCommandOutput> {
    return de_DescribeHostReservationOfferingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
