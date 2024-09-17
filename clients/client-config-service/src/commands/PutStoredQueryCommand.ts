// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutStoredQueryRequest, PutStoredQueryResponse } from "../models/models_1";
import { de_PutStoredQueryCommand, se_PutStoredQueryCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutStoredQueryCommand}.
 */
export interface PutStoredQueryCommandInput extends PutStoredQueryRequest {}
/**
 * @public
 *
 * The output of {@link PutStoredQueryCommand}.
 */
export interface PutStoredQueryCommandOutput extends PutStoredQueryResponse, __MetadataBearer {}

/**
 * <p>Saves a new query or updates an existing saved query. The <code>QueryName</code> must be unique for a single Amazon Web Services account and a single Amazon Web Services Region.
 * 			You can create upto 300 queries in a single Amazon Web Services account and a single Amazon Web Services Region.</p>
 *          <note>
 *             <p>
 *                <code>PutStoredQuery</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different <code>tags</code> values,
 * 			Config will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>tags</code> will not be updated, even if they are different.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutStoredQueryCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutStoredQueryCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // PutStoredQueryRequest
 *   StoredQuery: { // StoredQuery
 *     QueryId: "STRING_VALUE",
 *     QueryArn: "STRING_VALUE",
 *     QueryName: "STRING_VALUE", // required
 *     Description: "STRING_VALUE",
 *     Expression: "STRING_VALUE",
 *   },
 *   Tags: [ // TagsList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new PutStoredQueryCommand(input);
 * const response = await client.send(command);
 * // { // PutStoredQueryResponse
 * //   QueryArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutStoredQueryCommandInput - {@link PutStoredQueryCommandInput}
 * @returns {@link PutStoredQueryCommandOutput}
 * @see {@link PutStoredQueryCommandInput} for command's `input` shape.
 * @see {@link PutStoredQueryCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link ResourceConcurrentModificationException} (client fault)
 *  <p>Two users are trying to modify the same query at the same time. Wait for a moment and try again.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>You have reached the limit of the number of tags you can use.
 * 			For more information, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html">
 *                <b>Service Limits</b>
 *             </a> in the <i>Config Developer Guide</i>.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The requested action is not valid.</p>
 *          <p>For PutStoredQuery, you will see this exception if there are missing required fields or if the input value fails the validation, or if you are trying to create more than 300 queries.</p>
 *          <p>For GetStoredQuery, ListStoredQuery, and DeleteStoredQuery you will see this exception if there are missing required fields or if the input value fails the validation.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 * @public
 */
export class PutStoredQueryCommand extends $Command
  .classBuilder<
    PutStoredQueryCommandInput,
    PutStoredQueryCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("StarlingDoveService", "PutStoredQuery", {})
  .n("ConfigServiceClient", "PutStoredQueryCommand")
  .f(void 0, void 0)
  .ser(se_PutStoredQueryCommand)
  .de(de_PutStoredQueryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutStoredQueryRequest;
      output: PutStoredQueryResponse;
    };
    sdk: {
      input: PutStoredQueryCommandInput;
      output: PutStoredQueryCommandOutput;
    };
  };
}
