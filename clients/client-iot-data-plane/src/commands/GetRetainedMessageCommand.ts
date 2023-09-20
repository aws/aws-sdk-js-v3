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

import { IoTDataPlaneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTDataPlaneClient";
import { GetRetainedMessageRequest, GetRetainedMessageResponse } from "../models/models_0";
import { de_GetRetainedMessageCommand, se_GetRetainedMessageCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetRetainedMessageCommand}.
 */
export interface GetRetainedMessageCommandInput extends GetRetainedMessageRequest {}
/**
 * @public
 *
 * The output of {@link GetRetainedMessageCommand}.
 */
export interface GetRetainedMessageCommandOutput extends GetRetainedMessageResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the details of a single retained message for the specified topic.</p>
 *          <p>This action returns the message payload of the retained message, which can
 *       incur messaging costs. To list only the topic names of the retained messages, call
 *       <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_iotdata_ListRetainedMessages.html">ListRetainedMessages</a>.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotfleethubfordevicemanagement.html#awsiotfleethubfordevicemanagement-actions-as-permissions">GetRetainedMessage</a> action.</p>
 *          <p>For more information about messaging costs, see <a href="http://aws.amazon.com/iot-core/pricing/#Messaging">Amazon Web Services IoT Core
 *       pricing - Messaging</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTDataPlaneClient, GetRetainedMessageCommand } from "@aws-sdk/client-iot-data-plane"; // ES Modules import
 * // const { IoTDataPlaneClient, GetRetainedMessageCommand } = require("@aws-sdk/client-iot-data-plane"); // CommonJS import
 * const client = new IoTDataPlaneClient(config);
 * const input = { // GetRetainedMessageRequest
 *   topic: "STRING_VALUE", // required
 * };
 * const command = new GetRetainedMessageCommand(input);
 * const response = await client.send(command);
 * // { // GetRetainedMessageResponse
 * //   topic: "STRING_VALUE",
 * //   payload: "BLOB_VALUE",
 * //   qos: Number("int"),
 * //   lastModifiedTime: Number("long"),
 * //   userProperties: "BLOB_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRetainedMessageCommandInput - {@link GetRetainedMessageCommandInput}
 * @returns {@link GetRetainedMessageCommandOutput}
 * @see {@link GetRetainedMessageCommandInput} for command's `input` shape.
 * @see {@link GetRetainedMessageCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
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
export class GetRetainedMessageCommand extends $Command<
  GetRetainedMessageCommandInput,
  GetRetainedMessageCommandOutput,
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
  constructor(readonly input: GetRetainedMessageCommandInput) {
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
  ): Handler<GetRetainedMessageCommandInput, GetRetainedMessageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRetainedMessageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTDataPlaneClient";
    const commandName = "GetRetainedMessageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "IotMoonrakerService",
        operation: "GetRetainedMessage",
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
  private serialize(input: GetRetainedMessageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetRetainedMessageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRetainedMessageCommandOutput> {
    return de_GetRetainedMessageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
