import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { AttachDiskRequest, AttachDiskResult } from "../models/models_0";
import {
  deserializeAws_json1_1AttachDiskCommand,
  serializeAws_json1_1AttachDiskCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface AttachDiskCommandInput extends AttachDiskRequest {}
export interface AttachDiskCommandOutput extends AttachDiskResult, __MetadataBearer {}

/**
 * <p>Attaches a block storage disk to a running or stopped Lightsail instance and exposes it
 *       to the instance with the specified disk name.</p>
 *          <p>The <code>attach disk</code> operation supports tag-based access control via resource tags
 *       applied to the resource identified by <code>disk name</code>. For more information, see the
 *         <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, AttachDiskCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, AttachDiskCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new AttachDiskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachDiskCommandInput} for command's `input` shape.
 * @see {@link AttachDiskCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AttachDiskCommand extends $Command<
  AttachDiskCommandInput,
  AttachDiskCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AttachDiskCommandInput) {
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
  ): Handler<AttachDiskCommandInput, AttachDiskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "AttachDiskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AttachDiskRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AttachDiskResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AttachDiskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AttachDiskCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AttachDiskCommandOutput> {
    return deserializeAws_json1_1AttachDiskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
