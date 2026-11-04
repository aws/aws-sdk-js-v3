// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateDocumentDefaultVersionRequest, UpdateDocumentDefaultVersionResult } from "../models/models_1";
import { UpdateDocumentDefaultVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateDocumentDefaultVersionCommand}.
 */
export interface UpdateDocumentDefaultVersionCommandInput extends UpdateDocumentDefaultVersionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDocumentDefaultVersionCommand}.
 */
export interface UpdateDocumentDefaultVersionCommandOutput extends UpdateDocumentDefaultVersionResult, __MetadataBearer {}

/**
 * Set the default version of a document.
 *
 * > **Note:** If you change a document version for a State Manager association, Systems Manager immediately runs the association unless you previously specifed the `apply-only-at-cron-interval` parameter.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateDocumentDefaultVersionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateDocumentDefaultVersionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // UpdateDocumentDefaultVersionRequest
 *   Name: "STRING_VALUE", // required
 *   DocumentVersion: "STRING_VALUE", // required
 * };
 * const command = new UpdateDocumentDefaultVersionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDocumentDefaultVersionResult
 * //   Description: { // DocumentDefaultVersionDescription
 * //     Name: "STRING_VALUE",
 * //     DefaultVersion: "STRING_VALUE",
 * //     DefaultVersionName: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateDocumentDefaultVersionCommandInput - {@link UpdateDocumentDefaultVersionCommandInput}
 * @returns {@link UpdateDocumentDefaultVersionCommandOutput}
 * @see {@link UpdateDocumentDefaultVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateDocumentDefaultVersionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An error occurred on the server side.
 *
 * @throws {@link InvalidDocument} (client fault)
 *
 * The specified SSM document doesn't exist.
 *
 * @throws {@link InvalidDocumentSchemaVersion} (client fault)
 *
 * The version of the document schema isn't supported.
 *
 * @throws {@link InvalidDocumentVersion} (client fault)
 *
 * The document version isn't valid or doesn't exist.
 *
 * @throws {@link SSMServiceException}
 *
 * Base exception class for all service exceptions from SSM service.
 *
 * @public
 */
export class UpdateDocumentDefaultVersionCommand extends command<UpdateDocumentDefaultVersionCommandInput, UpdateDocumentDefaultVersionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateDocumentDefaultVersion",
  UpdateDocumentDefaultVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDocumentDefaultVersionRequest;
      output: UpdateDocumentDefaultVersionResult;
    };
    sdk: {
      input: UpdateDocumentDefaultVersionCommandInput;
      output: UpdateDocumentDefaultVersionCommandOutput;
    };
  };
}
