// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetResourceMetadataRequest, GetResourceMetadataResponse } from "../models/models_0";
import { PIClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PIClient";
import { de_GetResourceMetadataCommand, se_GetResourceMetadataCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetResourceMetadataCommand}.
 */
export interface GetResourceMetadataCommandInput extends GetResourceMetadataRequest {}
/**
 * @public
 *
 * The output of {@link GetResourceMetadataCommand}.
 */
export interface GetResourceMetadataCommandOutput extends GetResourceMetadataResponse, __MetadataBearer {}

/**
 * <p>Retrieve the metadata for different features. For example, the metadata might indicate
 *             that a feature is turned on or off on a specific DB instance.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PIClient, GetResourceMetadataCommand } from "@aws-sdk/client-pi"; // ES Modules import
 * // const { PIClient, GetResourceMetadataCommand } = require("@aws-sdk/client-pi"); // CommonJS import
 * const client = new PIClient(config);
 * const input = { // GetResourceMetadataRequest
 *   ServiceType: "RDS" || "DOCDB", // required
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetResourceMetadataCommand(input);
 * const response = await client.send(command);
 * // { // GetResourceMetadataResponse
 * //   Identifier: "STRING_VALUE",
 * //   Features: { // FeatureMetadataMap
 * //     "<keys>": { // FeatureMetadata
 * //       Status: "ENABLED" || "DISABLED" || "UNSUPPORTED" || "ENABLED_PENDING_REBOOT" || "DISABLED_PENDING_REBOOT" || "UNKNOWN",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetResourceMetadataCommandInput - {@link GetResourceMetadataCommandInput}
 * @returns {@link GetResourceMetadataCommandOutput}
 * @see {@link GetResourceMetadataCommandInput} for command's `input` shape.
 * @see {@link GetResourceMetadataCommandOutput} for command's `response` shape.
 * @see {@link PIClientResolvedConfig | config} for PIClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>The request failed due to an unknown error.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>One of the arguments provided is invalid for this request.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>The user is not authorized to perform this request.</p>
 *
 * @throws {@link PIServiceException}
 * <p>Base exception class for all service exceptions from PI service.</p>
 *
 *
 * @public
 */
export class GetResourceMetadataCommand extends $Command
  .classBuilder<
    GetResourceMetadataCommandInput,
    GetResourceMetadataCommandOutput,
    PIClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PIClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PerformanceInsightsv20180227", "GetResourceMetadata", {})
  .n("PIClient", "GetResourceMetadataCommand")
  .f(void 0, void 0)
  .ser(se_GetResourceMetadataCommand)
  .de(de_GetResourceMetadataCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResourceMetadataRequest;
      output: GetResourceMetadataResponse;
    };
    sdk: {
      input: GetResourceMetadataCommandInput;
      output: GetResourceMetadataCommandOutput;
    };
  };
}
