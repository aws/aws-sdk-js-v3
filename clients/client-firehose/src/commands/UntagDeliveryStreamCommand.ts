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

import { FirehoseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FirehoseClient";
import {
  UntagDeliveryStreamInput,
  UntagDeliveryStreamInputFilterSensitiveLog,
  UntagDeliveryStreamOutput,
  UntagDeliveryStreamOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UntagDeliveryStreamCommand,
  serializeAws_json1_1UntagDeliveryStreamCommand,
} from "../protocols/Aws_json1_1";

export interface UntagDeliveryStreamCommandInput extends UntagDeliveryStreamInput {}
export interface UntagDeliveryStreamCommandOutput extends UntagDeliveryStreamOutput, __MetadataBearer {}

/**
 * <p>Removes tags from the specified delivery stream. Removed tags are deleted, and you
 *          can't recover them after this operation successfully completes.</p>
 *          <p>If you specify a tag that doesn't exist, the operation ignores it.</p>
 *          <p>This operation has a limit of five transactions per second per account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FirehoseClient, UntagDeliveryStreamCommand } from "@aws-sdk/client-firehose"; // ES Modules import
 * // const { FirehoseClient, UntagDeliveryStreamCommand } = require("@aws-sdk/client-firehose"); // CommonJS import
 * const client = new FirehoseClient(config);
 * const command = new UntagDeliveryStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UntagDeliveryStreamCommandInput} for command's `input` shape.
 * @see {@link UntagDeliveryStreamCommandOutput} for command's `response` shape.
 * @see {@link FirehoseClientResolvedConfig | config} for FirehoseClient's `config` shape.
 *
 */
export class UntagDeliveryStreamCommand extends $Command<
  UntagDeliveryStreamCommandInput,
  UntagDeliveryStreamCommandOutput,
  FirehoseClientResolvedConfig
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

  constructor(readonly input: UntagDeliveryStreamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FirehoseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UntagDeliveryStreamCommandInput, UntagDeliveryStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UntagDeliveryStreamCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FirehoseClient";
    const commandName = "UntagDeliveryStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UntagDeliveryStreamInputFilterSensitiveLog,
      outputFilterSensitiveLog: UntagDeliveryStreamOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UntagDeliveryStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UntagDeliveryStreamCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UntagDeliveryStreamCommandOutput> {
    return deserializeAws_json1_1UntagDeliveryStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
