// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BatchAssociateAnalyticsDataSetRequest, BatchAssociateAnalyticsDataSetResponse } from "../models/models_0";
import {
  de_BatchAssociateAnalyticsDataSetCommand,
  se_BatchAssociateAnalyticsDataSetCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchAssociateAnalyticsDataSetCommand}.
 */
export interface BatchAssociateAnalyticsDataSetCommandInput extends BatchAssociateAnalyticsDataSetRequest {}
/**
 * @public
 *
 * The output of {@link BatchAssociateAnalyticsDataSetCommand}.
 */
export interface BatchAssociateAnalyticsDataSetCommandOutput
  extends BatchAssociateAnalyticsDataSetResponse,
    __MetadataBearer {}

/**
 * <p>Associates a list of analytics datasets for a given Amazon Connect instance to a target
 *    account. You can associate multiple datasets in a single call.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, BatchAssociateAnalyticsDataSetCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, BatchAssociateAnalyticsDataSetCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // BatchAssociateAnalyticsDataSetRequest
 *   InstanceId: "STRING_VALUE", // required
 *   DataSetIds: [ // DataSetIds // required
 *     "STRING_VALUE",
 *   ],
 *   TargetAccountId: "STRING_VALUE",
 * };
 * const command = new BatchAssociateAnalyticsDataSetCommand(input);
 * const response = await client.send(command);
 * // { // BatchAssociateAnalyticsDataSetResponse
 * //   Created: [ // AnalyticsDataAssociationResults
 * //     { // AnalyticsDataAssociationResult
 * //       DataSetId: "STRING_VALUE",
 * //       TargetAccountId: "STRING_VALUE",
 * //       ResourceShareId: "STRING_VALUE",
 * //       ResourceShareArn: "STRING_VALUE",
 * //       ResourceShareStatus: "STRING_VALUE",
 * //     },
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
 * @param BatchAssociateAnalyticsDataSetCommandInput - {@link BatchAssociateAnalyticsDataSetCommandInput}
 * @returns {@link BatchAssociateAnalyticsDataSetCommandOutput}
 * @see {@link BatchAssociateAnalyticsDataSetCommandInput} for command's `input` shape.
 * @see {@link BatchAssociateAnalyticsDataSetCommandOutput} for command's `response` shape.
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
 * @public
 */
export class BatchAssociateAnalyticsDataSetCommand extends $Command
  .classBuilder<
    BatchAssociateAnalyticsDataSetCommandInput,
    BatchAssociateAnalyticsDataSetCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "BatchAssociateAnalyticsDataSet", {})
  .n("ConnectClient", "BatchAssociateAnalyticsDataSetCommand")
  .f(void 0, void 0)
  .ser(se_BatchAssociateAnalyticsDataSetCommand)
  .de(de_BatchAssociateAnalyticsDataSetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchAssociateAnalyticsDataSetRequest;
      output: BatchAssociateAnalyticsDataSetResponse;
    };
    sdk: {
      input: BatchAssociateAnalyticsDataSetCommandInput;
      output: BatchAssociateAnalyticsDataSetCommandOutput;
    };
  };
}
