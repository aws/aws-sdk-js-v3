// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateLayoutRequest, CreateLayoutResponse } from "../models/models_0";
import { CreateLayout$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a layout in the Cases domain. Layouts define the following configuration in the top section and More Info tab of the Cases user interface:
 *
 * - Fields to display to the users
 * - Field ordering
 *
 * > **Note:** Title and Status fields cannot be part of layouts since they are not configurable.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request. See the accompanying error message for details.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * We couldn't process your request because of an issue with the server. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * We couldn't find the requested resource. Check that your resources exists and were created in the same Amazon Web Services Region as your request, and try your request again.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The service quota has been exceeded. For a list of service quotas, see [Amazon Connect Service Quotas](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html) in the *Amazon Connect Administrator Guide*.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate has been exceeded for this API. Please try again after a few minutes.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request isn't valid. Check the syntax and try again.
 *
 * @throws {@link ConnectCasesServiceException}
 *
 * Base exception class for all service exceptions from ConnectCases service.
 *
 * @public
 */
export class CreateLayoutCommand extends command<CreateLayoutCommandInput, CreateLayoutCommandOutput>(
  _ep0,
  _mw0,
  "CreateLayout",
  CreateLayout$
) {
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
