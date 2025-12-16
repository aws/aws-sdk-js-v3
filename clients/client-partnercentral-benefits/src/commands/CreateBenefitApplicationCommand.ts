// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateBenefitApplicationInput, CreateBenefitApplicationOutput } from "../models/models_0";
import type {
  PartnerCentralBenefitsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralBenefitsClient";
import { CreateBenefitApplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateBenefitApplicationCommand}.
 */
export interface CreateBenefitApplicationCommandInput extends CreateBenefitApplicationInput {}
/**
 * @public
 *
 * The output of {@link CreateBenefitApplicationCommand}.
 */
export interface CreateBenefitApplicationCommandOutput extends CreateBenefitApplicationOutput, __MetadataBearer {}

/**
 * <p>Creates a new benefit application for a partner to request access to AWS benefits and programs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralBenefitsClient, CreateBenefitApplicationCommand } from "@aws-sdk/client-partnercentral-benefits"; // ES Modules import
 * // const { PartnerCentralBenefitsClient, CreateBenefitApplicationCommand } = require("@aws-sdk/client-partnercentral-benefits"); // CommonJS import
 * // import type { PartnerCentralBenefitsClientConfig } from "@aws-sdk/client-partnercentral-benefits";
 * const config = {}; // type is PartnerCentralBenefitsClientConfig
 * const client = new PartnerCentralBenefitsClient(config);
 * const input = { // CreateBenefitApplicationInput
 *   Catalog: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   BenefitIdentifier: "STRING_VALUE", // required
 *   FulfillmentTypes: [ // FulfillmentTypes
 *     "CREDITS" || "CASH" || "ACCESS",
 *   ],
 *   BenefitApplicationDetails: "DOCUMENT_VALUE",
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   AssociatedResources: [ // Arns
 *     "STRING_VALUE",
 *   ],
 *   PartnerContacts: [ // Contacts
 *     { // Contact
 *       Email: "STRING_VALUE",
 *       FirstName: "STRING_VALUE",
 *       LastName: "STRING_VALUE",
 *       BusinessTitle: "STRING_VALUE",
 *       Phone: "STRING_VALUE",
 *     },
 *   ],
 *   FileDetails: [ // FileInputDetails
 *     { // FileInput
 *       FileURI: "STRING_VALUE", // required
 *       BusinessUseCase: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateBenefitApplicationCommand(input);
 * const response = await client.send(command);
 * // { // CreateBenefitApplicationOutput
 * //   Id: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   Revision: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateBenefitApplicationCommandInput - {@link CreateBenefitApplicationCommandInput}
 * @returns {@link CreateBenefitApplicationCommandOutput}
 * @see {@link CreateBenefitApplicationCommandInput} for command's `input` shape.
 * @see {@link CreateBenefitApplicationCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralBenefitsClientResolvedConfig | config} for PartnerCentralBenefitsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Thrown when the caller does not have sufficient permissions to perform the requested operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Thrown when the request conflicts with the current state of the resource, such as attempting to modify a resource that has been changed by another process.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Thrown when an unexpected error occurs on the server side during request processing.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Thrown when the requested resource cannot be found or does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Thrown when the request rate exceeds the allowed limits and the request is being throttled.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Thrown when the request contains invalid parameters or fails input validation requirements.</p>
 *
 * @throws {@link PartnerCentralBenefitsServiceException}
 * <p>Base exception class for all service exceptions from PartnerCentralBenefits service.</p>
 *
 *
 * @public
 */
export class CreateBenefitApplicationCommand extends $Command
  .classBuilder<
    CreateBenefitApplicationCommandInput,
    CreateBenefitApplicationCommandOutput,
    PartnerCentralBenefitsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralBenefitsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PartnerCentralBenefitsService", "CreateBenefitApplication", {})
  .n("PartnerCentralBenefitsClient", "CreateBenefitApplicationCommand")
  .sc(CreateBenefitApplication$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBenefitApplicationInput;
      output: CreateBenefitApplicationOutput;
    };
    sdk: {
      input: CreateBenefitApplicationCommandInput;
      output: CreateBenefitApplicationCommandOutput;
    };
  };
}
