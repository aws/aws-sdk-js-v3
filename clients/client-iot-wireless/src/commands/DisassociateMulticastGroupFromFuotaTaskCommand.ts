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
  DisassociateMulticastGroupFromFuotaTaskRequest,
  DisassociateMulticastGroupFromFuotaTaskResponse,
} from "../models/models_0";
import {
  de_DisassociateMulticastGroupFromFuotaTaskCommand,
  se_DisassociateMulticastGroupFromFuotaTaskCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisassociateMulticastGroupFromFuotaTaskCommand}.
 */
export interface DisassociateMulticastGroupFromFuotaTaskCommandInput
  extends DisassociateMulticastGroupFromFuotaTaskRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateMulticastGroupFromFuotaTaskCommand}.
 */
export interface DisassociateMulticastGroupFromFuotaTaskCommandOutput
  extends DisassociateMulticastGroupFromFuotaTaskResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Disassociates a multicast group from a fuota task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, DisassociateMulticastGroupFromFuotaTaskCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, DisassociateMulticastGroupFromFuotaTaskCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // DisassociateMulticastGroupFromFuotaTaskRequest
 *   Id: "STRING_VALUE", // required
 *   MulticastGroupId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateMulticastGroupFromFuotaTaskCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateMulticastGroupFromFuotaTaskCommandInput - {@link DisassociateMulticastGroupFromFuotaTaskCommandInput}
 * @returns {@link DisassociateMulticastGroupFromFuotaTaskCommandOutput}
 * @see {@link DisassociateMulticastGroupFromFuotaTaskCommandInput} for command's `input` shape.
 * @see {@link DisassociateMulticastGroupFromFuotaTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Adding, updating, or deleting the resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input did not meet the specified constraints.</p>
 *
 * @throws {@link IoTWirelessServiceException}
 * <p>Base exception class for all service exceptions from IoTWireless service.</p>
 *
 */
export class DisassociateMulticastGroupFromFuotaTaskCommand extends $Command<
  DisassociateMulticastGroupFromFuotaTaskCommandInput,
  DisassociateMulticastGroupFromFuotaTaskCommandOutput,
  IoTWirelessClientResolvedConfig
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
  constructor(readonly input: DisassociateMulticastGroupFromFuotaTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTWirelessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DisassociateMulticastGroupFromFuotaTaskCommandInput,
    DisassociateMulticastGroupFromFuotaTaskCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DisassociateMulticastGroupFromFuotaTaskCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "DisassociateMulticastGroupFromFuotaTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "iotwireless",
        operation: "DisassociateMulticastGroupFromFuotaTask",
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
    input: DisassociateMulticastGroupFromFuotaTaskCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DisassociateMulticastGroupFromFuotaTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateMulticastGroupFromFuotaTaskCommandOutput> {
    return de_DisassociateMulticastGroupFromFuotaTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
