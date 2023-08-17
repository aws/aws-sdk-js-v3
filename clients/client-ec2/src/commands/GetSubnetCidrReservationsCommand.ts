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
import { GetSubnetCidrReservationsRequest, GetSubnetCidrReservationsResult } from "../models/models_5";
import { de_GetSubnetCidrReservationsCommand, se_GetSubnetCidrReservationsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSubnetCidrReservationsCommand}.
 */
export interface GetSubnetCidrReservationsCommandInput extends GetSubnetCidrReservationsRequest {}
/**
 * @public
 *
 * The output of {@link GetSubnetCidrReservationsCommand}.
 */
export interface GetSubnetCidrReservationsCommandOutput extends GetSubnetCidrReservationsResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about the subnet CIDR reservations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetSubnetCidrReservationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetSubnetCidrReservationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetSubnetCidrReservationsRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   SubnetId: "STRING_VALUE", // required
 *   DryRun: true || false,
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetSubnetCidrReservationsCommand(input);
 * const response = await client.send(command);
 * // { // GetSubnetCidrReservationsResult
 * //   SubnetIpv4CidrReservations: [ // SubnetCidrReservationList
 * //     { // SubnetCidrReservation
 * //       SubnetCidrReservationId: "STRING_VALUE",
 * //       SubnetId: "STRING_VALUE",
 * //       Cidr: "STRING_VALUE",
 * //       ReservationType: "prefix" || "explicit",
 * //       OwnerId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   SubnetIpv6CidrReservations: [
 * //     {
 * //       SubnetCidrReservationId: "STRING_VALUE",
 * //       SubnetId: "STRING_VALUE",
 * //       Cidr: "STRING_VALUE",
 * //       ReservationType: "prefix" || "explicit",
 * //       OwnerId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Tags: [
 * //         {
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSubnetCidrReservationsCommandInput - {@link GetSubnetCidrReservationsCommandInput}
 * @returns {@link GetSubnetCidrReservationsCommandOutput}
 * @see {@link GetSubnetCidrReservationsCommandInput} for command's `input` shape.
 * @see {@link GetSubnetCidrReservationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class GetSubnetCidrReservationsCommand extends $Command<
  GetSubnetCidrReservationsCommandInput,
  GetSubnetCidrReservationsCommandOutput,
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
  constructor(readonly input: GetSubnetCidrReservationsCommandInput) {
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
  ): Handler<GetSubnetCidrReservationsCommandInput, GetSubnetCidrReservationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSubnetCidrReservationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetSubnetCidrReservationsCommand";
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
  private serialize(input: GetSubnetCidrReservationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSubnetCidrReservationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetSubnetCidrReservationsCommandOutput> {
    return de_GetSubnetCidrReservationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
