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

import { SendOTPMessageRequest, SendOTPMessageResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_SendOTPMessageCommand, se_SendOTPMessageCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SendOTPMessageCommand}.
 */
export interface SendOTPMessageCommandInput extends SendOTPMessageRequest {}
/**
 * @public
 *
 * The output of {@link SendOTPMessageCommand}.
 */
export interface SendOTPMessageCommandOutput extends SendOTPMessageResponse, __MetadataBearer {}

/**
 * @public
 * <p>Send an OTP message</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, SendOTPMessageCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, SendOTPMessageCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const input = { // SendOTPMessageRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   SendOTPMessageRequestParameters: { // SendOTPMessageRequestParameters
 *     AllowedAttempts: Number("int"),
 *     BrandName: "STRING_VALUE", // required
 *     Channel: "STRING_VALUE", // required
 *     CodeLength: Number("int"),
 *     DestinationIdentity: "STRING_VALUE", // required
 *     EntityId: "STRING_VALUE",
 *     Language: "STRING_VALUE",
 *     OriginationIdentity: "STRING_VALUE", // required
 *     ReferenceId: "STRING_VALUE", // required
 *     TemplateId: "STRING_VALUE",
 *     ValidityPeriod: Number("int"),
 *   },
 * };
 * const command = new SendOTPMessageCommand(input);
 * const response = await client.send(command);
 * // { // SendOTPMessageResponse
 * //   MessageResponse: { // MessageResponse
 * //     ApplicationId: "STRING_VALUE", // required
 * //     EndpointResult: { // MapOfEndpointMessageResult
 * //       "<keys>": { // EndpointMessageResult
 * //         Address: "STRING_VALUE",
 * //         DeliveryStatus: "SUCCESSFUL" || "THROTTLED" || "TEMPORARY_FAILURE" || "PERMANENT_FAILURE" || "UNKNOWN_FAILURE" || "OPT_OUT" || "DUPLICATE", // required
 * //         MessageId: "STRING_VALUE",
 * //         StatusCode: Number("int"), // required
 * //         StatusMessage: "STRING_VALUE",
 * //         UpdatedToken: "STRING_VALUE",
 * //       },
 * //     },
 * //     RequestId: "STRING_VALUE",
 * //     Result: { // MapOfMessageResult
 * //       "<keys>": { // MessageResult
 * //         DeliveryStatus: "SUCCESSFUL" || "THROTTLED" || "TEMPORARY_FAILURE" || "PERMANENT_FAILURE" || "UNKNOWN_FAILURE" || "OPT_OUT" || "DUPLICATE", // required
 * //         MessageId: "STRING_VALUE",
 * //         StatusCode: Number("int"), // required
 * //         StatusMessage: "STRING_VALUE",
 * //         UpdatedToken: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param SendOTPMessageCommandInput - {@link SendOTPMessageCommandInput}
 * @returns {@link SendOTPMessageCommandOutput}
 * @see {@link SendOTPMessageCommandInput} for command's `input` shape.
 * @see {@link SendOTPMessageCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PinpointServiceException}
 * <p>Base exception class for all service exceptions from Pinpoint service.</p>
 *
 */
export class SendOTPMessageCommand extends $Command<
  SendOTPMessageCommandInput,
  SendOTPMessageCommandOutput,
  PinpointClientResolvedConfig
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
  constructor(readonly input: SendOTPMessageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendOTPMessageCommandInput, SendOTPMessageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SendOTPMessageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "SendOTPMessageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Pinpoint",
        operation: "SendOTPMessage",
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
  private serialize(input: SendOTPMessageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SendOTPMessageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendOTPMessageCommandOutput> {
    return de_SendOTPMessageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
