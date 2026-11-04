// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartContentUploadRequest, StartContentUploadResponse } from "../models/models_1";
import { StartContentUpload$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartContentUploadCommand}.
 */
export interface StartContentUploadCommandInput extends StartContentUploadRequest {}
/**
 * @public
 *
 * The output of {@link StartContentUploadCommand}.
 */
export interface StartContentUploadCommandOutput extends StartContentUploadResponse, __MetadataBearer {}

/**
 * Get a URL to upload content to a knowledge base. To upload content, first make a PUT request to the returned URL with your file, making sure to include the required headers. Then use [CreateContent](https://docs.aws.amazon.com/amazon-q-connect/latest/APIReference/API_CreateContent.html) to finalize the content creation process or [UpdateContent](https://docs.aws.amazon.com/amazon-q-connect/latest/APIReference/API_UpdateContent.html) to modify an existing resource. You can only upload content to a knowledge base of type CUSTOM.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, StartContentUploadCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, StartContentUploadCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // StartContentUploadRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   contentType: "STRING_VALUE", // required
 *   presignedUrlTimeToLive: Number("int"),
 * };
 * const command = new StartContentUploadCommand(input);
 * const response = await client.send(command);
 * // { // StartContentUploadResponse
 * //   uploadId: "STRING_VALUE", // required
 * //   url: "STRING_VALUE", // required
 * //   urlExpiry: new Date("TIMESTAMP"), // required
 * //   headersToInclude: { // Headers // required
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param StartContentUploadCommandInput - {@link StartContentUploadCommandInput}
 * @returns {@link StartContentUploadCommandOutput}
 * @see {@link StartContentUploadCommandInput} for command's `input` shape.
 * @see {@link StartContentUploadCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
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
export class StartContentUploadCommand extends command<StartContentUploadCommandInput, StartContentUploadCommandOutput>(
  _ep0,
  _mw0,
  "StartContentUpload",
  StartContentUpload$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartContentUploadRequest;
      output: StartContentUploadResponse;
    };
    sdk: {
      input: StartContentUploadCommandInput;
      output: StartContentUploadCommandOutput;
    };
  };
}
