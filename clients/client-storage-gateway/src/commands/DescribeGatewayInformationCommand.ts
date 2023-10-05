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

import {
  DescribeGatewayInformationInput,
  DescribeGatewayInformationOutput,
  DescribeGatewayInformationOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeGatewayInformationCommand, se_DescribeGatewayInformationCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeGatewayInformationCommand}.
 */
export interface DescribeGatewayInformationCommandInput extends DescribeGatewayInformationInput {}
/**
 * @public
 *
 * The output of {@link DescribeGatewayInformationCommand}.
 */
export interface DescribeGatewayInformationCommandOutput extends DescribeGatewayInformationOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns metadata about a gateway such as its name, network interfaces, time zone,
 *          status, and software version. To specify which gateway to describe, use the Amazon Resource
 *          Name (ARN) of the gateway in your request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeGatewayInformationCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeGatewayInformationCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // DescribeGatewayInformationInput
 *   GatewayARN: "STRING_VALUE", // required
 * };
 * const command = new DescribeGatewayInformationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeGatewayInformationOutput
 * //   GatewayARN: "STRING_VALUE",
 * //   GatewayId: "STRING_VALUE",
 * //   GatewayName: "STRING_VALUE",
 * //   GatewayTimezone: "STRING_VALUE",
 * //   GatewayState: "STRING_VALUE",
 * //   GatewayNetworkInterfaces: [ // GatewayNetworkInterfaces
 * //     { // NetworkInterface
 * //       Ipv4Address: "STRING_VALUE",
 * //       MacAddress: "STRING_VALUE",
 * //       Ipv6Address: "STRING_VALUE",
 * //     },
 * //   ],
 * //   GatewayType: "STRING_VALUE",
 * //   NextUpdateAvailabilityDate: "STRING_VALUE",
 * //   LastSoftwareUpdate: "STRING_VALUE",
 * //   Ec2InstanceId: "STRING_VALUE",
 * //   Ec2InstanceRegion: "STRING_VALUE",
 * //   Tags: [ // Tags
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   VPCEndpoint: "STRING_VALUE",
 * //   CloudWatchLogGroupARN: "STRING_VALUE",
 * //   HostEnvironment: "VMWARE" || "HYPER-V" || "EC2" || "KVM" || "OTHER" || "SNOWBALL",
 * //   EndpointType: "STRING_VALUE",
 * //   SoftwareUpdatesEndDate: "STRING_VALUE",
 * //   DeprecationDate: "STRING_VALUE",
 * //   GatewayCapacity: "Small" || "Medium" || "Large",
 * //   SupportedGatewayCapacities: [ // SupportedGatewayCapacities
 * //     "Small" || "Medium" || "Large",
 * //   ],
 * //   HostEnvironmentId: "STRING_VALUE",
 * //   SoftwareVersion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeGatewayInformationCommandInput - {@link DescribeGatewayInformationCommandInput}
 * @returns {@link DescribeGatewayInformationCommandOutput}
 * @see {@link DescribeGatewayInformationCommandInput} for command's `input` shape.
 * @see {@link DescribeGatewayInformationCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error has occurred during the request. For more information, see the
 *          error and message fields.</p>
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *  <p>An exception occurred because an invalid gateway request was issued to the service. For
 *          more information, see the error and message fields.</p>
 *
 * @throws {@link StorageGatewayServiceException}
 * <p>Base exception class for all service exceptions from StorageGateway service.</p>
 *
 * @example To describe metadata about the gateway
 * ```javascript
 * // Returns metadata about a gateway such as its name, network interfaces, configured time zone, and the state (whether the gateway is running or not).
 * const input = {
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
 * };
 * const command = new DescribeGatewayInformationCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
 *   "GatewayId": "sgw-AABB1122",
 *   "GatewayName": "My_Gateway",
 *   "GatewayNetworkInterfaces": [
 *     {
 *       "Ipv4Address": "10.35.69.216"
 *     }
 *   ],
 *   "GatewayState": "STATE_RUNNING",
 *   "GatewayTimezone": "GMT-8:00",
 *   "GatewayType": "STORED",
 *   "LastSoftwareUpdate": "2016-01-02T16:00:00",
 *   "NextUpdateAvailabilityDate": "2017-01-02T16:00:00"
 * }
 * *\/
 * // example id: to-describe-metadata-about-the-gateway-1471467849079
 * ```
 *
 */
export class DescribeGatewayInformationCommand extends $Command<
  DescribeGatewayInformationCommandInput,
  DescribeGatewayInformationCommandOutput,
  StorageGatewayClientResolvedConfig
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
  constructor(readonly input: DescribeGatewayInformationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeGatewayInformationCommandInput, DescribeGatewayInformationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeGatewayInformationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DescribeGatewayInformationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeGatewayInformationOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "StorageGateway_20130630",
        operation: "DescribeGatewayInformation",
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
  private serialize(input: DescribeGatewayInformationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeGatewayInformationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeGatewayInformationCommandOutput> {
    return de_DescribeGatewayInformationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
