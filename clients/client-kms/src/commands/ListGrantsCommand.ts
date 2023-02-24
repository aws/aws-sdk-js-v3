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
import {
  ListGrantsRequest,
  ListGrantsRequestFilterSensitiveLog,
  ListGrantsResponse,
  ListGrantsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListGrantsCommand,
  serializeAws_json1_1ListGrantsCommand,
} from "../protocols/Aws_json1_1";

export interface ListGrantsCommandInput extends ListGrantsRequest {}
export interface ListGrantsCommandOutput extends ListGrantsResponse, __MetadataBearer {}

/**
 * <p>Gets a list of all grants for the specified KMS key. </p>
 *          <p>You must specify the KMS key in all requests. You can filter the grant list by grant ID or
 *       grantee principal.</p>
 *          <p>For detailed information about grants, including grant terminology, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html">Grants in KMS</a> in the
 *         <i>
 *                <i>Key Management Service Developer Guide</i>
 *             </i>. For examples of working with grants in several
 *       programming languages, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/programming-grants.html">Programming grants</a>. </p>
 *          <note>
 *             <p>The <code>GranteePrincipal</code> field in the <code>ListGrants</code> response usually contains the
 *         user or role designated as the grantee principal in the grant. However, when the grantee
 *         principal in the grant is an Amazon Web Services service, the <code>GranteePrincipal</code> field contains
 *         the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#principal-services">service
 *           principal</a>, which might represent several different grantee principals.</p>
 *          </note>
 *          <p>
 *             <b>Cross-account use</b>: Yes. To perform this operation on a KMS key in a different Amazon Web Services account, specify the key
 *   ARN in the value of the <code>KeyId</code> parameter.</p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ListGrants</a> (key policy)</p>
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
 *                   <a>ListRetirableGrants</a>
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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, ListGrantsCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, ListGrantsCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new ListGrantsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGrantsCommandInput} for command's `input` shape.
 * @see {@link ListGrantsCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 */
export class ListGrantsCommand extends $Command<
  ListGrantsCommandInput,
  ListGrantsCommandOutput,
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
    this.middlewareStack.use(getEndpointPlugin(configuration, ListGrantsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "ListGrantsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListGrantsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListGrantsResponseFilterSensitiveLog,
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
