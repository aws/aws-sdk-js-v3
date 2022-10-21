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
  ListRolePoliciesRequest,
  ListRolePoliciesRequestFilterSensitiveLog,
  ListRolePoliciesResponse,
  ListRolePoliciesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryListRolePoliciesCommand,
  serializeAws_queryListRolePoliciesCommand,
} from "../protocols/Aws_query";

export interface ListRolePoliciesCommandInput extends ListRolePoliciesRequest {}
export interface ListRolePoliciesCommandOutput extends ListRolePoliciesResponse, __MetadataBearer {}

/**
 * <p>Lists the names of the inline policies that are embedded in the specified IAM
 *             role.</p>
 *         <p>An IAM role can also have managed policies attached to it. To list the managed
 *             policies that are attached to a role, use <a>ListAttachedRolePolicies</a>.
 *             For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 *         <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters. If there are no inline policies embedded with the specified role, the
 *             operation returns an empty list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListRolePoliciesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListRolePoliciesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListRolePoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRolePoliciesCommandInput} for command's `input` shape.
 * @see {@link ListRolePoliciesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 */
export class ListRolePoliciesCommand extends $Command<
  ListRolePoliciesCommandInput,
  ListRolePoliciesCommandOutput,
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

  constructor(readonly input: ListRolePoliciesCommandInput) {
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
  ): Handler<ListRolePoliciesCommandInput, ListRolePoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRolePoliciesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ListRolePoliciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRolePoliciesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListRolePoliciesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListRolePoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListRolePoliciesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRolePoliciesCommandOutput> {
    return deserializeAws_queryListRolePoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
