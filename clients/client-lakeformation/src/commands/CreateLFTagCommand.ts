// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { CreateLFTagRequest, CreateLFTagResponse } from "../models/models_0";
import { de_CreateLFTagCommand, se_CreateLFTagCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLFTagCommand}.
 */
export interface CreateLFTagCommandInput extends CreateLFTagRequest {}
/**
 * @public
 *
 * The output of {@link CreateLFTagCommand}.
 */
export interface CreateLFTagCommandOutput extends CreateLFTagResponse, __MetadataBearer {}

/**
 * <p>Creates an LF-tag with the specified name and values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, CreateLFTagCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, CreateLFTagCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = { // CreateLFTagRequest
 *   CatalogId: "STRING_VALUE",
 *   TagKey: "STRING_VALUE", // required
 *   TagValues: [ // TagValueList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateLFTagCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateLFTagCommandInput - {@link CreateLFTagCommandInput}
 * @returns {@link CreateLFTagCommandOutput}
 * @see {@link CreateLFTagCommandInput} for command's `input` shape.
 * @see {@link CreateLFTagCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 *
 * @public
 */
export class CreateLFTagCommand extends $Command
  .classBuilder<
    CreateLFTagCommandInput,
    CreateLFTagCommandOutput,
    LakeFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LakeFormationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSLakeFormation", "CreateLFTag", {})
  .n("LakeFormationClient", "CreateLFTagCommand")
  .f(void 0, void 0)
  .ser(se_CreateLFTagCommand)
  .de(de_CreateLFTagCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLFTagRequest;
      output: {};
    };
    sdk: {
      input: CreateLFTagCommandInput;
      output: CreateLFTagCommandOutput;
    };
  };
}
