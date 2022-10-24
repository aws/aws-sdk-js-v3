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
  ListGrantsResponse,
  ListGrantsResponseFilterSensitiveLog,
  ListRetirableGrantsRequest,
  ListRetirableGrantsRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListRetirableGrantsCommand,
  serializeAws_json1_1ListRetirableGrantsCommand,
} from "../protocols/Aws_json1_1";

export interface ListRetirableGrantsCommandInput extends ListRetirableGrantsRequest {}
export interface ListRetirableGrantsCommandOutput extends ListGrantsResponse, __MetadataBearer {}

/**
 * <p>Returns information about all grants in the Amazon Web Services account and Region that have the
 *       specified retiring principal. </p>
 *          <p>You can specify any principal in your Amazon Web Services account. The grants that are returned include
 *       grants for KMS keys in your Amazon Web Services account and other Amazon Web Services accounts. You might use this
 *       operation to determine which grants you may retire. To retire a grant, use the <a>RetireGrant</a> operation.</p>
 *          <p>For detailed information about grants, including grant terminology, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html">Grants in KMS</a> in the
 *         <i>
 *                <i>Key Management Service Developer Guide</i>
 *             </i>. For examples of working with grants in several
 *       programming languages, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/programming-grants.html">Programming grants</a>. </p>
 *          <p>
 *             <b>Cross-account use</b>: You must specify a principal in your
 *       Amazon Web Services account. However, this operation can return grants in any Amazon Web Services account. You do not need
 *         <code>kms:ListRetirableGrants</code> permission (or any other additional permission) in any
 *       Amazon Web Services account other than your own.</p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ListRetirableGrants</a> (IAM policy) in your
 *       Amazon Web Services account.</p>
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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, ListRetirableGrantsCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, ListRetirableGrantsCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new ListRetirableGrantsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRetirableGrantsCommandInput} for command's `input` shape.
 * @see {@link ListRetirableGrantsCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 */
export class ListRetirableGrantsCommand extends $Command<
  ListRetirableGrantsCommandInput,
  ListRetirableGrantsCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRetirableGrantsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "ListRetirableGrantsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRetirableGrantsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListGrantsResponseFilterSensitiveLog,
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
