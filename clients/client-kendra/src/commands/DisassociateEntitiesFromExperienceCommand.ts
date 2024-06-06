// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import {
  DisassociateEntitiesFromExperienceRequest,
  DisassociateEntitiesFromExperienceResponse,
} from "../models/models_0";
import {
  de_DisassociateEntitiesFromExperienceCommand,
  se_DisassociateEntitiesFromExperienceCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateEntitiesFromExperienceCommand}.
 */
export interface DisassociateEntitiesFromExperienceCommandInput extends DisassociateEntitiesFromExperienceRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateEntitiesFromExperienceCommand}.
 */
export interface DisassociateEntitiesFromExperienceCommandOutput
  extends DisassociateEntitiesFromExperienceResponse,
    __MetadataBearer {}

/**
 * <p>Prevents users or groups in your IAM Identity Center identity source
 *             from accessing your Amazon Kendra experience. You can create an Amazon Kendra experience
 *             such as a search application. For more information on creating a search
 *             application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building
 *                 a search experience with no code</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, DisassociateEntitiesFromExperienceCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, DisassociateEntitiesFromExperienceCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const input = { // DisassociateEntitiesFromExperienceRequest
 *   Id: "STRING_VALUE", // required
 *   IndexId: "STRING_VALUE", // required
 *   EntityList: [ // DisassociateEntityList // required
 *     { // EntityConfiguration
 *       EntityId: "STRING_VALUE", // required
 *       EntityType: "USER" || "GROUP", // required
 *     },
 *   ],
 * };
 * const command = new DisassociateEntitiesFromExperienceCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateEntitiesFromExperienceResponse
 * //   FailedEntityList: [ // FailedEntityList
 * //     { // FailedEntity
 * //       EntityId: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DisassociateEntitiesFromExperienceCommandInput - {@link DisassociateEntitiesFromExperienceCommandInput}
 * @returns {@link DisassociateEntitiesFromExperienceCommandOutput}
 * @see {@link DisassociateEntitiesFromExperienceCommandInput} for command's `input` shape.
 * @see {@link DisassociateEntitiesFromExperienceCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for KendraClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Please ensure you have the
 *             required permission policies and user accounts and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Kendra service.
 *             Please wait a few minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you want to use doesn’t exist. Please check you have provided the correct
 *             resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Please reduce the number of requests
 *             and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints set by the Amazon Kendra service.
 *             Please provide the correct input and try again.</p>
 *
 * @throws {@link KendraServiceException}
 * <p>Base exception class for all service exceptions from Kendra service.</p>
 *
 * @public
 */
export class DisassociateEntitiesFromExperienceCommand extends $Command
  .classBuilder<
    DisassociateEntitiesFromExperienceCommandInput,
    DisassociateEntitiesFromExperienceCommandOutput,
    KendraClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: KendraClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSKendraFrontendService", "DisassociateEntitiesFromExperience", {})
  .n("KendraClient", "DisassociateEntitiesFromExperienceCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateEntitiesFromExperienceCommand)
  .de(de_DisassociateEntitiesFromExperienceCommand)
  .build() {}
