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
import { GetCapacityReservationUsageRequest, GetCapacityReservationUsageResult } from "../models/models_5";
import { de_GetCapacityReservationUsageCommand, se_GetCapacityReservationUsageCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetCapacityReservationUsageCommand}.
 */
export interface GetCapacityReservationUsageCommandInput extends GetCapacityReservationUsageRequest {}
/**
 * @public
 *
 * The output of {@link GetCapacityReservationUsageCommand}.
 */
export interface GetCapacityReservationUsageCommandOutput extends GetCapacityReservationUsageResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets usage information about a Capacity Reservation. If the Capacity Reservation is shared, it shows usage information for the Capacity Reservation owner
 * 			and each Amazon Web Services account that is currently using the shared capacity. If the Capacity Reservation is not shared, it shows only
 * 			the Capacity Reservation owner's usage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetCapacityReservationUsageCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetCapacityReservationUsageCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetCapacityReservationUsageRequest
 *   CapacityReservationId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   DryRun: true || false,
 * };
 * const command = new GetCapacityReservationUsageCommand(input);
 * const response = await client.send(command);
 * // { // GetCapacityReservationUsageResult
 * //   NextToken: "STRING_VALUE",
 * //   CapacityReservationId: "STRING_VALUE",
 * //   InstanceType: "STRING_VALUE",
 * //   TotalInstanceCount: Number("int"),
 * //   AvailableInstanceCount: Number("int"),
 * //   State: "active" || "expired" || "cancelled" || "pending" || "failed",
 * //   InstanceUsages: [ // InstanceUsageSet
 * //     { // InstanceUsage
 * //       AccountId: "STRING_VALUE",
 * //       UsedInstanceCount: Number("int"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetCapacityReservationUsageCommandInput - {@link GetCapacityReservationUsageCommandInput}
 * @returns {@link GetCapacityReservationUsageCommandOutput}
 * @see {@link GetCapacityReservationUsageCommandInput} for command's `input` shape.
 * @see {@link GetCapacityReservationUsageCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class GetCapacityReservationUsageCommand extends $Command<
  GetCapacityReservationUsageCommandInput,
  GetCapacityReservationUsageCommandOutput,
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
  constructor(readonly input: GetCapacityReservationUsageCommandInput) {
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
  ): Handler<GetCapacityReservationUsageCommandInput, GetCapacityReservationUsageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCapacityReservationUsageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetCapacityReservationUsageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "GetCapacityReservationUsage",
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
  private serialize(input: GetCapacityReservationUsageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetCapacityReservationUsageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetCapacityReservationUsageCommandOutput> {
    return de_GetCapacityReservationUsageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
