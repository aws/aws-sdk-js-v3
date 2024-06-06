// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AddTagsToResourceInput, AddTagsToResourceOutput } from "../models/models_0";
import { de_AddTagsToResourceCommand, se_AddTagsToResourceCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddTagsToResourceCommand}.
 */
export interface AddTagsToResourceCommandInput extends AddTagsToResourceInput {}
/**
 * @public
 *
 * The output of {@link AddTagsToResourceCommand}.
 */
export interface AddTagsToResourceCommandOutput extends AddTagsToResourceOutput, __MetadataBearer {}

/**
 * <p>Adds one or more tags to the specified resource. You use tags to add metadata to
 *          resources, which you can use to categorize these resources. For example, you can categorize
 *          resources by purpose, owner, environment, or team. Each tag consists of a key and a value,
 *          which you define. You can add tags to the following Storage Gateway resources:</p>
 *          <ul>
 *             <li>
 *                <p>Storage gateways of all types</p>
 *             </li>
 *             <li>
 *                <p>Storage volumes</p>
 *             </li>
 *             <li>
 *                <p>Virtual tapes</p>
 *             </li>
 *             <li>
 *                <p>NFS and SMB file shares</p>
 *             </li>
 *             <li>
 *                <p>File System associations</p>
 *             </li>
 *          </ul>
 *          <p>You can create a maximum of 50 tags for each resource. Virtual tapes and storage volumes
 *          that are recovered to a new gateway maintain their tags.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, AddTagsToResourceCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, AddTagsToResourceCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // AddTagsToResourceInput
 *   ResourceARN: "STRING_VALUE", // required
 *   Tags: [ // Tags // required
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new AddTagsToResourceCommand(input);
 * const response = await client.send(command);
 * // { // AddTagsToResourceOutput
 * //   ResourceARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AddTagsToResourceCommandInput - {@link AddTagsToResourceCommandInput}
 * @returns {@link AddTagsToResourceCommandOutput}
 * @see {@link AddTagsToResourceCommandInput} for command's `input` shape.
 * @see {@link AddTagsToResourceCommandOutput} for command's `response` shape.
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
 * @public
 * @example To add tags to resource
 * ```javascript
 * // Adds one or more tags to the specified resource.
 * const input = {
 *   "ResourceARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-11A2222B",
 *   "Tags": [
 *     {
 *       "Key": "Dev Gatgeway Region",
 *       "Value": "East Coast"
 *     }
 *   ]
 * };
 * const command = new AddTagsToResourceCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ResourceARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-11A2222B"
 * }
 * *\/
 * // example id: to-add-tags-to-resource-1471283689460
 * ```
 *
 */
export class AddTagsToResourceCommand extends $Command
  .classBuilder<
    AddTagsToResourceCommandInput,
    AddTagsToResourceCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("StorageGateway_20130630", "AddTagsToResource", {})
  .n("StorageGatewayClient", "AddTagsToResourceCommand")
  .f(void 0, void 0)
  .ser(se_AddTagsToResourceCommand)
  .de(de_AddTagsToResourceCommand)
  .build() {}
