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

import { UpdateSmsTemplateRequest, UpdateSmsTemplateResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import {
  deserializeAws_restJson1UpdateSmsTemplateCommand,
  serializeAws_restJson1UpdateSmsTemplateCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link UpdateSmsTemplateCommand}.
 */
export interface UpdateSmsTemplateCommandInput extends UpdateSmsTemplateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSmsTemplateCommand}.
 */
export interface UpdateSmsTemplateCommandOutput extends UpdateSmsTemplateResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates an existing message template for messages that are sent through the SMS channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateSmsTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateSmsTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const input = {
 *   CreateNewVersion: true || false,
 *   SMSTemplateRequest: {
 *     Body: "STRING_VALUE",
 *     DefaultSubstitutions: "STRING_VALUE",
 *     RecommenderId: "STRING_VALUE",
 *     tags: {
 *       "<keys>": "STRING_VALUE",
 *     },
 *     TemplateDescription: "STRING_VALUE",
 *   },
 *   TemplateName: "STRING_VALUE", // required
 *   Version: "STRING_VALUE",
 * };
 * const command = new UpdateSmsTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateSmsTemplateCommandInput - {@link UpdateSmsTemplateCommandInput}
 * @returns {@link UpdateSmsTemplateCommandOutput}
 * @see {@link UpdateSmsTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateSmsTemplateCommandOutput} for command's `response` shape.
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
 *
 */
export class UpdateSmsTemplateCommand extends $Command<
  UpdateSmsTemplateCommandInput,
  UpdateSmsTemplateCommandOutput,
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
  constructor(readonly input: UpdateSmsTemplateCommandInput) {
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
  ): Handler<UpdateSmsTemplateCommandInput, UpdateSmsTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateSmsTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "UpdateSmsTemplateCommand";
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
  private serialize(input: UpdateSmsTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateSmsTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateSmsTemplateCommandOutput> {
    return deserializeAws_restJson1UpdateSmsTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
