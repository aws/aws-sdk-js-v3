import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { ContinueUpdateRollbackInput, ContinueUpdateRollbackOutput } from "../models/models_0";
import {
  deserializeAws_queryContinueUpdateRollbackCommand,
  serializeAws_queryContinueUpdateRollbackCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface ContinueUpdateRollbackCommandInput extends ContinueUpdateRollbackInput {}
export interface ContinueUpdateRollbackCommandOutput extends ContinueUpdateRollbackOutput, __MetadataBearer {}

/**
 * <p>For a specified stack that is in the <code>UPDATE_ROLLBACK_FAILED</code> state,
 *          continues rolling it back to the <code>UPDATE_ROLLBACK_COMPLETE</code> state. Depending on
 *          the cause of the failure, you can manually <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/troubleshooting.html#troubleshooting-errors-update-rollback-failed"> fix the error</a> and continue the rollback. By continuing the rollback, you can
 *          return your stack to a working state (the <code>UPDATE_ROLLBACK_COMPLETE</code> state), and
 *          then try to update the stack again.</p>
 *          <p>A stack goes into the <code>UPDATE_ROLLBACK_FAILED</code> state when
 *          CloudFormation cannot roll back all changes after a failed stack update. For example, you
 *          might have a stack that is rolling back to an old database instance that was deleted
 *          outside of CloudFormation. Because CloudFormation doesn't know the database was
 *          deleted, it assumes that the database instance still exists and attempts to roll back to
 *          it, causing the update rollback to fail.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ContinueUpdateRollbackCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ContinueUpdateRollbackCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new ContinueUpdateRollbackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ContinueUpdateRollbackCommandInput} for command's `input` shape.
 * @see {@link ContinueUpdateRollbackCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ContinueUpdateRollbackCommand extends $Command<
  ContinueUpdateRollbackCommandInput,
  ContinueUpdateRollbackCommandOutput,
  CloudFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ContinueUpdateRollbackCommandInput) {
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
  ): Handler<ContinueUpdateRollbackCommandInput, ContinueUpdateRollbackCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "ContinueUpdateRollbackCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ContinueUpdateRollbackInput.filterSensitiveLog,
      outputFilterSensitiveLog: ContinueUpdateRollbackOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ContinueUpdateRollbackCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryContinueUpdateRollbackCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ContinueUpdateRollbackCommandOutput> {
    return deserializeAws_queryContinueUpdateRollbackCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
