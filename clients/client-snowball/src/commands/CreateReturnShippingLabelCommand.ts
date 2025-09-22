// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateReturnShippingLabelRequest, CreateReturnShippingLabelResult } from "../models/models_0";
import { CreateReturnShippingLabel } from "../schemas/schemas_6_Job";
import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateReturnShippingLabelCommand}.
 */
export interface CreateReturnShippingLabelCommandInput extends CreateReturnShippingLabelRequest {}
/**
 * @public
 *
 * The output of {@link CreateReturnShippingLabelCommand}.
 */
export interface CreateReturnShippingLabelCommandOutput extends CreateReturnShippingLabelResult, __MetadataBearer {}

/**
 * <p>Creates a shipping label that will be used to return the Snow device to Amazon Web Services.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, CreateReturnShippingLabelCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, CreateReturnShippingLabelCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * // import type { SnowballClientConfig } from "@aws-sdk/client-snowball";
 * const config = {}; // type is SnowballClientConfig
 * const client = new SnowballClient(config);
 * const input = { // CreateReturnShippingLabelRequest
 *   JobId: "STRING_VALUE", // required
 *   ShippingOption: "SECOND_DAY" || "NEXT_DAY" || "EXPRESS" || "STANDARD",
 * };
 * const command = new CreateReturnShippingLabelCommand(input);
 * const response = await client.send(command);
 * // { // CreateReturnShippingLabelResult
 * //   Status: "InProgress" || "TimedOut" || "Succeeded" || "Failed",
 * // };
 *
 * ```
 *
 * @param CreateReturnShippingLabelCommandInput - {@link CreateReturnShippingLabelCommandInput}
 * @returns {@link CreateReturnShippingLabelCommandOutput}
 * @see {@link CreateReturnShippingLabelCommandInput} for command's `input` shape.
 * @see {@link CreateReturnShippingLabelCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You get this exception when you call <code>CreateReturnShippingLabel</code> more than once
 *       when other requests are not completed.</p>
 *
 * @throws {@link InvalidInputCombinationException} (client fault)
 *  <p>Job or cluster creation failed. One or more inputs were invalid. Confirm that the <a>CreateClusterRequest$SnowballType</a> value supports your <a>CreateJobRequest$JobType</a>, and try again.</p>
 *
 * @throws {@link InvalidJobStateException} (client fault)
 *  <p>The action can't be performed because the job's current state doesn't allow that action
 *       to be performed.</p>
 *
 * @throws {@link InvalidResourceException} (client fault)
 *  <p>The specified resource can't be found. Check the information you provided in your last
 *       request, and try again.</p>
 *
 * @throws {@link ReturnShippingLabelAlreadyExistsException} (client fault)
 *  <p>You get this exception if you call <code>CreateReturnShippingLabel</code> and a valid
 *       return shipping label already exists. In this case, use
 *         <code>DescribeReturnShippingLabel</code> to get the URL.</p>
 *
 * @throws {@link SnowballServiceException}
 * <p>Base exception class for all service exceptions from Snowball service.</p>
 *
 *
 * @public
 */
export class CreateReturnShippingLabelCommand extends $Command
  .classBuilder<
    CreateReturnShippingLabelCommandInput,
    CreateReturnShippingLabelCommandOutput,
    SnowballClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SnowballClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIESnowballJobManagementService", "CreateReturnShippingLabel", {})
  .n("SnowballClient", "CreateReturnShippingLabelCommand")
  .sc(CreateReturnShippingLabel)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateReturnShippingLabelRequest;
      output: CreateReturnShippingLabelResult;
    };
    sdk: {
      input: CreateReturnShippingLabelCommandInput;
      output: CreateReturnShippingLabelCommandOutput;
    };
  };
}
