// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  BatchDisassociateAnalyticsDataSetRequest,
  BatchDisassociateAnalyticsDataSetResponse,
} from "../models/models_0";
import { BatchDisassociateAnalyticsDataSet } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface BatchDisassociateAnalyticsDataSetCommandOutput
  extends BatchDisassociateAnalyticsDataSetResponse,
    __MetadataBearer {}

/**
 * <p>Removes a list of analytics datasets associated with a given Amazon Connect instance.
 *    You can disassociate multiple datasets in a single call.</p>
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
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class BatchDisassociateAnalyticsDataSetCommand extends $Command
  .classBuilder<
    BatchDisassociateAnalyticsDataSetCommandInput,
    BatchDisassociateAnalyticsDataSetCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "BatchDisassociateAnalyticsDataSet", {})
  .n("ConnectClient", "BatchDisassociateAnalyticsDataSetCommand")
  .sc(BatchDisassociateAnalyticsDataSet)
  .build() {
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
