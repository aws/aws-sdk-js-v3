// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteImportJobRequest, DeleteImportJobResponse } from "../models/models_1";
import { DeleteImportJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteImportJobCommand}.
 */
export interface DeleteImportJobCommandInput extends DeleteImportJobRequest {}
/**
 * @public
 *
 * The output of {@link DeleteImportJobCommand}.
 */
export interface DeleteImportJobCommandOutput extends DeleteImportJobResponse, __MetadataBearer {}

/**
 * Deletes the quick response import job.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, DeleteImportJobCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, DeleteImportJobCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // DeleteImportJobRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   importJobId: "STRING_VALUE", // required
 * };
 * const command = new DeleteImportJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteImportJobCommandInput - {@link DeleteImportJobCommandInput}
 * @returns {@link DeleteImportJobCommandOutput}
 * @see {@link DeleteImportJobCommandInput} for command's `input` shape.
 * @see {@link DeleteImportJobCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be processed because of conflict in the current state of the resource. For example, if you're using a `Create` API (such as `CreateAssistant`) that accepts name, a conflicting resource (usually with the same name) is being created or mutated.
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
export class DeleteImportJobCommand extends command<DeleteImportJobCommandInput, DeleteImportJobCommandOutput>(
  _ep0,
  _mw0,
  "DeleteImportJob",
  DeleteImportJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteImportJobRequest;
      output: {};
    };
    sdk: {
      input: DeleteImportJobCommandInput;
      output: DeleteImportJobCommandOutput;
    };
  };
}
