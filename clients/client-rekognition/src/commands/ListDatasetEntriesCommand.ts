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
  ListDatasetEntriesRequest,
  ListDatasetEntriesRequestFilterSensitiveLog,
  ListDatasetEntriesResponse,
  ListDatasetEntriesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListDatasetEntriesCommand,
  serializeAws_json1_1ListDatasetEntriesCommand,
} from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

export interface ListDatasetEntriesCommandInput extends ListDatasetEntriesRequest {}
export interface ListDatasetEntriesCommandOutput extends ListDatasetEntriesResponse, __MetadataBearer {}

/**
 * <p>
 * Lists the entries (images) within a dataset. An entry is a
 * JSON Line that contains the information for a single image, including
 * the image location, assigned labels, and object location bounding boxes. For
 * more information, see <a href="https://docs.aws.amazon.com/rekognition/latest/customlabels-dg/md-manifest-files.html">Creating a manifest file</a>.</p>
 *          <p>JSON Lines in the response include information about non-terminal
 *    errors found in the dataset.
 *    Non terminal errors are reported in <code>errors</code> lists within each JSON Line. The
 *    same information is reported in the training and testing validation result manifests that
 *    Amazon Rekognition Custom Labels creates during model training.
 *  </p>
 *          <p>You can filter the response in variety of ways, such as choosing which labels to return and returning JSON Lines created after a specific date.
 * </p>
 *          <p>This operation requires permissions to perform the <code>rekognition:ListDatasetEntries</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, ListDatasetEntriesCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, ListDatasetEntriesCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new ListDatasetEntriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDatasetEntriesCommandInput} for command's `input` shape.
 * @see {@link ListDatasetEntriesCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 */
export class ListDatasetEntriesCommand extends $Command<
  ListDatasetEntriesCommandInput,
  ListDatasetEntriesCommandOutput,
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

  constructor(readonly input: ListDatasetEntriesCommandInput) {
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
  ): Handler<ListDatasetEntriesCommandInput, ListDatasetEntriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDatasetEntriesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "ListDatasetEntriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDatasetEntriesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListDatasetEntriesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDatasetEntriesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListDatasetEntriesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDatasetEntriesCommandOutput> {
    return deserializeAws_json1_1ListDatasetEntriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
