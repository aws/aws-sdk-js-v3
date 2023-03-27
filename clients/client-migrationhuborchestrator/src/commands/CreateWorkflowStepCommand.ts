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

import {
  MigrationHubOrchestratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubOrchestratorClient";
import { CreateWorkflowStepRequest, CreateWorkflowStepResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateWorkflowStepCommand,
  serializeAws_restJson1CreateWorkflowStepCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateWorkflowStepCommand}.
 */
export interface CreateWorkflowStepCommandInput extends CreateWorkflowStepRequest {}
/**
 * @public
 *
 * The output of {@link CreateWorkflowStepCommand}.
 */
export interface CreateWorkflowStepCommandOutput extends CreateWorkflowStepResponse, __MetadataBearer {}

/**
 * @public
 * <p>Create a step in the migration workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubOrchestratorClient, CreateWorkflowStepCommand } from "@aws-sdk/client-migrationhuborchestrator"; // ES Modules import
 * // const { MigrationHubOrchestratorClient, CreateWorkflowStepCommand } = require("@aws-sdk/client-migrationhuborchestrator"); // CommonJS import
 * const client = new MigrationHubOrchestratorClient(config);
 * const input = { // CreateWorkflowStepRequest
 *   name: "STRING_VALUE", // required
 *   stepGroupId: "STRING_VALUE", // required
 *   workflowId: "STRING_VALUE", // required
 *   stepActionType: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   workflowStepAutomationConfiguration: { // WorkflowStepAutomationConfiguration
 *     scriptLocationS3Bucket: "STRING_VALUE",
 *     scriptLocationS3Key: { // PlatformScriptKey
 *       linux: "STRING_VALUE",
 *       windows: "STRING_VALUE",
 *     },
 *     command: { // PlatformCommand
 *       linux: "STRING_VALUE",
 *       windows: "STRING_VALUE",
 *     },
 *     runEnvironment: "STRING_VALUE",
 *     targetType: "STRING_VALUE",
 *   },
 *   stepTarget: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   outputs: [ // WorkflowStepOutputList
 *     { // WorkflowStepOutput
 *       name: "STRING_VALUE",
 *       dataType: "STRING_VALUE",
 *       required: true || false,
 *       value: { // WorkflowStepOutputUnion Union: only one key present
 *         integerValue: Number("int"),
 *         stringValue: "STRING_VALUE",
 *         listOfStringValue: [
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   ],
 *   previous: [
 *     "STRING_VALUE",
 *   ],
 *   next: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateWorkflowStepCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateWorkflowStepCommandInput - {@link CreateWorkflowStepCommandInput}
 * @returns {@link CreateWorkflowStepCommandOutput}
 * @see {@link CreateWorkflowStepCommandInput} for command's `input` shape.
 * @see {@link CreateWorkflowStepCommandOutput} for command's `response` shape.
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
 *
 */
export class CreateWorkflowStepCommand extends $Command<
  CreateWorkflowStepCommandInput,
  CreateWorkflowStepCommandOutput,
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
  constructor(readonly input: CreateWorkflowStepCommandInput) {
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
  ): Handler<CreateWorkflowStepCommandInput, CreateWorkflowStepCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateWorkflowStepCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubOrchestratorClient";
    const commandName = "CreateWorkflowStepCommand";
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
  private serialize(input: CreateWorkflowStepCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateWorkflowStepCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateWorkflowStepCommandOutput> {
    return deserializeAws_restJson1CreateWorkflowStepCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
