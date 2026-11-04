// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CompleteAttachedFileUploadRequest, CompleteAttachedFileUploadResponse } from "../models/models_0";
import { CompleteAttachedFileUpload$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CompleteAttachedFileUploadCommand}.
 */
export interface CompleteAttachedFileUploadCommandInput extends CompleteAttachedFileUploadRequest {}
/**
 * @public
 *
 * The output of {@link CompleteAttachedFileUploadCommand}.
 */
export interface CompleteAttachedFileUploadCommandOutput extends CompleteAttachedFileUploadResponse, __MetadataBearer {}

/**
 * Allows you to confirm that the attached file has been uploaded using the pre-signed URL provided in the StartAttachedFileUpload API.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CompleteAttachedFileUploadCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CompleteAttachedFileUploadCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // CompleteAttachedFileUploadRequest
 *   InstanceId: "STRING_VALUE", // required
 *   FileId: "STRING_VALUE", // required
 *   AssociatedResourceArn: "STRING_VALUE", // required
 * };
 * const command = new CompleteAttachedFileUploadCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CompleteAttachedFileUploadCommandInput - {@link CompleteAttachedFileUploadCommandInput}
 * @returns {@link CompleteAttachedFileUploadCommandOutput}
 * @see {@link CompleteAttachedFileUploadCommandInput} for command's `input` shape.
 * @see {@link CompleteAttachedFileUploadCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
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
export class CompleteAttachedFileUploadCommand extends command<CompleteAttachedFileUploadCommandInput, CompleteAttachedFileUploadCommandOutput>(
  _ep0,
  _mw0,
  "CompleteAttachedFileUpload",
  CompleteAttachedFileUpload$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CompleteAttachedFileUploadRequest;
      output: {};
    };
    sdk: {
      input: CompleteAttachedFileUploadCommandInput;
      output: CompleteAttachedFileUploadCommandOutput;
    };
  };
}
