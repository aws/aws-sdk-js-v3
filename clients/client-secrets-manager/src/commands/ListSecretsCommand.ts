import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";
import { ListSecretsRequest, ListSecretsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListSecretsCommand,
  serializeAws_json1_1ListSecretsCommand,
} from "../protocols/Aws_json1_1";
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

export interface ListSecretsCommandInput extends ListSecretsRequest {}
export interface ListSecretsCommandOutput extends ListSecretsResponse, __MetadataBearer {}

/**
 * <p>Lists all of the secrets that are stored by Secrets Manager in the Amazon Web Services account. To list the
 *       versions currently stored for a specific secret, use <a>ListSecretVersionIds</a>.
 *       The encrypted fields <code>SecretString</code> and <code>SecretBinary</code> are not included
 *       in the output. To get that information, call the <a>GetSecretValue</a>
 *       operation.</p>
 *          <note>
 *             <p>Always check the <code>NextToken</code> response parameter
 *     when calling any of the <code>List*</code> operations. These operations can occasionally return
 *     an empty or shorter than expected list of results even when there more results become available.
 *     When this happens, the <code>NextToken</code> response parameter contains a value to pass to the
 *     next call to the same API to request the next part of the list.</p>
 *          </note>
 *          <p>
 *             <b>Minimum
 *         permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>secretsmanager:ListSecrets</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Related operations</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>To list the versions attached to a secret, use <a>ListSecretVersionIds</a>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, ListSecretsCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, ListSecretsCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * const client = new SecretsManagerClient(config);
 * const command = new ListSecretsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSecretsCommandInput} for command's `input` shape.
 * @see {@link ListSecretsCommandOutput} for command's `response` shape.
 * @see {@link SecretsManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListSecretsCommand extends $Command<
  ListSecretsCommandInput,
  ListSecretsCommandOutput,
  SecretsManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSecretsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecretsManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSecretsCommandInput, ListSecretsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecretsManagerClient";
    const commandName = "ListSecretsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSecretsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListSecretsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSecretsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListSecretsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSecretsCommandOutput> {
    return deserializeAws_json1_1ListSecretsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
