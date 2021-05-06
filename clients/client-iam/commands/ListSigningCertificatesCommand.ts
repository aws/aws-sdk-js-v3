import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListSigningCertificatesRequest, ListSigningCertificatesResponse } from "../models/models_0";
import {
  deserializeAws_queryListSigningCertificatesCommand,
  serializeAws_queryListSigningCertificatesCommand,
} from "../protocols/Aws_query";
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

export interface ListSigningCertificatesCommandInput extends ListSigningCertificatesRequest {}
export interface ListSigningCertificatesCommandOutput extends ListSigningCertificatesResponse, __MetadataBearer {}

/**
 * <p>Returns information about the signing certificates associated with the specified IAM
 *             user. If none exists, the operation returns an empty list.</p>
 *         <p>Although each user is limited to a small number of signing certificates, you can still
 *             paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters.</p>
 *         <p>If the <code>UserName</code> field is not specified, the user name is determined
 *             implicitly based on the AWS access key ID used to sign the request for this operation.
 *             This operation works for access keys under the AWS account. Consequently, you can use
 *             this operation to manage AWS account root user credentials even if the AWS account
 *             has no associated users.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListSigningCertificatesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListSigningCertificatesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListSigningCertificatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSigningCertificatesCommandInput} for command's `input` shape.
 * @see {@link ListSigningCertificatesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListSigningCertificatesCommand extends $Command<
  ListSigningCertificatesCommandInput,
  ListSigningCertificatesCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSigningCertificatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSigningCertificatesCommandInput, ListSigningCertificatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ListSigningCertificatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSigningCertificatesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListSigningCertificatesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSigningCertificatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListSigningCertificatesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSigningCertificatesCommandOutput> {
    return deserializeAws_queryListSigningCertificatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
