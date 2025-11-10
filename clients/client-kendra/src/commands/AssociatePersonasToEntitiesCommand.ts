// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { AssociatePersonasToEntitiesRequest, AssociatePersonasToEntitiesResponse } from "../models/models_0";
import { AssociatePersonasToEntities } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociatePersonasToEntitiesCommand}.
 */
export interface AssociatePersonasToEntitiesCommandInput extends AssociatePersonasToEntitiesRequest {}
/**
 * @public
 *
 * The output of {@link AssociatePersonasToEntitiesCommand}.
 */
export interface AssociatePersonasToEntitiesCommandOutput
  extends AssociatePersonasToEntitiesResponse,
    __MetadataBearer {}

/**
 * <p>Defines the specific permissions of users or groups in your IAM Identity Center
 *             identity source with access to your Amazon Kendra experience. You can create an Amazon Kendra
 *             experience such as a search application. For more information on creating a
 *             search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building
 *                 a search experience with no code</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, AssociatePersonasToEntitiesCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, AssociatePersonasToEntitiesCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * // import type { KendraClientConfig } from "@aws-sdk/client-kendra";
 * const config = {}; // type is KendraClientConfig
 * const client = new KendraClient(config);
 * const input = { // AssociatePersonasToEntitiesRequest
 *   Id: "STRING_VALUE", // required
 *   IndexId: "STRING_VALUE", // required
 *   Personas: [ // EntityPersonaConfigurationList // required
 *     { // EntityPersonaConfiguration
 *       EntityId: "STRING_VALUE", // required
 *       Persona: "OWNER" || "VIEWER", // required
 *     },
 *   ],
 * };
 * const command = new AssociatePersonasToEntitiesCommand(input);
 * const response = await client.send(command);
 * // { // AssociatePersonasToEntitiesResponse
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
 * @param AssociatePersonasToEntitiesCommandInput - {@link AssociatePersonasToEntitiesCommandInput}
 * @returns {@link AssociatePersonasToEntitiesCommandOutput}
 * @see {@link AssociatePersonasToEntitiesCommandInput} for command's `input` shape.
 * @see {@link AssociatePersonasToEntitiesCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceAlreadyExistException} (client fault)
 *  <p>The resource you want to use already exists. Please check you have provided the
 *             correct resource and try again.</p>
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
 *
 * @public
 */
export class AssociatePersonasToEntitiesCommand extends $Command
  .classBuilder<
    AssociatePersonasToEntitiesCommandInput,
    AssociatePersonasToEntitiesCommandOutput,
    KendraClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KendraClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSKendraFrontendService", "AssociatePersonasToEntities", {})
  .n("KendraClient", "AssociatePersonasToEntitiesCommand")
  .sc(AssociatePersonasToEntities)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociatePersonasToEntitiesRequest;
      output: AssociatePersonasToEntitiesResponse;
    };
    sdk: {
      input: AssociatePersonasToEntitiesCommandInput;
      output: AssociatePersonasToEntitiesCommandOutput;
    };
  };
}
