// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  BatchDisassociateAnalyticsDataSetRequest,
  BatchDisassociateAnalyticsDataSetResponse,
} from "../models/models_0";
import { BatchDisassociateAnalyticsDataSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchDisassociateAnalyticsDataSetCommand}.
 */
export interface BatchDisassociateAnalyticsDataSetCommandInput extends BatchDisassociateAnalyticsDataSetRequest {}
/**
 * @public
 *
 * The output of {@link BatchDisassociateAnalyticsDataSetCommand}.
 */
export interface BatchDisassociateAnalyticsDataSetCommandOutput extends BatchDisassociateAnalyticsDataSetResponse, __MetadataBearer {}

/**
 * Removes a list of analytics datasets associated with a given Connect Customer instance. You can disassociate multiple datasets in a single call.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, BatchDisassociateAnalyticsDataSetCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, BatchDisassociateAnalyticsDataSetCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // BatchDisassociateAnalyticsDataSetRequest
 *   InstanceId: "STRING_VALUE", // required
 *   DataSetIds: [ // DataSetIds // required
 *     "STRING_VALUE",
 *   ],
 *   TargetAccountId: "STRING_VALUE",
 * };
 * const command = new BatchDisassociateAnalyticsDataSetCommand(input);
 * const response = await client.send(command);
 * // { // BatchDisassociateAnalyticsDataSetResponse
 * //   Deleted: [ // DataSetIds
 * //     "STRING_VALUE",
 * //   ],
 * //   Errors: [ // ErrorResults
 * //     { // ErrorResult
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDisassociateAnalyticsDataSetCommandInput - {@link BatchDisassociateAnalyticsDataSetCommandInput}
 * @returns {@link BatchDisassociateAnalyticsDataSetCommandOutput}
 * @see {@link BatchDisassociateAnalyticsDataSetCommandInput} for command's `input` shape.
 * @see {@link BatchDisassociateAnalyticsDataSetCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class BatchDisassociateAnalyticsDataSetCommand extends command<BatchDisassociateAnalyticsDataSetCommandInput, BatchDisassociateAnalyticsDataSetCommandOutput>(
  _ep0,
  _mw0,
  "BatchDisassociateAnalyticsDataSet",
  BatchDisassociateAnalyticsDataSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDisassociateAnalyticsDataSetRequest;
      output: BatchDisassociateAnalyticsDataSetResponse;
    };
    sdk: {
      input: BatchDisassociateAnalyticsDataSetCommandInput;
      output: BatchDisassociateAnalyticsDataSetCommandOutput;
    };
  };
}
