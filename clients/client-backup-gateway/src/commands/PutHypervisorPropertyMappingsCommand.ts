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

import { BackupGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupGatewayClient";
import {
  PutHypervisorPropertyMappingsInput,
  PutHypervisorPropertyMappingsInputFilterSensitiveLog,
  PutHypervisorPropertyMappingsOutput,
  PutHypervisorPropertyMappingsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0PutHypervisorPropertyMappingsCommand,
  serializeAws_json1_0PutHypervisorPropertyMappingsCommand,
} from "../protocols/Aws_json1_0";

export interface PutHypervisorPropertyMappingsCommandInput extends PutHypervisorPropertyMappingsInput {}
export interface PutHypervisorPropertyMappingsCommandOutput
  extends PutHypervisorPropertyMappingsOutput,
    __MetadataBearer {}

/**
 * <p>This action sets the property mappings for the specified hypervisor.
 *       A hypervisor property mapping displays the relationship of entity properties
 *       available from the on-premises hypervisor to the properties available in Amazon Web Services.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupGatewayClient, PutHypervisorPropertyMappingsCommand } from "@aws-sdk/client-backup-gateway"; // ES Modules import
 * // const { BackupGatewayClient, PutHypervisorPropertyMappingsCommand } = require("@aws-sdk/client-backup-gateway"); // CommonJS import
 * const client = new BackupGatewayClient(config);
 * const command = new PutHypervisorPropertyMappingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutHypervisorPropertyMappingsCommandInput} for command's `input` shape.
 * @see {@link PutHypervisorPropertyMappingsCommandOutput} for command's `response` shape.
 * @see {@link BackupGatewayClientResolvedConfig | config} for BackupGatewayClient's `config` shape.
 *
 */
export class PutHypervisorPropertyMappingsCommand extends $Command<
  PutHypervisorPropertyMappingsCommandInput,
  PutHypervisorPropertyMappingsCommandOutput,
  BackupGatewayClientResolvedConfig
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

  constructor(readonly input: PutHypervisorPropertyMappingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutHypervisorPropertyMappingsCommandInput, PutHypervisorPropertyMappingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutHypervisorPropertyMappingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupGatewayClient";
    const commandName = "PutHypervisorPropertyMappingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutHypervisorPropertyMappingsInputFilterSensitiveLog,
      outputFilterSensitiveLog: PutHypervisorPropertyMappingsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutHypervisorPropertyMappingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0PutHypervisorPropertyMappingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutHypervisorPropertyMappingsCommandOutput> {
    return deserializeAws_json1_0PutHypervisorPropertyMappingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
