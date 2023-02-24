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

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import {
  ListStackSetsInput,
  ListStackSetsInputFilterSensitiveLog,
  ListStackSetsOutput,
  ListStackSetsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryListStackSetsCommand,
  serializeAws_queryListStackSetsCommand,
} from "../protocols/Aws_query";

export interface ListStackSetsCommandInput extends ListStackSetsInput {}
export interface ListStackSetsCommandOutput extends ListStackSetsOutput, __MetadataBearer {}

/**
 * <p>Returns summary information about stack sets that are associated with the user.</p>
 *          <ul>
 *             <li>
 *                <p>[Self-managed permissions] If you set the <code>CallAs</code> parameter to
 *                   <code>SELF</code> while signed in to your Amazon Web Services account,
 *                   <code>ListStackSets</code> returns all self-managed stack sets in your Amazon Web Services account.</p>
 *             </li>
 *             <li>
 *                <p>[Service-managed permissions] If you set the <code>CallAs</code> parameter to
 *                   <code>SELF</code> while signed in to the organization's management account, <code>ListStackSets</code> returns all stack sets in the
 *                management account.</p>
 *             </li>
 *             <li>
 *                <p>[Service-managed permissions] If you set the <code>CallAs</code> parameter to
 *                   <code>DELEGATED_ADMIN</code> while signed in to your member account,
 *                   <code>ListStackSets</code> returns all stack sets with service-managed permissions
 *                in the management account.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListStackSetsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListStackSetsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new ListStackSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStackSetsCommandInput} for command's `input` shape.
 * @see {@link ListStackSetsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 */
export class ListStackSetsCommand extends $Command<
  ListStackSetsCommandInput,
  ListStackSetsCommandOutput,
  CloudFormationClientResolvedConfig
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

  constructor(readonly input: ListStackSetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListStackSetsCommandInput, ListStackSetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListStackSetsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "ListStackSetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListStackSetsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListStackSetsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListStackSetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListStackSetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListStackSetsCommandOutput> {
    return deserializeAws_queryListStackSetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
