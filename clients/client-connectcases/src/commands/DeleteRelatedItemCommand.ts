// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectCasesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCasesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteRelatedItemRequest, DeleteRelatedItemResponse } from "../models/models_0";
import { DeleteRelatedItem } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes the related item resource under a case.</p> <note> <p>This API cannot be used on a FILE type related attachment. To delete this type of file, use the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteAttachedFile.html">DeleteAttachedFile</a> API</p> </note>
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
export class DeleteRelatedItemCommand extends $Command
  .classBuilder<
    DeleteRelatedItemCommandInput,
    DeleteRelatedItemCommandOutput,
    ConnectCasesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectCasesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectCases", "DeleteRelatedItem", {})
  .n("ConnectCasesClient", "DeleteRelatedItemCommand")
  .sc(DeleteRelatedItem)
  .build() {
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
