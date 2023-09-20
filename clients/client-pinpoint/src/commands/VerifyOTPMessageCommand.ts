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

import { VerifyOTPMessageRequest, VerifyOTPMessageResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_VerifyOTPMessageCommand, se_VerifyOTPMessageCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link VerifyOTPMessageCommand}.
 */
export interface VerifyOTPMessageCommandInput extends VerifyOTPMessageRequest {}
/**
 * @public
 *
 * The output of {@link VerifyOTPMessageCommand}.
 */
export interface VerifyOTPMessageCommandOutput extends VerifyOTPMessageResponse, __MetadataBearer {}

/**
 * @public
 * <p>Verify an OTP</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, VerifyOTPMessageCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, VerifyOTPMessageCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const input = { // VerifyOTPMessageRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   VerifyOTPMessageRequestParameters: { // VerifyOTPMessageRequestParameters
 *     DestinationIdentity: "STRING_VALUE", // required
 *     Otp: "STRING_VALUE", // required
 *     ReferenceId: "STRING_VALUE", // required
 *   },
 * };
 * const command = new VerifyOTPMessageCommand(input);
 * const response = await client.send(command);
 * // { // VerifyOTPMessageResponse
 * //   VerificationResponse: { // VerificationResponse
 * //     Valid: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param VerifyOTPMessageCommandInput - {@link VerifyOTPMessageCommandInput}
 * @returns {@link VerifyOTPMessageCommandOutput}
 * @see {@link VerifyOTPMessageCommandInput} for command's `input` shape.
 * @see {@link VerifyOTPMessageCommandOutput} for command's `response` shape.
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
export class VerifyOTPMessageCommand extends $Command<
  VerifyOTPMessageCommandInput,
  VerifyOTPMessageCommandOutput,
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
  constructor(readonly input: VerifyOTPMessageCommandInput) {
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
  ): Handler<VerifyOTPMessageCommandInput, VerifyOTPMessageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, VerifyOTPMessageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "VerifyOTPMessageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Pinpoint",
        operation: "VerifyOTPMessage",
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
  private serialize(input: VerifyOTPMessageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_VerifyOTPMessageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<VerifyOTPMessageCommandOutput> {
    return de_VerifyOTPMessageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
