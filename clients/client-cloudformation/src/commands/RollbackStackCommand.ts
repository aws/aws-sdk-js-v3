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
  RollbackStackInput,
  RollbackStackInputFilterSensitiveLog,
  RollbackStackOutput,
  RollbackStackOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryRollbackStackCommand,
  serializeAws_queryRollbackStackCommand,
} from "../protocols/Aws_query";

export interface RollbackStackCommandInput extends RollbackStackInput {}
export interface RollbackStackCommandOutput extends RollbackStackOutput, __MetadataBearer {}

/**
 * <p>When specifying <code>RollbackStack</code>, you preserve the state of previously
 *          provisioned resources when an operation fails. You can check the status of the stack
 *          through the <a>DescribeStacks</a> operation.</p>
 *          <p>Rolls back the specified stack to the last known stable state from
 *             <code>CREATE_FAILED</code> or <code>UPDATE_FAILED</code> stack statuses.</p>
 *          <p>This operation will delete a stack if it doesn't contain a last known stable state. A
 *          last known stable state includes any status in a <code>*_COMPLETE</code>. This includes the
 *          following stack statuses.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>CREATE_COMPLETE</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UPDATE_COMPLETE</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UPDATE_ROLLBACK_COMPLETE</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>IMPORT_COMPLETE</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>IMPORT_ROLLBACK_COMPLETE</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, RollbackStackCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, RollbackStackCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new RollbackStackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RollbackStackCommandInput} for command's `input` shape.
 * @see {@link RollbackStackCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 */
export class RollbackStackCommand extends $Command<
  RollbackStackCommandInput,
  RollbackStackCommandOutput,
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

  constructor(readonly input: RollbackStackCommandInput) {
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
  ): Handler<RollbackStackCommandInput, RollbackStackCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, RollbackStackCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "RollbackStackCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RollbackStackInputFilterSensitiveLog,
      outputFilterSensitiveLog: RollbackStackOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RollbackStackCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRollbackStackCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RollbackStackCommandOutput> {
    return deserializeAws_queryRollbackStackCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
