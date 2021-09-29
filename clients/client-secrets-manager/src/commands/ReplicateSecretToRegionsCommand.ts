import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";
import { ReplicateSecretToRegionsRequest, ReplicateSecretToRegionsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ReplicateSecretToRegionsCommand,
  serializeAws_json1_1ReplicateSecretToRegionsCommand,
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

export interface ReplicateSecretToRegionsCommandInput extends ReplicateSecretToRegionsRequest {}
export interface ReplicateSecretToRegionsCommandOutput extends ReplicateSecretToRegionsResponse, __MetadataBearer {}

/**
 * <p>Converts an existing secret to a multi-Region secret and begins replication the secret to a
 *       list of new regions. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, ReplicateSecretToRegionsCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, ReplicateSecretToRegionsCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * const client = new SecretsManagerClient(config);
 * const command = new ReplicateSecretToRegionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReplicateSecretToRegionsCommandInput} for command's `input` shape.
 * @see {@link ReplicateSecretToRegionsCommandOutput} for command's `response` shape.
 * @see {@link SecretsManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ReplicateSecretToRegionsCommand extends $Command<
  ReplicateSecretToRegionsCommandInput,
  ReplicateSecretToRegionsCommandOutput,
  SecretsManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ReplicateSecretToRegionsCommandInput) {
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
  ): Handler<ReplicateSecretToRegionsCommandInput, ReplicateSecretToRegionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecretsManagerClient";
    const commandName = "ReplicateSecretToRegionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ReplicateSecretToRegionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ReplicateSecretToRegionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ReplicateSecretToRegionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ReplicateSecretToRegionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ReplicateSecretToRegionsCommandOutput> {
    return deserializeAws_json1_1ReplicateSecretToRegionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
