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

import {
  MigrationHubOrchestratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubOrchestratorClient";
import {
  UpdateMigrationWorkflowRequest,
  UpdateMigrationWorkflowRequestFilterSensitiveLog,
  UpdateMigrationWorkflowResponse,
  UpdateMigrationWorkflowResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateWorkflowCommand, se_UpdateWorkflowCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateWorkflowCommand}.
 */
export interface UpdateWorkflowCommandInput extends UpdateMigrationWorkflowRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWorkflowCommand}.
 */
export interface UpdateWorkflowCommandOutput extends UpdateMigrationWorkflowResponse, __MetadataBearer {}

/**
 * @public
 * <p>Update a migration workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubOrchestratorClient, UpdateWorkflowCommand } from "@aws-sdk/client-migrationhuborchestrator"; // ES Modules import
 * // const { MigrationHubOrchestratorClient, UpdateWorkflowCommand } = require("@aws-sdk/client-migrationhuborchestrator"); // CommonJS import
 * const client = new MigrationHubOrchestratorClient(config);
 * const input = { // UpdateMigrationWorkflowRequest
 *   id: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   inputParameters: { // StepInputParameters
 *     "<keys>": { // StepInput Union: only one key present
 *       integerValue: Number("int"),
 *       stringValue: "STRING_VALUE",
 *       listOfStringsValue: [ // StringList
 *         "STRING_VALUE",
 *       ],
 *       mapOfStringValue: { // StringMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   },
 *   stepTargets: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateWorkflowCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMigrationWorkflowResponse
 * //   id: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   templateId: "STRING_VALUE",
 * //   adsApplicationConfigurationId: "STRING_VALUE",
 * //   workflowInputs: { // StepInputParameters
 * //     "<keys>": { // StepInput Union: only one key present
 * //       integerValue: Number("int"),
 * //       stringValue: "STRING_VALUE",
 * //       listOfStringsValue: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       mapOfStringValue: { // StringMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   stepTargets: [
 * //     "STRING_VALUE",
 * //   ],
 * //   status: "STRING_VALUE",
 * //   creationTime: new Date("TIMESTAMP"),
 * //   lastModifiedTime: new Date("TIMESTAMP"),
 * //   tags: {
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateWorkflowCommandInput - {@link UpdateWorkflowCommandInput}
 * @returns {@link UpdateWorkflowCommandOutput}
 * @see {@link UpdateWorkflowCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkflowCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubOrchestratorClientResolvedConfig | config} for MigrationHubOrchestratorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource is not available.</p>
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
export class UpdateWorkflowCommand extends $Command<
  UpdateWorkflowCommandInput,
  UpdateWorkflowCommandOutput,
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
  constructor(readonly input: UpdateWorkflowCommandInput) {
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
  ): Handler<UpdateWorkflowCommandInput, UpdateWorkflowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateWorkflowCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubOrchestratorClient";
    const commandName = "UpdateWorkflowCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateMigrationWorkflowRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateMigrationWorkflowResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSMigrationHubOrchestrator",
        operation: "UpdateWorkflow",
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
  private serialize(input: UpdateWorkflowCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateWorkflowCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateWorkflowCommandOutput> {
    return de_UpdateWorkflowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
