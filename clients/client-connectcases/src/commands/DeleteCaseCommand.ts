// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectCasesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCasesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteCaseRequest, DeleteCaseResponse } from "../models/models_0";
import { DeleteCase } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p> The DeleteCase API permanently deletes a case and all its associated resources from the cases data store. After a successful deletion, you cannot:</p> <ul> <li> <p>Retrieve related items</p> </li> <li> <p>Access audit history</p> </li> <li> <p>Perform any operations that require the CaseID</p> </li> </ul> <important> <p>This action is irreversible. After you delete a case, you cannot recover its data.</p> </important>
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>We couldn't process your request because of an issue with the server. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We couldn't find the requested resource. Check that your resources exists and were created in the same Amazon Web Services Region as your request, and try your request again.</p>
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
export class DeleteCaseCommand extends $Command
  .classBuilder<
    DeleteCaseCommandInput,
    DeleteCaseCommandOutput,
    ConnectCasesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectCasesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectCases", "DeleteCase", {})
  .n("ConnectCasesClient", "DeleteCaseCommand")
  .sc(DeleteCase)
  .build() {
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
