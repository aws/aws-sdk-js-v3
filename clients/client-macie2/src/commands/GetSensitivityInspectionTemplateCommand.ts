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

import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import {
  GetSensitivityInspectionTemplateRequest,
  GetSensitivityInspectionTemplateRequestFilterSensitiveLog,
  GetSensitivityInspectionTemplateResponse,
  GetSensitivityInspectionTemplateResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetSensitivityInspectionTemplateCommand,
  serializeAws_restJson1GetSensitivityInspectionTemplateCommand,
} from "../protocols/Aws_restJson1";

export interface GetSensitivityInspectionTemplateCommandInput extends GetSensitivityInspectionTemplateRequest {}
export interface GetSensitivityInspectionTemplateCommandOutput
  extends GetSensitivityInspectionTemplateResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the settings for the sensitivity inspection template for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetSensitivityInspectionTemplateCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetSensitivityInspectionTemplateCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new GetSensitivityInspectionTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSensitivityInspectionTemplateCommandInput} for command's `input` shape.
 * @see {@link GetSensitivityInspectionTemplateCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 */
export class GetSensitivityInspectionTemplateCommand extends $Command<
  GetSensitivityInspectionTemplateCommandInput,
  GetSensitivityInspectionTemplateCommandOutput,
  Macie2ClientResolvedConfig
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

  constructor(readonly input: GetSensitivityInspectionTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Macie2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSensitivityInspectionTemplateCommandInput, GetSensitivityInspectionTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSensitivityInspectionTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "GetSensitivityInspectionTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSensitivityInspectionTemplateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetSensitivityInspectionTemplateResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetSensitivityInspectionTemplateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSensitivityInspectionTemplateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetSensitivityInspectionTemplateCommandOutput> {
    return deserializeAws_restJson1GetSensitivityInspectionTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
