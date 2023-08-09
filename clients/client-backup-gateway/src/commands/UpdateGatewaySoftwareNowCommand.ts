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
import { UpdateGatewaySoftwareNowInput, UpdateGatewaySoftwareNowOutput } from "../models/models_0";
import { de_UpdateGatewaySoftwareNowCommand, se_UpdateGatewaySoftwareNowCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateGatewaySoftwareNowCommand}.
 */
export interface UpdateGatewaySoftwareNowCommandInput extends UpdateGatewaySoftwareNowInput {}
/**
 * @public
 *
 * The output of {@link UpdateGatewaySoftwareNowCommand}.
 */
export interface UpdateGatewaySoftwareNowCommandOutput extends UpdateGatewaySoftwareNowOutput, __MetadataBearer {}

/**
 * @public
 * <p>Updates the gateway virtual machine (VM) software.
 *       The request immediately triggers the software update.</p>
 *          <note>
 *             <p>When you make this request, you get a <code>200 OK</code>
 *         success response immediately. However, it might take some
 *         time for the update to complete.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupGatewayClient, UpdateGatewaySoftwareNowCommand } from "@aws-sdk/client-backup-gateway"; // ES Modules import
 * // const { BackupGatewayClient, UpdateGatewaySoftwareNowCommand } = require("@aws-sdk/client-backup-gateway"); // CommonJS import
 * const client = new BackupGatewayClient(config);
 * const input = { // UpdateGatewaySoftwareNowInput
 *   GatewayArn: "STRING_VALUE", // required
 * };
 * const command = new UpdateGatewaySoftwareNowCommand(input);
 * const response = await client.send(command);
 * // { // UpdateGatewaySoftwareNowOutput
 * //   GatewayArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateGatewaySoftwareNowCommandInput - {@link UpdateGatewaySoftwareNowCommandInput}
 * @returns {@link UpdateGatewaySoftwareNowCommandOutput}
 * @see {@link UpdateGatewaySoftwareNowCommandInput} for command's `input` shape.
 * @see {@link UpdateGatewaySoftwareNowCommandOutput} for command's `response` shape.
 * @see {@link BackupGatewayClientResolvedConfig | config} for BackupGatewayClient's `config` shape.
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
export class UpdateGatewaySoftwareNowCommand extends $Command<
  UpdateGatewaySoftwareNowCommandInput,
  UpdateGatewaySoftwareNowCommandOutput,
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
  constructor(readonly input: UpdateGatewaySoftwareNowCommandInput) {
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
  ): Handler<UpdateGatewaySoftwareNowCommandInput, UpdateGatewaySoftwareNowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateGatewaySoftwareNowCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupGatewayClient";
    const commandName = "UpdateGatewaySoftwareNowCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: UpdateGatewaySoftwareNowCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateGatewaySoftwareNowCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateGatewaySoftwareNowCommandOutput> {
    return de_UpdateGatewaySoftwareNowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
