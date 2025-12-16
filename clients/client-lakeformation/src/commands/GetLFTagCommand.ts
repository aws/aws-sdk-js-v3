// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import type { GetLFTagRequest, GetLFTagResponse } from "../models/models_0";
import { GetLFTag$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLFTagCommand}.
 */
export interface GetLFTagCommandInput extends GetLFTagRequest {}
/**
 * @public
 *
 * The output of {@link GetLFTagCommand}.
 */
export interface GetLFTagCommandOutput extends GetLFTagResponse, __MetadataBearer {}

/**
 * <p>Returns an LF-tag definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, GetLFTagCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, GetLFTagCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = { // GetLFTagRequest
 *   CatalogId: "STRING_VALUE",
 *   TagKey: "STRING_VALUE", // required
 * };
 * const command = new GetLFTagCommand(input);
 * const response = await client.send(command);
 * // { // GetLFTagResponse
 * //   CatalogId: "STRING_VALUE",
 * //   TagKey: "STRING_VALUE",
 * //   TagValues: [ // TagValueList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetLFTagCommandInput - {@link GetLFTagCommandInput}
 * @returns {@link GetLFTagCommandOutput}
 * @see {@link GetLFTagCommandInput} for command's `input` shape.
 * @see {@link GetLFTagCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 *
 * @public
 */
export class GetLFTagCommand extends $Command
  .classBuilder<
    GetLFTagCommandInput,
    GetLFTagCommandOutput,
    LakeFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LakeFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLakeFormation", "GetLFTag", {})
  .n("LakeFormationClient", "GetLFTagCommand")
  .sc(GetLFTag$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLFTagRequest;
      output: GetLFTagResponse;
    };
    sdk: {
      input: GetLFTagCommandInput;
      output: GetLFTagCommandOutput;
    };
  };
}
