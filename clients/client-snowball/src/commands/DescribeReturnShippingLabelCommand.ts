// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeReturnShippingLabelRequest, DescribeReturnShippingLabelResult } from "../models/models_0";
import { DescribeReturnShippingLabel } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeReturnShippingLabelCommand}.
 */
export interface DescribeReturnShippingLabelCommandInput extends DescribeReturnShippingLabelRequest {}
/**
 * @public
 *
 * The output of {@link DescribeReturnShippingLabelCommand}.
 */
export interface DescribeReturnShippingLabelCommandOutput extends DescribeReturnShippingLabelResult, __MetadataBearer {}

/**
 * <p>Information on the shipping label of a Snow device that is being returned to Amazon Web Services.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, DescribeReturnShippingLabelCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, DescribeReturnShippingLabelCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * // import type { SnowballClientConfig } from "@aws-sdk/client-snowball";
 * const config = {}; // type is SnowballClientConfig
 * const client = new SnowballClient(config);
 * const input = { // DescribeReturnShippingLabelRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new DescribeReturnShippingLabelCommand(input);
 * const response = await client.send(command);
 * // { // DescribeReturnShippingLabelResult
 * //   Status: "InProgress" || "TimedOut" || "Succeeded" || "Failed",
 * //   ExpirationDate: new Date("TIMESTAMP"),
 * //   ReturnShippingLabelURI: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeReturnShippingLabelCommandInput - {@link DescribeReturnShippingLabelCommandInput}
 * @returns {@link DescribeReturnShippingLabelCommandOutput}
 * @see {@link DescribeReturnShippingLabelCommandInput} for command's `input` shape.
 * @see {@link DescribeReturnShippingLabelCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You get this exception when you call <code>CreateReturnShippingLabel</code> more than once
 *       when other requests are not completed.</p>
 *
 * @throws {@link InvalidJobStateException} (client fault)
 *  <p>The action can't be performed because the job's current state doesn't allow that action
 *       to be performed.</p>
 *
 * @throws {@link InvalidResourceException} (client fault)
 *  <p>The specified resource can't be found. Check the information you provided in your last
 *       request, and try again.</p>
 *
 * @throws {@link SnowballServiceException}
 * <p>Base exception class for all service exceptions from Snowball service.</p>
 *
 *
 * @public
 */
export class DescribeReturnShippingLabelCommand extends $Command
  .classBuilder<
    DescribeReturnShippingLabelCommandInput,
    DescribeReturnShippingLabelCommandOutput,
    SnowballClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SnowballClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIESnowballJobManagementService", "DescribeReturnShippingLabel", {})
  .n("SnowballClient", "DescribeReturnShippingLabelCommand")
  .sc(DescribeReturnShippingLabel)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeReturnShippingLabelRequest;
      output: DescribeReturnShippingLabelResult;
    };
    sdk: {
      input: DescribeReturnShippingLabelCommandInput;
      output: DescribeReturnShippingLabelCommandOutput;
    };
  };
}
