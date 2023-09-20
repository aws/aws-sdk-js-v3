// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CreateIndexInput, CreateIndexOutput } from "../models/models_0";
import { de_CreateIndexCommand, se_CreateIndexCommand } from "../protocols/Aws_restJson1";
import {
  ResourceExplorer2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ResourceExplorer2Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateIndexCommand}.
 */
export interface CreateIndexCommandInput extends CreateIndexInput {}
/**
 * @public
 *
 * The output of {@link CreateIndexCommand}.
 */
export interface CreateIndexCommandOutput extends CreateIndexOutput, __MetadataBearer {}

/**
 * @public
 * <p>Turns on Amazon Web Services Resource Explorer in the Amazon Web Services Region in which you called this operation by creating
 *             an index. Resource Explorer begins discovering the resources in this Region and stores the details
 *             about the resources in the index so that they can be queried by using the <a>Search</a> operation. You can create only one index in a Region.</p>
 *          <note>
 *             <p>This operation creates only a <i>local</i> index. To promote the
 *                 local index in one Amazon Web Services Region into the aggregator index for the Amazon Web Services account, use the
 *                     <a>UpdateIndexType</a> operation. For more information, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-aggregator-region.html">Turning on cross-Region search by creating an aggregator index</a> in the
 *                     <i>Amazon Web Services Resource Explorer User Guide</i>.</p>
 *          </note>
 *          <p>For more details about what happens when you turn on Resource Explorer in an Amazon Web Services Region, see
 *                 <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-service-activate.html">Turn
 *                 on Resource Explorer to index your resources in an Amazon Web Services Region</a> in the
 *                 <i>Amazon Web Services Resource Explorer User Guide</i>.</p>
 *          <p>If this is the first Amazon Web Services Region in which you've created an index for Resource Explorer, then
 *             this operation also <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/security_iam_service-linked-roles.html">creates a
 *                 service-linked role</a> in your Amazon Web Services account that allows Resource Explorer to enumerate
 *             your resources to populate the index.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Action</b>:
 *                         <code>resource-explorer-2:CreateIndex</code>
 *                </p>
 *                <p>
 *                   <b>Resource</b>: The ARN of the index (as it will
 *                     exist after the operation completes) in the Amazon Web Services Region and account in which
 *                     you're trying to create the index. Use the wildcard character (<code>*</code>)
 *                     at the end of the string to match the eventual UUID. For example, the following
 *                         <code>Resource</code> element restricts the role or user to creating an
 *                     index in only the <code>us-east-2</code> Region of the specified account.</p>
 *                <p>
 *                   <code>"Resource":
 *                             "arn:aws:resource-explorer-2:us-west-2:<i>&lt;account-id&gt;</i>:index/*"</code>
 *                </p>
 *                <p>Alternatively, you can use <code>"Resource": "*"</code> to allow the role or
 *                     user to create an index in any Region.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Action</b>:
 *                         <code>iam:CreateServiceLinkedRole</code>
 *                </p>
 *                <p>
 *                   <b>Resource</b>: No specific resource (*). </p>
 *                <p>This permission is required only the first time you create an index to turn on
 *                     Resource Explorer in the account. Resource Explorer uses this to create the <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/security_iam_service-linked-roles.html">service-linked
 *                         role needed to index the resources in your account</a>. Resource Explorer uses the
 *                     same service-linked role for all additional indexes you create
 *                     afterwards.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceExplorer2Client, CreateIndexCommand } from "@aws-sdk/client-resource-explorer-2"; // ES Modules import
 * // const { ResourceExplorer2Client, CreateIndexCommand } = require("@aws-sdk/client-resource-explorer-2"); // CommonJS import
 * const client = new ResourceExplorer2Client(config);
 * const input = { // CreateIndexInput
 *   ClientToken: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateIndexCommand(input);
 * const response = await client.send(command);
 * // { // CreateIndexOutput
 * //   Arn: "STRING_VALUE",
 * //   State: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateIndexCommandInput - {@link CreateIndexCommandInput}
 * @returns {@link CreateIndexCommandOutput}
 * @see {@link CreateIndexCommandInput} for command's `input` shape.
 * @see {@link CreateIndexCommandOutput} for command's `response` shape.
 * @see {@link ResourceExplorer2ClientResolvedConfig | config} for ResourceExplorer2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The credentials that you used to call this operation don't have the minimum required
 *             permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request failed because either you specified parameters that didn’t match the
 *             original request, or you attempted to create a view with a name that already exists in
 *             this Amazon Web Services Region.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed because of internal service error. Try your request again
 *             later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request failed because you exceeded a rate limit for this operation. For more
 *             information, see <a href="https://docs.aws.amazon.com/arexug/mainline/quotas.html">Quotas
 *                 for Resource Explorer</a>.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>You provided an invalid value for one of the operation's parameters. Check the syntax
 *             for the operation, and try again.</p>
 *
 * @throws {@link ResourceExplorer2ServiceException}
 * <p>Base exception class for all service exceptions from ResourceExplorer2 service.</p>
 *
 */
export class CreateIndexCommand extends $Command<
  CreateIndexCommandInput,
  CreateIndexCommandOutput,
  ResourceExplorer2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: CreateIndexCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResourceExplorer2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateIndexCommandInput, CreateIndexCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateIndexCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResourceExplorer2Client";
    const commandName = "CreateIndexCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ResourceExplorer",
        operation: "CreateIndex",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CreateIndexCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateIndexCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateIndexCommandOutput> {
    return de_CreateIndexCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
