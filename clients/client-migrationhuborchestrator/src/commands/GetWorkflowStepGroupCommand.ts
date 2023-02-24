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
  GetWorkflowStepGroupRequest,
  GetWorkflowStepGroupRequestFilterSensitiveLog,
  GetWorkflowStepGroupResponse,
  GetWorkflowStepGroupResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetWorkflowStepGroupCommand,
  serializeAws_restJson1GetWorkflowStepGroupCommand,
} from "../protocols/Aws_restJson1";

export interface GetWorkflowStepGroupCommandInput extends GetWorkflowStepGroupRequest {}
export interface GetWorkflowStepGroupCommandOutput extends GetWorkflowStepGroupResponse, __MetadataBearer {}

/**
 * <p>Get the step group of a migration workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubOrchestratorClient, GetWorkflowStepGroupCommand } from "@aws-sdk/client-migrationhuborchestrator"; // ES Modules import
 * // const { MigrationHubOrchestratorClient, GetWorkflowStepGroupCommand } = require("@aws-sdk/client-migrationhuborchestrator"); // CommonJS import
 * const client = new MigrationHubOrchestratorClient(config);
 * const command = new GetWorkflowStepGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetWorkflowStepGroupCommandInput} for command's `input` shape.
 * @see {@link GetWorkflowStepGroupCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubOrchestratorClientResolvedConfig | config} for MigrationHubOrchestratorClient's `config` shape.
 *
 */
export class GetWorkflowStepGroupCommand extends $Command<
  GetWorkflowStepGroupCommandInput,
  GetWorkflowStepGroupCommandOutput,
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

  constructor(readonly input: GetWorkflowStepGroupCommandInput) {
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
  ): Handler<GetWorkflowStepGroupCommandInput, GetWorkflowStepGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetWorkflowStepGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubOrchestratorClient";
    const commandName = "GetWorkflowStepGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetWorkflowStepGroupRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetWorkflowStepGroupResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetWorkflowStepGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetWorkflowStepGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetWorkflowStepGroupCommandOutput> {
    return deserializeAws_restJson1GetWorkflowStepGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
