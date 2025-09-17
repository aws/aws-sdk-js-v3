// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CancelDomainConfigChangeRequest, CancelDomainConfigChangeResponse } from "../models/models_0";
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
 * import { ElasticsearchServiceClient, CancelDomainConfigChangeCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, CancelDomainConfigChangeCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * // import type { ElasticsearchServiceClientConfig } from "@aws-sdk/client-elasticsearch-service";
 * const config = {}; // type is ElasticsearchServiceClientConfig
 * const client = new ElasticsearchServiceClient(config);
 * const input = { // CancelDomainConfigChangeRequest
 *   DomainName: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new CancelDomainConfigChangeCommand(input);
 * const response = await client.send(command);
 * // { // CancelDomainConfigChangeResponse
 * //   DryRun: true || false,
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
 * // };
 *
 * ```
 *
 * @param CancelDomainConfigChangeCommandInput - {@link CancelDomainConfigChangeCommandInput}
 * @returns {@link CancelDomainConfigChangeCommandOutput}
 * @see {@link CancelDomainConfigChangeCommandInput} for command's `input` shape.
 * @see {@link CancelDomainConfigChangeCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for ElasticsearchServiceClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access a not supported operation. Gives http status code of 409.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
 *
 * @throws {@link ElasticsearchServiceServiceException}
 * <p>Base exception class for all service exceptions from ElasticsearchService service.</p>
 *
 *
 * @public
 */
export class CancelDomainConfigChangeCommand extends $Command
  .classBuilder<
    CancelDomainConfigChangeCommandInput,
    CancelDomainConfigChangeCommandOutput,
    ElasticsearchServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticsearchServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonElasticsearchService2015", "CancelDomainConfigChange", {})
  .n("ElasticsearchServiceClient", "CancelDomainConfigChangeCommand")
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
