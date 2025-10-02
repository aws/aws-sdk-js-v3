// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateTapesInput, CreateTapesOutput } from "../models/models_0";
import { de_CreateTapesCommand, se_CreateTapesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTapesCommand}.
 */
export interface CreateTapesCommandInput extends CreateTapesInput {}
/**
 * @public
 *
 * The output of {@link CreateTapesCommand}.
 */
export interface CreateTapesCommandOutput extends CreateTapesOutput, __MetadataBearer {}

/**
 * <p>Creates one or more virtual tapes. You write data to the virtual tapes and then archive
 *          the tapes. This operation is only supported in the tape gateway type.</p>
 *          <note>
 *             <p>Cache storage must be allocated to the gateway before you can create virtual tapes.
 *             Use the <a>AddCache</a> operation to add cache storage to a gateway.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, CreateTapesCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, CreateTapesCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // CreateTapesInput
 *   GatewayARN: "STRING_VALUE", // required
 *   TapeSizeInBytes: Number("long"), // required
 *   ClientToken: "STRING_VALUE", // required
 *   NumTapesToCreate: Number("int"), // required
 *   TapeBarcodePrefix: "STRING_VALUE", // required
 *   KMSEncrypted: true || false,
 *   KMSKey: "STRING_VALUE",
 *   PoolId: "STRING_VALUE",
 *   Worm: true || false,
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateTapesCommand(input);
 * const response = await client.send(command);
 * // { // CreateTapesOutput
 * //   TapeARNs: [ // TapeARNs
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateTapesCommandInput - {@link CreateTapesCommandInput}
 * @returns {@link CreateTapesCommandOutput}
 * @see {@link CreateTapesCommandInput} for command's `input` shape.
 * @see {@link CreateTapesCommandOutput} for command's `response` shape.
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
 * @example To create a virtual tape
 * ```javascript
 * // Creates one or more virtual tapes.
 * const input = {
 *   ClientToken: "77777",
 *   GatewayARN: "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B",
 *   NumTapesToCreate: 3,
 *   TapeBarcodePrefix: "TEST",
 *   TapeSizeInBytes: 107374182400
 * };
 * const command = new CreateTapesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   TapeARNs: [
 *     "arn:aws:storagegateway:us-east-1:999999999999:tape/TEST38A29D",
 *     "arn:aws:storagegateway:us-east-1:204469490176:tape/TEST3AA29F",
 *     "arn:aws:storagegateway:us-east-1:204469490176:tape/TEST3BA29E"
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateTapesCommand extends $Command
  .classBuilder<
    CreateTapesCommandInput,
    CreateTapesCommandOutput,
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
  .s("StorageGateway_20130630", "CreateTapes", {})
  .n("StorageGatewayClient", "CreateTapesCommand")
  .f(void 0, void 0)
  .ser(se_CreateTapesCommand)
  .de(de_CreateTapesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTapesInput;
      output: CreateTapesOutput;
    };
    sdk: {
      input: CreateTapesCommandInput;
      output: CreateTapesCommandOutput;
    };
  };
}
