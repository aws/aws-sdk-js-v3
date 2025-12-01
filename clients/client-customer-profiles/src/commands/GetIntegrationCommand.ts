// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CustomerProfilesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetIntegrationRequest, GetIntegrationResponse } from "../models/models_0";
import { GetIntegration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetIntegrationCommand}.
 */
export interface GetIntegrationCommandInput extends GetIntegrationRequest {}
/**
 * @public
 *
 * The output of {@link GetIntegrationCommand}.
 */
export interface GetIntegrationCommandOutput extends GetIntegrationResponse, __MetadataBearer {}

/**
 * <p>Returns an integration for a domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetIntegrationCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetIntegrationCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // GetIntegrationRequest
 *   DomainName: "STRING_VALUE", // required
 *   Uri: "STRING_VALUE", // required
 * };
 * const command = new GetIntegrationCommand(input);
 * const response = await client.send(command);
 * // { // GetIntegrationResponse
 * //   DomainName: "STRING_VALUE", // required
 * //   Uri: "STRING_VALUE", // required
 * //   ObjectTypeName: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"), // required
 * //   LastUpdatedAt: new Date("TIMESTAMP"), // required
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   ObjectTypeNames: { // ObjectTypeNames
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   WorkflowId: "STRING_VALUE",
 * //   IsUnstructured: true || false,
 * //   RoleArn: "STRING_VALUE",
 * //   EventTriggerNames: [ // EventTriggerNames
 * //     "STRING_VALUE",
 * //   ],
 * //   Scope: "PROFILE" || "DOMAIN",
 * // };
 *
 * ```
 *
 * @param GetIntegrationCommandInput - {@link GetIntegrationCommandInput}
 * @returns {@link GetIntegrationCommandOutput}
 * @see {@link GetIntegrationCommandInput} for command's `input` shape.
 * @see {@link GetIntegrationCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You exceeded the maximum number of requests.</p>
 *
 * @throws {@link CustomerProfilesServiceException}
 * <p>Base exception class for all service exceptions from CustomerProfiles service.</p>
 *
 *
 * @public
 */
export class GetIntegrationCommand extends $Command
  .classBuilder<
    GetIntegrationCommandInput,
    GetIntegrationCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "GetIntegration", {})
  .n("CustomerProfilesClient", "GetIntegrationCommand")
  .sc(GetIntegration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIntegrationRequest;
      output: GetIntegrationResponse;
    };
    sdk: {
      input: GetIntegrationCommandInput;
      output: GetIntegrationCommandOutput;
    };
  };
}
