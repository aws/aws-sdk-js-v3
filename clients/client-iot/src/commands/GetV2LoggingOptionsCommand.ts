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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { GetV2LoggingOptionsRequest, GetV2LoggingOptionsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1GetV2LoggingOptionsCommand,
  serializeAws_restJson1GetV2LoggingOptionsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link GetV2LoggingOptionsCommand}.
 */
export interface GetV2LoggingOptionsCommandInput extends GetV2LoggingOptionsRequest {}
/**
 * @public
 *
 * The output of {@link GetV2LoggingOptionsCommand}.
 */
export interface GetV2LoggingOptionsCommandOutput extends GetV2LoggingOptionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the fine grained logging options.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetV2LoggingOptions</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetV2LoggingOptionsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetV2LoggingOptionsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new GetV2LoggingOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetV2LoggingOptionsCommandInput - {@link GetV2LoggingOptionsCommandInput}
 * @returns {@link GetV2LoggingOptionsCommandOutput}
 * @see {@link GetV2LoggingOptionsCommandInput} for command's `input` shape.
 * @see {@link GetV2LoggingOptionsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link NotConfiguredException} (client fault)
 *  <p>The resource is not configured.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 *
 */
export class GetV2LoggingOptionsCommand extends $Command<
  GetV2LoggingOptionsCommandInput,
  GetV2LoggingOptionsCommandOutput,
  IoTClientResolvedConfig
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
  constructor(readonly input: GetV2LoggingOptionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetV2LoggingOptionsCommandInput, GetV2LoggingOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetV2LoggingOptionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "GetV2LoggingOptionsCommand";
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
  private serialize(input: GetV2LoggingOptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetV2LoggingOptionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetV2LoggingOptionsCommandOutput> {
    return deserializeAws_restJson1GetV2LoggingOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
