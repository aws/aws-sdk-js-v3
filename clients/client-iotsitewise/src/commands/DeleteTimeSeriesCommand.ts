// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteTimeSeriesRequest } from "../models/models_0";
import { DeleteTimeSeries$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteTimeSeriesCommand}.
 */
export interface DeleteTimeSeriesCommandInput extends DeleteTimeSeriesRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTimeSeriesCommand}.
 */
export interface DeleteTimeSeriesCommandOutput extends __MetadataBearer {}

/**
 * Deletes a time series (data stream). If you delete a time series that's associated with an asset property, the asset property still exists, but the time series will no longer be associated with this asset property. You can't delete a time series until all of its data segments have been deleted from session datasets.
 *
 * To identify a time series, do one of the following:
 *
 * - If the time series isn't associated with an asset property, specify the `alias` of the time series.
 * - If the time series is associated with an asset property, specify one of the following:
 *
 *   - The `alias` of the time series.
 *   - The `assetId` and `propertyId` that identifies the asset property.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DeleteTimeSeriesCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DeleteTimeSeriesCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // DeleteTimeSeriesRequest
 *   alias: "STRING_VALUE",
 *   assetId: "STRING_VALUE",
 *   propertyId: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 *   workspaceName: "STRING_VALUE",
 * };
 * const command = new DeleteTimeSeriesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTimeSeriesCommandInput - {@link DeleteTimeSeriesCommandInput}
 * @returns {@link DeleteTimeSeriesCommandOutput}
 * @see {@link DeleteTimeSeriesCommandInput} for command's `input` shape.
 * @see {@link DeleteTimeSeriesCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link ConflictingOperationException} (client fault)
 *
 * Your request has conflicting operations. This can occur if you're trying to perform more than one operation on the same resource at the same time.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * IoT SiteWise can't process your request right now. Try again later.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters. Check your request and try again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Your request exceeded a rate limit. For example, you might have exceeded the number of IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so on.
 *
 * For more information, see [Quotas](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html) in the *IoT SiteWise User Guide*.
 *
 * @throws {@link IoTSiteWiseServiceException}
 *
 * Base exception class for all service exceptions from IoTSiteWise service.
 *
 * @public
 */
export class DeleteTimeSeriesCommand extends command<DeleteTimeSeriesCommandInput, DeleteTimeSeriesCommandOutput>(
  _ep0,
  _mw0,
  "DeleteTimeSeries",
  DeleteTimeSeries$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTimeSeriesRequest;
      output: {};
    };
    sdk: {
      input: DeleteTimeSeriesCommandInput;
      output: DeleteTimeSeriesCommandOutput;
    };
  };
}
