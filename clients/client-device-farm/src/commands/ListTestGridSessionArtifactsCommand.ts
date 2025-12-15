// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListTestGridSessionArtifactsRequest, ListTestGridSessionArtifactsResult } from "../models/models_0";
import { ListTestGridSessionArtifacts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTestGridSessionArtifactsCommand}.
 */
export interface ListTestGridSessionArtifactsCommandInput extends ListTestGridSessionArtifactsRequest {}
/**
 * @public
 *
 * The output of {@link ListTestGridSessionArtifactsCommand}.
 */
export interface ListTestGridSessionArtifactsCommandOutput
  extends ListTestGridSessionArtifactsResult,
    __MetadataBearer {}

/**
 * <p>Retrieves a list of artifacts created during the session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListTestGridSessionArtifactsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListTestGridSessionArtifactsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * // import type { DeviceFarmClientConfig } from "@aws-sdk/client-device-farm";
 * const config = {}; // type is DeviceFarmClientConfig
 * const client = new DeviceFarmClient(config);
 * const input = { // ListTestGridSessionArtifactsRequest
 *   sessionArn: "STRING_VALUE", // required
 *   type: "VIDEO" || "LOG",
 *   maxResult: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListTestGridSessionArtifactsCommand(input);
 * const response = await client.send(command);
 * // { // ListTestGridSessionArtifactsResult
 * //   artifacts: [ // TestGridSessionArtifacts
 * //     { // TestGridSessionArtifact
 * //       filename: "STRING_VALUE",
 * //       type: "UNKNOWN" || "VIDEO" || "SELENIUM_LOG",
 * //       url: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTestGridSessionArtifactsCommandInput - {@link ListTestGridSessionArtifactsCommandInput}
 * @returns {@link ListTestGridSessionArtifactsCommandOutput}
 * @see {@link ListTestGridSessionArtifactsCommandInput} for command's `input` shape.
 * @see {@link ListTestGridSessionArtifactsCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *  <p>An invalid argument was specified.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal exception was raised in the service. Contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you see this
 *          error. </p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified entity was not found.</p>
 *
 * @throws {@link DeviceFarmServiceException}
 * <p>Base exception class for all service exceptions from DeviceFarm service.</p>
 *
 *
 * @public
 */
export class ListTestGridSessionArtifactsCommand extends $Command
  .classBuilder<
    ListTestGridSessionArtifactsCommandInput,
    ListTestGridSessionArtifactsCommandOutput,
    DeviceFarmClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeviceFarmClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DeviceFarm_20150623", "ListTestGridSessionArtifacts", {})
  .n("DeviceFarmClient", "ListTestGridSessionArtifactsCommand")
  .sc(ListTestGridSessionArtifacts$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTestGridSessionArtifactsRequest;
      output: ListTestGridSessionArtifactsResult;
    };
    sdk: {
      input: ListTestGridSessionArtifactsCommandInput;
      output: ListTestGridSessionArtifactsCommandOutput;
    };
  };
}
