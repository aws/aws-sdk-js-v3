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

import {
  ExportLensInput,
  ExportLensInputFilterSensitiveLog,
  ExportLensOutput,
  ExportLensOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ExportLensCommand,
  serializeAws_restJson1ExportLensCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

export interface ExportLensCommandInput extends ExportLensInput {}
export interface ExportLensCommandOutput extends ExportLensOutput, __MetadataBearer {}

/**
 * <p>Export an existing lens.</p>
 *         <p>Lenses are defined in JSON. For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-format-specification.html">JSON format specification</a>
 *             in the <i>Well-Architected Tool User Guide</i>. Only the owner of a lens can export it.
 *         </p>
 *         <note>
 *             <p>
 *                <b>Disclaimer</b>
 *             </p>
 *             <p>Do not include or gather personal identifiable information (PII) of end users or
 *                 other identifiable individuals in or via your custom lenses. If your custom
 *                 lens or those shared with you and used in your account do include or collect
 *                 PII you are responsible for: ensuring that the included PII is processed in accordance
 *                 with applicable law, providing adequate privacy notices, and obtaining necessary
 *                 consents for processing such data.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ExportLensCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ExportLensCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new ExportLensCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExportLensCommandInput} for command's `input` shape.
 * @see {@link ExportLensCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 */
export class ExportLensCommand extends $Command<
  ExportLensCommandInput,
  ExportLensCommandOutput,
  WellArchitectedClientResolvedConfig
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

  constructor(readonly input: ExportLensCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WellArchitectedClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExportLensCommandInput, ExportLensCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ExportLensCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WellArchitectedClient";
    const commandName = "ExportLensCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExportLensInputFilterSensitiveLog,
      outputFilterSensitiveLog: ExportLensOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ExportLensCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ExportLensCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExportLensCommandOutput> {
    return deserializeAws_restJson1ExportLensCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
