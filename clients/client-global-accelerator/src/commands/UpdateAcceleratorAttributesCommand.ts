// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import { UpdateAcceleratorAttributesRequest, UpdateAcceleratorAttributesResponse } from "../models/models_0";
import { de_UpdateAcceleratorAttributesCommand, se_UpdateAcceleratorAttributesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAcceleratorAttributesCommand}.
 */
export interface UpdateAcceleratorAttributesCommandInput extends UpdateAcceleratorAttributesRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAcceleratorAttributesCommand}.
 */
export interface UpdateAcceleratorAttributesCommandOutput
  extends UpdateAcceleratorAttributesResponse,
    __MetadataBearer {}

/**
 * <p>Update the attributes for an accelerator. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, UpdateAcceleratorAttributesCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, UpdateAcceleratorAttributesCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * // import type { GlobalAcceleratorClientConfig } from "@aws-sdk/client-global-accelerator";
 * const config = {}; // type is GlobalAcceleratorClientConfig
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // UpdateAcceleratorAttributesRequest
 *   AcceleratorArn: "STRING_VALUE", // required
 *   FlowLogsEnabled: true || false,
 *   FlowLogsS3Bucket: "STRING_VALUE",
 *   FlowLogsS3Prefix: "STRING_VALUE",
 * };
 * const command = new UpdateAcceleratorAttributesCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAcceleratorAttributesResponse
 * //   AcceleratorAttributes: { // AcceleratorAttributes
 * //     FlowLogsEnabled: true || false,
 * //     FlowLogsS3Bucket: "STRING_VALUE",
 * //     FlowLogsS3Prefix: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateAcceleratorAttributesCommandInput - {@link UpdateAcceleratorAttributesCommandInput}
 * @returns {@link UpdateAcceleratorAttributesCommandOutput}
 * @see {@link UpdateAcceleratorAttributesCommandInput} for command's `input` shape.
 * @see {@link UpdateAcceleratorAttributesCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link AcceleratorNotFoundException} (client fault)
 *  <p>The accelerator that you specified doesn't exist.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access permission.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>There was an internal error for Global Accelerator.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>An argument that you specified is invalid.</p>
 *
 * @throws {@link TransactionInProgressException} (client fault)
 *  <p>There's already a transaction in progress. Another transaction can't be processed.</p>
 *
 * @throws {@link GlobalAcceleratorServiceException}
 * <p>Base exception class for all service exceptions from GlobalAccelerator service.</p>
 *
 *
 * @public
 */
export class UpdateAcceleratorAttributesCommand extends $Command
  .classBuilder<
    UpdateAcceleratorAttributesCommandInput,
    UpdateAcceleratorAttributesCommandOutput,
    GlobalAcceleratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlobalAcceleratorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GlobalAccelerator_V20180706", "UpdateAcceleratorAttributes", {})
  .n("GlobalAcceleratorClient", "UpdateAcceleratorAttributesCommand")
  .f(void 0, void 0)
  .ser(se_UpdateAcceleratorAttributesCommand)
  .de(de_UpdateAcceleratorAttributesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAcceleratorAttributesRequest;
      output: UpdateAcceleratorAttributesResponse;
    };
    sdk: {
      input: UpdateAcceleratorAttributesCommandInput;
      output: UpdateAcceleratorAttributesCommandOutput;
    };
  };
}
