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

import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import {
  ListDiscoveredResourcesRequest,
  ListDiscoveredResourcesRequestFilterSensitiveLog,
  ListDiscoveredResourcesResult,
  ListDiscoveredResourcesResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListDiscoveredResourcesCommand,
  serializeAws_json1_1ListDiscoveredResourcesCommand,
} from "../protocols/Aws_json1_1";

export interface ListDiscoveredResourcesCommandInput extends ListDiscoveredResourcesRequest {}
export interface ListDiscoveredResourcesCommandOutput extends ListDiscoveredResourcesResult, __MetadataBearer {}

/**
 * <p>Lists discovered resources associated with the given <code>MigrationTask</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, ListDiscoveredResourcesCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, ListDiscoveredResourcesCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const command = new ListDiscoveredResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDiscoveredResourcesCommandInput} for command's `input` shape.
 * @see {@link ListDiscoveredResourcesCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for MigrationHubClient's `config` shape.
 *
 */
export class ListDiscoveredResourcesCommand extends $Command<
  ListDiscoveredResourcesCommandInput,
  ListDiscoveredResourcesCommandOutput,
  MigrationHubClientResolvedConfig
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

  constructor(readonly input: ListDiscoveredResourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MigrationHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDiscoveredResourcesCommandInput, ListDiscoveredResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDiscoveredResourcesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubClient";
    const commandName = "ListDiscoveredResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDiscoveredResourcesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListDiscoveredResourcesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDiscoveredResourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListDiscoveredResourcesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDiscoveredResourcesCommandOutput> {
    return deserializeAws_json1_1ListDiscoveredResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
