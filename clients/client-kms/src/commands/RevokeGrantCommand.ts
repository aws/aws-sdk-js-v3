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

import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { RevokeGrantRequest, RevokeGrantRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_json1_1RevokeGrantCommand,
  serializeAws_json1_1RevokeGrantCommand,
} from "../protocols/Aws_json1_1";

export interface RevokeGrantCommandInput extends RevokeGrantRequest {}
export interface RevokeGrantCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified grant. You revoke a grant to terminate the permissions that the
 *       grant allows. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/managing-grants.html#grant-delete">Retiring and revoking grants</a> in
 *       the <i>
 *                <i>Key Management Service Developer Guide</i>
 *             </i>.</p>
 *          <p>When you create, retire, or revoke a grant, there might be a brief delay, usually less than five minutes, until the grant is available throughout KMS. This state is known as <i>eventual consistency</i>. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html#terms-eventual-consistency">Eventual consistency</a> in
 *       the <i>
 *                <i>Key Management Service Developer Guide</i>
 *             </i>. </p>
 *          <p>For detailed information about grants, including grant terminology, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html">Grants in KMS</a> in the
 *         <i>
 *                <i>Key Management Service Developer Guide</i>
 *             </i>. For examples of working with grants in several
 *       programming languages, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/programming-grants.html">Programming grants</a>. </p>
 *          <p>
 *             <b>Cross-account use</b>: Yes. To perform this operation on a KMS key in a different Amazon Web Services account, specify the key
 *   ARN in the value of the <code>KeyId</code> parameter.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:RevokeGrant</a> (key policy).</p>
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
 *                   <a>RetireGrant</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, RevokeGrantCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, RevokeGrantCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new RevokeGrantCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RevokeGrantCommandInput} for command's `input` shape.
 * @see {@link RevokeGrantCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 */
export class RevokeGrantCommand extends $Command<
  RevokeGrantCommandInput,
  RevokeGrantCommandOutput,
  KMSClientResolvedConfig
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

  constructor(readonly input: RevokeGrantCommandInput) {
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
  ): Handler<RevokeGrantCommandInput, RevokeGrantCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, RevokeGrantCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "RevokeGrantCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RevokeGrantRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RevokeGrantCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RevokeGrantCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RevokeGrantCommandOutput> {
    return deserializeAws_json1_1RevokeGrantCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
