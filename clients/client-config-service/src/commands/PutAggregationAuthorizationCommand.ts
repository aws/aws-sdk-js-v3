// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutAggregationAuthorizationRequest, PutAggregationAuthorizationResponse } from "../models/models_1";
import { de_PutAggregationAuthorizationCommand, se_PutAggregationAuthorizationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutAggregationAuthorizationCommand}.
 */
export interface PutAggregationAuthorizationCommandInput extends PutAggregationAuthorizationRequest {}
/**
 * @public
 *
 * The output of {@link PutAggregationAuthorizationCommand}.
 */
export interface PutAggregationAuthorizationCommandOutput
  extends PutAggregationAuthorizationResponse,
    __MetadataBearer {}

/**
 * <p>Authorizes the aggregator account and region to collect data
 * 			from the source account and region. </p>
 *          <note>
 *             <p>
 *                <code>PutAggregationAuthorization</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different <code>tags</code> values,
 * 			Config will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>tags</code> will not be updated, even if they are different.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutAggregationAuthorizationCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutAggregationAuthorizationCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // PutAggregationAuthorizationRequest
 *   AuthorizedAccountId: "STRING_VALUE", // required
 *   AuthorizedAwsRegion: "STRING_VALUE", // required
 *   Tags: [ // TagsList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new PutAggregationAuthorizationCommand(input);
 * const response = await client.send(command);
 * // { // PutAggregationAuthorizationResponse
 * //   AggregationAuthorization: { // AggregationAuthorization
 * //     AggregationAuthorizationArn: "STRING_VALUE",
 * //     AuthorizedAccountId: "STRING_VALUE",
 * //     AuthorizedAwsRegion: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param PutAggregationAuthorizationCommandInput - {@link PutAggregationAuthorizationCommandInput}
 * @returns {@link PutAggregationAuthorizationCommandOutput}
 * @see {@link PutAggregationAuthorizationCommandInput} for command's `input` shape.
 * @see {@link PutAggregationAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more of the specified parameters are not valid. Verify
 * 			that your parameters are valid and try again.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 * @public
 */
export class PutAggregationAuthorizationCommand extends $Command
  .classBuilder<
    PutAggregationAuthorizationCommandInput,
    PutAggregationAuthorizationCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("StarlingDoveService", "PutAggregationAuthorization", {})
  .n("ConfigServiceClient", "PutAggregationAuthorizationCommand")
  .f(void 0, void 0)
  .ser(se_PutAggregationAuthorizationCommand)
  .de(de_PutAggregationAuthorizationCommand)
  .build() {}
