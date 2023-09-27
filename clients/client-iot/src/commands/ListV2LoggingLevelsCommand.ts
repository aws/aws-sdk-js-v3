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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListV2LoggingLevelsRequest, ListV2LoggingLevelsResponse } from "../models/models_2";
import { de_ListV2LoggingLevelsCommand, se_ListV2LoggingLevelsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListV2LoggingLevelsCommand}.
 */
export interface ListV2LoggingLevelsCommandInput extends ListV2LoggingLevelsRequest {}
/**
 * @public
 *
 * The output of {@link ListV2LoggingLevelsCommand}.
 */
export interface ListV2LoggingLevelsCommandOutput extends ListV2LoggingLevelsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists logging levels.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListV2LoggingLevels</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListV2LoggingLevelsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListV2LoggingLevelsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // ListV2LoggingLevelsRequest
 *   targetType: "DEFAULT" || "THING_GROUP" || "CLIENT_ID" || "SOURCE_IP" || "PRINCIPAL_ID" || "EVENT_TYPE" || "DEVICE_DEFENDER",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListV2LoggingLevelsCommand(input);
 * const response = await client.send(command);
 * // { // ListV2LoggingLevelsResponse
 * //   logTargetConfigurations: [ // LogTargetConfigurations
 * //     { // LogTargetConfiguration
 * //       logTarget: { // LogTarget
 * //         targetType: "DEFAULT" || "THING_GROUP" || "CLIENT_ID" || "SOURCE_IP" || "PRINCIPAL_ID" || "EVENT_TYPE" || "DEVICE_DEFENDER", // required
 * //         targetName: "STRING_VALUE",
 * //       },
 * //       logLevel: "DEBUG" || "INFO" || "ERROR" || "WARN" || "DISABLED",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListV2LoggingLevelsCommandInput - {@link ListV2LoggingLevelsCommandInput}
 * @returns {@link ListV2LoggingLevelsCommandOutput}
 * @see {@link ListV2LoggingLevelsCommandInput} for command's `input` shape.
 * @see {@link ListV2LoggingLevelsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link NotConfiguredException} (client fault)
 *  <p>The resource is not configured.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 */
export class ListV2LoggingLevelsCommand extends $Command<
  ListV2LoggingLevelsCommandInput,
  ListV2LoggingLevelsCommandOutput,
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
  constructor(readonly input: ListV2LoggingLevelsCommandInput) {
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
  ): Handler<ListV2LoggingLevelsCommandInput, ListV2LoggingLevelsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListV2LoggingLevelsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListV2LoggingLevelsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIotService",
        operation: "ListV2LoggingLevels",
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
  private serialize(input: ListV2LoggingLevelsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListV2LoggingLevelsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListV2LoggingLevelsCommandOutput> {
    return de_ListV2LoggingLevelsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
