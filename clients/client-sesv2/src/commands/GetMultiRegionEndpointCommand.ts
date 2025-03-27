// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetMultiRegionEndpointRequest, GetMultiRegionEndpointResponse } from "../models/models_0";
import { de_GetMultiRegionEndpointCommand, se_GetMultiRegionEndpointCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMultiRegionEndpointCommand}.
 */
export interface GetMultiRegionEndpointCommandInput extends GetMultiRegionEndpointRequest {}
/**
 * @public
 *
 * The output of {@link GetMultiRegionEndpointCommand}.
 */
export interface GetMultiRegionEndpointCommandOutput extends GetMultiRegionEndpointResponse, __MetadataBearer {}

/**
 * <p>Displays the multi-region endpoint (global-endpoint) configuration.</p>
 *          <p>Only multi-region endpoints (global-endpoints) whose primary region is the AWS-Region
 *             where operation is executed can be displayed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, GetMultiRegionEndpointCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, GetMultiRegionEndpointCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const input = { // GetMultiRegionEndpointRequest
 *   EndpointName: "STRING_VALUE", // required
 * };
 * const command = new GetMultiRegionEndpointCommand(input);
 * const response = await client.send(command);
 * // { // GetMultiRegionEndpointResponse
 * //   EndpointName: "STRING_VALUE",
 * //   EndpointId: "STRING_VALUE",
 * //   Routes: [ // Routes
 * //     { // Route
 * //       Region: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   Status: "CREATING" || "READY" || "FAILED" || "DELETING",
 * //   CreatedTimestamp: new Date("TIMESTAMP"),
 * //   LastUpdatedTimestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetMultiRegionEndpointCommandInput - {@link GetMultiRegionEndpointCommandInput}
 * @returns {@link GetMultiRegionEndpointCommandOutput}
 * @see {@link GetMultiRegionEndpointCommandInput} for command's `input` shape.
 * @see {@link GetMultiRegionEndpointCommandOutput} for command's `response` shape.
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
export class GetMultiRegionEndpointCommand extends $Command
  .classBuilder<
    GetMultiRegionEndpointCommandInput,
    GetMultiRegionEndpointCommandOutput,
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
  .s("SimpleEmailService_v2", "GetMultiRegionEndpoint", {})
  .n("SESv2Client", "GetMultiRegionEndpointCommand")
  .f(void 0, void 0)
  .ser(se_GetMultiRegionEndpointCommand)
  .de(de_GetMultiRegionEndpointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMultiRegionEndpointRequest;
      output: GetMultiRegionEndpointResponse;
    };
    sdk: {
      input: GetMultiRegionEndpointCommandInput;
      output: GetMultiRegionEndpointCommandOutput;
    };
  };
}
