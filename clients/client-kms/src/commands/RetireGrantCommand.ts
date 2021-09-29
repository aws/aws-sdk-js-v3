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

export interface RetireGrantCommandInput extends RetireGrantRequest {}
export interface RetireGrantCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a grant. Typically, you retire a grant when you no longer need its permissions. To
 *       identify the grant to retire, use a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#grant_token">grant token</a>, or both the grant ID and a
 *       key identifier (key ID or key ARN) of the KMS key. The <a>CreateGrant</a> operation returns both values.</p>
 *          <p>This operation can be called by the <i>retiring principal</i> for a grant,
 *       by the <i>grantee principal</i> if the grant allows the <code>RetireGrant</code>
 *       operation, and by the Amazon Web Services account (root user) in which the grant is created. It can also be
 *       called by principals to whom permission for retiring a grant is delegated. For details, see
 *       <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grant-manage.html#grant-delete">Retiring and
 *         revoking grants</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>For detailed information about grants, including grant terminology, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html">Using grants</a> in the
 *         <i>
 *                <i>Key Management Service Developer Guide</i>
 *             </i>. For examples of working with grants in several
 *       programming languages, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/programming-grants.html">Programming grants</a>. </p>
 *          <p>
 *             <b>Cross-account use</b>: Yes. You can retire a grant on a KMS key
 *       in a different Amazon Web Services account.</p>
 *          <p>
 *             <b>Required permissions:</b>:Permission to retire a grant is
 *       determined primarily by the grant. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grant-manage.html#grant-delete">Retiring and revoking grants</a> in the <i>Key Management Service Developer Guide</i>.</p>
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
 *                   <a>ListRetirableGrants</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>RevokeGrant</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, RetireGrantCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, RetireGrantCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new RetireGrantCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RetireGrantCommandInput} for command's `input` shape.
 * @see {@link RetireGrantCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
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
