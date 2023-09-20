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

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { ContinueUpdateRollbackInput, ContinueUpdateRollbackOutput } from "../models/models_0";
import { de_ContinueUpdateRollbackCommand, se_ContinueUpdateRollbackCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ContinueUpdateRollbackCommand}.
 */
export interface ContinueUpdateRollbackCommandInput extends ContinueUpdateRollbackInput {}
/**
 * @public
 *
 * The output of {@link ContinueUpdateRollbackCommand}.
 */
export interface ContinueUpdateRollbackCommandOutput extends ContinueUpdateRollbackOutput, __MetadataBearer {}

/**
 * @public
 * <p>For a specified stack that's in the <code>UPDATE_ROLLBACK_FAILED</code> state, continues rolling it back to the
 *     <code>UPDATE_ROLLBACK_COMPLETE</code> state. Depending on the cause of the failure, you can manually <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/troubleshooting.html#troubleshooting-errors-update-rollback-failed"> fix the
 *     error</a> and continue the rollback. By continuing the rollback, you can return your stack to a working state
 *    (the <code>UPDATE_ROLLBACK_COMPLETE</code> state), and then try to update the stack again.</p>
 *          <p>A stack goes into the <code>UPDATE_ROLLBACK_FAILED</code> state when CloudFormation can't roll back all
 *    changes after a failed stack update. For example, you might have a stack that's rolling back to an old database
 *    instance that was deleted outside of CloudFormation. Because CloudFormation doesn't know the database was
 *    deleted, it assumes that the database instance still exists and attempts to roll back to it, causing the update
 *    rollback to fail.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ContinueUpdateRollbackCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ContinueUpdateRollbackCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // ContinueUpdateRollbackInput
 *   StackName: "STRING_VALUE", // required
 *   RoleARN: "STRING_VALUE",
 *   ResourcesToSkip: [ // ResourcesToSkip
 *     "STRING_VALUE",
 *   ],
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new ContinueUpdateRollbackCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ContinueUpdateRollbackCommandInput - {@link ContinueUpdateRollbackCommandInput}
 * @returns {@link ContinueUpdateRollbackCommandOutput}
 * @see {@link ContinueUpdateRollbackCommandInput} for command's `input` shape.
 * @see {@link ContinueUpdateRollbackCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link TokenAlreadyExistsException} (client fault)
 *  <p>A client request token already exists.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 */
export class ContinueUpdateRollbackCommand extends $Command<
  ContinueUpdateRollbackCommandInput,
  ContinueUpdateRollbackCommandOutput,
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

  /**
   * @public
   */
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ContinueUpdateRollbackCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "ContinueUpdateRollbackCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CloudFormation",
        operation: "ContinueUpdateRollback",
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
  private serialize(input: ContinueUpdateRollbackCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ContinueUpdateRollbackCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ContinueUpdateRollbackCommandOutput> {
    return de_ContinueUpdateRollbackCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
