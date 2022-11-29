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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyVolumeAttributeRequest, ModifyVolumeAttributeRequestFilterSensitiveLog } from "../models/models_6";
import {
  deserializeAws_ec2ModifyVolumeAttributeCommand,
  serializeAws_ec2ModifyVolumeAttributeCommand,
} from "../protocols/Aws_ec2";

export interface ModifyVolumeAttributeCommandInput extends ModifyVolumeAttributeRequest {}
export interface ModifyVolumeAttributeCommandOutput extends __MetadataBearer {}

/**
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
 * const command = new ModifyVolumeAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyVolumeAttributeCommandInput} for command's `input` shape.
 * @see {@link ModifyVolumeAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
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
      inputFilterSensitiveLog: ModifyVolumeAttributeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyVolumeAttributeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyVolumeAttributeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyVolumeAttributeCommandOutput> {
    return deserializeAws_ec2ModifyVolumeAttributeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
