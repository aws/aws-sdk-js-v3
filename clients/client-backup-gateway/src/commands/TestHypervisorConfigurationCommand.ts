// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { BackupGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupGatewayClient";
import {
  TestHypervisorConfigurationInput,
  TestHypervisorConfigurationInputFilterSensitiveLog,
  TestHypervisorConfigurationOutput,
} from "../models/models_0";
import { de_TestHypervisorConfigurationCommand, se_TestHypervisorConfigurationCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link TestHypervisorConfigurationCommand}.
 */
export interface TestHypervisorConfigurationCommandInput extends TestHypervisorConfigurationInput {}
/**
 * @public
 *
 * The output of {@link TestHypervisorConfigurationCommand}.
 */
export interface TestHypervisorConfigurationCommandOutput extends TestHypervisorConfigurationOutput, __MetadataBearer {}

/**
 * @public
 * <p>Tests your hypervisor configuration to validate that backup gateway can connect with the
 *       hypervisor and its resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupGatewayClient, TestHypervisorConfigurationCommand } from "@aws-sdk/client-backup-gateway"; // ES Modules import
 * // const { BackupGatewayClient, TestHypervisorConfigurationCommand } = require("@aws-sdk/client-backup-gateway"); // CommonJS import
 * const client = new BackupGatewayClient(config);
 * const input = { // TestHypervisorConfigurationInput
 *   GatewayArn: "STRING_VALUE", // required
 *   Host: "STRING_VALUE", // required
 *   Username: "STRING_VALUE",
 *   Password: "STRING_VALUE",
 * };
 * const command = new TestHypervisorConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param TestHypervisorConfigurationCommandInput - {@link TestHypervisorConfigurationCommandInput}
 * @returns {@link TestHypervisorConfigurationCommandOutput}
 * @see {@link TestHypervisorConfigurationCommandInput} for command's `input` shape.
 * @see {@link TestHypervisorConfigurationCommandOutput} for command's `response` shape.
 * @see {@link BackupGatewayClientResolvedConfig | config} for BackupGatewayClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The operation cannot proceed because it is not supported.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource that is required for the action wasn't found.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The operation did not succeed because an internal error occurred. Try again later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>TPS has been limited to protect against intentional or unintentional
 *     high request volumes.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The operation did not succeed because a validation error occurred.</p>
 *
 * @throws {@link BackupGatewayServiceException}
 * <p>Base exception class for all service exceptions from BackupGateway service.</p>
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

  /**
   * @public
   */
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
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: TestHypervisorConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_TestHypervisorConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<TestHypervisorConfigurationCommandOutput> {
    return de_TestHypervisorConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
