// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateContentRequest,
  UpdateContentResponse,
  UpdateContentResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateContentCommand, se_UpdateContentCommand } from "../protocols/Aws_restJson1";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateContentCommand}.
 */
export interface UpdateContentCommandInput extends UpdateContentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateContentCommand}.
 */
export interface UpdateContentCommandOutput extends UpdateContentResponse, __MetadataBearer {}

/**
 * <p>Updates information about the content.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, UpdateContentCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, UpdateContentCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * const client = new QConnectClient(config);
 * const input = { // UpdateContentRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   contentId: "STRING_VALUE", // required
 *   revisionId: "STRING_VALUE",
 *   title: "STRING_VALUE",
 *   overrideLinkOutUri: "STRING_VALUE",
 *   removeOverrideLinkOutUri: true || false,
 *   metadata: { // ContentMetadata
 *     "<keys>": "STRING_VALUE",
 *   },
 *   uploadId: "STRING_VALUE",
 * };
 * const command = new UpdateContentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateContentResponse
 * //   content: { // ContentData
 * //     contentArn: "STRING_VALUE", // required
 * //     contentId: "STRING_VALUE", // required
 * //     knowledgeBaseArn: "STRING_VALUE", // required
 * //     knowledgeBaseId: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     revisionId: "STRING_VALUE", // required
 * //     title: "STRING_VALUE", // required
 * //     contentType: "STRING_VALUE", // required
 * //     status: "STRING_VALUE", // required
 * //     metadata: { // ContentMetadata // required
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     linkOutUri: "STRING_VALUE",
 * //     url: "STRING_VALUE", // required
 * //     urlExpiry: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateContentCommandInput - {@link UpdateContentCommandInput}
 * @returns {@link UpdateContentCommandOutput}
 * @see {@link UpdateContentCommandInput} for command's `input` shape.
 * @see {@link UpdateContentCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *  <p>The provided <code>revisionId</code> does not match, indicating the content has been modified since it was last read.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link QConnectServiceException}
 * <p>Base exception class for all service exceptions from QConnect service.</p>
 *
 *
 * @public
 */
export class UpdateContentCommand extends $Command
  .classBuilder<
    UpdateContentCommandInput,
    UpdateContentCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WisdomService", "UpdateContent", {})
  .n("QConnectClient", "UpdateContentCommand")
  .f(void 0, UpdateContentResponseFilterSensitiveLog)
  .ser(se_UpdateContentCommand)
  .de(de_UpdateContentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateContentRequest;
      output: UpdateContentResponse;
    };
    sdk: {
      input: UpdateContentCommandInput;
      output: UpdateContentCommandOutput;
    };
  };
}
