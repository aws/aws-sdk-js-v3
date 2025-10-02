// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListTapePoolsInput, ListTapePoolsOutput } from "../models/models_0";
import { de_ListTapePoolsCommand, se_ListTapePoolsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTapePoolsCommand}.
 */
export interface ListTapePoolsCommandInput extends ListTapePoolsInput {}
/**
 * @public
 *
 * The output of {@link ListTapePoolsCommand}.
 */
export interface ListTapePoolsCommandOutput extends ListTapePoolsOutput, __MetadataBearer {}

/**
 * <p>Lists custom tape pools. You specify custom tape pools to list by specifying one or more
 *          custom tape pool Amazon Resource Names (ARNs). If you don't specify a custom tape pool ARN,
 *          the operation lists all custom tape pools.</p>
 *          <p>This operation supports pagination. You can optionally specify the <code>Limit</code>
 *          parameter in the body to limit the number of tape pools in the response. If the number of
 *          tape pools returned in the response is truncated, the response includes a
 *             <code>Marker</code> element that you can use in your subsequent request to retrieve the
 *          next set of tape pools.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ListTapePoolsCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ListTapePoolsCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // ListTapePoolsInput
 *   PoolARNs: [ // PoolARNs
 *     "STRING_VALUE",
 *   ],
 *   Marker: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListTapePoolsCommand(input);
 * const response = await client.send(command);
 * // { // ListTapePoolsOutput
 * //   PoolInfos: [ // PoolInfos
 * //     { // PoolInfo
 * //       PoolARN: "STRING_VALUE",
 * //       PoolName: "STRING_VALUE",
 * //       StorageClass: "DEEP_ARCHIVE" || "GLACIER",
 * //       RetentionLockType: "COMPLIANCE" || "GOVERNANCE" || "NONE",
 * //       RetentionLockTimeInDays: Number("int"),
 * //       PoolStatus: "ACTIVE" || "DELETED",
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTapePoolsCommandInput - {@link ListTapePoolsCommandInput}
 * @returns {@link ListTapePoolsCommandOutput}
 * @see {@link ListTapePoolsCommandInput} for command's `input` shape.
 * @see {@link ListTapePoolsCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error has occurred during the request. For more information, see the
 *          error and message fields.</p>
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *  <p>An exception occurred because an invalid gateway request was issued to the service. For
 *          more information, see the error and message fields.</p>
 *
 * @throws {@link StorageGatewayServiceException}
 * <p>Base exception class for all service exceptions from StorageGateway service.</p>
 *
 *
 * @public
 */
export class ListTapePoolsCommand extends $Command
  .classBuilder<
    ListTapePoolsCommandInput,
    ListTapePoolsCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("StorageGateway_20130630", "ListTapePools", {})
  .n("StorageGatewayClient", "ListTapePoolsCommand")
  .f(void 0, void 0)
  .ser(se_ListTapePoolsCommand)
  .de(de_ListTapePoolsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTapePoolsInput;
      output: ListTapePoolsOutput;
    };
    sdk: {
      input: ListTapePoolsCommandInput;
      output: ListTapePoolsCommandOutput;
    };
  };
}
