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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { BackupGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupGatewayClient";
import { StartVirtualMachinesMetadataSyncInput, StartVirtualMachinesMetadataSyncOutput } from "../models/models_0";
import {
  de_StartVirtualMachinesMetadataSyncCommand,
  se_StartVirtualMachinesMetadataSyncCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartVirtualMachinesMetadataSyncCommand}.
 */
export interface StartVirtualMachinesMetadataSyncCommandInput extends StartVirtualMachinesMetadataSyncInput {}
/**
 * @public
 *
 * The output of {@link StartVirtualMachinesMetadataSyncCommand}.
 */
export interface StartVirtualMachinesMetadataSyncCommandOutput
  extends StartVirtualMachinesMetadataSyncOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>This action sends a request to sync metadata across the specified virtual machines.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupGatewayClient, StartVirtualMachinesMetadataSyncCommand } from "@aws-sdk/client-backup-gateway"; // ES Modules import
 * // const { BackupGatewayClient, StartVirtualMachinesMetadataSyncCommand } = require("@aws-sdk/client-backup-gateway"); // CommonJS import
 * const client = new BackupGatewayClient(config);
 * const input = { // StartVirtualMachinesMetadataSyncInput
 *   HypervisorArn: "STRING_VALUE", // required
 * };
 * const command = new StartVirtualMachinesMetadataSyncCommand(input);
 * const response = await client.send(command);
 * // { // StartVirtualMachinesMetadataSyncOutput
 * //   HypervisorArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartVirtualMachinesMetadataSyncCommandInput - {@link StartVirtualMachinesMetadataSyncCommandInput}
 * @returns {@link StartVirtualMachinesMetadataSyncCommandOutput}
 * @see {@link StartVirtualMachinesMetadataSyncCommandInput} for command's `input` shape.
 * @see {@link StartVirtualMachinesMetadataSyncCommandOutput} for command's `response` shape.
 * @see {@link BackupGatewayClientResolvedConfig | config} for BackupGatewayClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The operation cannot proceed because you have insufficient permissions.</p>
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
export class StartVirtualMachinesMetadataSyncCommand extends $Command<
  StartVirtualMachinesMetadataSyncCommandInput,
  StartVirtualMachinesMetadataSyncCommandOutput,
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
  constructor(readonly input: StartVirtualMachinesMetadataSyncCommandInput) {
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
  ): Handler<StartVirtualMachinesMetadataSyncCommandInput, StartVirtualMachinesMetadataSyncCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartVirtualMachinesMetadataSyncCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupGatewayClient";
    const commandName = "StartVirtualMachinesMetadataSyncCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "BackupOnPremises_v20210101",
        operation: "StartVirtualMachinesMetadataSync",
      },
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
  private serialize(
    input: StartVirtualMachinesMetadataSyncCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_StartVirtualMachinesMetadataSyncCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartVirtualMachinesMetadataSyncCommandOutput> {
    return de_StartVirtualMachinesMetadataSyncCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
