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
import { CancelReservedInstancesListingRequest, CancelReservedInstancesListingResult } from "../models/models_0";
import {
  de_CancelReservedInstancesListingCommand,
  se_CancelReservedInstancesListingCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CancelReservedInstancesListingCommand}.
 */
export interface CancelReservedInstancesListingCommandInput extends CancelReservedInstancesListingRequest {}
/**
 * @public
 *
 * The output of {@link CancelReservedInstancesListingCommand}.
 */
export interface CancelReservedInstancesListingCommandOutput
  extends CancelReservedInstancesListingResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Cancels the specified Reserved Instance listing in the Reserved Instance Marketplace.</p>
 *          <p>For more information, see
 *         <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html">Reserved Instance Marketplace</a>
 *         in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CancelReservedInstancesListingCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CancelReservedInstancesListingCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CancelReservedInstancesListingRequest
 *   ReservedInstancesListingId: "STRING_VALUE", // required
 * };
 * const command = new CancelReservedInstancesListingCommand(input);
 * const response = await client.send(command);
 * // { // CancelReservedInstancesListingResult
 * //   ReservedInstancesListings: [ // ReservedInstancesListingList
 * //     { // ReservedInstancesListing
 * //       ClientToken: "STRING_VALUE",
 * //       CreateDate: new Date("TIMESTAMP"),
 * //       InstanceCounts: [ // InstanceCountList
 * //         { // InstanceCount
 * //           InstanceCount: Number("int"),
 * //           State: "available" || "sold" || "cancelled" || "pending",
 * //         },
 * //       ],
 * //       PriceSchedules: [ // PriceScheduleList
 * //         { // PriceSchedule
 * //           Active: true || false,
 * //           CurrencyCode: "USD",
 * //           Price: Number("double"),
 * //           Term: Number("long"),
 * //         },
 * //       ],
 * //       ReservedInstancesId: "STRING_VALUE",
 * //       ReservedInstancesListingId: "STRING_VALUE",
 * //       Status: "active" || "pending" || "cancelled" || "closed",
 * //       StatusMessage: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       UpdateDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CancelReservedInstancesListingCommandInput - {@link CancelReservedInstancesListingCommandInput}
 * @returns {@link CancelReservedInstancesListingCommandOutput}
 * @see {@link CancelReservedInstancesListingCommandInput} for command's `input` shape.
 * @see {@link CancelReservedInstancesListingCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class CancelReservedInstancesListingCommand extends $Command<
  CancelReservedInstancesListingCommandInput,
  CancelReservedInstancesListingCommandOutput,
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
  constructor(readonly input: CancelReservedInstancesListingCommandInput) {
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
  ): Handler<CancelReservedInstancesListingCommandInput, CancelReservedInstancesListingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CancelReservedInstancesListingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CancelReservedInstancesListingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "CancelReservedInstancesListing",
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
  private serialize(
    input: CancelReservedInstancesListingCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CancelReservedInstancesListingCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CancelReservedInstancesListingCommandOutput> {
    return de_CancelReservedInstancesListingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
