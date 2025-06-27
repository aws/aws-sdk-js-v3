// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAnnotationStoreVersionsRequest, DeleteAnnotationStoreVersionsResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import {
  de_DeleteAnnotationStoreVersionsCommand,
  se_DeleteAnnotationStoreVersionsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAnnotationStoreVersionsCommand}.
 */
export interface DeleteAnnotationStoreVersionsCommandInput extends DeleteAnnotationStoreVersionsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAnnotationStoreVersionsCommand}.
 */
export interface DeleteAnnotationStoreVersionsCommandOutput
  extends DeleteAnnotationStoreVersionsResponse,
    __MetadataBearer {}

/**
 * <p> Deletes one or multiple versions of an annotation store. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, DeleteAnnotationStoreVersionsCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, DeleteAnnotationStoreVersionsCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const input = { // DeleteAnnotationStoreVersionsRequest
 *   name: "STRING_VALUE", // required
 *   versions: [ // VersionList // required
 *     "STRING_VALUE",
 *   ],
 *   force: true || false,
 * };
 * const command = new DeleteAnnotationStoreVersionsCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAnnotationStoreVersionsResponse
 * //   errors: [ // VersionDeleteErrorList
 * //     { // VersionDeleteError
 * //       versionName: "STRING_VALUE", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DeleteAnnotationStoreVersionsCommandInput - {@link DeleteAnnotationStoreVersionsCommandInput}
 * @returns {@link DeleteAnnotationStoreVersionsCommandOutput}
 * @see {@link DeleteAnnotationStoreVersionsCommandInput} for command's `input` shape.
 * @see {@link DeleteAnnotationStoreVersionsCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request cannot be applied to the target resource in its current state.</p>
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
export class DeleteAnnotationStoreVersionsCommand extends $Command
  .classBuilder<
    DeleteAnnotationStoreVersionsCommandInput,
    DeleteAnnotationStoreVersionsCommandOutput,
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
  .s("Omics", "DeleteAnnotationStoreVersions", {})
  .n("OmicsClient", "DeleteAnnotationStoreVersionsCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAnnotationStoreVersionsCommand)
  .de(de_DeleteAnnotationStoreVersionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAnnotationStoreVersionsRequest;
      output: DeleteAnnotationStoreVersionsResponse;
    };
    sdk: {
      input: DeleteAnnotationStoreVersionsCommandInput;
      output: DeleteAnnotationStoreVersionsCommandOutput;
    };
  };
}
