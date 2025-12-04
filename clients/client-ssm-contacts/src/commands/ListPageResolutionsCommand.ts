// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListPageResolutionsRequest, ListPageResolutionsResult } from "../models/models_0";
import { ListPageResolutions } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPageResolutionsCommand}.
 */
export interface ListPageResolutionsCommandInput extends ListPageResolutionsRequest {}
/**
 * @public
 *
 * The output of {@link ListPageResolutionsCommand}.
 */
export interface ListPageResolutionsCommandOutput extends ListPageResolutionsResult, __MetadataBearer {}

/**
 * <p>Returns the resolution path of an engagement. For example, the escalation plan engaged
 *          in an incident might target an on-call schedule that includes several contacts in a
 *          rotation, but just one contact on-call when the incident starts. The resolution path
 *          indicates the hierarchy of <i>escalation plan > on-call schedule >
 *             contact</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, ListPageResolutionsCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, ListPageResolutionsCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * // import type { SSMContactsClientConfig } from "@aws-sdk/client-ssm-contacts";
 * const config = {}; // type is SSMContactsClientConfig
 * const client = new SSMContactsClient(config);
 * const input = { // ListPageResolutionsRequest
 *   NextToken: "STRING_VALUE",
 *   PageId: "STRING_VALUE", // required
 * };
 * const command = new ListPageResolutionsCommand(input);
 * const response = await client.send(command);
 * // { // ListPageResolutionsResult
 * //   NextToken: "STRING_VALUE",
 * //   PageResolutions: [ // ResolutionList // required
 * //     { // ResolutionContact
 * //       ContactArn: "STRING_VALUE", // required
 * //       Type: "PERSONAL" || "ESCALATION" || "ONCALL_SCHEDULE", // required
 * //       StageIndex: Number("int"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListPageResolutionsCommandInput - {@link ListPageResolutionsCommandInput}
 * @returns {@link ListPageResolutionsCommandOutput}
 * @see {@link ListPageResolutionsCommandInput} for command's `input` shape.
 * @see {@link ListPageResolutionsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListPageResolutionsCommand extends $Command
  .classBuilder<
    ListPageResolutionsCommandInput,
    ListPageResolutionsCommandOutput,
    SSMContactsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMContactsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SSMContacts", "ListPageResolutions", {})
  .n("SSMContactsClient", "ListPageResolutionsCommand")
  .sc(ListPageResolutions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPageResolutionsRequest;
      output: ListPageResolutionsResult;
    };
    sdk: {
      input: ListPageResolutionsCommandInput;
      output: ListPageResolutionsCommandOutput;
    };
  };
}
