// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteCaseRequest, DeleteCaseResponse } from "../models/models_0";
import { DeleteCase$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteCaseCommand}.
 */
export interface DeleteCaseCommandInput extends DeleteCaseRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCaseCommand}.
 */
export interface DeleteCaseCommandOutput extends DeleteCaseResponse, __MetadataBearer {}

/**
 * The DeleteCase API permanently deletes a case and all its associated resources from the cases data store. After a successful deletion, you cannot:
 *
 * - Retrieve related items
 * - Access audit history
 * - Perform any operations that require the CaseID
 *
 * > **Important:** This action is irreversible. After you delete a case, you cannot recover its data.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, DeleteCaseCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, DeleteCaseCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * // import type { ConnectCasesClientConfig } from "@aws-sdk/client-connectcases";
 * const config = {}; // type is ConnectCasesClientConfig
 * const client = new ConnectCasesClient(config);
 * const input = { // DeleteCaseRequest
 *   domainId: "STRING_VALUE", // required
 *   caseId: "STRING_VALUE", // required
 * };
 * const command = new DeleteCaseCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCaseCommandInput - {@link DeleteCaseCommandInput}
 * @returns {@link DeleteCaseCommandOutput}
 * @see {@link DeleteCaseCommandInput} for command's `input` shape.
 * @see {@link DeleteCaseCommandOutput} for command's `response` shape.
 * @see {@link ConnectCasesClientResolvedConfig | config} for ConnectCasesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * We couldn't process your request because of an issue with the server. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * We couldn't find the requested resource. Check that your resources exists and were created in the same Amazon Web Services Region as your request, and try your request again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate has been exceeded for this API. Please try again after a few minutes.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request isn't valid. Check the syntax and try again.
 *
 * @throws {@link ConnectCasesServiceException}
 *
 * Base exception class for all service exceptions from ConnectCases service.
 *
 * @public
 */
export class DeleteCaseCommand extends command<DeleteCaseCommandInput, DeleteCaseCommandOutput>(
  _ep0,
  _mw0,
  "DeleteCase",
  DeleteCase$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCaseRequest;
      output: {};
    };
    sdk: {
      input: DeleteCaseCommandInput;
      output: DeleteCaseCommandOutput;
    };
  };
}
