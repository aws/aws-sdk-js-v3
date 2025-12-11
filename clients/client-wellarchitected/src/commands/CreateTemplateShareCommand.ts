// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateTemplateShareInput, CreateTemplateShareOutput } from "../models/models_0";
import { CreateTemplateShare } from "../schemas/schemas_0";
import type {
  ServiceInputTypes,
  ServiceOutputTypes,
  WellArchitectedClientResolvedConfig,
} from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTemplateShareCommand}.
 */
export interface CreateTemplateShareCommandInput extends CreateTemplateShareInput {}
/**
 * @public
 *
 * The output of {@link CreateTemplateShareCommand}.
 */
export interface CreateTemplateShareCommandOutput extends CreateTemplateShareOutput, __MetadataBearer {}

/**
 * <p>Create a review template share.</p>
 *          <p>The owner of a review template can share it with other Amazon Web Services accounts,
 *             users, an organization, and organizational units (OUs) in the same Amazon Web Services Region. </p>
 *          <p> Shared access to a review template is not removed until the review template share
 *             invitation is deleted.</p>
 *          <p>If you share a review template with an organization or OU, all accounts in the
 *             organization or OU are granted access to the review template.</p>
 *          <note>
 *             <p>
 *                <b>Disclaimer</b>
 *             </p>
 *             <p>By sharing your review template with other Amazon Web Services accounts, you
 *                 acknowledge that Amazon Web Services will make your review template available to
 *                 those other accounts.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, CreateTemplateShareCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, CreateTemplateShareCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // CreateTemplateShareInput
 *   TemplateArn: "STRING_VALUE", // required
 *   SharedWith: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE", // required
 * };
 * const command = new CreateTemplateShareCommand(input);
 * const response = await client.send(command);
 * // { // CreateTemplateShareOutput
 * //   TemplateArn: "STRING_VALUE",
 * //   ShareId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateTemplateShareCommandInput - {@link CreateTemplateShareCommandInput}
 * @returns {@link CreateTemplateShareCommandOutput}
 * @see {@link CreateTemplateShareCommandInput} for command's `input` shape.
 * @see {@link CreateTemplateShareCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The resource has already been processed, was deleted, or is too large.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The user has reached their resource quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 *
 * @public
 */
export class CreateTemplateShareCommand extends $Command
  .classBuilder<
    CreateTemplateShareCommandInput,
    CreateTemplateShareCommandOutput,
    WellArchitectedClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WellArchitectedClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WellArchitectedApiServiceLambda", "CreateTemplateShare", {})
  .n("WellArchitectedClient", "CreateTemplateShareCommand")
  .sc(CreateTemplateShare)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTemplateShareInput;
      output: CreateTemplateShareOutput;
    };
    sdk: {
      input: CreateTemplateShareCommandInput;
      output: CreateTemplateShareCommandOutput;
    };
  };
}
