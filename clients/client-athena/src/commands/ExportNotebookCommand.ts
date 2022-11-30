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

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import {
  ExportNotebookInput,
  ExportNotebookInputFilterSensitiveLog,
  ExportNotebookOutput,
  ExportNotebookOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ExportNotebookCommand,
  serializeAws_json1_1ExportNotebookCommand,
} from "../protocols/Aws_json1_1";

export interface ExportNotebookCommandInput extends ExportNotebookInput {}
export interface ExportNotebookCommandOutput extends ExportNotebookOutput, __MetadataBearer {}

/**
 * <p>Exports the specified notebook and its metadata.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, ExportNotebookCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, ExportNotebookCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new ExportNotebookCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExportNotebookCommandInput} for command's `input` shape.
 * @see {@link ExportNotebookCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 */
export class ExportNotebookCommand extends $Command<
  ExportNotebookCommandInput,
  ExportNotebookCommandOutput,
  AthenaClientResolvedConfig
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

  constructor(readonly input: ExportNotebookCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExportNotebookCommandInput, ExportNotebookCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ExportNotebookCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "ExportNotebookCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExportNotebookInputFilterSensitiveLog,
      outputFilterSensitiveLog: ExportNotebookOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ExportNotebookCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ExportNotebookCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExportNotebookCommandOutput> {
    return deserializeAws_json1_1ExportNotebookCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
