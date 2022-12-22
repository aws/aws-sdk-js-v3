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
  UpdateDatasetEntriesRequest,
  UpdateDatasetEntriesRequestFilterSensitiveLog,
  UpdateDatasetEntriesResponse,
  UpdateDatasetEntriesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateDatasetEntriesCommand,
  serializeAws_json1_1UpdateDatasetEntriesCommand,
} from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

export interface UpdateDatasetEntriesCommandInput extends UpdateDatasetEntriesRequest {}
export interface UpdateDatasetEntriesCommandOutput extends UpdateDatasetEntriesResponse, __MetadataBearer {}

/**
 * <p>Adds or updates one or more entries (images) in a dataset. An entry is a JSON Line which contains the
 *       information for a single image,  including
 *       the image location, assigned labels, and object location bounding boxes.  For more information,
 *       see Image-Level labels in manifest files and Object localization in manifest files in the <i>Amazon Rekognition Custom Labels Developer Guide</i>.
 *      </p>
 *          <p>If the <code>source-ref</code> field in the JSON line references an existing image, the existing image in the dataset
 *       is updated.
 *       If <code>source-ref</code> field doesn't reference an existing image, the image is added as a new image to the dataset. </p>
 *          <p>You specify the changes that you want to make in the <code>Changes</code> input parameter.
 *     There isn't a limit to the number JSON Lines that you can change, but the size of <code>Changes</code> must be less
 * than 5MB.</p>
 *          <p>
 *             <code>UpdateDatasetEntries</code> returns immediatly, but the dataset update might take a while to complete.
 *       Use <a>DescribeDataset</a> to check the
 *       current status. The dataset updated successfully if the value of <code>Status</code> is
 *       <code>UPDATE_COMPLETE</code>. </p>
 *          <p>To check if any non-terminal errors occured, call <a>ListDatasetEntries</a>
 *       and check for the presence of <code>errors</code> lists in the JSON Lines.</p>
 *          <p>Dataset update fails if a terminal error occurs (<code>Status</code> = <code>UPDATE_FAILED</code>).
 *       Currently, you can't access the terminal error information from the Amazon Rekognition Custom Labels SDK.
 *    </p>
 *          <p>This operation requires permissions to perform the <code>rekognition:UpdateDatasetEntries</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, UpdateDatasetEntriesCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, UpdateDatasetEntriesCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new UpdateDatasetEntriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDatasetEntriesCommandInput} for command's `input` shape.
 * @see {@link UpdateDatasetEntriesCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 */
export class UpdateDatasetEntriesCommand extends $Command<
  UpdateDatasetEntriesCommandInput,
  UpdateDatasetEntriesCommandOutput,
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

  constructor(readonly input: UpdateDatasetEntriesCommandInput) {
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
  ): Handler<UpdateDatasetEntriesCommandInput, UpdateDatasetEntriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateDatasetEntriesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "UpdateDatasetEntriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDatasetEntriesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateDatasetEntriesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDatasetEntriesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateDatasetEntriesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDatasetEntriesCommandOutput> {
    return deserializeAws_json1_1UpdateDatasetEntriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
