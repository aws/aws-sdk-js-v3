// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectCasesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCasesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateLayoutRequest, CreateLayoutResponse } from "../models/models_0";
import { CreateLayout } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLayoutCommand}.
 */
export interface CreateLayoutCommandInput extends CreateLayoutRequest {}
/**
 * @public
 *
 * The output of {@link CreateLayoutCommand}.
 */
export interface CreateLayoutCommandOutput extends CreateLayoutResponse, __MetadataBearer {}

/**
 * <p>Creates a layout in the Cases domain. Layouts define the following configuration in the top section and More Info tab of the Cases user interface:</p> <ul> <li> <p>Fields to display to the users</p> </li> <li> <p>Field ordering</p> </li> </ul> <note> <p>Title and Status fields cannot be part of layouts since they are not configurable.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, CreateLayoutCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, CreateLayoutCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * // import type { ConnectCasesClientConfig } from "@aws-sdk/client-connectcases";
 * const config = {}; // type is ConnectCasesClientConfig
 * const client = new ConnectCasesClient(config);
 * const input = { // CreateLayoutRequest
 *   domainId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
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
 * const command = new CreateLayoutCommand(input);
 * const response = await client.send(command);
 * // { // CreateLayoutResponse
 * //   layoutId: "STRING_VALUE", // required
 * //   layoutArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateLayoutCommandInput - {@link CreateLayoutCommandInput}
 * @returns {@link CreateLayoutCommandOutput}
 * @see {@link CreateLayoutCommandInput} for command's `input` shape.
 * @see {@link CreateLayoutCommandOutput} for command's `response` shape.
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
export class CreateLayoutCommand extends $Command
  .classBuilder<
    CreateLayoutCommandInput,
    CreateLayoutCommandOutput,
    ConnectCasesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectCasesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectCases", "CreateLayout", {})
  .n("ConnectCasesClient", "CreateLayoutCommand")
  .sc(CreateLayout)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLayoutRequest;
      output: CreateLayoutResponse;
    };
    sdk: {
      input: CreateLayoutCommandInput;
      output: CreateLayoutCommandOutput;
    };
  };
}
