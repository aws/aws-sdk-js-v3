// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListContactReferencesRequest, ListContactReferencesResponse } from "../models/models_2";
import { de_ListContactReferencesCommand, se_ListContactReferencesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListContactReferencesCommand}.
 */
export interface ListContactReferencesCommandInput extends ListContactReferencesRequest {}
/**
 * @public
 *
 * The output of {@link ListContactReferencesCommand}.
 */
export interface ListContactReferencesCommandOutput extends ListContactReferencesResponse, __MetadataBearer {}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>For the specified <code>referenceTypes</code>, returns a list of references associated with
 *    the contact. <i>References</i> are links to documents that are related to a
 *    contact, such as emails, attachments, or URLs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListContactReferencesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListContactReferencesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListContactReferencesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactId: "STRING_VALUE", // required
 *   ReferenceTypes: [ // ReferenceTypes // required
 *     "URL" || "ATTACHMENT" || "CONTACT_ANALYSIS" || "NUMBER" || "STRING" || "DATE" || "EMAIL" || "EMAIL_MESSAGE",
 *   ],
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListContactReferencesCommand(input);
 * const response = await client.send(command);
 * // { // ListContactReferencesResponse
 * //   ReferenceSummaryList: [ // ReferenceSummaryList
 * //     { // ReferenceSummary Union: only one key present
 * //       Url: { // UrlReference
 * //         Name: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //       Attachment: { // AttachmentReference
 * //         Name: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //         Status: "AVAILABLE" || "DELETED" || "APPROVED" || "REJECTED" || "PROCESSING" || "FAILED",
 * //         Arn: "STRING_VALUE",
 * //       },
 * //       EmailMessage: { // EmailMessageReference
 * //         Name: "STRING_VALUE",
 * //         Arn: "STRING_VALUE",
 * //       },
 * //       String: { // StringReference
 * //         Name: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //       Number: { // NumberReference
 * //         Name: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //       Date: { // DateReference
 * //         Name: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //       Email: { // EmailReference
 * //         Name: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListContactReferencesCommandInput - {@link ListContactReferencesCommandInput}
 * @returns {@link ListContactReferencesCommandOutput}
 * @see {@link ListContactReferencesCommandInput} for command's `input` shape.
 * @see {@link ListContactReferencesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
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
export class ListContactReferencesCommand extends $Command
  .classBuilder<
    ListContactReferencesCommandInput,
    ListContactReferencesCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "ListContactReferences", {})
  .n("ConnectClient", "ListContactReferencesCommand")
  .f(void 0, void 0)
  .ser(se_ListContactReferencesCommand)
  .de(de_ListContactReferencesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListContactReferencesRequest;
      output: ListContactReferencesResponse;
    };
    sdk: {
      input: ListContactReferencesCommandInput;
      output: ListContactReferencesCommandOutput;
    };
  };
}
