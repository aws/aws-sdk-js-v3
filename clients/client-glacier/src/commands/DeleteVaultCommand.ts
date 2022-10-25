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
import { DeleteVaultInput, DeleteVaultInputFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteVaultCommand,
  serializeAws_restJson1DeleteVaultCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteVaultCommandInput extends DeleteVaultInput {}
export interface DeleteVaultCommandOutput extends __MetadataBearer {}

/**
 * <p>This operation deletes a vault. Amazon S3 Glacier will delete a vault only if there are
 *          no archives in the vault as of the last inventory and there have been no writes to the
 *          vault since the last inventory. If either of these conditions is not satisfied, the vault
 *          deletion fails (that is, the vault is not removed) and Amazon S3 Glacier returns an error. You
 *          can use <a>DescribeVault</a> to return the number of archives in a vault, and
 *          you can use <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-initiate-job-post.html">Initiate a Job (POST
 *             jobs)</a> to initiate a new inventory retrieval for a vault. The inventory contains
 *          the archive IDs you use to delete archives using <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-delete.html">Delete Archive (DELETE
 *             archive)</a>.</p>
 *
 *          <p>This operation is idempotent.</p>
 *
 *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
 *          Identity and Access Management (IAM) users don't have any permissions by default. You must
 *          grant them explicit permission to perform specific actions. For more information, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
 *             AWS Identity and Access Management (IAM)</a>.</p>
 *          <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/deleting-vaults.html">Deleting a Vault in Amazon
 *             Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-delete.html">Delete Vault </a> in the
 *             <i>Amazon S3 Glacier Developer Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, DeleteVaultCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, DeleteVaultCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new DeleteVaultCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVaultCommandInput} for command's `input` shape.
 * @see {@link DeleteVaultCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for GlacierClient's `config` shape.
 *
 */
export class DeleteVaultCommand extends $Command<
  DeleteVaultCommandInput,
  DeleteVaultCommandOutput,
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

  constructor(readonly input: DeleteVaultCommandInput) {
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
  ): Handler<DeleteVaultCommandInput, DeleteVaultCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteVaultCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "DeleteVaultCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteVaultInputFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteVaultCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteVaultCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteVaultCommandOutput> {
    return deserializeAws_restJson1DeleteVaultCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
