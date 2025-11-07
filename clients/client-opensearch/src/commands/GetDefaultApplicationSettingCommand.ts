// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetDefaultApplicationSettingRequest, GetDefaultApplicationSettingResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import {
  de_GetDefaultApplicationSettingCommand,
  se_GetDefaultApplicationSettingCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDefaultApplicationSettingCommand}.
 */
export interface GetDefaultApplicationSettingCommandInput extends GetDefaultApplicationSettingRequest {}
/**
 * @public
 *
 * The output of {@link GetDefaultApplicationSettingCommand}.
 */
export interface GetDefaultApplicationSettingCommandOutput
  extends GetDefaultApplicationSettingResponse,
    __MetadataBearer {}

/**
 * <p>Gets the ARN of the current default application.</p>
 *          <p> If the default application isn't set, the operation returns a resource not found
 *             error.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, GetDefaultApplicationSettingCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, GetDefaultApplicationSettingCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = {};
 * const command = new GetDefaultApplicationSettingCommand(input);
 * const response = await client.send(command);
 * // { // GetDefaultApplicationSettingResponse
 * //   applicationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDefaultApplicationSettingCommandInput - {@link GetDefaultApplicationSettingCommandInput}
 * @returns {@link GetDefaultApplicationSettingCommandOutput}
 * @see {@link GetDefaultApplicationSettingCommandInput} for command's `input` shape.
 * @see {@link GetDefaultApplicationSettingCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An error occurred because you don't have permissions to access the resource.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 *
 * @public
 */
export class GetDefaultApplicationSettingCommand extends $Command
  .classBuilder<
    GetDefaultApplicationSettingCommandInput,
    GetDefaultApplicationSettingCommandOutput,
    OpenSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonOpenSearchService", "GetDefaultApplicationSetting", {})
  .n("OpenSearchClient", "GetDefaultApplicationSettingCommand")
  .f(void 0, void 0)
  .ser(se_GetDefaultApplicationSettingCommand)
  .de(de_GetDefaultApplicationSettingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetDefaultApplicationSettingResponse;
    };
    sdk: {
      input: GetDefaultApplicationSettingCommandInput;
      output: GetDefaultApplicationSettingCommandOutput;
    };
  };
}
