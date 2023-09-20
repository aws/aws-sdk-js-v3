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

import { CreateVoiceTemplateRequest, CreateVoiceTemplateResponse } from "../models/models_0";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_CreateVoiceTemplateCommand, se_CreateVoiceTemplateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateVoiceTemplateCommand}.
 */
export interface CreateVoiceTemplateCommandInput extends CreateVoiceTemplateRequest {}
/**
 * @public
 *
 * The output of {@link CreateVoiceTemplateCommand}.
 */
export interface CreateVoiceTemplateCommandOutput extends CreateVoiceTemplateResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a message template for messages that are sent through the voice channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, CreateVoiceTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, CreateVoiceTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const input = { // CreateVoiceTemplateRequest
 *   TemplateName: "STRING_VALUE", // required
 *   VoiceTemplateRequest: { // VoiceTemplateRequest
 *     Body: "STRING_VALUE",
 *     DefaultSubstitutions: "STRING_VALUE",
 *     LanguageCode: "STRING_VALUE",
 *     tags: { // MapOf__string
 *       "<keys>": "STRING_VALUE",
 *     },
 *     TemplateDescription: "STRING_VALUE",
 *     VoiceId: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateVoiceTemplateCommand(input);
 * const response = await client.send(command);
 * // { // CreateVoiceTemplateResponse
 * //   CreateTemplateMessageBody: { // CreateTemplateMessageBody
 * //     Arn: "STRING_VALUE",
 * //     Message: "STRING_VALUE",
 * //     RequestID: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateVoiceTemplateCommandInput - {@link CreateVoiceTemplateCommandInput}
 * @returns {@link CreateVoiceTemplateCommandOutput}
 * @see {@link CreateVoiceTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateVoiceTemplateCommandOutput} for command's `response` shape.
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
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PinpointServiceException}
 * <p>Base exception class for all service exceptions from Pinpoint service.</p>
 *
 */
export class CreateVoiceTemplateCommand extends $Command<
  CreateVoiceTemplateCommandInput,
  CreateVoiceTemplateCommandOutput,
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
  constructor(readonly input: CreateVoiceTemplateCommandInput) {
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
  ): Handler<CreateVoiceTemplateCommandInput, CreateVoiceTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateVoiceTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "CreateVoiceTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Pinpoint",
        operation: "CreateVoiceTemplate",
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
  private serialize(input: CreateVoiceTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateVoiceTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateVoiceTemplateCommandOutput> {
    return de_CreateVoiceTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
