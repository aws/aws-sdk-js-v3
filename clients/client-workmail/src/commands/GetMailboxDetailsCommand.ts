// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetMailboxDetailsRequest, GetMailboxDetailsResponse } from "../models/models_0";
import { GetMailboxDetails } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMailboxDetailsCommand}.
 */
export interface GetMailboxDetailsCommandInput extends GetMailboxDetailsRequest {}
/**
 * @public
 *
 * The output of {@link GetMailboxDetailsCommand}.
 */
export interface GetMailboxDetailsCommandOutput extends GetMailboxDetailsResponse, __MetadataBearer {}

/**
 * <p>Requests a user's mailbox details for a specified organization and user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, GetMailboxDetailsCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, GetMailboxDetailsCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // GetMailboxDetailsRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE", // required
 * };
 * const command = new GetMailboxDetailsCommand(input);
 * const response = await client.send(command);
 * // { // GetMailboxDetailsResponse
 * //   MailboxQuota: Number("int"),
 * //   MailboxSize: Number("double"),
 * // };
 *
 * ```
 *
 * @param GetMailboxDetailsCommandInput - {@link GetMailboxDetailsCommandInput}
 * @returns {@link GetMailboxDetailsCommandOutput}
 * @see {@link GetMailboxDetailsCommandInput} for command's `input` shape.
 * @see {@link GetMailboxDetailsCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>The identifier supplied for the user, group, or resource does not exist in your
 *          organization.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 *
 * @throws {@link OrganizationStateException} (client fault)
 *  <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 *
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 *
 * @public
 */
export class GetMailboxDetailsCommand extends $Command
  .classBuilder<
    GetMailboxDetailsCommandInput,
    GetMailboxDetailsCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkMailService", "GetMailboxDetails", {})
  .n("WorkMailClient", "GetMailboxDetailsCommand")
  .sc(GetMailboxDetails)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMailboxDetailsRequest;
      output: GetMailboxDetailsResponse;
    };
    sdk: {
      input: GetMailboxDetailsCommandInput;
      output: GetMailboxDetailsCommandOutput;
    };
  };
}
