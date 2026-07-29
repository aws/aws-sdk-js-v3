// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  BatchAssociateDataSegmentsToDatasetRequest,
  BatchAssociateDataSegmentsToDatasetResponse,
} from "../models/models_0";
import { BatchAssociateDataSegmentsToDataset$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchAssociateDataSegmentsToDatasetCommand}.
 */
export interface BatchAssociateDataSegmentsToDatasetCommandInput extends BatchAssociateDataSegmentsToDatasetRequest {}
/**
 * @public
 *
 * The output of {@link BatchAssociateDataSegmentsToDatasetCommand}.
 */
export interface BatchAssociateDataSegmentsToDatasetCommandOutput extends BatchAssociateDataSegmentsToDatasetResponse, __MetadataBearer {}

/**
 * <p>Associates a batch of data segments with a curated dataset. Data segments are
 *       time-bounded slices of time series data selected from source session datasets. Data segments
 *       that belong to the same time series can't overlap in time, regardless of which dataset they
 *       belong to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, BatchAssociateDataSegmentsToDatasetCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, BatchAssociateDataSegmentsToDatasetCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // BatchAssociateDataSegmentsToDatasetRequest
 *   datasetId: "STRING_VALUE", // required
 *   workspaceName: "STRING_VALUE", // required
 *   associateDataSegmentEntries: [ // AssociateDataSegmentEntries // required
 *     { // AssociateDataSegmentEntry
 *       sourceDatasetId: "STRING_VALUE", // required
 *       timeSeriesId: "STRING_VALUE", // required
 *       startTimestamp: { // TimeInNanos
 *         timeInSeconds: Number("long"), // required
 *         offsetInNanos: Number("int"),
 *       },
 *       endTimestamp: {
 *         timeInSeconds: Number("long"), // required
 *         offsetInNanos: Number("int"),
 *       },
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new BatchAssociateDataSegmentsToDatasetCommand(input);
 * const response = await client.send(command);
 * // { // BatchAssociateDataSegmentsToDatasetResponse
 * //   datasetId: "STRING_VALUE", // required
 * //   datasetVersion: "STRING_VALUE", // required
 * //   failedAssociations: [ // FailedDataSegmentAssociations // required
 * //     { // FailedDataSegmentAssociation
 * //       sourceDatasetId: "STRING_VALUE", // required
 * //       timeSeriesId: "STRING_VALUE", // required
 * //       startTimestamp: { // TimeInNanos
 * //         timeInSeconds: Number("long"), // required
 * //         offsetInNanos: Number("int"),
 * //       },
 * //       endTimestamp: {
 * //         timeInSeconds: Number("long"), // required
 * //         offsetInNanos: Number("int"),
 * //       },
 * //       errorCode: "INTERNAL_FAILURE" || "VALIDATION_ERROR" || "RESOURCE_NOT_FOUND" || "LIMIT_EXCEEDED" || "CONFLICTING_OPERATION", // required
 * //       errorMessage: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchAssociateDataSegmentsToDatasetCommandInput - {@link BatchAssociateDataSegmentsToDatasetCommandInput}
 * @returns {@link BatchAssociateDataSegmentsToDatasetCommandOutput}
 * @see {@link BatchAssociateDataSegmentsToDatasetCommandInput} for command's `input` shape.
 * @see {@link BatchAssociateDataSegmentsToDatasetCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link ConflictingOperationException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform more
 *       than one operation on the same resource at the same time.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>IoT SiteWise can't process your request right now. Try again later.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters. Check your request and try again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You've reached the quota for a resource. For example, this can occur if you're trying to
 *       associate more than the allowed number of child assets or attempting to create more than the
 *       allowed number of properties for an asset model.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a rate limit. For example, you might have exceeded the number of
 *       IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so
 *       on.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *
 * @throws {@link IoTSiteWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTSiteWise service.</p>
 *
 *
 * @public
 */
export class BatchAssociateDataSegmentsToDatasetCommand extends command<BatchAssociateDataSegmentsToDatasetCommandInput, BatchAssociateDataSegmentsToDatasetCommandOutput>(
  _ep0,
  _mw0,
  "BatchAssociateDataSegmentsToDataset",
  BatchAssociateDataSegmentsToDataset$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchAssociateDataSegmentsToDatasetRequest;
      output: BatchAssociateDataSegmentsToDatasetResponse;
    };
    sdk: {
      input: BatchAssociateDataSegmentsToDatasetCommandInput;
      output: BatchAssociateDataSegmentsToDatasetCommandOutput;
    };
  };
}
