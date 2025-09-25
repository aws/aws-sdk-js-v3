// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectCasesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCasesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateLayoutRequest, UpdateLayoutResponse } from "../models/models_0";
import { UpdateLayout } from "../schemas/schemas_3_Create";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateLayoutCommand}.
 */
export interface UpdateLayoutCommandInput extends UpdateLayoutRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLayoutCommand}.
 */
export interface UpdateLayoutCommandOutput extends UpdateLayoutResponse, __MetadataBearer {}

/**
 * <p>Updates the attributes of an existing layout.</p> <p>If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.</p> <p>A <code>ValidationException</code> is returned when you add non-existent <code>fieldIds</code> to a layout.</p> <note> <p>Title and Status fields cannot be part of layouts because they are not configurable.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, UpdateLayoutCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, UpdateLayoutCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * // import type { ConnectCasesClientConfig } from "@aws-sdk/client-connectcases";
 * const config = {}; // type is ConnectCasesClientConfig
 * const client = new ConnectCasesClient(config);
 * const input = { // UpdateLayoutRequest
 *   domainId: "STRING_VALUE", // required
 *   layoutId: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   content: { // LayoutContent Union: only one key present
 *     basic: { // BasicLayout
 *       topPanel: { // LayoutSections
 *         sections: [ // SectionsList
 *           { // Section Union: only one key present
 *             fieldGroup: { // FieldGroup
 *               name: "STRING_VALUE",
 *               fields: [ // FieldList // required
 *                 { // FieldItem
 *                   id: "STRING_VALUE", // required
 *                 },
 *               ],
 *             },
 *           },
 *         ],
 *       },
 *       moreInfo: {
 *         sections: [
 *           {//  Union: only one key present
 *             fieldGroup: {
 *               name: "STRING_VALUE",
 *               fields: [ // required
 *                 {
 *                   id: "STRING_VALUE", // required
 *                 },
 *               ],
 *             },
 *           },
 *         ],
 *       },
 *     },
 *   },
 * };
 * const command = new UpdateLayoutCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateLayoutCommandInput - {@link UpdateLayoutCommandInput}
 * @returns {@link UpdateLayoutCommandOutput}
 * @see {@link UpdateLayoutCommandInput} for command's `input` shape.
 * @see {@link UpdateLayoutCommandOutput} for command's `response` shape.
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
export class UpdateLayoutCommand extends $Command
  .classBuilder<
    UpdateLayoutCommandInput,
    UpdateLayoutCommandOutput,
    ConnectCasesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectCasesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectCases", "UpdateLayout", {})
  .n("ConnectCasesClient", "UpdateLayoutCommand")
  .sc(UpdateLayout)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLayoutRequest;
      output: {};
    };
    sdk: {
      input: UpdateLayoutCommandInput;
      output: UpdateLayoutCommandOutput;
    };
  };
}
