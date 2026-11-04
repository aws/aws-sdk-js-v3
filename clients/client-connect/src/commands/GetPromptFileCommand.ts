// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetPromptFileRequest, GetPromptFileResponse } from "../models/models_2";
import { GetPromptFile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetPromptFileCommand}.
 */
export interface GetPromptFileCommandInput extends GetPromptFileRequest {}
/**
 * @public
 *
 * The output of {@link GetPromptFileCommand}.
 */
export interface GetPromptFileCommandOutput extends GetPromptFileResponse, __MetadataBearer {}

/**
 * Gets the prompt file.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, GetPromptFileCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, GetPromptFileCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // GetPromptFileRequest
 *   InstanceId: "STRING_VALUE", // required
 *   PromptId: "STRING_VALUE", // required
 * };
 * const command = new GetPromptFileCommand(input);
 * const response = await client.send(command);
 * // { // GetPromptFileResponse
 * //   PromptPresignedUrl: "STRING_VALUE",
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   LastModifiedRegion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetPromptFileCommandInput - {@link GetPromptFileCommandInput}
 * @returns {@link GetPromptFileCommandOutput}
 * @see {@link GetPromptFileCommandInput} for command's `input` shape.
 * @see {@link GetPromptFileCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class GetPromptFileCommand extends command<GetPromptFileCommandInput, GetPromptFileCommandOutput>(
  _ep0,
  _mw0,
  "GetPromptFile",
  GetPromptFile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPromptFileRequest;
      output: GetPromptFileResponse;
    };
    sdk: {
      input: GetPromptFileCommandInput;
      output: GetPromptFileCommandOutput;
    };
  };
}
