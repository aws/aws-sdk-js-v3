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
  ListTemplateStepGroupsRequest,
  ListTemplateStepGroupsRequestFilterSensitiveLog,
  ListTemplateStepGroupsResponse,
  ListTemplateStepGroupsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListTemplateStepGroupsCommand,
  serializeAws_restJson1ListTemplateStepGroupsCommand,
} from "../protocols/Aws_restJson1";

export interface ListTemplateStepGroupsCommandInput extends ListTemplateStepGroupsRequest {}
export interface ListTemplateStepGroupsCommandOutput extends ListTemplateStepGroupsResponse, __MetadataBearer {}

/**
 * <p>List the step groups in a template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubOrchestratorClient, ListTemplateStepGroupsCommand } from "@aws-sdk/client-migrationhuborchestrator"; // ES Modules import
 * // const { MigrationHubOrchestratorClient, ListTemplateStepGroupsCommand } = require("@aws-sdk/client-migrationhuborchestrator"); // CommonJS import
 * const client = new MigrationHubOrchestratorClient(config);
 * const command = new ListTemplateStepGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTemplateStepGroupsCommandInput} for command's `input` shape.
 * @see {@link ListTemplateStepGroupsCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubOrchestratorClientResolvedConfig | config} for MigrationHubOrchestratorClient's `config` shape.
 *
 */
export class ListTemplateStepGroupsCommand extends $Command<
  ListTemplateStepGroupsCommandInput,
  ListTemplateStepGroupsCommandOutput,
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

  constructor(readonly input: ListTemplateStepGroupsCommandInput) {
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
  ): Handler<ListTemplateStepGroupsCommandInput, ListTemplateStepGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTemplateStepGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubOrchestratorClient";
    const commandName = "ListTemplateStepGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTemplateStepGroupsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListTemplateStepGroupsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTemplateStepGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListTemplateStepGroupsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTemplateStepGroupsCommandOutput> {
    return deserializeAws_restJson1ListTemplateStepGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
