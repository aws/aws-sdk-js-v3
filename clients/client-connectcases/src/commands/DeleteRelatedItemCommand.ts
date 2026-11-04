// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRelatedItemRequest, DeleteRelatedItemResponse } from "../models/models_0";
import { DeleteRelatedItem$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteRelatedItemCommand}.
 */
export interface DeleteRelatedItemCommandInput extends DeleteRelatedItemRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRelatedItemCommand}.
 */
export interface DeleteRelatedItemCommandOutput extends DeleteRelatedItemResponse, __MetadataBearer {}

/**
 * Deletes the related item resource under a case.
 *
 * > **Note:** This API cannot be used on a FILE type related attachment. To delete this type of file, use the [DeleteAttachedFile](https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteAttachedFile.html) API
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, DeleteRelatedItemCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, DeleteRelatedItemCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * // import type { ConnectCasesClientConfig } from "@aws-sdk/client-connectcases";
 * const config = {}; // type is ConnectCasesClientConfig
 * const client = new ConnectCasesClient(config);
 * const input = { // DeleteRelatedItemRequest
 *   domainId: "STRING_VALUE", // required
 *   caseId: "STRING_VALUE", // required
 *   relatedItemId: "STRING_VALUE", // required
 * };
 * const command = new DeleteRelatedItemCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRelatedItemCommandInput - {@link DeleteRelatedItemCommandInput}
 * @returns {@link DeleteRelatedItemCommandOutput}
 * @see {@link DeleteRelatedItemCommandInput} for command's `input` shape.
 * @see {@link DeleteRelatedItemCommandOutput} for command's `response` shape.
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
export class DeleteRelatedItemCommand extends command<DeleteRelatedItemCommandInput, DeleteRelatedItemCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRelatedItem",
  DeleteRelatedItem$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRelatedItemRequest;
      output: {};
    };
    sdk: {
      input: DeleteRelatedItemCommandInput;
      output: DeleteRelatedItemCommandOutput;
    };
  };
}
