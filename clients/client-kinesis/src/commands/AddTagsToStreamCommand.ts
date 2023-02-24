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

import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { AddTagsToStreamInput, AddTagsToStreamInputFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_json1_1AddTagsToStreamCommand,
  serializeAws_json1_1AddTagsToStreamCommand,
} from "../protocols/Aws_json1_1";

export interface AddTagsToStreamCommandInput extends AddTagsToStreamInput {}
export interface AddTagsToStreamCommandOutput extends __MetadataBearer {}

/**
 * <p>Adds or updates tags for the specified Kinesis data stream. You can assign up to 50
 *             tags to a data stream.</p>
 *          <note>
 *             <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input
 *                 parameter rather than the <code>StreamName</code> input parameter.</p>
 *          </note>
 *          <p>If tags have already been assigned to the stream, <code>AddTagsToStream</code>
 *             overwrites any existing tags that correspond to the specified tag keys.</p>
 *          <p>
 *             <a>AddTagsToStream</a> has a limit of five transactions per second per
 *             account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, AddTagsToStreamCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, AddTagsToStreamCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * const client = new KinesisClient(config);
 * const command = new AddTagsToStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddTagsToStreamCommandInput} for command's `input` shape.
 * @see {@link AddTagsToStreamCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for KinesisClient's `config` shape.
 *
 */
export class AddTagsToStreamCommand extends $Command<
  AddTagsToStreamCommandInput,
  AddTagsToStreamCommandOutput,
  KinesisClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      OperationType: { type: "staticContextParams", value: `control` },
      StreamARN: { type: "contextParams", name: "StreamARN" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: AddTagsToStreamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddTagsToStreamCommandInput, AddTagsToStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AddTagsToStreamCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisClient";
    const commandName = "AddTagsToStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddTagsToStreamInputFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddTagsToStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AddTagsToStreamCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddTagsToStreamCommandOutput> {
    return deserializeAws_json1_1AddTagsToStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
