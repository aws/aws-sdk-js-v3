import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";
import { ListSecretVersionIdsRequest, ListSecretVersionIdsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListSecretVersionIdsCommand,
  serializeAws_json1_1ListSecretVersionIdsCommand,
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

export type ListSecretVersionIdsCommandInput = ListSecretVersionIdsRequest;
export type ListSecretVersionIdsCommandOutput = ListSecretVersionIdsResponse & __MetadataBearer;

/**
 * <p>Lists all of the versions attached to the specified secret. The output does not include
 *       the <code>SecretString</code> or <code>SecretBinary</code> fields. By default, the list
 *       includes only versions that have at least one staging label in <code>VersionStage</code>
 *       attached.</p>
 *          <note>
 *             <p>Always check the <code>NextToken</code> response parameter
 *     when calling any of the <code>List*</code> operations. These operations can occasionally return
 *     an empty or shorter than expected list of results even when there more results become available.
 *     When this happens, the <code>NextToken</code> response parameter contains a value to pass to the
 *     next call to the same API to request the next part of the list.</p>
 *          </note>
 *          <p>
 *             <b>Minimum
 *       permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>secretsmanager:ListSecretVersionIds</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Related operations</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>To list the secrets in an account, use <a>ListSecrets</a>.</p>
 *             </li>
 *          </ul>
 */
export class ListSecretVersionIdsCommand extends $Command<
  ListSecretVersionIdsCommandInput,
  ListSecretVersionIdsCommandOutput,
  SecretsManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSecretVersionIdsCommandInput) {
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
  ): Handler<ListSecretVersionIdsCommandInput, ListSecretVersionIdsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecretsManagerClient";
    const commandName = "ListSecretVersionIdsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSecretVersionIdsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListSecretVersionIdsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSecretVersionIdsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListSecretVersionIdsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSecretVersionIdsCommandOutput> {
    return deserializeAws_json1_1ListSecretVersionIdsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
