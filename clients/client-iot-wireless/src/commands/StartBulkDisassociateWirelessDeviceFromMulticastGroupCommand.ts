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

import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import {
  StartBulkDisassociateWirelessDeviceFromMulticastGroupRequest,
  StartBulkDisassociateWirelessDeviceFromMulticastGroupResponse,
} from "../models/models_1";
import {
  de_StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand,
  se_StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand}.
 */
export interface StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandInput
  extends StartBulkDisassociateWirelessDeviceFromMulticastGroupRequest {}
/**
 * @public
 *
 * The output of {@link StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand}.
 */
export interface StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandOutput
  extends StartBulkDisassociateWirelessDeviceFromMulticastGroupResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Starts a bulk disassociatin of all qualifying wireless devices from a multicast
 *             group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // StartBulkDisassociateWirelessDeviceFromMulticastGroupRequest
 *   Id: "STRING_VALUE", // required
 *   QueryString: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandInput - {@link StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandInput}
 * @returns {@link StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandOutput}
 * @see {@link StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandInput} for command's `input` shape.
 * @see {@link StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded the allowed API request rate.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input did not meet the specified constraints.</p>
 *
 * @throws {@link IoTWirelessServiceException}
 * <p>Base exception class for all service exceptions from IoTWireless service.</p>
 *
 */
export class StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand extends $Command<
  StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandInput,
  StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandOutput,
  IoTWirelessClientResolvedConfig
> {
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
  constructor(readonly input: StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTWirelessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandInput,
    StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "iotwireless",
        operation: "StartBulkDisassociateWirelessDeviceFromMulticastGroup",
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
    input: StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandOutput> {
    return de_StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand(output, context);
  }
}
