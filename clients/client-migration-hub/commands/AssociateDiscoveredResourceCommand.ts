import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { AssociateDiscoveredResourceRequest, AssociateDiscoveredResourceResult } from "../models/models_0";
import {
  deserializeAws_json1_1AssociateDiscoveredResourceCommand,
  serializeAws_json1_1AssociateDiscoveredResourceCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface AssociateDiscoveredResourceCommandInput extends AssociateDiscoveredResourceRequest {}
export interface AssociateDiscoveredResourceCommandOutput extends AssociateDiscoveredResourceResult, __MetadataBearer {}

/**
 * <p>Associates a discovered resource ID from Application Discovery Service with a migration
 *          task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, AssociateDiscoveredResourceCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, AssociateDiscoveredResourceCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const command = new AssociateDiscoveredResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateDiscoveredResourceCommandInput} for command's `input` shape.
 * @see {@link AssociateDiscoveredResourceCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AssociateDiscoveredResourceCommand extends $Command<
  AssociateDiscoveredResourceCommandInput,
  AssociateDiscoveredResourceCommandOutput,
  MigrationHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateDiscoveredResourceCommandInput) {
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
  ): Handler<AssociateDiscoveredResourceCommandInput, AssociateDiscoveredResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubClient";
    const commandName = "AssociateDiscoveredResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateDiscoveredResourceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateDiscoveredResourceResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateDiscoveredResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateDiscoveredResourceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateDiscoveredResourceCommandOutput> {
    return deserializeAws_json1_1AssociateDiscoveredResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
