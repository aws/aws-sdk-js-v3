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

import {
  ListDatasetLabelsRequest,
  ListDatasetLabelsRequestFilterSensitiveLog,
  ListDatasetLabelsResponse,
  ListDatasetLabelsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListDatasetLabelsCommand,
  serializeAws_json1_1ListDatasetLabelsCommand,
} from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

export interface ListDatasetLabelsCommandInput extends ListDatasetLabelsRequest {}
export interface ListDatasetLabelsCommandOutput extends ListDatasetLabelsResponse, __MetadataBearer {}

/**
 * <p>Lists the labels in a dataset. Amazon Rekognition Custom Labels uses labels to describe images. For more information, see
 *    <a href="https://docs.aws.amazon.com/rekognition/latest/customlabels-dg/md-labeling-images.html">Labeling images</a>.
 * </p>
 *          <p>
 *       Lists the labels in a dataset. Amazon Rekognition Custom Labels uses labels to describe images. For more information, see Labeling images
 *       in the <i>Amazon Rekognition Custom Labels Developer Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, ListDatasetLabelsCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, ListDatasetLabelsCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new ListDatasetLabelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDatasetLabelsCommandInput} for command's `input` shape.
 * @see {@link ListDatasetLabelsCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 */
export class ListDatasetLabelsCommand extends $Command<
  ListDatasetLabelsCommandInput,
  ListDatasetLabelsCommandOutput,
  RekognitionClientResolvedConfig
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

  constructor(readonly input: ListDatasetLabelsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RekognitionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDatasetLabelsCommandInput, ListDatasetLabelsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDatasetLabelsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "ListDatasetLabelsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDatasetLabelsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListDatasetLabelsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDatasetLabelsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListDatasetLabelsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDatasetLabelsCommandOutput> {
    return deserializeAws_json1_1ListDatasetLabelsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
