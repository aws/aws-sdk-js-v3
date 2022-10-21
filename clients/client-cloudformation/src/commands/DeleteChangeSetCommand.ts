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
  DeleteChangeSetInput,
  DeleteChangeSetInputFilterSensitiveLog,
  DeleteChangeSetOutput,
  DeleteChangeSetOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDeleteChangeSetCommand,
  serializeAws_queryDeleteChangeSetCommand,
} from "../protocols/Aws_query";

export interface DeleteChangeSetCommandInput extends DeleteChangeSetInput {}
export interface DeleteChangeSetCommandOutput extends DeleteChangeSetOutput, __MetadataBearer {}

/**
 * <p>Deletes the specified change set. Deleting change sets ensures that no one executes the
 *          wrong change set.</p>
 *          <p>If the call successfully completes, CloudFormation successfully deleted the change
 *          set.</p>
 *          <p>If <code>IncludeNestedStacks</code> specifies <code>True</code> during the creation of
 *          the nested change set, then <code>DeleteChangeSet</code> will delete all change sets that
 *          belong to the stacks hierarchy and will also delete all change sets for nested stacks with
 *          the status of <code>REVIEW_IN_PROGRESS</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DeleteChangeSetCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DeleteChangeSetCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DeleteChangeSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteChangeSetCommandInput} for command's `input` shape.
 * @see {@link DeleteChangeSetCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 */
export class DeleteChangeSetCommand extends $Command<
  DeleteChangeSetCommandInput,
  DeleteChangeSetCommandOutput,
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

  constructor(readonly input: DeleteChangeSetCommandInput) {
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
  ): Handler<DeleteChangeSetCommandInput, DeleteChangeSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteChangeSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "DeleteChangeSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteChangeSetInputFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteChangeSetOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteChangeSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteChangeSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteChangeSetCommandOutput> {
    return deserializeAws_queryDeleteChangeSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
