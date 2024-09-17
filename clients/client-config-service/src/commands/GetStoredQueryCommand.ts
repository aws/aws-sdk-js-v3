// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetStoredQueryRequest, GetStoredQueryResponse } from "../models/models_0";
import { de_GetStoredQueryCommand, se_GetStoredQueryCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetStoredQueryCommand}.
 */
export interface GetStoredQueryCommandInput extends GetStoredQueryRequest {}
/**
 * @public
 *
 * The output of {@link GetStoredQueryCommand}.
 */
export interface GetStoredQueryCommandOutput extends GetStoredQueryResponse, __MetadataBearer {}

/**
 * <p>Returns the details of a specific stored query.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetStoredQueryCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetStoredQueryCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // GetStoredQueryRequest
 *   QueryName: "STRING_VALUE", // required
 * };
 * const command = new GetStoredQueryCommand(input);
 * const response = await client.send(command);
 * // { // GetStoredQueryResponse
 * //   StoredQuery: { // StoredQuery
 * //     QueryId: "STRING_VALUE",
 * //     QueryArn: "STRING_VALUE",
 * //     QueryName: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     Expression: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetStoredQueryCommandInput - {@link GetStoredQueryCommandInput}
 * @returns {@link GetStoredQueryCommandOutput}
 * @see {@link GetStoredQueryCommandInput} for command's `input` shape.
 * @see {@link GetStoredQueryCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>You have specified a resource that does not exist.</p>
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
export class GetStoredQueryCommand extends $Command
  .classBuilder<
    GetStoredQueryCommandInput,
    GetStoredQueryCommandOutput,
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
  .s("StarlingDoveService", "GetStoredQuery", {})
  .n("ConfigServiceClient", "GetStoredQueryCommand")
  .f(void 0, void 0)
  .ser(se_GetStoredQueryCommand)
  .de(de_GetStoredQueryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetStoredQueryRequest;
      output: GetStoredQueryResponse;
    };
    sdk: {
      input: GetStoredQueryCommandInput;
      output: GetStoredQueryCommandOutput;
    };
  };
}
