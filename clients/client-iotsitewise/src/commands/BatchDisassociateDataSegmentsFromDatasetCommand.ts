// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  BatchDisassociateDataSegmentsFromDatasetRequest,
  BatchDisassociateDataSegmentsFromDatasetResponse,
} from "../models/models_0";
import { BatchDisassociateDataSegmentsFromDataset$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchDisassociateDataSegmentsFromDatasetCommand}.
 */
export interface BatchDisassociateDataSegmentsFromDatasetCommandInput extends BatchDisassociateDataSegmentsFromDatasetRequest {}
/**
 * @public
 *
 * The output of {@link BatchDisassociateDataSegmentsFromDatasetCommand}.
 */
export interface BatchDisassociateDataSegmentsFromDatasetCommandOutput extends BatchDisassociateDataSegmentsFromDatasetResponse, __MetadataBearer {}

/**
 * <p>Disassociates a batch of data segments from a curated dataset. Disassociating a data
 *       segment doesn't delete the underlying data in the source session dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, BatchDisassociateDataSegmentsFromDatasetCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, BatchDisassociateDataSegmentsFromDatasetCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // BatchDisassociateDataSegmentsFromDatasetRequest
 *   datasetId: "STRING_VALUE", // required
 *   workspaceName: "STRING_VALUE", // required
 *   disassociateDataSegmentEntries: [ // DisassociateDataSegmentEntries // required
 *     { // DisassociateDataSegmentEntry
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
 * const command = new BatchDisassociateDataSegmentsFromDatasetCommand(input);
 * const response = await client.send(command);
 * // { // BatchDisassociateDataSegmentsFromDatasetResponse
 * //   datasetId: "STRING_VALUE", // required
 * //   datasetVersion: "STRING_VALUE", // required
 * //   failedDisassociations: [ // FailedDataSegmentDisassociations // required
 * //     { // FailedDataSegmentDisassociation
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
 * @param BatchDisassociateDataSegmentsFromDatasetCommandInput - {@link BatchDisassociateDataSegmentsFromDatasetCommandInput}
 * @returns {@link BatchDisassociateDataSegmentsFromDatasetCommandOutput}
 * @see {@link BatchDisassociateDataSegmentsFromDatasetCommandInput} for command's `input` shape.
 * @see {@link BatchDisassociateDataSegmentsFromDatasetCommandOutput} for command's `response` shape.
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
export class BatchDisassociateDataSegmentsFromDatasetCommand extends command<BatchDisassociateDataSegmentsFromDatasetCommandInput, BatchDisassociateDataSegmentsFromDatasetCommandOutput>(
  _ep0,
  _mw0,
  "BatchDisassociateDataSegmentsFromDataset",
  BatchDisassociateDataSegmentsFromDataset$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDisassociateDataSegmentsFromDatasetRequest;
      output: BatchDisassociateDataSegmentsFromDatasetResponse;
    };
    sdk: {
      input: BatchDisassociateDataSegmentsFromDatasetCommandInput;
      output: BatchDisassociateDataSegmentsFromDatasetCommandOutput;
    };
  };
}
