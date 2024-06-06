// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
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
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes a <code>Record</code> from a <code>FeatureGroup</code> in the
 *             <code>OnlineStore</code>. Feature Store supports both <code>SoftDelete</code> and
 *             <code>HardDelete</code>. For <code>SoftDelete</code> (default), feature columns are set
 *          to <code>null</code> and the record is no longer retrievable by <code>GetRecord</code> or
 *             <code>BatchGetRecord</code>. For <code>HardDelete</code>, the complete
 *             <code>Record</code> is removed from the <code>OnlineStore</code>. In both cases, Feature
 *          Store appends the deleted record marker to the <code>OfflineStore</code>. The deleted
 *          record marker is a record with the same <code>RecordIdentifer</code> as the original, but
 *          with <code>is_deleted</code> value set to <code>True</code>, <code>EventTime</code> set to
 *          the delete input <code>EventTime</code>, and other feature values set to
 *          <code>null</code>.</p>
 *          <p>Note that the <code>EventTime</code> specified in <code>DeleteRecord</code> should be
 *          set later than the <code>EventTime</code> of the existing record in the
 *             <code>OnlineStore</code> for that <code>RecordIdentifer</code>. If it is not, the
 *          deletion does not occur:</p>
 *          <ul>
 *             <li>
 *                <p>For <code>SoftDelete</code>, the existing (not deleted) record remains in the
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
 *          <p>When a record is deleted from the <code>OnlineStore</code>, the deleted record marker is
 *          appended to the <code>OfflineStore</code>. If you have the Iceberg table format enabled for
 *          your <code>OfflineStore</code>, you can remove all history of a record from the
 *             <code>OfflineStore</code> using Amazon Athena or Apache Spark. For information on how to
 *          hard delete a record from the <code>OfflineStore</code> with the Iceberg table format
 *          enabled, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/feature-store-delete-records-offline-store.html#feature-store-delete-records-offline-store">Delete records from the offline store</a>.</p>
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
 * @public
 */
export class DeleteRecordCommand extends $Command
  .classBuilder<
    DeleteRecordCommandInput,
    DeleteRecordCommandOutput,
    SageMakerFeatureStoreRuntimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SageMakerFeatureStoreRuntimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSageMakerFeatureStoreRuntime", "DeleteRecord", {})
  .n("SageMakerFeatureStoreRuntimeClient", "DeleteRecordCommand")
  .f(void 0, void 0)
  .ser(se_DeleteRecordCommand)
  .de(de_DeleteRecordCommand)
  .build() {}
