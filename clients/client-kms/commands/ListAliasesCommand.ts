import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { ListAliasesRequest, ListAliasesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListAliasesCommand,
  serializeAws_json1_1ListAliasesCommand,
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

export type ListAliasesCommandInput = ListAliasesRequest;
export type ListAliasesCommandOutput = ListAliasesResponse & __MetadataBearer;

/**
 * <p>Gets a list of aliases in the caller's AWS account and region. You cannot list aliases in
 *       other accounts. For more information about aliases, see <a>CreateAlias</a>.</p>
 *          <p>By default, the ListAliases command returns all aliases in the account and region. To get
 *       only the aliases that point to a particular customer master key (CMK), use the
 *         <code>KeyId</code> parameter.</p>
 *          <p>The <code>ListAliases</code> response can include aliases that you created and associated
 *       with your customer managed CMKs, and aliases that AWS created and associated with AWS managed
 *       CMKs in your account. You can recognize AWS aliases because their names have the format
 *         <code>aws/<service-name></code>, such as <code>aws/dynamodb</code>.</p>
 *          <p>The response might also include aliases that have no <code>TargetKeyId</code> field. These
 *       are predefined aliases that AWS has created but has not yet associated with a CMK. Aliases
 *       that AWS creates in your account, including predefined aliases, do not count against your
 *         <a href="https://docs.aws.amazon.com/kms/latest/developerguide/limits.html#aliases-limit">AWS KMS aliases
 *         quota</a>.</p>
 */
export class ListAliasesCommand extends $Command<
  ListAliasesCommandInput,
  ListAliasesCommandOutput,
  KMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAliasesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAliasesCommandInput, ListAliasesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "ListAliasesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAliasesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAliasesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAliasesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAliasesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAliasesCommandOutput> {
    return deserializeAws_json1_1ListAliasesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
