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
import { DisassociateGatewayFromServerInput, DisassociateGatewayFromServerOutput } from "../models/models_0";
import {
  de_DisassociateGatewayFromServerCommand,
  se_DisassociateGatewayFromServerCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisassociateGatewayFromServerCommand}.
 */
export interface DisassociateGatewayFromServerCommandInput extends DisassociateGatewayFromServerInput {}
/**
 * @public
 *
 * The output of {@link DisassociateGatewayFromServerCommand}.
 */
export interface DisassociateGatewayFromServerCommandOutput
  extends DisassociateGatewayFromServerOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Disassociates a backup gateway from the specified server. After the disassociation process
 *       finishes, the gateway can no longer access the virtual machines on the server.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupGatewayClient, DisassociateGatewayFromServerCommand } from "@aws-sdk/client-backup-gateway"; // ES Modules import
 * // const { BackupGatewayClient, DisassociateGatewayFromServerCommand } = require("@aws-sdk/client-backup-gateway"); // CommonJS import
 * const client = new BackupGatewayClient(config);
 * const input = { // DisassociateGatewayFromServerInput
 *   GatewayArn: "STRING_VALUE", // required
 * };
 * const command = new DisassociateGatewayFromServerCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateGatewayFromServerOutput
 * //   GatewayArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DisassociateGatewayFromServerCommandInput - {@link DisassociateGatewayFromServerCommandInput}
 * @returns {@link DisassociateGatewayFromServerCommandOutput}
 * @see {@link DisassociateGatewayFromServerCommandInput} for command's `input` shape.
 * @see {@link DisassociateGatewayFromServerCommandOutput} for command's `response` shape.
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
export class DisassociateGatewayFromServerCommand extends $Command<
  DisassociateGatewayFromServerCommandInput,
  DisassociateGatewayFromServerCommandOutput,
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
  constructor(readonly input: DisassociateGatewayFromServerCommandInput) {
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
  ): Handler<DisassociateGatewayFromServerCommandInput, DisassociateGatewayFromServerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateGatewayFromServerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupGatewayClient";
    const commandName = "DisassociateGatewayFromServerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "BackupOnPremises_v20210101",
        operation: "DisassociateGatewayFromServer",
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
  private serialize(input: DisassociateGatewayFromServerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DisassociateGatewayFromServerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateGatewayFromServerCommandOutput> {
    return de_DisassociateGatewayFromServerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
