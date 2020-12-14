import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { ListVaultsInput, ListVaultsOutput } from "../models/models_0";
import {
  deserializeAws_restJson1ListVaultsCommand,
  serializeAws_restJson1ListVaultsCommand,
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

export type ListVaultsCommandInput = ListVaultsInput;
export type ListVaultsCommandOutput = ListVaultsOutput & __MetadataBearer;

/**
 * <p>This operation lists all vaults owned by the calling user's account. The list
 *          returned in the response is ASCII-sorted by vault name.</p>
 *
 *          <p>By default, this operation returns up to 10 items. If there are more vaults to
 *          list, the response <code>marker</code> field contains the vault Amazon Resource Name (ARN)
 *          at which to continue the list with a new List Vaults request; otherwise, the
 *             <code>marker</code> field is <code>null</code>. To return a list of vaults that begins
 *          at a specific vault, set the <code>marker</code> request parameter to the vault ARN you
 *          obtained from a previous List Vaults request. You can also limit the number of vaults
 *          returned in the response by specifying the <code>limit</code> parameter in the request. </p>
 *
 *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
 *          Identity and Access Management (IAM) users don't have any permissions by default. You must
 *          grant them explicit permission to perform specific actions. For more information, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
 *             AWS Identity and Access Management (IAM)</a>.</p>
 *          <p>For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/retrieving-vault-info.html">Retrieving Vault Metadata in
 *             Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vaults-get.html">List Vaults </a> in the
 *             <i>Amazon Glacier Developer Guide</i>. </p>
 */
export class ListVaultsCommand extends $Command<
  ListVaultsCommandInput,
  ListVaultsCommandOutput,
  GlacierClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListVaultsCommandInput) {
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
  ): Handler<ListVaultsCommandInput, ListVaultsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "ListVaultsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListVaultsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListVaultsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListVaultsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListVaultsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListVaultsCommandOutput> {
    return deserializeAws_restJson1ListVaultsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
