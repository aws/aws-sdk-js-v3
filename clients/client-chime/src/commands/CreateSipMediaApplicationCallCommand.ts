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
} from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  CreateSipMediaApplicationCallRequest,
  CreateSipMediaApplicationCallRequestFilterSensitiveLog,
  CreateSipMediaApplicationCallResponse,
} from "../models/models_0";
import {
  de_CreateSipMediaApplicationCallCommand,
  se_CreateSipMediaApplicationCallCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateSipMediaApplicationCallCommand}.
 */
export interface CreateSipMediaApplicationCallCommandInput extends CreateSipMediaApplicationCallRequest {}
/**
 * @public
 *
 * The output of {@link CreateSipMediaApplicationCallCommand}.
 */
export interface CreateSipMediaApplicationCallCommandOutput
  extends CreateSipMediaApplicationCallResponse,
    __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Creates an outbound call to a phone number from the phone number specified in the request, and it invokes the endpoint of the specified
 * <code>sipMediaApplicationId</code>.</p>
 *          <important>
 *             <p>
 *                <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_CreateSipMediaApplicationCall.html">CreateSipMediaApplicationCall</a>, in the Amazon Chime SDK.</p>
 *             <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to
 *             <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the
 *             <i>Amazon Chime SDK Developer Guide</i>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, CreateSipMediaApplicationCallCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, CreateSipMediaApplicationCallCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // CreateSipMediaApplicationCallRequest
 *   FromPhoneNumber: "STRING_VALUE", // required
 *   ToPhoneNumber: "STRING_VALUE", // required
 *   SipMediaApplicationId: "STRING_VALUE", // required
 *   SipHeaders: { // SipHeadersMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateSipMediaApplicationCallCommand(input);
 * const response = await client.send(command);
 * // { // CreateSipMediaApplicationCallResponse
 * //   SipMediaApplicationCall: { // SipMediaApplicationCall
 * //     TransactionId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateSipMediaApplicationCallCommandInput - {@link CreateSipMediaApplicationCallCommandInput}
 * @returns {@link CreateSipMediaApplicationCallCommandOutput}
 * @see {@link CreateSipMediaApplicationCallCommandInput} for command's `input` shape.
 * @see {@link CreateSipMediaApplicationCallCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>The request exceeds the resource limit.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 */
export class CreateSipMediaApplicationCallCommand extends $Command<
  CreateSipMediaApplicationCallCommandInput,
  CreateSipMediaApplicationCallCommandOutput,
  ChimeClientResolvedConfig
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
  constructor(readonly input: CreateSipMediaApplicationCallCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSipMediaApplicationCallCommandInput, CreateSipMediaApplicationCallCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateSipMediaApplicationCallCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "CreateSipMediaApplicationCallCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSipMediaApplicationCallRequestFilterSensitiveLog,
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
  private serialize(input: CreateSipMediaApplicationCallCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateSipMediaApplicationCallCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateSipMediaApplicationCallCommandOutput> {
    return de_CreateSipMediaApplicationCallCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
