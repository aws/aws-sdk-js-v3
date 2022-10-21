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
  TestHypervisorConfigurationInput,
  TestHypervisorConfigurationInputFilterSensitiveLog,
  TestHypervisorConfigurationOutput,
  TestHypervisorConfigurationOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0TestHypervisorConfigurationCommand,
  serializeAws_json1_0TestHypervisorConfigurationCommand,
} from "../protocols/Aws_json1_0";

export interface TestHypervisorConfigurationCommandInput extends TestHypervisorConfigurationInput {}
export interface TestHypervisorConfigurationCommandOutput extends TestHypervisorConfigurationOutput, __MetadataBearer {}

/**
 * <p>Tests your hypervisor configuration to validate that backup gateway can connect with the
 *       hypervisor and its resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupGatewayClient, TestHypervisorConfigurationCommand } from "@aws-sdk/client-backup-gateway"; // ES Modules import
 * // const { BackupGatewayClient, TestHypervisorConfigurationCommand } = require("@aws-sdk/client-backup-gateway"); // CommonJS import
 * const client = new BackupGatewayClient(config);
 * const command = new TestHypervisorConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TestHypervisorConfigurationCommandInput} for command's `input` shape.
 * @see {@link TestHypervisorConfigurationCommandOutput} for command's `response` shape.
 * @see {@link BackupGatewayClientResolvedConfig | config} for BackupGatewayClient's `config` shape.
 *
 */
export class TestHypervisorConfigurationCommand extends $Command<
  TestHypervisorConfigurationCommandInput,
  TestHypervisorConfigurationCommandOutput,
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

  constructor(readonly input: TestHypervisorConfigurationCommandInput) {
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
  ): Handler<TestHypervisorConfigurationCommandInput, TestHypervisorConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, TestHypervisorConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupGatewayClient";
    const commandName = "TestHypervisorConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TestHypervisorConfigurationInputFilterSensitiveLog,
      outputFilterSensitiveLog: TestHypervisorConfigurationOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TestHypervisorConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0TestHypervisorConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<TestHypervisorConfigurationCommandOutput> {
    return deserializeAws_json1_0TestHypervisorConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
