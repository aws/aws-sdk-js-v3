// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CancelDomainConfigChangeRequest, CancelDomainConfigChangeResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { de_CancelDomainConfigChangeCommand, se_CancelDomainConfigChangeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelDomainConfigChangeCommand}.
 */
export interface CancelDomainConfigChangeCommandInput extends CancelDomainConfigChangeRequest {}
/**
 * @public
 *
 * The output of {@link CancelDomainConfigChangeCommand}.
 */
export interface CancelDomainConfigChangeCommandOutput extends CancelDomainConfigChangeResponse, __MetadataBearer {}

/**
 * <p>Cancels a pending configuration change on an Amazon OpenSearch Service domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, CancelDomainConfigChangeCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, CancelDomainConfigChangeCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // CancelDomainConfigChangeRequest
 *   DomainName: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new CancelDomainConfigChangeCommand(input);
 * const response = await client.send(command);
 * // { // CancelDomainConfigChangeResponse
 * //   CancelledChangeIds: [ // GUIDList
 * //     "STRING_VALUE",
 * //   ],
 * //   CancelledChangeProperties: [ // CancelledChangePropertyList
 * //     { // CancelledChangeProperty
 * //       PropertyName: "STRING_VALUE",
 * //       CancelledValue: "STRING_VALUE",
 * //       ActiveValue: "STRING_VALUE",
 * //     },
 * //   ],
 * //   DryRun: true || false,
 * // };
 *
 * ```
 *
 * @param CancelDomainConfigChangeCommandInput - {@link CancelDomainConfigChangeCommandInput}
 * @returns {@link CancelDomainConfigChangeCommandOutput}
 * @see {@link CancelDomainConfigChangeCommandInput} for command's `input` shape.
 * @see {@link CancelDomainConfigChangeCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access an unsupported operation.</p>
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
export class CancelDomainConfigChangeCommand extends $Command
  .classBuilder<
    CancelDomainConfigChangeCommandInput,
    CancelDomainConfigChangeCommandOutput,
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
  .s("AmazonOpenSearchService", "CancelDomainConfigChange", {})
  .n("OpenSearchClient", "CancelDomainConfigChangeCommand")
  .f(void 0, void 0)
  .ser(se_CancelDomainConfigChangeCommand)
  .de(de_CancelDomainConfigChangeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelDomainConfigChangeRequest;
      output: CancelDomainConfigChangeResponse;
    };
    sdk: {
      input: CancelDomainConfigChangeCommandInput;
      output: CancelDomainConfigChangeCommandOutput;
    };
  };
}
