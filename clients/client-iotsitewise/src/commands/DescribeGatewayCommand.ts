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

import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { DescribeGatewayRequest, DescribeGatewayResponse } from "../models/models_0";
import { de_DescribeGatewayCommand, se_DescribeGatewayCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeGatewayCommand}.
 */
export interface DescribeGatewayCommandInput extends DescribeGatewayRequest {}
/**
 * @public
 *
 * The output of {@link DescribeGatewayCommand}.
 */
export interface DescribeGatewayCommandOutput extends DescribeGatewayResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information about a gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribeGatewayCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribeGatewayCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const input = { // DescribeGatewayRequest
 *   gatewayId: "STRING_VALUE", // required
 * };
 * const command = new DescribeGatewayCommand(input);
 * const response = await client.send(command);
 * // { // DescribeGatewayResponse
 * //   gatewayId: "STRING_VALUE", // required
 * //   gatewayName: "STRING_VALUE", // required
 * //   gatewayArn: "STRING_VALUE", // required
 * //   gatewayPlatform: { // GatewayPlatform
 * //     greengrass: { // Greengrass
 * //       groupArn: "STRING_VALUE", // required
 * //     },
 * //     greengrassV2: { // GreengrassV2
 * //       coreDeviceThingName: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   gatewayCapabilitySummaries: [ // GatewayCapabilitySummaries // required
 * //     { // GatewayCapabilitySummary
 * //       capabilityNamespace: "STRING_VALUE", // required
 * //       capabilitySyncStatus: "IN_SYNC" || "OUT_OF_SYNC" || "SYNC_FAILED" || "UNKNOWN", // required
 * //     },
 * //   ],
 * //   creationDate: new Date("TIMESTAMP"), // required
 * //   lastUpdateDate: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param DescribeGatewayCommandInput - {@link DescribeGatewayCommandInput}
 * @returns {@link DescribeGatewayCommandOutput}
 * @see {@link DescribeGatewayCommandInput} for command's `input` shape.
 * @see {@link DescribeGatewayCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>IoT SiteWise can't process your request right now. Try again later.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters. Check your request and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a rate limit. For example, you might have exceeded the number of
 *       IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so
 *       on.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *
 * @throws {@link IoTSiteWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTSiteWise service.</p>
 *
 */
export class DescribeGatewayCommand extends $Command<
  DescribeGatewayCommandInput,
  DescribeGatewayCommandOutput,
  IoTSiteWiseClientResolvedConfig
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
  constructor(readonly input: DescribeGatewayCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTSiteWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeGatewayCommandInput, DescribeGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeGatewayCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "DescribeGatewayCommand";
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
  private serialize(input: DescribeGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeGatewayCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeGatewayCommandOutput> {
    return de_DescribeGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
