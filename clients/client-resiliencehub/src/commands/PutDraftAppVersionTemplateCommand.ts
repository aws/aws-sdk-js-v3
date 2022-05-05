// smithy-typescript generated code
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

import { PutDraftAppVersionTemplateRequest, PutDraftAppVersionTemplateResponse } from "../models/models_0";
import {
  deserializeAws_restJson1PutDraftAppVersionTemplateCommand,
  serializeAws_restJson1PutDraftAppVersionTemplateCommand,
} from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

export interface PutDraftAppVersionTemplateCommandInput extends PutDraftAppVersionTemplateRequest {}
export interface PutDraftAppVersionTemplateCommandOutput extends PutDraftAppVersionTemplateResponse, __MetadataBearer {}

/**
 * <p>Adds or updates the app template for a draft version of a Resilience Hub app.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, PutDraftAppVersionTemplateCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, PutDraftAppVersionTemplateCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const command = new PutDraftAppVersionTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutDraftAppVersionTemplateCommandInput} for command's `input` shape.
 * @see {@link PutDraftAppVersionTemplateCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 */
export class PutDraftAppVersionTemplateCommand extends $Command<
  PutDraftAppVersionTemplateCommandInput,
  PutDraftAppVersionTemplateCommandOutput,
  ResiliencehubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutDraftAppVersionTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResiliencehubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutDraftAppVersionTemplateCommandInput, PutDraftAppVersionTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResiliencehubClient";
    const commandName = "PutDraftAppVersionTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutDraftAppVersionTemplateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutDraftAppVersionTemplateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutDraftAppVersionTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutDraftAppVersionTemplateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutDraftAppVersionTemplateCommandOutput> {
    return deserializeAws_restJson1PutDraftAppVersionTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
