// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteVocabularyRequest, DeleteVocabularyResponse } from "../models/models_1";
import { DeleteVocabulary } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteVocabularyCommand}.
 */
export interface DeleteVocabularyCommandInput extends DeleteVocabularyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVocabularyCommand}.
 */
export interface DeleteVocabularyCommandOutput extends DeleteVocabularyResponse, __MetadataBearer {}

/**
 * <p>Deletes the vocabulary that has the given identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeleteVocabularyCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeleteVocabularyCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DeleteVocabularyRequest
 *   InstanceId: "STRING_VALUE", // required
 *   VocabularyId: "STRING_VALUE", // required
 * };
 * const command = new DeleteVocabularyCommand(input);
 * const response = await client.send(command);
 * // { // DeleteVocabularyResponse
 * //   VocabularyArn: "STRING_VALUE", // required
 * //   VocabularyId: "STRING_VALUE", // required
 * //   State: "CREATION_IN_PROGRESS" || "ACTIVE" || "CREATION_FAILED" || "DELETE_IN_PROGRESS", // required
 * // };
 *
 * ```
 *
 * @param DeleteVocabularyCommandInput - {@link DeleteVocabularyCommandInput}
 * @returns {@link DeleteVocabularyCommandOutput}
 * @see {@link DeleteVocabularyCommandInput} for command's `input` shape.
 * @see {@link DeleteVocabularyCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>That resource is already in use (for example, you're trying to add a record with the same name as an existing
 *    record). If you are trying to delete a resource (for example, DeleteHoursOfOperation or DeletePredefinedAttribute),
 *    remove its reference from related resources and then try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class DeleteVocabularyCommand extends $Command
  .classBuilder<
    DeleteVocabularyCommandInput,
    DeleteVocabularyCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "DeleteVocabulary", {})
  .n("ConnectClient", "DeleteVocabularyCommand")
  .sc(DeleteVocabulary)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVocabularyRequest;
      output: DeleteVocabularyResponse;
    };
    sdk: {
      input: DeleteVocabularyCommandInput;
      output: DeleteVocabularyCommandOutput;
    };
  };
}
