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

import { EntityResolutionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EntityResolutionClient";
import { DeleteMatchingWorkflowInput, DeleteMatchingWorkflowOutput } from "../models/models_0";
import { de_DeleteMatchingWorkflowCommand, se_DeleteMatchingWorkflowCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteMatchingWorkflowCommand}.
 */
export interface DeleteMatchingWorkflowCommandInput extends DeleteMatchingWorkflowInput {}
/**
 * @public
 *
 * The output of {@link DeleteMatchingWorkflowCommand}.
 */
export interface DeleteMatchingWorkflowCommandOutput extends DeleteMatchingWorkflowOutput, __MetadataBearer {}

/**
 * @public
 * <p>Deletes the <code>MatchingWorkflow</code> with a given name. This operation will succeed
 *          even if a workflow with the given name does not exist.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, DeleteMatchingWorkflowCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, DeleteMatchingWorkflowCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * const client = new EntityResolutionClient(config);
 * const input = { // DeleteMatchingWorkflowInput
 *   workflowName: "STRING_VALUE", // required
 * };
 * const command = new DeleteMatchingWorkflowCommand(input);
 * const response = await client.send(command);
 * // { // DeleteMatchingWorkflowOutput
 * //   message: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteMatchingWorkflowCommandInput - {@link DeleteMatchingWorkflowCommandInput}
 * @returns {@link DeleteMatchingWorkflowCommandOutput}
 * @see {@link DeleteMatchingWorkflowCommandInput} for command's `input` shape.
 * @see {@link DeleteMatchingWorkflowCommandOutput} for command's `response` shape.
 * @see {@link EntityResolutionClientResolvedConfig | config} for EntityResolutionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. <code>HTTP Status Code:
 *             403</code>
 *          </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Entity Resolution
 *          service. <code>HTTP Status Code: 500</code>
 *          </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. <code>HTTP Status Code:
 *          429</code>
 *          </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by Entity Resolution. <code>HTTP
 *             Status Code: 400</code>
 *          </p>
 *
 * @throws {@link EntityResolutionServiceException}
 * <p>Base exception class for all service exceptions from EntityResolution service.</p>
 *
 */
export class DeleteMatchingWorkflowCommand extends $Command<
  DeleteMatchingWorkflowCommandInput,
  DeleteMatchingWorkflowCommandOutput,
  EntityResolutionClientResolvedConfig
> {
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
  constructor(readonly input: DeleteMatchingWorkflowCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EntityResolutionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteMatchingWorkflowCommandInput, DeleteMatchingWorkflowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteMatchingWorkflowCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EntityResolutionClient";
    const commandName = "DeleteMatchingWorkflowCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSVeniceService",
        operation: "DeleteMatchingWorkflow",
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
  private serialize(input: DeleteMatchingWorkflowCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteMatchingWorkflowCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteMatchingWorkflowCommandOutput> {
    return de_DeleteMatchingWorkflowCommand(output, context);
  }
}
