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
import { GetFuotaTaskRequest, GetFuotaTaskResponse } from "../models/models_0";
import { de_GetFuotaTaskCommand, se_GetFuotaTaskCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetFuotaTaskCommand}.
 */
export interface GetFuotaTaskCommandInput extends GetFuotaTaskRequest {}
/**
 * @public
 *
 * The output of {@link GetFuotaTaskCommand}.
 */
export interface GetFuotaTaskCommandOutput extends GetFuotaTaskResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about a FUOTA task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetFuotaTaskCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetFuotaTaskCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // GetFuotaTaskRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetFuotaTaskCommand(input);
 * const response = await client.send(command);
 * // { // GetFuotaTaskResponse
 * //   Arn: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Status: "Pending" || "FuotaSession_Waiting" || "In_FuotaSession" || "FuotaDone" || "Delete_Waiting",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   LoRaWAN: { // LoRaWANFuotaTaskGetInfo
 * //     RfRegion: "STRING_VALUE",
 * //     StartTime: new Date("TIMESTAMP"),
 * //   },
 * //   FirmwareUpdateImage: "STRING_VALUE",
 * //   FirmwareUpdateRole: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   RedundancyPercent: Number("int"),
 * //   FragmentSizeBytes: Number("int"),
 * //   FragmentIntervalMS: Number("int"),
 * // };
 *
 * ```
 *
 * @param GetFuotaTaskCommandInput - {@link GetFuotaTaskCommandInput}
 * @returns {@link GetFuotaTaskCommandOutput}
 * @see {@link GetFuotaTaskCommandInput} for command's `input` shape.
 * @see {@link GetFuotaTaskCommandOutput} for command's `response` shape.
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
export class GetFuotaTaskCommand extends $Command<
  GetFuotaTaskCommandInput,
  GetFuotaTaskCommandOutput,
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
  constructor(readonly input: GetFuotaTaskCommandInput) {
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
  ): Handler<GetFuotaTaskCommandInput, GetFuotaTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetFuotaTaskCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "GetFuotaTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "iotwireless",
        operation: "GetFuotaTask",
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
  private serialize(input: GetFuotaTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetFuotaTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetFuotaTaskCommandOutput> {
    return de_GetFuotaTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
