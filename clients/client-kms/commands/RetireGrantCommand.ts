import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { RetireGrantRequest } from "../models/models_0";
import {
  deserializeAws_json1_1RetireGrantCommand,
  serializeAws_json1_1RetireGrantCommand,
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

export type RetireGrantCommandInput = RetireGrantRequest;
export type RetireGrantCommandOutput = __MetadataBearer;

/**
 * <p>Retires a grant. To clean up, you can retire a grant when you're done using it. You should
 *       revoke a grant when you intend to actively deny operations that depend on it. The following
 *       are permitted to call this API:</p>
 *          <ul>
 *             <li>
 *                <p>The AWS account (root user) under which the grant was created</p>
 *             </li>
 *             <li>
 *                <p>The <code>RetiringPrincipal</code>, if present in the grant</p>
 *             </li>
 *             <li>
 *                <p>The <code>GranteePrincipal</code>, if <code>RetireGrant</code> is an operation
 *           specified in the grant</p>
 *             </li>
 *          </ul>
 *          <p>You must identify the grant to retire by its grant token or by a combination of the grant
 *       ID and the Amazon Resource Name (ARN) of the customer master key (CMK). A grant token is a
 *       unique variable-length base64-encoded string. A grant ID is a 64 character unique identifier
 *       of a grant. The <a>CreateGrant</a> operation returns both.</p>
 */
export class RetireGrantCommand extends $Command<
  RetireGrantCommandInput,
  RetireGrantCommandOutput,
  KMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RetireGrantCommandInput) {
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
  ): Handler<RetireGrantCommandInput, RetireGrantCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "RetireGrantCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RetireGrantRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RetireGrantCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RetireGrantCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RetireGrantCommandOutput> {
    return deserializeAws_json1_1RetireGrantCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
