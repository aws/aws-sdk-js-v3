// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetVariantStoreRequest, GetVariantStoreResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_GetVariantStoreCommand, se_GetVariantStoreCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetVariantStoreCommand}.
 */
export interface GetVariantStoreCommandInput extends GetVariantStoreRequest {}
/**
 * @public
 *
 * The output of {@link GetVariantStoreCommand}.
 */
export interface GetVariantStoreCommandOutput extends GetVariantStoreResponse, __MetadataBearer {}

/**
 * <important> <p>Amazon Web Services HealthOmics variant stores and annotation stores will no longer be open to new customers starting November 7, 2025. If you would like to use variant stores or annotation stores, sign up prior to that date. Existing customers can continue to use the service as normal. For more information, see <a href="https://docs.aws.amazon.com/omics/latest/dev/variant-store-availability-change.html"> Amazon Web Services HealthOmics variant store and annotation store availability change</a>.</p> </important> <p>Gets information about a variant store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, GetVariantStoreCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, GetVariantStoreCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // GetVariantStoreRequest
 *   name: "STRING_VALUE", // required
 * };
 * const command = new GetVariantStoreCommand(input);
 * const response = await client.send(command);
 * // { // GetVariantStoreResponse
 * //   id: "STRING_VALUE", // required
 * //   reference: { // ReferenceItem Union: only one key present
 * //     referenceArn: "STRING_VALUE",
 * //   },
 * //   status: "STRING_VALUE", // required
 * //   storeArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE", // required
 * //   sseConfig: { // SseConfig
 * //     type: "STRING_VALUE", // required
 * //     keyArn: "STRING_VALUE",
 * //   },
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   updateTime: new Date("TIMESTAMP"), // required
 * //   tags: { // TagMap // required
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   statusMessage: "STRING_VALUE", // required
 * //   storeSizeBytes: Number("long"), // required
 * // };
 *
 * ```
 *
 * @param GetVariantStoreCommandInput - {@link GetVariantStoreCommandInput}
 * @returns {@link GetVariantStoreCommandOutput}
 * @see {@link GetVariantStoreCommandInput} for command's `input` shape.
 * @see {@link GetVariantStoreCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetVariantStoreCommand extends $Command
  .classBuilder<
    GetVariantStoreCommandInput,
    GetVariantStoreCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Omics", "GetVariantStore", {})
  .n("OmicsClient", "GetVariantStoreCommand")
  .f(void 0, void 0)
  .ser(se_GetVariantStoreCommand)
  .de(de_GetVariantStoreCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetVariantStoreRequest;
      output: GetVariantStoreResponse;
    };
    sdk: {
      input: GetVariantStoreCommandInput;
      output: GetVariantStoreCommandOutput;
    };
  };
}
