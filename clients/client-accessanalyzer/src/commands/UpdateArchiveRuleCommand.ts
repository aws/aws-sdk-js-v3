import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { UpdateArchiveRuleRequest } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateArchiveRuleCommand,
  serializeAws_restJson1UpdateArchiveRuleCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface UpdateArchiveRuleCommandInput extends UpdateArchiveRuleRequest {}
export interface UpdateArchiveRuleCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the criteria and values for the specified archive rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, UpdateArchiveRuleCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, UpdateArchiveRuleCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const command = new UpdateArchiveRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateArchiveRuleCommandInput} for command's `input` shape.
 * @see {@link UpdateArchiveRuleCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateArchiveRuleCommand extends $Command<
  UpdateArchiveRuleCommandInput,
  UpdateArchiveRuleCommandOutput,
  AccessAnalyzerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateArchiveRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AccessAnalyzerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateArchiveRuleCommandInput, UpdateArchiveRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AccessAnalyzerClient";
    const commandName = "UpdateArchiveRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateArchiveRuleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateArchiveRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateArchiveRuleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateArchiveRuleCommandOutput> {
    return deserializeAws_restJson1UpdateArchiveRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
