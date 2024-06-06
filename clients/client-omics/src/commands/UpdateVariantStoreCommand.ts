// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateVariantStoreRequest, UpdateVariantStoreResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_UpdateVariantStoreCommand, se_UpdateVariantStoreCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateVariantStoreCommand}.
 */
export interface UpdateVariantStoreCommandInput extends UpdateVariantStoreRequest {}
/**
 * @public
 *
 * The output of {@link UpdateVariantStoreCommand}.
 */
export interface UpdateVariantStoreCommandOutput extends UpdateVariantStoreResponse, __MetadataBearer {}

/**
 * <p>Updates a variant store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, UpdateVariantStoreCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, UpdateVariantStoreCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const input = { // UpdateVariantStoreRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 * };
 * const command = new UpdateVariantStoreCommand(input);
 * const response = await client.send(command);
 * // { // UpdateVariantStoreResponse
 * //   id: "STRING_VALUE", // required
 * //   reference: { // ReferenceItem Union: only one key present
 * //     referenceArn: "STRING_VALUE",
 * //   },
 * //   status: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE", // required
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   updateTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateVariantStoreCommandInput - {@link UpdateVariantStoreCommandInput}
 * @returns {@link UpdateVariantStoreCommandOutput}
 * @see {@link UpdateVariantStoreCommandInput} for command's `input` shape.
 * @see {@link UpdateVariantStoreCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found in the current Region.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link OmicsServiceException}
 * <p>Base exception class for all service exceptions from Omics service.</p>
 *
 * @public
 */
export class UpdateVariantStoreCommand extends $Command
  .classBuilder<
    UpdateVariantStoreCommandInput,
    UpdateVariantStoreCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Omics", "UpdateVariantStore", {})
  .n("OmicsClient", "UpdateVariantStoreCommand")
  .f(void 0, void 0)
  .ser(se_UpdateVariantStoreCommand)
  .de(de_UpdateVariantStoreCommand)
  .build() {}
