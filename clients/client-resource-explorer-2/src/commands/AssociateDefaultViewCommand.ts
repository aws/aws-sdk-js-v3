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

import {
  AssociateDefaultViewInput,
  AssociateDefaultViewInputFilterSensitiveLog,
  AssociateDefaultViewOutput,
  AssociateDefaultViewOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1AssociateDefaultViewCommand,
  serializeAws_restJson1AssociateDefaultViewCommand,
} from "../protocols/Aws_restJson1";
import {
  ResourceExplorer2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ResourceExplorer2Client";

/**
 * @public
 *
 * The input for {@link AssociateDefaultViewCommand}.
 */
export interface AssociateDefaultViewCommandInput extends AssociateDefaultViewInput {}
/**
 * @public
 *
 * The output of {@link AssociateDefaultViewCommand}.
 */
export interface AssociateDefaultViewCommandOutput extends AssociateDefaultViewOutput, __MetadataBearer {}

/**
 * @public
 * <p>Sets the specified view as the default for the Amazon Web Services Region in which you call this
 *             operation. When a user performs a <a>Search</a> that doesn't explicitly
 *             specify which view to use, then Amazon Web Services Resource Explorer automatically chooses this default view for
 *             searches performed in this Amazon Web Services Region.</p>
 *          <p>If an Amazon Web Services Region doesn't have a default view
 *     configured, then users must explicitly specify a view with every <code>Search</code>
 *     operation performed in that Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceExplorer2Client, AssociateDefaultViewCommand } from "@aws-sdk/client-resource-explorer-2"; // ES Modules import
 * // const { ResourceExplorer2Client, AssociateDefaultViewCommand } = require("@aws-sdk/client-resource-explorer-2"); // CommonJS import
 * const client = new ResourceExplorer2Client(config);
 * const command = new AssociateDefaultViewCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param AssociateDefaultViewCommandInput - {@link AssociateDefaultViewCommandInput}
 * @returns {@link AssociateDefaultViewCommandOutput}
 * @see {@link AssociateDefaultViewCommandInput} for command's `input` shape.
 * @see {@link AssociateDefaultViewCommandOutput} for command's `response` shape.
 * @see {@link ResourceExplorer2ClientResolvedConfig | config} for ResourceExplorer2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The credentials that you used to call this operation don't have the minimum required
 *             permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed because of internal service error. Try your request again
 *             later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>You specified a resource that doesn't exist. Check the ID or ARN that you used to
 *             identity the resource, and try again.</p>
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
 *
 */
export class AssociateDefaultViewCommand extends $Command<
  AssociateDefaultViewCommandInput,
  AssociateDefaultViewCommandOutput,
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
  constructor(readonly input: AssociateDefaultViewCommandInput) {
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
  ): Handler<AssociateDefaultViewCommandInput, AssociateDefaultViewCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateDefaultViewCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResourceExplorer2Client";
    const commandName = "AssociateDefaultViewCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateDefaultViewInputFilterSensitiveLog,
      outputFilterSensitiveLog: AssociateDefaultViewOutputFilterSensitiveLog,
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
  private serialize(input: AssociateDefaultViewCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociateDefaultViewCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateDefaultViewCommandOutput> {
    return deserializeAws_restJson1AssociateDefaultViewCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
