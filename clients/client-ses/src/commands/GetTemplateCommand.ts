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

import { GetTemplateRequest, GetTemplateResponse } from "../models/models_0";
import { de_GetTemplateCommand, se_GetTemplateCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetTemplateCommand}.
 */
export interface GetTemplateCommandInput extends GetTemplateRequest {}
/**
 * @public
 *
 * The output of {@link GetTemplateCommand}.
 */
export interface GetTemplateCommandOutput extends GetTemplateResponse, __MetadataBearer {}

/**
 * @public
 * <p>Displays the template object (which includes the Subject line, HTML part and text
 *             part) for the template you specify.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, GetTemplateCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, GetTemplateCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // GetTemplateRequest
 *   TemplateName: "STRING_VALUE", // required
 * };
 * const command = new GetTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetTemplateResponse
 * //   Template: { // Template
 * //     TemplateName: "STRING_VALUE", // required
 * //     SubjectPart: "STRING_VALUE",
 * //     TextPart: "STRING_VALUE",
 * //     HtmlPart: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTemplateCommandInput - {@link GetTemplateCommandInput}
 * @returns {@link GetTemplateCommandOutput}
 * @see {@link GetTemplateCommandInput} for command's `input` shape.
 * @see {@link GetTemplateCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link TemplateDoesNotExistException} (client fault)
 *  <p>Indicates that the Template object you specified does not exist in your Amazon SES
 *             account.</p>
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 */
export class GetTemplateCommand extends $Command<
  GetTemplateCommandInput,
  GetTemplateCommandOutput,
  SESClientResolvedConfig
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
  constructor(readonly input: GetTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetTemplateCommandInput, GetTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetTemplateCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "GetTemplateCommand";
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
  private serialize(input: GetTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTemplateCommandOutput> {
    return de_GetTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
