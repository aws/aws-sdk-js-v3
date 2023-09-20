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

import { DescribeDeviceRequest, DescribeDeviceResponse } from "../models/models_0";
import { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import { de_DescribeDeviceCommand, se_DescribeDeviceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDeviceCommand}.
 */
export interface DescribeDeviceCommandInput extends DescribeDeviceRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDeviceCommand}.
 */
export interface DescribeDeviceCommandOutput extends DescribeDeviceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about a device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, DescribeDeviceCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, DescribeDeviceCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * const client = new PanoramaClient(config);
 * const input = { // DescribeDeviceRequest
 *   DeviceId: "STRING_VALUE", // required
 * };
 * const command = new DescribeDeviceCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDeviceResponse
 * //   DeviceId: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   Type: "STRING_VALUE",
 * //   DeviceConnectionStatus: "STRING_VALUE",
 * //   CreatedTime: new Date("TIMESTAMP"),
 * //   ProvisioningStatus: "STRING_VALUE",
 * //   LatestSoftware: "STRING_VALUE",
 * //   CurrentSoftware: "STRING_VALUE",
 * //   SerialNumber: "STRING_VALUE",
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   NetworkingConfiguration: { // NetworkPayload
 * //     Ethernet0: { // EthernetPayload
 * //       ConnectionType: "STRING_VALUE", // required
 * //       StaticIpConnectionInfo: { // StaticIpConnectionInfo
 * //         IpAddress: "STRING_VALUE", // required
 * //         Mask: "STRING_VALUE", // required
 * //         Dns: [ // DnsList // required
 * //           "STRING_VALUE",
 * //         ],
 * //         DefaultGateway: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     Ethernet1: {
 * //       ConnectionType: "STRING_VALUE", // required
 * //       StaticIpConnectionInfo: {
 * //         IpAddress: "STRING_VALUE", // required
 * //         Mask: "STRING_VALUE", // required
 * //         Dns: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //         DefaultGateway: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     Ntp: { // NtpPayload
 * //       NtpServers: [ // NtpServerList // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * //   CurrentNetworkingStatus: { // NetworkStatus
 * //     Ethernet0Status: { // EthernetStatus
 * //       IpAddress: "STRING_VALUE",
 * //       ConnectionStatus: "STRING_VALUE",
 * //       HwAddress: "STRING_VALUE",
 * //     },
 * //     Ethernet1Status: {
 * //       IpAddress: "STRING_VALUE",
 * //       ConnectionStatus: "STRING_VALUE",
 * //       HwAddress: "STRING_VALUE",
 * //     },
 * //     NtpStatus: { // NtpStatus
 * //       ConnectionStatus: "STRING_VALUE",
 * //       IpAddress: "STRING_VALUE",
 * //       NtpServerName: "STRING_VALUE",
 * //     },
 * //     LastUpdatedTime: new Date("TIMESTAMP"),
 * //   },
 * //   LeaseExpirationTime: new Date("TIMESTAMP"),
 * //   AlternateSoftwares: [ // AlternateSoftwares
 * //     { // AlternateSoftwareMetadata
 * //       Version: "STRING_VALUE",
 * //     },
 * //   ],
 * //   LatestAlternateSoftware: "STRING_VALUE",
 * //   Brand: "STRING_VALUE",
 * //   LatestDeviceJob: { // LatestDeviceJob
 * //     ImageVersion: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     JobType: "STRING_VALUE",
 * //   },
 * //   DeviceAggregatedStatus: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDeviceCommandInput - {@link DescribeDeviceCommandInput}
 * @returns {@link DescribeDeviceCommandOutput}
 * @see {@link DescribeDeviceCommandInput} for command's `input` shape.
 * @see {@link DescribeDeviceCommandOutput} for command's `response` shape.
 * @see {@link PanoramaClientResolvedConfig | config} for PanoramaClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The requestor does not have permission to access the target action or resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request contains an invalid parameter value.</p>
 *
 * @throws {@link PanoramaServiceException}
 * <p>Base exception class for all service exceptions from Panorama service.</p>
 *
 */
export class DescribeDeviceCommand extends $Command<
  DescribeDeviceCommandInput,
  DescribeDeviceCommandOutput,
  PanoramaClientResolvedConfig
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
  constructor(readonly input: DescribeDeviceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PanoramaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDeviceCommandInput, DescribeDeviceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDeviceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PanoramaClient";
    const commandName = "DescribeDeviceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "OmniCloudServiceLambda",
        operation: "DescribeDevice",
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
  private serialize(input: DescribeDeviceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDeviceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDeviceCommandOutput> {
    return de_DescribeDeviceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
