import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { ListGrantsResponse, ListRetirableGrantsRequest } from "../models/models_0";
import {
  deserializeAws_json1_1ListRetirableGrantsCommand,
  serializeAws_json1_1ListRetirableGrantsCommand,
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

export type ListRetirableGrantsCommandInput = ListRetirableGrantsRequest;
export type ListRetirableGrantsCommandOutput = ListGrantsResponse & __MetadataBearer;

/**
 * <p>Returns all grants in which the specified principal is the <code>RetiringPrincipal</code>
 *       in the grant. </p>
 *          <p>You can specify any principal in your AWS account. The grants that are returned include
 *       grants for CMKs in your AWS account and other AWS accounts.</p>
 *          <p>You might use this operation to determine which grants you may retire. To retire a grant,
 *       use the <a>RetireGrant</a> operation.</p>
 *          <p>
 *             <b>Cross-account use</b>: You must specify a principal in your
 *       AWS account. However, this operation can return grants in any AWS account. You do not need
 *         <code>kms:ListRetirableGrants</code> permission (or any other additional permission) in any
 *       AWS account other than your own.</p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ListRetirableGrants</a> (IAM policy) in your AWS
 *       account.</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateGrant</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListGrants</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>RetireGrant</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>RevokeGrant</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class ListRetirableGrantsCommand extends $Command<
  ListRetirableGrantsCommandInput,
  ListRetirableGrantsCommandOutput,
  KMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListRetirableGrantsCommandInput) {
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
  ): Handler<ListRetirableGrantsCommandInput, ListRetirableGrantsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "ListRetirableGrantsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRetirableGrantsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListGrantsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListRetirableGrantsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListRetirableGrantsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRetirableGrantsCommandOutput> {
    return deserializeAws_json1_1ListRetirableGrantsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
