import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { ListGrantsRequest, ListGrantsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListGrantsCommand,
  serializeAws_json1_1ListGrantsCommand,
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

export type ListGrantsCommandInput = ListGrantsRequest;
export type ListGrantsCommandOutput = ListGrantsResponse & __MetadataBearer;

/**
 * <p>Gets a list of all grants for the specified customer master key (CMK).</p>
 *          <p>To perform this operation on a CMK in a different AWS account, specify the key
 *   ARN in the value of the <code>KeyId</code> parameter.</p>
 *          <note>
 *             <p>The <code>GranteePrincipal</code> field in the <code>ListGrants</code> response usually contains the
 *         user or role designated as the grantee principal in the grant. However, when the grantee
 *         principal in the grant is an AWS service, the <code>GranteePrincipal</code> field contains
 *         the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#principal-services">service
 *           principal</a>, which might represent several different grantee principals.</p>
 *          </note>
 */
export class ListGrantsCommand extends $Command<
  ListGrantsCommandInput,
  ListGrantsCommandOutput,
  KMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListGrantsCommandInput) {
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
  ): Handler<ListGrantsCommandInput, ListGrantsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "ListGrantsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListGrantsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListGrantsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListGrantsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListGrantsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListGrantsCommandOutput> {
    return deserializeAws_json1_1ListGrantsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
