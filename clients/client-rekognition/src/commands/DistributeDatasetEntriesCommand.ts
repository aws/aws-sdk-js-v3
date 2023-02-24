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
  DistributeDatasetEntriesRequest,
  DistributeDatasetEntriesRequestFilterSensitiveLog,
  DistributeDatasetEntriesResponse,
  DistributeDatasetEntriesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DistributeDatasetEntriesCommand,
  serializeAws_json1_1DistributeDatasetEntriesCommand,
} from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

export interface DistributeDatasetEntriesCommandInput extends DistributeDatasetEntriesRequest {}
export interface DistributeDatasetEntriesCommandOutput extends DistributeDatasetEntriesResponse, __MetadataBearer {}

/**
 * <p>Distributes the entries (images) in a training dataset across the training dataset and the test dataset for a project.
 *          <code>DistributeDatasetEntries</code> moves 20% of the training dataset images to the test dataset.
 *          An entry is a JSON Line that describes an image.
 *       </p>
 *          <p>You supply the Amazon Resource Names (ARN) of a project's training dataset and test dataset.
 *          The training dataset must contain the images that you want to split. The test dataset
 *       must be empty. The datasets must belong to the same project. To create training and test datasets for a project, call <a>CreateDataset</a>.</p>
 *          <p>Distributing a dataset takes a while to complete. To check the status call <code>DescribeDataset</code>. The operation
 *          is complete when the <code>Status</code> field for the training dataset and the test dataset is <code>UPDATE_COMPLETE</code>.
 *          If the dataset split fails, the value of <code>Status</code> is <code>UPDATE_FAILED</code>.</p>
 *          <p>This operation requires permissions to perform the <code>rekognition:DistributeDatasetEntries</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, DistributeDatasetEntriesCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, DistributeDatasetEntriesCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new DistributeDatasetEntriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DistributeDatasetEntriesCommandInput} for command's `input` shape.
 * @see {@link DistributeDatasetEntriesCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 */
export class DistributeDatasetEntriesCommand extends $Command<
  DistributeDatasetEntriesCommandInput,
  DistributeDatasetEntriesCommandOutput,
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

  constructor(readonly input: DistributeDatasetEntriesCommandInput) {
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
  ): Handler<DistributeDatasetEntriesCommandInput, DistributeDatasetEntriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DistributeDatasetEntriesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "DistributeDatasetEntriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DistributeDatasetEntriesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DistributeDatasetEntriesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DistributeDatasetEntriesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DistributeDatasetEntriesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DistributeDatasetEntriesCommandOutput> {
    return deserializeAws_json1_1DistributeDatasetEntriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
