// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteFieldRequest, DeleteFieldResponse } from "../models/models_0";
import { DeleteField$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteFieldCommand}.
 */
export interface DeleteFieldCommandInput extends DeleteFieldRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFieldCommand}.
 */
export interface DeleteFieldCommandOutput extends DeleteFieldResponse, __MetadataBearer {}

/**
 * Deletes a field from a cases template.
 *
 * After a field is deleted:
 *
 * - You can still retrieve the field by calling `BatchGetField`.
 * - You cannot update a deleted field by calling `UpdateField`; it throws a `ValidationException`.
 * - Deleted fields are not included in the `ListFields` response.
 * - Calling `CreateCase` with a deleted field throws a `ValidationException` denoting which field identifiers in the request have been deleted.
 * - Calling `GetCase` with a deleted field identifier returns the deleted field's value if one exists.
 * - Calling `UpdateCase` with a deleted field ID throws a `ValidationException` if the case does not already contain a value for the deleted field. Otherwise it succeeds, allowing you to update or remove (using `emptyValue: \{\}`) the field's value from the case.
 * - `GetTemplate` does not return field IDs for deleted fields.
 * - `GetLayout` does not return field IDs for deleted fields.
 * - Calling `SearchCases` with the deleted field ID as a filter returns any cases that have a value for the deleted field that matches the filter criteria.
 * - Calling `SearchCases` with a `searchTerm` value that matches a deleted field's value on a case returns the case in the response.
 * - Calling `BatchPutFieldOptions` with a deleted field ID throw a `ValidationException`.
 * - Calling `GetCaseEventConfiguration` does not return field IDs for deleted fields.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, DeleteFieldCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, DeleteFieldCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * // import type { ConnectCasesClientConfig } from "@aws-sdk/client-connectcases";
 * const config = {}; // type is ConnectCasesClientConfig
 * const client = new ConnectCasesClient(config);
 * const input = { // DeleteFieldRequest
 *   domainId: "STRING_VALUE", // required
 *   fieldId: "STRING_VALUE", // required
 * };
 * const command = new DeleteFieldCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFieldCommandInput - {@link DeleteFieldCommandInput}
 * @returns {@link DeleteFieldCommandOutput}
 * @see {@link DeleteFieldCommandInput} for command's `input` shape.
 * @see {@link DeleteFieldCommandOutput} for command's `response` shape.
 * @see {@link ConnectCasesClientResolvedConfig | config} for ConnectCasesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request. See the accompanying error message for details.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * We couldn't process your request because of an issue with the server. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * We couldn't find the requested resource. Check that your resources exists and were created in the same Amazon Web Services Region as your request, and try your request again.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The service quota has been exceeded. For a list of service quotas, see [Amazon Connect Service Quotas](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html) in the *Amazon Connect Administrator Guide*.
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
export class DeleteFieldCommand extends command<DeleteFieldCommandInput, DeleteFieldCommandOutput>(
  _ep0,
  _mw0,
  "DeleteField",
  DeleteField$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFieldRequest;
      output: {};
    };
    sdk: {
      input: DeleteFieldCommandInput;
      output: DeleteFieldCommandOutput;
    };
  };
}
