// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetTenantRequest, GetTenantResponse } from "../models/models_0";
import { de_GetTenantCommand, se_GetTenantCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTenantCommand}.
 */
export interface GetTenantCommandInput extends GetTenantRequest {}
/**
 * @public
 *
 * The output of {@link GetTenantCommand}.
 */
export interface GetTenantCommandOutput extends GetTenantResponse, __MetadataBearer {}

/**
 * <p>Get information about a specific tenant, including the tenant's name, ID, ARN,
 *             creation timestamp, tags, and sending status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, GetTenantCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, GetTenantCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
 * const config = {}; // type is SESv2ClientConfig
 * const client = new SESv2Client(config);
 * const input = { // GetTenantRequest
 *   TenantName: "STRING_VALUE", // required
 * };
 * const command = new GetTenantCommand(input);
 * const response = await client.send(command);
 * // { // GetTenantResponse
 * //   Tenant: { // Tenant
 * //     TenantName: "STRING_VALUE",
 * //     TenantId: "STRING_VALUE",
 * //     TenantArn: "STRING_VALUE",
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     SendingStatus: "ENABLED" || "REINSTATED" || "DISABLED",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTenantCommandInput - {@link GetTenantCommandInput}
 * @returns {@link GetTenantCommandOutput}
 * @see {@link GetTenantCommandInput} for command's `input` shape.
 * @see {@link GetTenantCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 *
 * @public
 */
export class GetTenantCommand extends $Command
  .classBuilder<
    GetTenantCommandInput,
    GetTenantCommandOutput,
    SESv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SESv2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimpleEmailService_v2", "GetTenant", {})
  .n("SESv2Client", "GetTenantCommand")
  .f(void 0, void 0)
  .ser(se_GetTenantCommand)
  .de(de_GetTenantCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTenantRequest;
      output: GetTenantResponse;
    };
    sdk: {
      input: GetTenantCommandInput;
      output: GetTenantCommandOutput;
    };
  };
}
