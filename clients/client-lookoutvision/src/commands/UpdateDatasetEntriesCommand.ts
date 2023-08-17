// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { LookoutVisionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutVisionClient";
import { UpdateDatasetEntriesRequest, UpdateDatasetEntriesResponse } from "../models/models_0";
import { de_UpdateDatasetEntriesCommand, se_UpdateDatasetEntriesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateDatasetEntriesCommand}.
 */
export interface UpdateDatasetEntriesCommandInput extends UpdateDatasetEntriesRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDatasetEntriesCommand}.
 */
export interface UpdateDatasetEntriesCommandOutput extends UpdateDatasetEntriesResponse, __MetadataBearer {}

/**
 * @public
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
 * const input = { // UpdateDatasetEntriesRequest
 *   ProjectName: "STRING_VALUE", // required
 *   DatasetType: "STRING_VALUE", // required
 *   Changes: "BLOB_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new UpdateDatasetEntriesCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDatasetEntriesResponse
 * //   Status: "CREATE_IN_PROGRESS" || "CREATE_COMPLETE" || "CREATE_FAILED" || "UPDATE_IN_PROGRESS" || "UPDATE_COMPLETE" || "UPDATE_FAILED_ROLLBACK_IN_PROGRESS" || "UPDATE_FAILED_ROLLBACK_COMPLETE" || "DELETE_IN_PROGRESS" || "DELETE_COMPLETE" || "DELETE_FAILED",
 * // };
 *
 * ```
 *
 * @param UpdateDatasetEntriesCommandInput - {@link UpdateDatasetEntriesCommandInput}
 * @returns {@link UpdateDatasetEntriesCommandOutput}
 * @see {@link UpdateDatasetEntriesCommandInput} for command's `input` shape.
 * @see {@link UpdateDatasetEntriesCommandOutput} for command's `response` shape.
 * @see {@link LookoutVisionClientResolvedConfig | config} for LookoutVisionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The update or deletion of a resource caused an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Amazon Lookout for Vision experienced a service issue. Try your call again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Amazon Lookout for Vision is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An input validation error occured. For example, invalid characters in a project name,
 *       or if a pagination token is invalid.</p>
 *
 * @throws {@link LookoutVisionServiceException}
 * <p>Base exception class for all service exceptions from LookoutVision service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: UpdateDatasetEntriesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateDatasetEntriesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDatasetEntriesCommandOutput> {
    return de_UpdateDatasetEntriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
