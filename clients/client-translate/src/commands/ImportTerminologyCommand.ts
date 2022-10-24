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
  ImportTerminologyRequest,
  ImportTerminologyRequestFilterSensitiveLog,
  ImportTerminologyResponse,
  ImportTerminologyResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ImportTerminologyCommand,
  serializeAws_json1_1ImportTerminologyCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";

export interface ImportTerminologyCommandInput extends ImportTerminologyRequest {}
export interface ImportTerminologyCommandOutput extends ImportTerminologyResponse, __MetadataBearer {}

/**
 * <p>Creates or updates a custom terminology, depending on whether one already exists for the
 *       given terminology name. Importing a terminology with the same name as an existing one will
 *       merge the terminologies based on the chosen merge strategy. The only supported merge strategy
 *       is OVERWRITE, where the imported terminology overwrites the existing terminology of the same
 *       name.</p>
 *          <p>If you import a terminology that overwrites an existing one, the new terminology takes up
 *       to 10 minutes to fully propagate. After that, translations have access to the new
 *       terminology.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, ImportTerminologyCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, ImportTerminologyCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * const client = new TranslateClient(config);
 * const command = new ImportTerminologyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportTerminologyCommandInput} for command's `input` shape.
 * @see {@link ImportTerminologyCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for TranslateClient's `config` shape.
 *
 */
export class ImportTerminologyCommand extends $Command<
  ImportTerminologyCommandInput,
  ImportTerminologyCommandOutput,
  TranslateClientResolvedConfig
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

  constructor(readonly input: ImportTerminologyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranslateClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportTerminologyCommandInput, ImportTerminologyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ImportTerminologyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranslateClient";
    const commandName = "ImportTerminologyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportTerminologyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ImportTerminologyResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ImportTerminologyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ImportTerminologyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportTerminologyCommandOutput> {
    return deserializeAws_json1_1ImportTerminologyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
