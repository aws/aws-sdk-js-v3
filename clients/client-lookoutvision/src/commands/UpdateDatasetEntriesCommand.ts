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

import { LookoutVisionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutVisionClient";
import {
  UpdateDatasetEntriesRequest,
  UpdateDatasetEntriesRequestFilterSensitiveLog,
  UpdateDatasetEntriesResponse,
  UpdateDatasetEntriesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateDatasetEntriesCommand,
  serializeAws_restJson1UpdateDatasetEntriesCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateDatasetEntriesCommandInput extends UpdateDatasetEntriesRequest {}
export interface UpdateDatasetEntriesCommandOutput extends UpdateDatasetEntriesResponse, __MetadataBearer {}

/**
 * <p>Adds or updates one or more JSON Line entries in a dataset. A JSON Line includes information about an image
 *          used for training or testing an Amazon Lookout for Vision model.</p>
 *          <p>To update an existing JSON Line, use the <code>source-ref</code> field to identify the JSON Line. The JSON line
 *          that you supply replaces the existing JSON line. Any existing annotations that are not in the new JSON line are removed from the dataset.
 *       </p>
 *
 *
 *          <p>For more information, see
 *          <i>Defining JSON lines for anomaly classification</i> in the  Amazon Lookout for Vision Developer Guide. </p>
 *
 *          <note>
 *             <p>The images you reference in the <code>source-ref</code> field of a JSON line, must be
 *       in the same S3 bucket as the existing images in the dataset. </p>
 *          </note>
 *
 *          <p>Updating a dataset might take a while to complete. To check the current status, call <a>DescribeDataset</a> and
 *          check the <code>Status</code> field in the response.</p>
 *          <p>This operation requires permissions to perform the
 *          <code>lookoutvision:UpdateDatasetEntries</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutVisionClient, UpdateDatasetEntriesCommand } from "@aws-sdk/client-lookoutvision"; // ES Modules import
 * // const { LookoutVisionClient, UpdateDatasetEntriesCommand } = require("@aws-sdk/client-lookoutvision"); // CommonJS import
 * const client = new LookoutVisionClient(config);
 * const command = new UpdateDatasetEntriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDatasetEntriesCommandInput} for command's `input` shape.
 * @see {@link UpdateDatasetEntriesCommandOutput} for command's `response` shape.
 * @see {@link LookoutVisionClientResolvedConfig | config} for LookoutVisionClient's `config` shape.
 *
 */
export class UpdateDatasetEntriesCommand extends $Command<
  UpdateDatasetEntriesCommandInput,
  UpdateDatasetEntriesCommandOutput,
  LookoutVisionClientResolvedConfig
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
    configuration: LookoutVisionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDatasetEntriesCommandInput, UpdateDatasetEntriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateDatasetEntriesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutVisionClient";
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
    return serializeAws_restJson1UpdateDatasetEntriesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDatasetEntriesCommandOutput> {
    return deserializeAws_restJson1UpdateDatasetEntriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
