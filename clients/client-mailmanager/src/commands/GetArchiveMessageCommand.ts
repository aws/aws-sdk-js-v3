// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import type { GetArchiveMessageRequest, GetArchiveMessageResponse } from "../models/models_0";
import { GetArchiveMessage } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetArchiveMessageCommand}.
 */
export interface GetArchiveMessageCommandInput extends GetArchiveMessageRequest {}
/**
 * @public
 *
 * The output of {@link GetArchiveMessageCommand}.
 */
export interface GetArchiveMessageCommandOutput extends GetArchiveMessageResponse, __MetadataBearer {}

/**
 * <p>Returns a pre-signed URL that provides temporary download access to the specific email message stored in the archive. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, GetArchiveMessageCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, GetArchiveMessageCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * // import type { MailManagerClientConfig } from "@aws-sdk/client-mailmanager";
 * const config = {}; // type is MailManagerClientConfig
 * const client = new MailManagerClient(config);
 * const input = { // GetArchiveMessageRequest
 *   ArchivedMessageId: "STRING_VALUE", // required
 * };
 * const command = new GetArchiveMessageCommand(input);
 * const response = await client.send(command);
 * // { // GetArchiveMessageResponse
 * //   MessageDownloadLink: "STRING_VALUE",
 * //   Metadata: { // Metadata
 * //     Timestamp: new Date("TIMESTAMP"),
 * //     IngressPointId: "STRING_VALUE",
 * //     TrafficPolicyId: "STRING_VALUE",
 * //     RuleSetId: "STRING_VALUE",
 * //     SenderHostname: "STRING_VALUE",
 * //     SenderIpAddress: "STRING_VALUE",
 * //     TlsCipherSuite: "STRING_VALUE",
 * //     TlsProtocol: "STRING_VALUE",
 * //     SendingMethod: "STRING_VALUE",
 * //     SourceIdentity: "STRING_VALUE",
 * //     SendingPool: "STRING_VALUE",
 * //     ConfigurationSet: "STRING_VALUE",
 * //     SourceArn: "STRING_VALUE",
 * //   },
 * //   Envelope: { // Envelope
 * //     Helo: "STRING_VALUE",
 * //     From: "STRING_VALUE",
 * //     To: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetArchiveMessageCommandInput - {@link GetArchiveMessageCommandInput}
 * @returns {@link GetArchiveMessageCommandOutput}
 * @see {@link GetArchiveMessageCommandInput} for command's `input` shape.
 * @see {@link GetArchiveMessageCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Occurs when a user is denied access to a specific resource or action.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Occurs when a service's request rate limit is exceeded, resulting in throttling of further requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request validation has failed. For details, see the accompanying error message.</p>
 *
 * @throws {@link MailManagerServiceException}
 * <p>Base exception class for all service exceptions from MailManager service.</p>
 *
 *
 * @public
 */
export class GetArchiveMessageCommand extends $Command
  .classBuilder<
    GetArchiveMessageCommandInput,
    GetArchiveMessageCommandOutput,
    MailManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MailManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MailManagerSvc", "GetArchiveMessage", {})
  .n("MailManagerClient", "GetArchiveMessageCommand")
  .sc(GetArchiveMessage)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetArchiveMessageRequest;
      output: GetArchiveMessageResponse;
    };
    sdk: {
      input: GetArchiveMessageCommandInput;
      output: GetArchiveMessageCommandOutput;
    };
  };
}
