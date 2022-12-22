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
  GetHypervisorPropertyMappingsInput,
  GetHypervisorPropertyMappingsInputFilterSensitiveLog,
  GetHypervisorPropertyMappingsOutput,
  GetHypervisorPropertyMappingsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0GetHypervisorPropertyMappingsCommand,
  serializeAws_json1_0GetHypervisorPropertyMappingsCommand,
} from "../protocols/Aws_json1_0";

export interface GetHypervisorPropertyMappingsCommandInput extends GetHypervisorPropertyMappingsInput {}
export interface GetHypervisorPropertyMappingsCommandOutput
  extends GetHypervisorPropertyMappingsOutput,
    __MetadataBearer {}

/**
 * <p>This action retrieves the property mappings for the specified hypervisor.
 *       A hypervisor property mapping displays the relationship of entity properties
 *       available from the on-premises hypervisor to the properties available in Amazon Web Services.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupGatewayClient, GetHypervisorPropertyMappingsCommand } from "@aws-sdk/client-backup-gateway"; // ES Modules import
 * // const { BackupGatewayClient, GetHypervisorPropertyMappingsCommand } = require("@aws-sdk/client-backup-gateway"); // CommonJS import
 * const client = new BackupGatewayClient(config);
 * const command = new GetHypervisorPropertyMappingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetHypervisorPropertyMappingsCommandInput} for command's `input` shape.
 * @see {@link GetHypervisorPropertyMappingsCommandOutput} for command's `response` shape.
 * @see {@link BackupGatewayClientResolvedConfig | config} for BackupGatewayClient's `config` shape.
 *
 */
export class GetHypervisorPropertyMappingsCommand extends $Command<
  GetHypervisorPropertyMappingsCommandInput,
  GetHypervisorPropertyMappingsCommandOutput,
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

  constructor(readonly input: GetHypervisorPropertyMappingsCommandInput) {
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
  ): Handler<GetHypervisorPropertyMappingsCommandInput, GetHypervisorPropertyMappingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetHypervisorPropertyMappingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupGatewayClient";
    const commandName = "GetHypervisorPropertyMappingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetHypervisorPropertyMappingsInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetHypervisorPropertyMappingsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetHypervisorPropertyMappingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0GetHypervisorPropertyMappingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetHypervisorPropertyMappingsCommandOutput> {
    return deserializeAws_json1_0GetHypervisorPropertyMappingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
