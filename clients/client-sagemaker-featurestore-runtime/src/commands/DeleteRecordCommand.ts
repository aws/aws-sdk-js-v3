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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { DeleteRecordRequest } from "../models/models_0";
import { de_DeleteRecordCommand, se_DeleteRecordCommand } from "../protocols/Aws_restJson1";
import {
  SageMakerFeatureStoreRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SageMakerFeatureStoreRuntimeClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteRecordCommand}.
 */
export interface DeleteRecordCommandInput extends DeleteRecordRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRecordCommand}.
 */
export interface DeleteRecordCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Deletes a <code>Record</code> from a <code>FeatureGroup</code> in the
 *             <code>OnlineStore</code>. Feature Store supports both <code>SoftDelete</code> and
 *             <code>HardDelete</code>. For <code>SoftDelete</code> (default), feature columns are set
 *          to <code>null</code> and the record is no longer retrievable by <code>GetRecord</code> or
 *             <code>BatchGetRecord</code>. For <code>HardDelete</code>, the complete
 *             <code>Record</code> is removed from the <code>OnlineStore</code>. In both cases, Feature
 *          Store appends the deleted record marker to the <code>OfflineStore</code> with feature
 *          values set to <code>null</code>, <code>is_deleted</code> value set to <code>True</code>,
 *          and <code>EventTime</code> set to the delete input <code>EventTime</code>.</p>
 *          <p>Note that the <code>EventTime</code> specified in <code>DeleteRecord</code> should be
 *          set later than the <code>EventTime</code> of the existing record in the
 *             <code>OnlineStore</code> for that <code>RecordIdentifer</code>. If it is not, the
 *          deletion does not occur:</p>
 *          <ul>
 *             <li>
 *                <p>For <code>SoftDelete</code>, the existing (undeleted) record remains in the
 *                   <code>OnlineStore</code>, though the delete record marker is still written to the
 *                   <code>OfflineStore</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>HardDelete</code> returns <code>EventTime</code>: <code>400
 *                   ValidationException</code> to indicate that the delete operation failed. No delete
 *                record marker is written to the <code>OfflineStore</code>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerFeatureStoreRuntimeClient, DeleteRecordCommand } from "@aws-sdk/client-sagemaker-featurestore-runtime"; // ES Modules import
 * // const { SageMakerFeatureStoreRuntimeClient, DeleteRecordCommand } = require("@aws-sdk/client-sagemaker-featurestore-runtime"); // CommonJS import
 * const client = new SageMakerFeatureStoreRuntimeClient(config);
 * const input = { // DeleteRecordRequest
 *   FeatureGroupName: "STRING_VALUE", // required
 *   RecordIdentifierValueAsString: "STRING_VALUE", // required
 *   EventTime: "STRING_VALUE", // required
 *   TargetStores: [ // TargetStores
 *     "OnlineStore" || "OfflineStore",
 *   ],
 *   DeletionMode: "SoftDelete" || "HardDelete",
 * };
 * const command = new DeleteRecordCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRecordCommandInput - {@link DeleteRecordCommandInput}
 * @returns {@link DeleteRecordCommandOutput}
 * @see {@link DeleteRecordCommandInput} for command's `input` shape.
 * @see {@link DeleteRecordCommandOutput} for command's `response` shape.
 * @see {@link SageMakerFeatureStoreRuntimeClientResolvedConfig | config} for SageMakerFeatureStoreRuntimeClient's `config` shape.
 *
 * @throws {@link AccessForbidden} (client fault)
 *  <p>You do not have permission to perform an action.</p>
 *
 * @throws {@link InternalFailure} (server fault)
 *  <p>An internal failure occurred. Try your request again. If the problem persists, contact
 *             Amazon Web Services customer support.</p>
 *
 * @throws {@link ServiceUnavailable} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ValidationError} (client fault)
 *  <p>There was an error validating your request.</p>
 *
 * @throws {@link SageMakerFeatureStoreRuntimeServiceException}
 * <p>Base exception class for all service exceptions from SageMakerFeatureStoreRuntime service.</p>
 *
 */
export class DeleteRecordCommand extends $Command<
  DeleteRecordCommandInput,
  DeleteRecordCommandOutput,
  SageMakerFeatureStoreRuntimeClientResolvedConfig
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
  constructor(readonly input: DeleteRecordCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerFeatureStoreRuntimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteRecordCommandInput, DeleteRecordCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteRecordCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerFeatureStoreRuntimeClient";
    const commandName = "DeleteRecordCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSageMakerFeatureStoreRuntime",
        operation: "DeleteRecord",
      },
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
  private serialize(input: DeleteRecordCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteRecordCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteRecordCommandOutput> {
    return de_DeleteRecordCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
