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
import { DescribeAvailabilityZonesRequest, DescribeAvailabilityZonesResult } from "../models/models_3";
import { de_DescribeAvailabilityZonesCommand, se_DescribeAvailabilityZonesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAvailabilityZonesCommand}.
 */
export interface DescribeAvailabilityZonesCommandInput extends DescribeAvailabilityZonesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAvailabilityZonesCommand}.
 */
export interface DescribeAvailabilityZonesCommandOutput extends DescribeAvailabilityZonesResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes the Availability Zones, Local Zones, and Wavelength Zones that are available to
 *       you. If there is an event impacting a zone, you can use this request to view the state and any
 *       provided messages for that zone.</p>
 *          <p>For more information about Availability Zones, Local Zones, and Wavelength Zones, see
 *         <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html">Regions and zones</a>
 *       in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeAvailabilityZonesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeAvailabilityZonesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeAvailabilityZonesRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   ZoneNames: [ // ZoneNameStringList
 *     "STRING_VALUE",
 *   ],
 *   ZoneIds: [ // ZoneIdStringList
 *     "STRING_VALUE",
 *   ],
 *   AllAvailabilityZones: true || false,
 *   DryRun: true || false,
 * };
 * const command = new DescribeAvailabilityZonesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAvailabilityZonesResult
 * //   AvailabilityZones: [ // AvailabilityZoneList
 * //     { // AvailabilityZone
 * //       State: "available" || "information" || "impaired" || "unavailable",
 * //       OptInStatus: "opt-in-not-required" || "opted-in" || "not-opted-in",
 * //       Messages: [ // AvailabilityZoneMessageList
 * //         { // AvailabilityZoneMessage
 * //           Message: "STRING_VALUE",
 * //         },
 * //       ],
 * //       RegionName: "STRING_VALUE",
 * //       ZoneName: "STRING_VALUE",
 * //       ZoneId: "STRING_VALUE",
 * //       GroupName: "STRING_VALUE",
 * //       NetworkBorderGroup: "STRING_VALUE",
 * //       ZoneType: "STRING_VALUE",
 * //       ParentZoneName: "STRING_VALUE",
 * //       ParentZoneId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeAvailabilityZonesCommandInput - {@link DescribeAvailabilityZonesCommandInput}
 * @returns {@link DescribeAvailabilityZonesCommandOutput}
 * @see {@link DescribeAvailabilityZonesCommandInput} for command's `input` shape.
 * @see {@link DescribeAvailabilityZonesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To describe your Availability Zones
 * ```javascript
 * // This example describes the Availability Zones that are available to you. The response includes Availability Zones only for the current region.
 * const input = undefined;
 * const command = new DescribeAvailabilityZonesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "AvailabilityZones": [
 *     {
 *       "Messages": [],
 *       "RegionName": "us-east-1",
 *       "State": "available",
 *       "ZoneName": "us-east-1b"
 *     },
 *     {
 *       "Messages": [],
 *       "RegionName": "us-east-1",
 *       "State": "available",
 *       "ZoneName": "us-east-1c"
 *     },
 *     {
 *       "Messages": [],
 *       "RegionName": "us-east-1",
 *       "State": "available",
 *       "ZoneName": "us-east-1d"
 *     },
 *     {
 *       "Messages": [],
 *       "RegionName": "us-east-1",
 *       "State": "available",
 *       "ZoneName": "us-east-1e"
 *     }
 *   ]
 * }
 * *\/
 * // example id: ec2-describe-availability-zones-1
 * ```
 *
 */
export class DescribeAvailabilityZonesCommand extends $Command<
  DescribeAvailabilityZonesCommandInput,
  DescribeAvailabilityZonesCommandOutput,
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
  constructor(readonly input: DescribeAvailabilityZonesCommandInput) {
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
  ): Handler<DescribeAvailabilityZonesCommandInput, DescribeAvailabilityZonesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAvailabilityZonesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeAvailabilityZonesCommand";
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
  private serialize(input: DescribeAvailabilityZonesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAvailabilityZonesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAvailabilityZonesCommandOutput> {
    return de_DescribeAvailabilityZonesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
