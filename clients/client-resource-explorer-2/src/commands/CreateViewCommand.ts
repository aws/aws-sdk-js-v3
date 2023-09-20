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

import {
  CreateViewInput,
  CreateViewInputFilterSensitiveLog,
  CreateViewOutput,
  CreateViewOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateViewCommand, se_CreateViewCommand } from "../protocols/Aws_restJson1";
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
 * The input for {@link CreateViewCommand}.
 */
export interface CreateViewCommandInput extends CreateViewInput {}
/**
 * @public
 *
 * The output of {@link CreateViewCommand}.
 */
export interface CreateViewCommandOutput extends CreateViewOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a view that users can query by using the <a>Search</a> operation.
 *             Results from queries that you make using this view include only resources that match the
 *             view's <code>Filters</code>. For more information about Amazon Web Services Resource Explorer views, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-views.html">Managing views</a>
 *             in the <i>Amazon Web Services Resource Explorer User Guide</i>.</p>
 *          <p>Only the principals with an IAM identity-based policy that grants <code>Allow</code>
 *             to the <code>Search</code> action on a <code>Resource</code> with the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of
 *             this view can <a>Search</a> using views you create with this
 *             operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceExplorer2Client, CreateViewCommand } from "@aws-sdk/client-resource-explorer-2"; // ES Modules import
 * // const { ResourceExplorer2Client, CreateViewCommand } = require("@aws-sdk/client-resource-explorer-2"); // CommonJS import
 * const client = new ResourceExplorer2Client(config);
 * const input = { // CreateViewInput
 *   ClientToken: "STRING_VALUE",
 *   ViewName: "STRING_VALUE", // required
 *   IncludedProperties: [ // IncludedPropertyList
 *     { // IncludedProperty
 *       Name: "STRING_VALUE", // required
 *     },
 *   ],
 *   Filters: { // SearchFilter
 *     FilterString: "STRING_VALUE", // required
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateViewCommand(input);
 * const response = await client.send(command);
 * // { // CreateViewOutput
 * //   View: { // View
 * //     ViewArn: "STRING_VALUE",
 * //     Owner: "STRING_VALUE",
 * //     LastUpdatedAt: new Date("TIMESTAMP"),
 * //     Scope: "STRING_VALUE",
 * //     IncludedProperties: [ // IncludedPropertyList
 * //       { // IncludedProperty
 * //         Name: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     Filters: { // SearchFilter
 * //       FilterString: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateViewCommandInput - {@link CreateViewCommandInput}
 * @returns {@link CreateViewCommandOutput}
 * @see {@link CreateViewCommandInput} for command's `input` shape.
 * @see {@link CreateViewCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request failed because it exceeds a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request failed because you exceeded a rate limit for this operation. For more
 *             information, see <a href="https://docs.aws.amazon.com/arexug/mainline/quotas.html">Quotas
 *                 for Resource Explorer</a>.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The principal making the request isn't permitted to perform the operation.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>You provided an invalid value for one of the operation's parameters. Check the syntax
 *             for the operation, and try again.</p>
 *
 * @throws {@link ResourceExplorer2ServiceException}
 * <p>Base exception class for all service exceptions from ResourceExplorer2 service.</p>
 *
 */
export class CreateViewCommand extends $Command<
  CreateViewCommandInput,
  CreateViewCommandOutput,
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
  constructor(readonly input: CreateViewCommandInput) {
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
  ): Handler<CreateViewCommandInput, CreateViewCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateViewCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResourceExplorer2Client";
    const commandName = "CreateViewCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateViewInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateViewOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "ResourceExplorer",
        operation: "CreateView",
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
  private serialize(input: CreateViewCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateViewCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateViewCommandOutput> {
    return de_CreateViewCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
