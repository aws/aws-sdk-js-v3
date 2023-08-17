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
} from "@smithy/types";

import {
  MigrationHubOrchestratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubOrchestratorClient";
import { ListWorkflowStepsRequest, ListWorkflowStepsResponse } from "../models/models_0";
import { de_ListWorkflowStepsCommand, se_ListWorkflowStepsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListWorkflowStepsCommand}.
 */
export interface ListWorkflowStepsCommandInput extends ListWorkflowStepsRequest {}
/**
 * @public
 *
 * The output of {@link ListWorkflowStepsCommand}.
 */
export interface ListWorkflowStepsCommandOutput extends ListWorkflowStepsResponse, __MetadataBearer {}

/**
 * @public
 * <p>List the steps in a workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubOrchestratorClient, ListWorkflowStepsCommand } from "@aws-sdk/client-migrationhuborchestrator"; // ES Modules import
 * // const { MigrationHubOrchestratorClient, ListWorkflowStepsCommand } = require("@aws-sdk/client-migrationhuborchestrator"); // CommonJS import
 * const client = new MigrationHubOrchestratorClient(config);
 * const input = { // ListWorkflowStepsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   workflowId: "STRING_VALUE", // required
 *   stepGroupId: "STRING_VALUE", // required
 * };
 * const command = new ListWorkflowStepsCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkflowStepsResponse
 * //   nextToken: "STRING_VALUE",
 * //   workflowStepsSummary: [ // WorkflowStepsSummaryList // required
 * //     { // WorkflowStepSummary
 * //       stepId: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       stepActionType: "STRING_VALUE",
 * //       owner: "STRING_VALUE",
 * //       previous: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       next: [
 * //         "STRING_VALUE",
 * //       ],
 * //       status: "STRING_VALUE",
 * //       statusMessage: "STRING_VALUE",
 * //       noOfSrvCompleted: Number("int"),
 * //       noOfSrvFailed: Number("int"),
 * //       totalNoOfSrv: Number("int"),
 * //       description: "STRING_VALUE",
 * //       scriptLocation: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListWorkflowStepsCommandInput - {@link ListWorkflowStepsCommandInput}
 * @returns {@link ListWorkflowStepsCommandOutput}
 * @see {@link ListWorkflowStepsCommandInput} for command's `input` shape.
 * @see {@link ListWorkflowStepsCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubOrchestratorClientResolvedConfig | config} for MigrationHubOrchestratorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link MigrationHubOrchestratorServiceException}
 * <p>Base exception class for all service exceptions from MigrationHubOrchestrator service.</p>
 *
 */
export class ListWorkflowStepsCommand extends $Command<
  ListWorkflowStepsCommandInput,
  ListWorkflowStepsCommandOutput,
  MigrationHubOrchestratorClientResolvedConfig
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
  constructor(readonly input: ListWorkflowStepsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MigrationHubOrchestratorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListWorkflowStepsCommandInput, ListWorkflowStepsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListWorkflowStepsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubOrchestratorClient";
    const commandName = "ListWorkflowStepsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: ListWorkflowStepsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListWorkflowStepsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListWorkflowStepsCommandOutput> {
    return de_ListWorkflowStepsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
