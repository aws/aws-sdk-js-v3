// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateContentRequest, UpdateContentResponse } from "../models/models_0";
import { UpdateContent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates information about the content.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, UpdateContentCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, UpdateContentCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *
 * The provided `revisionId` does not match, indicating the content has been modified since it was last read.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by a service.
 *
 * @throws {@link QConnectServiceException}
 *
 * Base exception class for all service exceptions from QConnect service.
 *
 * @public
 */
export class UpdateContentCommand extends command<UpdateContentCommandInput, UpdateContentCommandOutput>(
  _ep0,
  _mw0,
  "UpdateContent",
  UpdateContent$
) {
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
