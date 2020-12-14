import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";
import { DescribeSecretRequest, DescribeSecretResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeSecretCommand,
  serializeAws_json1_1DescribeSecretCommand,
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

export type DescribeSecretCommandInput = DescribeSecretRequest;
export type DescribeSecretCommandOutput = DescribeSecretResponse & __MetadataBearer;

/**
 * <p>Retrieves the details of a secret. It does not include the encrypted fields. Secrets
 *       Manager only returns fields populated with a value in the response. </p>
 *          <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>secretsmanager:DescribeSecret</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Related operations</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>To create a secret, use <a>CreateSecret</a>.</p>
 *             </li>
 *             <li>
 *                <p>To modify a secret, use <a>UpdateSecret</a>.</p>
 *             </li>
 *             <li>
 *                <p>To retrieve the encrypted secret information in a version of the secret, use <a>GetSecretValue</a>.</p>
 *             </li>
 *             <li>
 *                <p>To list all of the secrets in the AWS account, use <a>ListSecrets</a>.</p>
 *             </li>
 *          </ul>
 */
export class DescribeSecretCommand extends $Command<
  DescribeSecretCommandInput,
  DescribeSecretCommandOutput,
  SecretsManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeSecretCommandInput) {
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
  ): Handler<DescribeSecretCommandInput, DescribeSecretCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecretsManagerClient";
    const commandName = "DescribeSecretCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSecretRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeSecretResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeSecretCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeSecretCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSecretCommandOutput> {
    return deserializeAws_json1_1DescribeSecretCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
