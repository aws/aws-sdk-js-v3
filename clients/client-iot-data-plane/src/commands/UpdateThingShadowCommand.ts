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
} from "@smithy/types";
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { IoTDataPlaneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTDataPlaneClient";
import { UpdateThingShadowRequest, UpdateThingShadowResponse } from "../models/models_0";
import { de_UpdateThingShadowCommand, se_UpdateThingShadowCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 */
export type UpdateThingShadowCommandInputType = Omit<UpdateThingShadowRequest, "payload"> & {
  payload: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link UpdateThingShadowCommand}.
 */
export interface UpdateThingShadowCommandInput extends UpdateThingShadowCommandInputType {}
/**
 * @public
 */
export type UpdateThingShadowCommandOutputType = Omit<UpdateThingShadowResponse, "payload"> & {
  payload?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link UpdateThingShadowCommand}.
 */
export interface UpdateThingShadowCommandOutput extends UpdateThingShadowCommandOutputType, __MetadataBearer {}

/**
 * @public
 * <p>Updates the shadow for the specified thing.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateThingShadow</a> action.</p>
 *          <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_UpdateThingShadow.html">UpdateThingShadow</a> in the
 *         IoT Developer Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTDataPlaneClient, UpdateThingShadowCommand } from "@aws-sdk/client-iot-data-plane"; // ES Modules import
 * // const { IoTDataPlaneClient, UpdateThingShadowCommand } = require("@aws-sdk/client-iot-data-plane"); // CommonJS import
 * const client = new IoTDataPlaneClient(config);
 * const input = { // UpdateThingShadowRequest
 *   thingName: "STRING_VALUE", // required
 *   shadowName: "STRING_VALUE",
 *   payload: "BLOB_VALUE", // required
 * };
 * const command = new UpdateThingShadowCommand(input);
 * const response = await client.send(command);
 * // { // UpdateThingShadowResponse
 * //   payload: "BLOB_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateThingShadowCommandInput - {@link UpdateThingShadowCommandInput}
 * @returns {@link UpdateThingShadowCommandOutput}
 * @see {@link UpdateThingShadowCommandInput} for command's `input` shape.
 * @see {@link UpdateThingShadowCommandOutput} for command's `response` shape.
 * @see {@link IoTDataPlaneClientResolvedConfig | config} for IoTDataPlaneClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The specified version does not match the version of the document.</p>
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
 * @throws {@link RequestEntityTooLargeException} (client fault)
 *  <p>The payload exceeds the maximum size allowed.</p>
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
 * @throws {@link UnsupportedDocumentEncodingException} (client fault)
 *  <p>The document encoding is not supported.</p>
 *
 * @throws {@link IoTDataPlaneServiceException}
 * <p>Base exception class for all service exceptions from IoTDataPlane service.</p>
 *
 */
export class UpdateThingShadowCommand extends $Command<
  UpdateThingShadowCommandInput,
  UpdateThingShadowCommandOutput,
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
  constructor(readonly input: UpdateThingShadowCommandInput) {
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
  ): Handler<UpdateThingShadowCommandInput, UpdateThingShadowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateThingShadowCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTDataPlaneClient";
    const commandName = "UpdateThingShadowCommand";
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
  private serialize(input: UpdateThingShadowCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateThingShadowCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateThingShadowCommandOutput> {
    return de_UpdateThingShadowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
