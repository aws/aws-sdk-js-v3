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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyInstanceMaintenanceOptionsRequest, ModifyInstanceMaintenanceOptionsResult } from "../models/models_6";
import {
  de_ModifyInstanceMaintenanceOptionsCommand,
  se_ModifyInstanceMaintenanceOptionsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyInstanceMaintenanceOptionsCommand}.
 */
export interface ModifyInstanceMaintenanceOptionsCommandInput extends ModifyInstanceMaintenanceOptionsRequest {}
/**
 * @public
 *
 * The output of {@link ModifyInstanceMaintenanceOptionsCommand}.
 */
export interface ModifyInstanceMaintenanceOptionsCommandOutput
  extends ModifyInstanceMaintenanceOptionsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Modifies the recovery behavior of your instance to disable simplified automatic
 *             recovery or set the recovery behavior to default. The default configuration will not
 *             enable simplified automatic recovery for an unsupported instance type. For more
 *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-recover.html#instance-configuration-recovery">Simplified automatic recovery</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyInstanceMaintenanceOptionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyInstanceMaintenanceOptionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyInstanceMaintenanceOptionsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   AutoRecovery: "disabled" || "default",
 *   DryRun: true || false,
 * };
 * const command = new ModifyInstanceMaintenanceOptionsCommand(input);
 * const response = await client.send(command);
 * // { // ModifyInstanceMaintenanceOptionsResult
 * //   InstanceId: "STRING_VALUE",
 * //   AutoRecovery: "disabled" || "default",
 * // };
 *
 * ```
 *
 * @param ModifyInstanceMaintenanceOptionsCommandInput - {@link ModifyInstanceMaintenanceOptionsCommandInput}
 * @returns {@link ModifyInstanceMaintenanceOptionsCommandOutput}
 * @see {@link ModifyInstanceMaintenanceOptionsCommandInput} for command's `input` shape.
 * @see {@link ModifyInstanceMaintenanceOptionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class ModifyInstanceMaintenanceOptionsCommand extends $Command<
  ModifyInstanceMaintenanceOptionsCommandInput,
  ModifyInstanceMaintenanceOptionsCommandOutput,
  EC2ClientResolvedConfig
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
  constructor(readonly input: ModifyInstanceMaintenanceOptionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyInstanceMaintenanceOptionsCommandInput, ModifyInstanceMaintenanceOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyInstanceMaintenanceOptionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyInstanceMaintenanceOptionsCommand";
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
  private serialize(
    input: ModifyInstanceMaintenanceOptionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ModifyInstanceMaintenanceOptionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyInstanceMaintenanceOptionsCommandOutput> {
    return de_ModifyInstanceMaintenanceOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
