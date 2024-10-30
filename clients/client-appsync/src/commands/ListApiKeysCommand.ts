// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListApiKeysRequest, ListApiKeysResponse } from "../models/models_0";
import { de_ListApiKeysCommand, se_ListApiKeysCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListApiKeysCommand}.
 */
export interface ListApiKeysCommandInput extends ListApiKeysRequest {}
/**
 * @public
 *
 * The output of {@link ListApiKeysCommand}.
 */
export interface ListApiKeysCommandOutput extends ListApiKeysResponse, __MetadataBearer {}

/**
 * <p>Lists the API keys for a given API.</p>
 *          <note>
 *             <p>API keys are deleted automatically 60 days after they expire. However, they may still
 *             be included in the response until they have actually been deleted. You can safely call
 *                <code>DeleteApiKey</code> to manually delete a key before it's automatically
 *             deleted.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, ListApiKeysCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, ListApiKeysCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const input = { // ListApiKeysRequest
 *   apiId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListApiKeysCommand(input);
 * const response = await client.send(command);
 * // { // ListApiKeysResponse
 * //   apiKeys: [ // ApiKeys
 * //     { // ApiKey
 * //       id: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       expires: Number("long"),
 * //       deletes: Number("long"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListApiKeysCommandInput - {@link ListApiKeysCommandInput}
 * @returns {@link ListApiKeysCommandOutput}
 * @see {@link ListApiKeysCommandInput} for command's `input` shape.
 * @see {@link ListApiKeysCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or a required field is
 *          missing. Check the field values, and then try again.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal AppSync error occurred. Try your request again.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Check the resource, and then try
 *          again.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You aren't authorized to perform this operation.</p>
 *
 * @throws {@link AppSyncServiceException}
 * <p>Base exception class for all service exceptions from AppSync service.</p>
 *
 * @public
 */
export class ListApiKeysCommand extends $Command
  .classBuilder<
    ListApiKeysCommandInput,
    ListApiKeysCommandOutput,
    AppSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppSyncClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSDeepdishControlPlaneService", "ListApiKeys", {})
  .n("AppSyncClient", "ListApiKeysCommand")
  .f(void 0, void 0)
  .ser(se_ListApiKeysCommand)
  .de(de_ListApiKeysCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListApiKeysRequest;
      output: ListApiKeysResponse;
    };
    sdk: {
      input: ListApiKeysCommandInput;
      output: ListApiKeysCommandOutput;
    };
  };
}
