// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateStreamingURLRequest, CreateStreamingURLResult } from "../models/models_0";
import { CreateStreamingURL } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateStreamingURLCommand}.
 */
export interface CreateStreamingURLCommandInput extends CreateStreamingURLRequest {}
/**
 * @public
 *
 * The output of {@link CreateStreamingURLCommand}.
 */
export interface CreateStreamingURLCommandOutput extends CreateStreamingURLResult, __MetadataBearer {}

/**
 * <p>Creates a temporary URL to start an AppStream 2.0 streaming session for the specified user. A streaming URL enables application streaming to be tested without user setup. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, CreateStreamingURLCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, CreateStreamingURLCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // CreateStreamingURLRequest
 *   StackName: "STRING_VALUE", // required
 *   FleetName: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE", // required
 *   ApplicationId: "STRING_VALUE",
 *   Validity: Number("long"),
 *   SessionContext: "STRING_VALUE",
 * };
 * const command = new CreateStreamingURLCommand(input);
 * const response = await client.send(command);
 * // { // CreateStreamingURLResult
 * //   StreamingURL: "STRING_VALUE",
 * //   Expires: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateStreamingURLCommandInput - {@link CreateStreamingURLCommandInput}
 * @returns {@link CreateStreamingURLCommandOutput}
 * @see {@link CreateStreamingURLCommandInput} for command's `input` shape.
 * @see {@link CreateStreamingURLCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Indicates an incorrect combination of parameters, or a missing parameter.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The attempted operation is not permitted.</p>
 *
 * @throws {@link ResourceNotAvailableException} (client fault)
 *  <p>The specified resource exists and is not in use, but isn't available.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 *
 * @public
 */
export class CreateStreamingURLCommand extends $Command
  .classBuilder<
    CreateStreamingURLCommandInput,
    CreateStreamingURLCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PhotonAdminProxyService", "CreateStreamingURL", {})
  .n("AppStreamClient", "CreateStreamingURLCommand")
  .sc(CreateStreamingURL)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateStreamingURLRequest;
      output: CreateStreamingURLResult;
    };
    sdk: {
      input: CreateStreamingURLCommandInput;
      output: CreateStreamingURLCommandOutput;
    };
  };
}
