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

import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import {
  CreateVaultInput,
  CreateVaultInputFilterSensitiveLog,
  CreateVaultOutput,
  CreateVaultOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateVaultCommand,
  serializeAws_restJson1CreateVaultCommand,
} from "../protocols/Aws_restJson1";

export interface CreateVaultCommandInput extends CreateVaultInput {}
export interface CreateVaultCommandOutput extends CreateVaultOutput, __MetadataBearer {}

/**
 * <p>This operation creates a new vault with the specified name. The name of the vault
 *          must be unique within a region for an AWS account. You can create up to 1,000 vaults per
 *          account. If you need to create more vaults, contact Amazon S3 Glacier.</p>
 *          <p>You must use the following guidelines when naming a vault.</p>
 *          <ul>
 *             <li>
 *                <p>Names can be between 1 and 255 characters long.</p>
 *             </li>
 *             <li>
 *                <p>Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (hyphen), and '.'
 *                (period).</p>
 *             </li>
 *          </ul>
 *
 *          <p>This operation is idempotent.</p>
 *
 *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
 *          Identity and Access Management (IAM) users don't have any permissions by default. You must
 *          grant them explicit permission to perform specific actions. For more information, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
 *             AWS Identity and Access Management (IAM)</a>.</p>
 *          <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/creating-vaults.html">Creating a Vault in Amazon
 *             Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-put.html">Create Vault </a> in the
 *             <i>Amazon Glacier Developer Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, CreateVaultCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, CreateVaultCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new CreateVaultCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVaultCommandInput} for command's `input` shape.
 * @see {@link CreateVaultCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for GlacierClient's `config` shape.
 *
 */
export class CreateVaultCommand extends $Command<
  CreateVaultCommandInput,
  CreateVaultCommandOutput,
  GlacierClientResolvedConfig
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

  constructor(readonly input: CreateVaultCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlacierClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateVaultCommandInput, CreateVaultCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateVaultCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "CreateVaultCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateVaultInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateVaultOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateVaultCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateVaultCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateVaultCommandOutput> {
    return deserializeAws_restJson1CreateVaultCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
