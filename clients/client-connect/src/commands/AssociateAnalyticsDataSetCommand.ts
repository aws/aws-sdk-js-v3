// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateAnalyticsDataSetRequest, AssociateAnalyticsDataSetResponse } from "../models/models_0";
import { de_AssociateAnalyticsDataSetCommand, se_AssociateAnalyticsDataSetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateAnalyticsDataSetCommand}.
 */
export interface AssociateAnalyticsDataSetCommandInput extends AssociateAnalyticsDataSetRequest {}
/**
 * @public
 *
 * The output of {@link AssociateAnalyticsDataSetCommand}.
 */
export interface AssociateAnalyticsDataSetCommandOutput extends AssociateAnalyticsDataSetResponse, __MetadataBearer {}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Associates the specified dataset for a Amazon Connect instance with the target account.
 *    You can associate only one dataset in a single call.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, AssociateAnalyticsDataSetCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, AssociateAnalyticsDataSetCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // AssociateAnalyticsDataSetRequest
 *   InstanceId: "STRING_VALUE", // required
 *   DataSetId: "STRING_VALUE", // required
 *   TargetAccountId: "STRING_VALUE",
 * };
 * const command = new AssociateAnalyticsDataSetCommand(input);
 * const response = await client.send(command);
 * // { // AssociateAnalyticsDataSetResponse
 * //   DataSetId: "STRING_VALUE",
 * //   TargetAccountId: "STRING_VALUE",
 * //   ResourceShareId: "STRING_VALUE",
 * //   ResourceShareArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateAnalyticsDataSetCommandInput - {@link AssociateAnalyticsDataSetCommandInput}
 * @returns {@link AssociateAnalyticsDataSetCommandOutput}
 * @see {@link AssociateAnalyticsDataSetCommandInput} for command's `input` shape.
 * @see {@link AssociateAnalyticsDataSetCommandOutput} for command's `response` shape.
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
export class AssociateAnalyticsDataSetCommand extends $Command
  .classBuilder<
    AssociateAnalyticsDataSetCommandInput,
    AssociateAnalyticsDataSetCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "AssociateAnalyticsDataSet", {})
  .n("ConnectClient", "AssociateAnalyticsDataSetCommand")
  .f(void 0, void 0)
  .ser(se_AssociateAnalyticsDataSetCommand)
  .de(de_AssociateAnalyticsDataSetCommand)
  .build() {}
