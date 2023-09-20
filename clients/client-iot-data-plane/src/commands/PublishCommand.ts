// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  BlobPayloadInputTypes,
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { IoTDataPlaneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTDataPlaneClient";
import { PublishRequest } from "../models/models_0";
import { de_PublishCommand, se_PublishCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 */
export type PublishCommandInputType = Omit<PublishRequest, "payload"> & {
  payload?: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link PublishCommand}.
 */
export interface PublishCommandInput extends PublishCommandInputType {}
/**
 * @public
 *
 * The output of {@link PublishCommand}.
 */
export interface PublishCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Publishes an MQTT message.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">Publish</a> action.</p>
 *          <p>For more information about MQTT messages, see
 *       <a href="http://docs.aws.amazon.com/iot/latest/developerguide/mqtt.html">MQTT Protocol</a> in the
 *        IoT Developer Guide.</p>
 *          <p>For more information about messaging costs, see <a href="http://aws.amazon.com/iot-core/pricing/#Messaging">Amazon Web Services IoT Core
 *       pricing - Messaging</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTDataPlaneClient, PublishCommand } from "@aws-sdk/client-iot-data-plane"; // ES Modules import
 * // const { IoTDataPlaneClient, PublishCommand } = require("@aws-sdk/client-iot-data-plane"); // CommonJS import
 * const client = new IoTDataPlaneClient(config);
 * const input = { // PublishRequest
 *   topic: "STRING_VALUE", // required
 *   qos: Number("int"),
 *   retain: true || false,
 *   payload: "BLOB_VALUE",
 *   userProperties: "STRING_VALUE",
 *   payloadFormatIndicator: "UNSPECIFIED_BYTES" || "UTF8_DATA",
 *   contentType: "STRING_VALUE",
 *   responseTopic: "STRING_VALUE",
 *   correlationData: "STRING_VALUE",
 *   messageExpiry: Number("long"),
 * };
 * const command = new PublishCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PublishCommandInput - {@link PublishCommandInput}
 * @returns {@link PublishCommandOutput}
 * @see {@link PublishCommandInput} for command's `input` shape.
 * @see {@link PublishCommandOutput} for command's `response` shape.
 * @see {@link IoTDataPlaneClientResolvedConfig | config} for IoTDataPlaneClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>The specified combination of HTTP verb and URI is not supported.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTDataPlaneServiceException}
 * <p>Base exception class for all service exceptions from IoTDataPlane service.</p>
 *
 */
export class PublishCommand extends $Command<
  PublishCommandInput,
  PublishCommandOutput,
  IoTDataPlaneClientResolvedConfig
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
  constructor(readonly input: PublishCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTDataPlaneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PublishCommandInput, PublishCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PublishCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTDataPlaneClient";
    const commandName = "PublishCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "IotMoonrakerService",
        operation: "Publish",
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
  private serialize(input: PublishCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PublishCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PublishCommandOutput> {
    return de_PublishCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
