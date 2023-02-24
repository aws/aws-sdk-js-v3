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
  DisassociateDiscoveredResourceRequest,
  DisassociateDiscoveredResourceRequestFilterSensitiveLog,
  DisassociateDiscoveredResourceResult,
  DisassociateDiscoveredResourceResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DisassociateDiscoveredResourceCommand,
  serializeAws_json1_1DisassociateDiscoveredResourceCommand,
} from "../protocols/Aws_json1_1";

export interface DisassociateDiscoveredResourceCommandInput extends DisassociateDiscoveredResourceRequest {}
export interface DisassociateDiscoveredResourceCommandOutput
  extends DisassociateDiscoveredResourceResult,
    __MetadataBearer {}

/**
 * <p>Disassociate an Application Discovery Service discovered resource from a migration
 *          task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, DisassociateDiscoveredResourceCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, DisassociateDiscoveredResourceCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const command = new DisassociateDiscoveredResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateDiscoveredResourceCommandInput} for command's `input` shape.
 * @see {@link DisassociateDiscoveredResourceCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for MigrationHubClient's `config` shape.
 *
 */
export class DisassociateDiscoveredResourceCommand extends $Command<
  DisassociateDiscoveredResourceCommandInput,
  DisassociateDiscoveredResourceCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateDiscoveredResourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubClient";
    const commandName = "DisassociateDiscoveredResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateDiscoveredResourceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisassociateDiscoveredResourceResultFilterSensitiveLog,
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
