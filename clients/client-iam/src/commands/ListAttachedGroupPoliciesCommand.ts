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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import {
  ListAttachedGroupPoliciesRequest,
  ListAttachedGroupPoliciesRequestFilterSensitiveLog,
  ListAttachedGroupPoliciesResponse,
  ListAttachedGroupPoliciesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryListAttachedGroupPoliciesCommand,
  serializeAws_queryListAttachedGroupPoliciesCommand,
} from "../protocols/Aws_query";

export interface ListAttachedGroupPoliciesCommandInput extends ListAttachedGroupPoliciesRequest {}
export interface ListAttachedGroupPoliciesCommandOutput extends ListAttachedGroupPoliciesResponse, __MetadataBearer {}

/**
 * <p>Lists all managed policies that are attached to the specified IAM group.</p>
 *         <p>An IAM group can also have inline policies embedded with it. To list the inline
 *             policies for a group, use <a>ListGroupPolicies</a>. For information about
 *             policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 *         <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters. You can use the <code>PathPrefix</code> parameter to limit the list of
 *             policies to only those matching the specified path prefix. If there are no policies
 *             attached to the specified group (or none that match the specified path prefix), the
 *             operation returns an empty list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListAttachedGroupPoliciesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListAttachedGroupPoliciesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListAttachedGroupPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAttachedGroupPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListAttachedGroupPoliciesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 */
export class ListAttachedGroupPoliciesCommand extends $Command<
  ListAttachedGroupPoliciesCommandInput,
  ListAttachedGroupPoliciesCommandOutput,
  IAMClientResolvedConfig
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

  constructor(readonly input: ListAttachedGroupPoliciesCommandInput) {
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
  ): Handler<ListAttachedGroupPoliciesCommandInput, ListAttachedGroupPoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAttachedGroupPoliciesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ListAttachedGroupPoliciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAttachedGroupPoliciesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListAttachedGroupPoliciesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAttachedGroupPoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListAttachedGroupPoliciesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAttachedGroupPoliciesCommandOutput> {
    return deserializeAws_queryListAttachedGroupPoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
