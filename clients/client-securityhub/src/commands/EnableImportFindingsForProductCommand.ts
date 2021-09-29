import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import { EnableImportFindingsForProductRequest, EnableImportFindingsForProductResponse } from "../models/models_1";
import {
  deserializeAws_restJson1EnableImportFindingsForProductCommand,
  serializeAws_restJson1EnableImportFindingsForProductCommand,
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

export interface EnableImportFindingsForProductCommandInput extends EnableImportFindingsForProductRequest {}
export interface EnableImportFindingsForProductCommandOutput
  extends EnableImportFindingsForProductResponse,
    __MetadataBearer {}

/**
 * <p>Enables the integration of a partner product with Security Hub. Integrated products send
 *          findings to Security Hub.</p>
 *          <p>When you enable a product integration, a permissions policy that grants permission for
 *          the product to send findings to Security Hub is applied.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, EnableImportFindingsForProductCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, EnableImportFindingsForProductCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new EnableImportFindingsForProductCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableImportFindingsForProductCommandInput} for command's `input` shape.
 * @see {@link EnableImportFindingsForProductCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class EnableImportFindingsForProductCommand extends $Command<
  EnableImportFindingsForProductCommandInput,
  EnableImportFindingsForProductCommandOutput,
  SecurityHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EnableImportFindingsForProductCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EnableImportFindingsForProductCommandInput, EnableImportFindingsForProductCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "EnableImportFindingsForProductCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableImportFindingsForProductRequest.filterSensitiveLog,
      outputFilterSensitiveLog: EnableImportFindingsForProductResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: EnableImportFindingsForProductCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1EnableImportFindingsForProductCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EnableImportFindingsForProductCommandOutput> {
    return deserializeAws_restJson1EnableImportFindingsForProductCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
