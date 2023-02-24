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
  ListWorkflowStepsRequest,
  ListWorkflowStepsRequestFilterSensitiveLog,
  ListWorkflowStepsResponse,
  ListWorkflowStepsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListWorkflowStepsCommand,
  serializeAws_restJson1ListWorkflowStepsCommand,
} from "../protocols/Aws_restJson1";

export interface ListWorkflowStepsCommandInput extends ListWorkflowStepsRequest {}
export interface ListWorkflowStepsCommandOutput extends ListWorkflowStepsResponse, __MetadataBearer {}

/**
 * <p>List the steps in a workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubOrchestratorClient, ListWorkflowStepsCommand } from "@aws-sdk/client-migrationhuborchestrator"; // ES Modules import
 * // const { MigrationHubOrchestratorClient, ListWorkflowStepsCommand } = require("@aws-sdk/client-migrationhuborchestrator"); // CommonJS import
 * const client = new MigrationHubOrchestratorClient(config);
 * const command = new ListWorkflowStepsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListWorkflowStepsCommandInput} for command's `input` shape.
 * @see {@link ListWorkflowStepsCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubOrchestratorClientResolvedConfig | config} for MigrationHubOrchestratorClient's `config` shape.
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
      inputFilterSensitiveLog: ListWorkflowStepsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListWorkflowStepsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListWorkflowStepsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListWorkflowStepsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListWorkflowStepsCommandOutput> {
    return deserializeAws_restJson1ListWorkflowStepsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
