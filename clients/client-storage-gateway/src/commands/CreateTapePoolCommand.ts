// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateTapePoolInput, CreateTapePoolOutput } from "../models/models_0";
import { CreateTapePool } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTapePoolCommand}.
 */
export interface CreateTapePoolCommandInput extends CreateTapePoolInput {}
/**
 * @public
 *
 * The output of {@link CreateTapePoolCommand}.
 */
export interface CreateTapePoolCommandOutput extends CreateTapePoolOutput, __MetadataBearer {}

/**
 * <p>Creates a new custom tape pool. You can use custom tape pool to enable tape retention
 *          lock on tapes that are archived in the custom pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, CreateTapePoolCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, CreateTapePoolCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // CreateTapePoolInput
 *   PoolName: "STRING_VALUE", // required
 *   StorageClass: "DEEP_ARCHIVE" || "GLACIER", // required
 *   RetentionLockType: "COMPLIANCE" || "GOVERNANCE" || "NONE",
 *   RetentionLockTimeInDays: Number("int"),
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateTapePoolCommand(input);
 * const response = await client.send(command);
 * // { // CreateTapePoolOutput
 * //   PoolARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateTapePoolCommandInput - {@link CreateTapePoolCommandInput}
 * @returns {@link CreateTapePoolCommandOutput}
 * @see {@link CreateTapePoolCommandInput} for command's `input` shape.
 * @see {@link CreateTapePoolCommandOutput} for command's `response` shape.
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
export class CreateTapePoolCommand extends $Command
  .classBuilder<
    CreateTapePoolCommandInput,
    CreateTapePoolCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StorageGateway_20130630", "CreateTapePool", {})
  .n("StorageGatewayClient", "CreateTapePoolCommand")
  .sc(CreateTapePool)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTapePoolInput;
      output: CreateTapePoolOutput;
    };
    sdk: {
      input: CreateTapePoolCommandInput;
      output: CreateTapePoolCommandOutput;
    };
  };
}
