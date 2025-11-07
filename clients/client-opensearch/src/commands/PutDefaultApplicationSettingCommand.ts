// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutDefaultApplicationSettingRequest, PutDefaultApplicationSettingResponse } from "../models/models_1";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import {
  de_PutDefaultApplicationSettingCommand,
  se_PutDefaultApplicationSettingCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutDefaultApplicationSettingCommand}.
 */
export interface PutDefaultApplicationSettingCommandInput extends PutDefaultApplicationSettingRequest {}
/**
 * @public
 *
 * The output of {@link PutDefaultApplicationSettingCommand}.
 */
export interface PutDefaultApplicationSettingCommandOutput
  extends PutDefaultApplicationSettingResponse,
    __MetadataBearer {}

/**
 * <p>Sets the default application to the application with the specified ARN.</p>
 *          <p> To remove the default application, use the <code>GetDefaultApplicationSetting</code>
 *             operation to get the current default and then call the
 *                 <code>PutDefaultApplicationSetting</code> with the current applications ARN and the
 *                 <code>setAsDefault</code> parameter set to <code>false</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, PutDefaultApplicationSettingCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, PutDefaultApplicationSettingCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // PutDefaultApplicationSettingRequest
 *   applicationArn: "STRING_VALUE", // required
 *   setAsDefault: true || false, // required
 * };
 * const command = new PutDefaultApplicationSettingCommand(input);
 * const response = await client.send(command);
 * // { // PutDefaultApplicationSettingResponse
 * //   applicationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutDefaultApplicationSettingCommandInput - {@link PutDefaultApplicationSettingCommandInput}
 * @returns {@link PutDefaultApplicationSettingCommandOutput}
 * @see {@link PutDefaultApplicationSettingCommandInput} for command's `input` shape.
 * @see {@link PutDefaultApplicationSettingCommandOutput} for command's `response` shape.
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
export class PutDefaultApplicationSettingCommand extends $Command
  .classBuilder<
    PutDefaultApplicationSettingCommandInput,
    PutDefaultApplicationSettingCommandOutput,
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
  .s("AmazonOpenSearchService", "PutDefaultApplicationSetting", {})
  .n("OpenSearchClient", "PutDefaultApplicationSettingCommand")
  .f(void 0, void 0)
  .ser(se_PutDefaultApplicationSettingCommand)
  .de(de_PutDefaultApplicationSettingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutDefaultApplicationSettingRequest;
      output: PutDefaultApplicationSettingResponse;
    };
    sdk: {
      input: PutDefaultApplicationSettingCommandInput;
      output: PutDefaultApplicationSettingCommandOutput;
    };
  };
}
