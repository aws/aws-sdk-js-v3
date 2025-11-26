// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DisassociateAnalyticsDataSetRequest } from "../models/models_1";
import { DisassociateAnalyticsDataSet } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateAnalyticsDataSetCommand}.
 */
export interface DisassociateAnalyticsDataSetCommandInput extends DisassociateAnalyticsDataSetRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateAnalyticsDataSetCommand}.
 */
export interface DisassociateAnalyticsDataSetCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes the dataset ID associated with a given Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DisassociateAnalyticsDataSetCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DisassociateAnalyticsDataSetCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DisassociateAnalyticsDataSetRequest
 *   InstanceId: "STRING_VALUE", // required
 *   DataSetId: "STRING_VALUE", // required
 *   TargetAccountId: "STRING_VALUE",
 * };
 * const command = new DisassociateAnalyticsDataSetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateAnalyticsDataSetCommandInput - {@link DisassociateAnalyticsDataSetCommandInput}
 * @returns {@link DisassociateAnalyticsDataSetCommandOutput}
 * @see {@link DisassociateAnalyticsDataSetCommandInput} for command's `input` shape.
 * @see {@link DisassociateAnalyticsDataSetCommandOutput} for command's `response` shape.
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
export class DisassociateAnalyticsDataSetCommand extends $Command
  .classBuilder<
    DisassociateAnalyticsDataSetCommandInput,
    DisassociateAnalyticsDataSetCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "DisassociateAnalyticsDataSet", {})
  .n("ConnectClient", "DisassociateAnalyticsDataSetCommand")
  .sc(DisassociateAnalyticsDataSet)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateAnalyticsDataSetRequest;
      output: {};
    };
    sdk: {
      input: DisassociateAnalyticsDataSetCommandInput;
      output: DisassociateAnalyticsDataSetCommandOutput;
    };
  };
}
