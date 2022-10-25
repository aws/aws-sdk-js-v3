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
import {
  UpdateWorkflowStepRequest,
  UpdateWorkflowStepRequestFilterSensitiveLog,
  UpdateWorkflowStepResponse,
  UpdateWorkflowStepResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateWorkflowStepCommand,
  serializeAws_restJson1UpdateWorkflowStepCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateWorkflowStepCommandInput extends UpdateWorkflowStepRequest {}
export interface UpdateWorkflowStepCommandOutput extends UpdateWorkflowStepResponse, __MetadataBearer {}

/**
 * <p>Update a step in a migration workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubOrchestratorClient, UpdateWorkflowStepCommand } from "@aws-sdk/client-migrationhuborchestrator"; // ES Modules import
 * // const { MigrationHubOrchestratorClient, UpdateWorkflowStepCommand } = require("@aws-sdk/client-migrationhuborchestrator"); // CommonJS import
 * const client = new MigrationHubOrchestratorClient(config);
 * const command = new UpdateWorkflowStepCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateWorkflowStepCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkflowStepCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubOrchestratorClientResolvedConfig | config} for MigrationHubOrchestratorClient's `config` shape.
 *
 */
export class UpdateWorkflowStepCommand extends $Command<
  UpdateWorkflowStepCommandInput,
  UpdateWorkflowStepCommandOutput,
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

  constructor(readonly input: UpdateWorkflowStepCommandInput) {
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
  ): Handler<UpdateWorkflowStepCommandInput, UpdateWorkflowStepCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateWorkflowStepCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubOrchestratorClient";
    const commandName = "UpdateWorkflowStepCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateWorkflowStepRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateWorkflowStepResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateWorkflowStepCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateWorkflowStepCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateWorkflowStepCommandOutput> {
    return deserializeAws_restJson1UpdateWorkflowStepCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
