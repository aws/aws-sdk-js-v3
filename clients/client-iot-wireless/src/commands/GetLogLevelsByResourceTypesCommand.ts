// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { GetLogLevelsByResourceTypesRequest, GetLogLevelsByResourceTypesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetLogLevelsByResourceTypesCommand,
  serializeAws_restJson1GetLogLevelsByResourceTypesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link GetLogLevelsByResourceTypesCommand}.
 */
export interface GetLogLevelsByResourceTypesCommandInput extends GetLogLevelsByResourceTypesRequest {}
/**
 * @public
 *
 * The output of {@link GetLogLevelsByResourceTypesCommand}.
 */
export interface GetLogLevelsByResourceTypesCommandOutput
  extends GetLogLevelsByResourceTypesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns current default log levels or log levels by resource types. Based on resource types, log levels can be
 *             for wireless device log options or wireless gateway log options.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetLogLevelsByResourceTypesCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetLogLevelsByResourceTypesCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new GetLogLevelsByResourceTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetLogLevelsByResourceTypesCommandInput - {@link GetLogLevelsByResourceTypesCommandInput}
 * @returns {@link GetLogLevelsByResourceTypesCommandOutput}
 * @see {@link GetLogLevelsByResourceTypesCommandInput} for command's `input` shape.
 * @see {@link GetLogLevelsByResourceTypesCommandOutput} for command's `response` shape.
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
 *
 */
export class GetLogLevelsByResourceTypesCommand extends $Command<
  GetLogLevelsByResourceTypesCommandInput,
  GetLogLevelsByResourceTypesCommandOutput,
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
  constructor(readonly input: GetLogLevelsByResourceTypesCommandInput) {
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
  ): Handler<GetLogLevelsByResourceTypesCommandInput, GetLogLevelsByResourceTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetLogLevelsByResourceTypesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "GetLogLevelsByResourceTypesCommand";
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
  private serialize(input: GetLogLevelsByResourceTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetLogLevelsByResourceTypesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetLogLevelsByResourceTypesCommandOutput> {
    return deserializeAws_restJson1GetLogLevelsByResourceTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
