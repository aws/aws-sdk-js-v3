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

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import {
  UpdateInstanceMetadataOptionsRequest,
  UpdateInstanceMetadataOptionsRequestFilterSensitiveLog,
  UpdateInstanceMetadataOptionsResult,
  UpdateInstanceMetadataOptionsResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1UpdateInstanceMetadataOptionsCommand,
  serializeAws_json1_1UpdateInstanceMetadataOptionsCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateInstanceMetadataOptionsCommandInput extends UpdateInstanceMetadataOptionsRequest {}
export interface UpdateInstanceMetadataOptionsCommandOutput
  extends UpdateInstanceMetadataOptionsResult,
    __MetadataBearer {}

/**
 * <p>Modifies the Amazon Lightsail instance metadata parameters on a running or stopped
 *       instance. When you modify the parameters on a running instance, the <code>GetInstance</code>
 *       or <code>GetInstances</code> API operation initially responds with a state of
 *         <code>pending</code>. After the parameter modifications are successfully applied, the state
 *       changes to <code>applied</code> in subsequent <code>GetInstance</code> or
 *         <code>GetInstances</code> API calls. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-instance-metadata-service">Use IMDSv2 with an Amazon Lightsail instance</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, UpdateInstanceMetadataOptionsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, UpdateInstanceMetadataOptionsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new UpdateInstanceMetadataOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateInstanceMetadataOptionsCommandInput} for command's `input` shape.
 * @see {@link UpdateInstanceMetadataOptionsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class UpdateInstanceMetadataOptionsCommand extends $Command<
  UpdateInstanceMetadataOptionsCommandInput,
  UpdateInstanceMetadataOptionsCommandOutput,
  LightsailClientResolvedConfig
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

  constructor(readonly input: UpdateInstanceMetadataOptionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateInstanceMetadataOptionsCommandInput, UpdateInstanceMetadataOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateInstanceMetadataOptionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "UpdateInstanceMetadataOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateInstanceMetadataOptionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateInstanceMetadataOptionsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateInstanceMetadataOptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateInstanceMetadataOptionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateInstanceMetadataOptionsCommandOutput> {
    return deserializeAws_json1_1UpdateInstanceMetadataOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
