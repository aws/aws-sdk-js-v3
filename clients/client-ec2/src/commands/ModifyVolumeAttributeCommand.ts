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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyVolumeAttributeRequest } from "../models/models_6";
import { de_ModifyVolumeAttributeCommand, se_ModifyVolumeAttributeCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyVolumeAttributeCommand}.
 */
export interface ModifyVolumeAttributeCommandInput extends ModifyVolumeAttributeRequest {}
/**
 * @public
 *
 * The output of {@link ModifyVolumeAttributeCommand}.
 */
export interface ModifyVolumeAttributeCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Modifies a volume attribute.</p>
 *          <p>By default, all I/O operations for the volume are suspended when the data on the volume is
 *       determined to be potentially inconsistent, to prevent undetectable, latent data corruption.
 *       The I/O access to the volume can be resumed by first enabling I/O access and then checking the
 *       data consistency on your volume.</p>
 *          <p>You can change the default behavior to resume I/O operations. We recommend that you change
 *       this only for boot volumes or for volumes that are stateless or disposable.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVolumeAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVolumeAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyVolumeAttributeRequest
 *   AutoEnableIO: { // AttributeBooleanValue
 *     Value: true || false,
 *   },
 *   VolumeId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new ModifyVolumeAttributeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ModifyVolumeAttributeCommandInput - {@link ModifyVolumeAttributeCommandInput}
 * @returns {@link ModifyVolumeAttributeCommandOutput}
 * @see {@link ModifyVolumeAttributeCommandInput} for command's `input` shape.
 * @see {@link ModifyVolumeAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To modify a volume attribute
 * ```javascript
 * // This example sets the ``autoEnableIo`` attribute of the volume with the ID ``vol-1234567890abcdef0`` to ``true``. If the command succeeds, no output is returned.
 * const input = {
 *   "AutoEnableIO": {
 *     "Value": true
 *   },
 *   "DryRun": true,
 *   "VolumeId": "vol-1234567890abcdef0"
 * };
 * const command = new ModifyVolumeAttributeCommand(input);
 * await client.send(command);
 * // example id: to-modify-a-volume-attribute-1472508596749
 * ```
 *
 */
export class ModifyVolumeAttributeCommand extends $Command<
  ModifyVolumeAttributeCommandInput,
  ModifyVolumeAttributeCommandOutput,
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
  constructor(readonly input: ModifyVolumeAttributeCommandInput) {
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
  ): Handler<ModifyVolumeAttributeCommandInput, ModifyVolumeAttributeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyVolumeAttributeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyVolumeAttributeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "ModifyVolumeAttribute",
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
  private serialize(input: ModifyVolumeAttributeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyVolumeAttributeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyVolumeAttributeCommandOutput> {
    return de_ModifyVolumeAttributeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
