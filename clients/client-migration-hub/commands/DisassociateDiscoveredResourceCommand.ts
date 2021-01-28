import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { DisassociateDiscoveredResourceRequest, DisassociateDiscoveredResourceResult } from "../models/models_0";
import {
  deserializeAws_json1_1DisassociateDiscoveredResourceCommand,
  serializeAws_json1_1DisassociateDiscoveredResourceCommand,
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

export type DisassociateDiscoveredResourceCommandInput = DisassociateDiscoveredResourceRequest;
export type DisassociateDiscoveredResourceCommandOutput = DisassociateDiscoveredResourceResult & __MetadataBearer;

/**
 * <p>Disassociate an Application Discovery Service discovered resource from a migration
 *          task.</p>
 */
export class DisassociateDiscoveredResourceCommand extends $Command<
  DisassociateDiscoveredResourceCommandInput,
  DisassociateDiscoveredResourceCommandOutput,
  MigrationHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateDiscoveredResourceCommandInput) {
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
  ): Handler<DisassociateDiscoveredResourceCommandInput, DisassociateDiscoveredResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubClient";
    const commandName = "DisassociateDiscoveredResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateDiscoveredResourceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateDiscoveredResourceResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateDiscoveredResourceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateDiscoveredResourceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateDiscoveredResourceCommandOutput> {
    return deserializeAws_json1_1DisassociateDiscoveredResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
