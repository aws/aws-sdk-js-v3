// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetBenefitApplicationInput, GetBenefitApplicationOutput } from "../models/models_0";
import {
  PartnerCentralBenefitsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralBenefitsClient";
import { GetBenefitApplication } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBenefitApplicationCommand}.
 */
export interface GetBenefitApplicationCommandInput extends GetBenefitApplicationInput {}
/**
 * @public
 *
 * The output of {@link GetBenefitApplicationCommand}.
 */
export interface GetBenefitApplicationCommandOutput extends GetBenefitApplicationOutput, __MetadataBearer {}

/**
 * <p>Retrieves detailed information about a specific benefit application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralBenefitsClient, GetBenefitApplicationCommand } from "@aws-sdk/client-partnercentral-benefits"; // ES Modules import
 * // const { PartnerCentralBenefitsClient, GetBenefitApplicationCommand } = require("@aws-sdk/client-partnercentral-benefits"); // CommonJS import
 * // import type { PartnerCentralBenefitsClientConfig } from "@aws-sdk/client-partnercentral-benefits";
 * const config = {}; // type is PartnerCentralBenefitsClientConfig
 * const client = new PartnerCentralBenefitsClient(config);
 * const input = { // GetBenefitApplicationInput
 *   Catalog: "STRING_VALUE", // required
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetBenefitApplicationCommand(input);
 * const response = await client.send(command);
 * // { // GetBenefitApplicationOutput
 * //   Id: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   Catalog: "STRING_VALUE",
 * //   BenefitId: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   FulfillmentTypes: [ // FulfillmentTypes
 * //     "CREDITS" || "CASH" || "ACCESS",
 * //   ],
 * //   BenefitApplicationDetails: "DOCUMENT_VALUE",
 * //   Programs: [ // Programs
 * //     "STRING_VALUE",
 * //   ],
 * //   Status: "PENDING_SUBMISSION" || "IN_REVIEW" || "ACTION_REQUIRED" || "APPROVED" || "REJECTED" || "CANCELED",
 * //   Stage: "STRING_VALUE",
 * //   StatusReason: "STRING_VALUE",
 * //   StatusReasonCode: "STRING_VALUE",
 * //   StatusReasonCodes: [ // StatusReasonCodes
 * //     "STRING_VALUE",
 * //   ],
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   UpdatedAt: new Date("TIMESTAMP"),
 * //   Revision: "STRING_VALUE",
 * //   AssociatedResources: [ // Arns
 * //     "STRING_VALUE",
 * //   ],
 * //   PartnerContacts: [ // Contacts
 * //     { // Contact
 * //       Email: "STRING_VALUE",
 * //       FirstName: "STRING_VALUE",
 * //       LastName: "STRING_VALUE",
 * //       BusinessTitle: "STRING_VALUE",
 * //       Phone: "STRING_VALUE",
 * //     },
 * //   ],
 * //   FileDetails: [ // FileDetails
 * //     { // FileDetail
 * //       FileURI: "STRING_VALUE", // required
 * //       BusinessUseCase: "STRING_VALUE",
 * //       FileName: "STRING_VALUE",
 * //       FileStatus: "STRING_VALUE",
 * //       FileStatusReason: "STRING_VALUE",
 * //       FileType: "application/msword" || "application/vnd.openxmlformats-officedocument.wordprocessingml.document" || "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" || "application/vnd.openxmlformats-officedocument.presentationml.presentation" || "application/pdf" || "image/png" || "image/jpeg" || "image/svg+xml" || "text/csv",
 * //       CreatedBy: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetBenefitApplicationCommandInput - {@link GetBenefitApplicationCommandInput}
 * @returns {@link GetBenefitApplicationCommandOutput}
 * @see {@link GetBenefitApplicationCommandInput} for command's `input` shape.
 * @see {@link GetBenefitApplicationCommandOutput} for command's `response` shape.
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
export class GetBenefitApplicationCommand extends $Command
  .classBuilder<
    GetBenefitApplicationCommandInput,
    GetBenefitApplicationCommandOutput,
    PartnerCentralBenefitsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralBenefitsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PartnerCentralBenefitsService", "GetBenefitApplication", {})
  .n("PartnerCentralBenefitsClient", "GetBenefitApplicationCommand")
  .sc(GetBenefitApplication)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBenefitApplicationInput;
      output: GetBenefitApplicationOutput;
    };
    sdk: {
      input: GetBenefitApplicationCommandInput;
      output: GetBenefitApplicationCommandOutput;
    };
  };
}
