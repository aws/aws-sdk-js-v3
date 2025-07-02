// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectCasesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCasesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteFieldRequest, DeleteFieldResponse } from "../models/models_0";
import { de_DeleteFieldCommand, se_DeleteFieldCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes a field from a cases template. You can delete up to 100 fields per domain.</p> <p>After a field is deleted:</p> <ul> <li> <p>You can still retrieve the field by calling <code>BatchGetField</code>.</p> </li> <li> <p>You cannot update a deleted field by calling <code>UpdateField</code>; it throws a <code>ValidationException</code>.</p> </li> <li> <p>Deleted fields are not included in the <code>ListFields</code> response.</p> </li> <li> <p>Calling <code>CreateCase</code> with a deleted field throws a <code>ValidationException</code> denoting which field IDs in the request have been deleted.</p> </li> <li> <p>Calling <code>GetCase</code> with a deleted field ID returns the deleted field's value if one exists.</p> </li> <li> <p>Calling <code>UpdateCase</code> with a deleted field ID throws a <code>ValidationException</code> if the case does not already contain a value for the deleted field. Otherwise it succeeds, allowing you to update or remove (using <code>emptyValue: \{\}</code>) the field's value from the case.</p> </li> <li> <p> <code>GetTemplate</code> does not return field IDs for deleted fields.</p> </li> <li> <p> <code>GetLayout</code> does not return field IDs for deleted fields.</p> </li> <li> <p>Calling <code>SearchCases</code> with the deleted field ID as a filter returns any cases that have a value for the deleted field that matches the filter criteria.</p> </li> <li> <p>Calling <code>SearchCases</code> with a <code>searchTerm</code> value that matches a deleted field's value on a case returns the case in the response.</p> </li> <li> <p>Calling <code>BatchPutFieldOptions</code> with a deleted field ID throw a <code>ValidationException</code>.</p> </li> <li> <p>Calling <code>GetCaseEventConfiguration</code> does not return field IDs for deleted fields.</p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, DeleteFieldCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, DeleteFieldCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request. See the accompanying error message for details.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>We couldn't process your request because of an issue with the server. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We couldn't find the requested resource. Check that your resources exists and were created in the same Amazon Web Services Region as your request, and try your request again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded. For a list of service quotas, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">Amazon Connect Service Quotas</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate has been exceeded for this API. Please try again after a few minutes.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. Check the syntax and try again.</p>
 *
 * @throws {@link ConnectCasesServiceException}
 * <p>Base exception class for all service exceptions from ConnectCases service.</p>
 *
 *
 * @public
 */
export class DeleteFieldCommand extends $Command
  .classBuilder<
    DeleteFieldCommandInput,
    DeleteFieldCommandOutput,
    ConnectCasesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectCasesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectCases", "DeleteField", {})
  .n("ConnectCasesClient", "DeleteFieldCommand")
  .f(void 0, void 0)
  .ser(se_DeleteFieldCommand)
  .de(de_DeleteFieldCommand)
  .build() {
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
