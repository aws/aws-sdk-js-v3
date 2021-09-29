import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { SetResourceAccessForBucketRequest, SetResourceAccessForBucketResult } from "../models/models_1";
import {
  deserializeAws_json1_1SetResourceAccessForBucketCommand,
  serializeAws_json1_1SetResourceAccessForBucketCommand,
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

export interface SetResourceAccessForBucketCommandInput extends SetResourceAccessForBucketRequest {}
export interface SetResourceAccessForBucketCommandOutput extends SetResourceAccessForBucketResult, __MetadataBearer {}

/**
 * <p>Sets the Amazon Lightsail resources that can access the specified Lightsail
 *       bucket.</p>
 *
 *          <p>Lightsail buckets currently support setting access for Lightsail instances in the same
 *       AWS Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, SetResourceAccessForBucketCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, SetResourceAccessForBucketCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new SetResourceAccessForBucketCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetResourceAccessForBucketCommandInput} for command's `input` shape.
 * @see {@link SetResourceAccessForBucketCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class SetResourceAccessForBucketCommand extends $Command<
  SetResourceAccessForBucketCommandInput,
  SetResourceAccessForBucketCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SetResourceAccessForBucketCommandInput) {
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
  ): Handler<SetResourceAccessForBucketCommandInput, SetResourceAccessForBucketCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "SetResourceAccessForBucketCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetResourceAccessForBucketRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SetResourceAccessForBucketResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetResourceAccessForBucketCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SetResourceAccessForBucketCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SetResourceAccessForBucketCommandOutput> {
    return deserializeAws_json1_1SetResourceAccessForBucketCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
