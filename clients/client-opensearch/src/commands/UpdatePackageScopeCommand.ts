// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdatePackageScopeRequest, UpdatePackageScopeResponse } from "../models/models_1";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { de_UpdatePackageScopeCommand, se_UpdatePackageScopeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePackageScopeCommand}.
 */
export interface UpdatePackageScopeCommandInput extends UpdatePackageScopeRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePackageScopeCommand}.
 */
export interface UpdatePackageScopeCommandOutput extends UpdatePackageScopeResponse, __MetadataBearer {}

/**
 * <p>Updates the scope of a package. Scope of the package defines users who can view and
 *    associate a package.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, UpdatePackageScopeCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, UpdatePackageScopeCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const input = { // UpdatePackageScopeRequest
 *   PackageID: "STRING_VALUE", // required
 *   Operation: "ADD" || "OVERRIDE" || "REMOVE", // required
 *   PackageUserList: [ // PackageUserList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdatePackageScopeCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePackageScopeResponse
 * //   PackageID: "STRING_VALUE",
 * //   Operation: "ADD" || "OVERRIDE" || "REMOVE",
 * //   PackageUserList: [ // PackageUserList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdatePackageScopeCommandInput - {@link UpdatePackageScopeCommandInput}
 * @returns {@link UpdatePackageScopeCommandOutput}
 * @see {@link UpdatePackageScopeCommandInput} for command's `input` shape.
 * @see {@link UpdatePackageScopeCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access an unsupported operation.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 *
 * @public
 */
export class UpdatePackageScopeCommand extends $Command
  .classBuilder<
    UpdatePackageScopeCommandInput,
    UpdatePackageScopeCommandOutput,
    OpenSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonOpenSearchService", "UpdatePackageScope", {})
  .n("OpenSearchClient", "UpdatePackageScopeCommand")
  .f(void 0, void 0)
  .ser(se_UpdatePackageScopeCommand)
  .de(de_UpdatePackageScopeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePackageScopeRequest;
      output: UpdatePackageScopeResponse;
    };
    sdk: {
      input: UpdatePackageScopeCommandInput;
      output: UpdatePackageScopeCommandOutput;
    };
  };
}
