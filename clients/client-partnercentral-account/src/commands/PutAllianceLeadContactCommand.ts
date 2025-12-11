// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { PutAllianceLeadContactRequest, PutAllianceLeadContactResponse } from "../models/models_0";
import type {
  PartnerCentralAccountClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralAccountClient";
import { PutAllianceLeadContact } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutAllianceLeadContactCommand}.
 */
export interface PutAllianceLeadContactCommandInput extends PutAllianceLeadContactRequest {}
/**
 * @public
 *
 * The output of {@link PutAllianceLeadContactCommand}.
 */
export interface PutAllianceLeadContactCommandOutput extends PutAllianceLeadContactResponse, __MetadataBearer {}

/**
 * <p>Creates or updates the alliance lead contact information for a partner account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralAccountClient, PutAllianceLeadContactCommand } from "@aws-sdk/client-partnercentral-account"; // ES Modules import
 * // const { PartnerCentralAccountClient, PutAllianceLeadContactCommand } = require("@aws-sdk/client-partnercentral-account"); // CommonJS import
 * // import type { PartnerCentralAccountClientConfig } from "@aws-sdk/client-partnercentral-account";
 * const config = {}; // type is PartnerCentralAccountClientConfig
 * const client = new PartnerCentralAccountClient(config);
 * const input = { // PutAllianceLeadContactRequest
 *   Catalog: "STRING_VALUE", // required
 *   Identifier: "STRING_VALUE", // required
 *   AllianceLeadContact: { // AllianceLeadContact
 *     FirstName: "STRING_VALUE", // required
 *     LastName: "STRING_VALUE", // required
 *     Email: "STRING_VALUE", // required
 *     BusinessTitle: "STRING_VALUE", // required
 *   },
 *   EmailVerificationCode: "STRING_VALUE",
 * };
 * const command = new PutAllianceLeadContactCommand(input);
 * const response = await client.send(command);
 * // { // PutAllianceLeadContactResponse
 * //   Catalog: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * //   Id: "STRING_VALUE", // required
 * //   AllianceLeadContact: { // AllianceLeadContact
 * //     FirstName: "STRING_VALUE", // required
 * //     LastName: "STRING_VALUE", // required
 * //     Email: "STRING_VALUE", // required
 * //     BusinessTitle: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param PutAllianceLeadContactCommandInput - {@link PutAllianceLeadContactCommandInput}
 * @returns {@link PutAllianceLeadContactCommandOutput}
 * @see {@link PutAllianceLeadContactCommandInput} for command's `input` shape.
 * @see {@link PutAllianceLeadContactCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralAccountClientResolvedConfig | config} for PartnerCentralAccountClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied due to insufficient permissions. The caller does not have the required permissions to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred while processing the request. This is typically a temporary condition and the request may be retried.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found. This may occur when referencing a resource that does not exist or has been deleted.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to too many requests being sent in a short period of time. The client should implement exponential backoff and retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation. One or more input parameters are invalid, missing, or do not meet the required format or constraints.</p>
 *
 * @throws {@link PartnerCentralAccountServiceException}
 * <p>Base exception class for all service exceptions from PartnerCentralAccount service.</p>
 *
 *
 * @public
 */
export class PutAllianceLeadContactCommand extends $Command
  .classBuilder<
    PutAllianceLeadContactCommandInput,
    PutAllianceLeadContactCommandOutput,
    PartnerCentralAccountClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralAccountClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PartnerCentralAccount", "PutAllianceLeadContact", {})
  .n("PartnerCentralAccountClient", "PutAllianceLeadContactCommand")
  .sc(PutAllianceLeadContact)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAllianceLeadContactRequest;
      output: PutAllianceLeadContactResponse;
    };
    sdk: {
      input: PutAllianceLeadContactCommandInput;
      output: PutAllianceLeadContactCommandOutput;
    };
  };
}
