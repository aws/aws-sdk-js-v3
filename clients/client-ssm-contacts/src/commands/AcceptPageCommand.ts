// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AcceptPageRequest, AcceptPageResult } from "../models/models_0";
import { de_AcceptPageCommand, se_AcceptPageCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AcceptPageCommand}.
 */
export interface AcceptPageCommandInput extends AcceptPageRequest {}
/**
 * @public
 *
 * The output of {@link AcceptPageCommand}.
 */
export interface AcceptPageCommandOutput extends AcceptPageResult, __MetadataBearer {}

/**
 * <p>Used to acknowledge an engagement to a contact channel during an incident.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, AcceptPageCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, AcceptPageCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const input = { // AcceptPageRequest
 *   PageId: "STRING_VALUE", // required
 *   ContactChannelId: "STRING_VALUE",
 *   AcceptType: "DELIVERED" || "READ", // required
 *   Note: "STRING_VALUE",
 *   AcceptCode: "STRING_VALUE", // required
 *   AcceptCodeValidation: "IGNORE" || "ENFORCE",
 * };
 * const command = new AcceptPageCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AcceptPageCommandInput - {@link AcceptPageCommandInput}
 * @returns {@link AcceptPageCommandOutput}
 * @see {@link AcceptPageCommandInput} for command's `input` shape.
 * @see {@link AcceptPageCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *          service.</p>
 *
 * @throws {@link SSMContactsServiceException}
 * <p>Base exception class for all service exceptions from SSMContacts service.</p>
 *
 * @public
 */
export class AcceptPageCommand extends $Command
  .classBuilder<
    AcceptPageCommandInput,
    AcceptPageCommandOutput,
    SSMContactsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SSMContactsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SSMContacts", "AcceptPage", {})
  .n("SSMContactsClient", "AcceptPageCommand")
  .f(void 0, void 0)
  .ser(se_AcceptPageCommand)
  .de(de_AcceptPageCommand)
  .build() {}
