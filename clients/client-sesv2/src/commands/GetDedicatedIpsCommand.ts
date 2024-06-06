// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetDedicatedIpsRequest, GetDedicatedIpsResponse } from "../models/models_0";
import { de_GetDedicatedIpsCommand, se_GetDedicatedIpsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDedicatedIpsCommand}.
 */
export interface GetDedicatedIpsCommandInput extends GetDedicatedIpsRequest {}
/**
 * @public
 *
 * The output of {@link GetDedicatedIpsCommand}.
 */
export interface GetDedicatedIpsCommandOutput extends GetDedicatedIpsResponse, __MetadataBearer {}

/**
 * <p>List the dedicated IP addresses that are associated with your Amazon Web Services
 *             account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, GetDedicatedIpsCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, GetDedicatedIpsCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const input = { // GetDedicatedIpsRequest
 *   PoolName: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   PageSize: Number("int"),
 * };
 * const command = new GetDedicatedIpsCommand(input);
 * const response = await client.send(command);
 * // { // GetDedicatedIpsResponse
 * //   DedicatedIps: [ // DedicatedIpList
 * //     { // DedicatedIp
 * //       Ip: "STRING_VALUE", // required
 * //       WarmupStatus: "IN_PROGRESS" || "DONE", // required
 * //       WarmupPercentage: Number("int"), // required
 * //       PoolName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDedicatedIpsCommandInput - {@link GetDedicatedIpsCommandInput}
 * @returns {@link GetDedicatedIpsCommandOutput}
 * @see {@link GetDedicatedIpsCommandInput} for command's `input` shape.
 * @see {@link GetDedicatedIpsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetDedicatedIpsCommand extends $Command
  .classBuilder<
    GetDedicatedIpsCommandInput,
    GetDedicatedIpsCommandOutput,
    SESv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SESv2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimpleEmailService_v2", "GetDedicatedIps", {})
  .n("SESv2Client", "GetDedicatedIpsCommand")
  .f(void 0, void 0)
  .ser(se_GetDedicatedIpsCommand)
  .de(de_GetDedicatedIpsCommand)
  .build() {}
