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
  UpdateSensitivityInspectionTemplateRequest,
  UpdateSensitivityInspectionTemplateRequestFilterSensitiveLog,
  UpdateSensitivityInspectionTemplateResponse,
  UpdateSensitivityInspectionTemplateResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1UpdateSensitivityInspectionTemplateCommand,
  serializeAws_restJson1UpdateSensitivityInspectionTemplateCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateSensitivityInspectionTemplateCommandInput extends UpdateSensitivityInspectionTemplateRequest {}
export interface UpdateSensitivityInspectionTemplateCommandOutput
  extends UpdateSensitivityInspectionTemplateResponse,
    __MetadataBearer {}

/**
 * <p>Updates the settings for the sensitivity inspection template for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, UpdateSensitivityInspectionTemplateCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, UpdateSensitivityInspectionTemplateCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new UpdateSensitivityInspectionTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSensitivityInspectionTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateSensitivityInspectionTemplateCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 */
export class UpdateSensitivityInspectionTemplateCommand extends $Command<
  UpdateSensitivityInspectionTemplateCommandInput,
  UpdateSensitivityInspectionTemplateCommandOutput,
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

  constructor(readonly input: UpdateSensitivityInspectionTemplateCommandInput) {
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
  ): Handler<UpdateSensitivityInspectionTemplateCommandInput, UpdateSensitivityInspectionTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateSensitivityInspectionTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "UpdateSensitivityInspectionTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateSensitivityInspectionTemplateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateSensitivityInspectionTemplateResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateSensitivityInspectionTemplateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateSensitivityInspectionTemplateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateSensitivityInspectionTemplateCommandOutput> {
    return deserializeAws_restJson1UpdateSensitivityInspectionTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
