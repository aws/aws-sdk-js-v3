// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateAnnotationStoreVersionRequest, UpdateAnnotationStoreVersionResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import {
  de_UpdateAnnotationStoreVersionCommand,
  se_UpdateAnnotationStoreVersionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAnnotationStoreVersionCommand}.
 */
export interface UpdateAnnotationStoreVersionCommandInput extends UpdateAnnotationStoreVersionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAnnotationStoreVersionCommand}.
 */
export interface UpdateAnnotationStoreVersionCommandOutput
  extends UpdateAnnotationStoreVersionResponse,
    __MetadataBearer {}

/**
 * <p>
 * Updates the description of an annotation store version.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, UpdateAnnotationStoreVersionCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, UpdateAnnotationStoreVersionCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new OmicsClient(config);
 * const input = { // UpdateAnnotationStoreVersionRequest
 *   name: "STRING_VALUE", // required
 *   versionName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 * };
 * const command = new UpdateAnnotationStoreVersionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAnnotationStoreVersionResponse
 * //   storeId: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   versionName: "STRING_VALUE", // required
 * //   description: "STRING_VALUE", // required
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   updateTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateAnnotationStoreVersionCommandInput - {@link UpdateAnnotationStoreVersionCommandInput}
 * @returns {@link UpdateAnnotationStoreVersionCommandOutput}
 * @see {@link UpdateAnnotationStoreVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateAnnotationStoreVersionCommandOutput} for command's `response` shape.
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
export class UpdateAnnotationStoreVersionCommand extends $Command
  .classBuilder<
    UpdateAnnotationStoreVersionCommandInput,
    UpdateAnnotationStoreVersionCommandOutput,
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
  .s("Omics", "UpdateAnnotationStoreVersion", {})
  .n("OmicsClient", "UpdateAnnotationStoreVersionCommand")
  .f(void 0, void 0)
  .ser(se_UpdateAnnotationStoreVersionCommand)
  .de(de_UpdateAnnotationStoreVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAnnotationStoreVersionRequest;
      output: UpdateAnnotationStoreVersionResponse;
    };
    sdk: {
      input: UpdateAnnotationStoreVersionCommandInput;
      output: UpdateAnnotationStoreVersionCommandOutput;
    };
  };
}
