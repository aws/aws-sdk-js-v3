import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { DescribeVaultInput, DescribeVaultOutput } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeVaultCommand,
  serializeAws_restJson1DescribeVaultCommand,
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

export type DescribeVaultCommandInput = DescribeVaultInput;
export type DescribeVaultCommandOutput = DescribeVaultOutput & __MetadataBearer;

/**
 * <p>This operation returns information about a vault, including the vault's Amazon
 *          Resource Name (ARN), the date the vault was created, the number of archives it contains,
 *          and the total size of all the archives in the vault. The number of archives and their total
 *          size are as of the last inventory generation. This means that if you add or remove an
 *          archive from a vault, and then immediately use Describe Vault, the change in contents will
 *          not be immediately reflected. If you want to retrieve the latest inventory of the vault,
 *          use <a>InitiateJob</a>. Amazon S3 Glacier generates vault inventories approximately
 *          daily. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-inventory.html">Downloading a Vault Inventory in
 *             Amazon S3 Glacier</a>. </p>
 *
 *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
 *          Identity and Access Management (IAM) users don't have any permissions by default. You must
 *          grant them explicit permission to perform specific actions. For more information, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
 *             AWS Identity and Access Management (IAM)</a>.</p>
 *          <p>For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/retrieving-vault-info.html">Retrieving Vault Metadata in
 *             Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-get.html">Describe Vault </a> in the
 *             <i>Amazon Glacier Developer Guide</i>. </p>
 */
export class DescribeVaultCommand extends $Command<
  DescribeVaultCommandInput,
  DescribeVaultCommandOutput,
  GlacierClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeVaultCommandInput) {
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
  ): Handler<DescribeVaultCommandInput, DescribeVaultCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "DescribeVaultCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeVaultInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeVaultOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeVaultCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeVaultCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeVaultCommandOutput> {
    return deserializeAws_restJson1DescribeVaultCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
