// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListMembershipsRequest, ListMembershipsResponse } from "../models/models_0";
import { de_ListMembershipsCommand, se_ListMembershipsCommand } from "../protocols/Aws_restJson1";
import { SecurityIRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityIRClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMembershipsCommand}.
 */
export interface ListMembershipsCommandInput extends ListMembershipsRequest {}
/**
 * @public
 *
 * The output of {@link ListMembershipsCommand}.
 */
export interface ListMembershipsCommandOutput extends ListMembershipsResponse, __MetadataBearer {}

/**
 * <p>Grants permission to query the memberships a principal has access to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityIRClient, ListMembershipsCommand } from "@aws-sdk/client-security-ir"; // ES Modules import
 * // const { SecurityIRClient, ListMembershipsCommand } = require("@aws-sdk/client-security-ir"); // CommonJS import
 * const client = new SecurityIRClient(config);
 * const input = { // ListMembershipsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListMembershipsCommand(input);
 * const response = await client.send(command);
 * // { // ListMembershipsResponse
 * //   nextToken: "STRING_VALUE",
 * //   items: [ // ListMembershipItems
 * //     { // ListMembershipItem
 * //       membershipId: "STRING_VALUE", // required
 * //       accountId: "STRING_VALUE",
 * //       region: "af-south-1" || "ap-east-1" || "ap-northeast-1" || "ap-northeast-2" || "ap-northeast-3" || "ap-south-1" || "ap-south-2" || "ap-southeast-1" || "ap-southeast-2" || "ap-southeast-3" || "ap-southeast-4" || "ap-southeast-5" || "ap-southeast-7" || "ca-central-1" || "ca-west-1" || "cn-north-1" || "cn-northwest-1" || "eu-central-1" || "eu-central-2" || "eu-north-1" || "eu-south-1" || "eu-south-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "il-central-1" || "me-central-1" || "me-south-1" || "mx-central-1" || "sa-east-1" || "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2",
 * //       membershipArn: "STRING_VALUE",
 * //       membershipStatus: "Active" || "Cancelled" || "Terminated",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListMembershipsCommandInput - {@link ListMembershipsCommandInput}
 * @returns {@link ListMembershipsCommandOutput}
 * @see {@link ListMembershipsCommandInput} for command's `input` shape.
 * @see {@link ListMembershipsCommandOutput} for command's `response` shape.
 * @see {@link SecurityIRClientResolvedConfig | config} for SecurityIRClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p/>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p/>
 *
 * @throws {@link InvalidTokenException} (client fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link SecurityIncidentResponseNotActiveException} (client fault)
 *  <p/>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p/>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link SecurityIRServiceException}
 * <p>Base exception class for all service exceptions from SecurityIR service.</p>
 *
 *
 * @example Invoke ListMemberships
 * ```javascript
 * //
 * const input = {
 *   maxResults: 10
 * };
 * const command = new ListMembershipsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       accountId: "123123123123",
 *       membershipArn: "arn:aws:security-ir:us-west-1:123456789012:membership/m-abcd1234efgh",
 *       membershipId: "m-abcd1234efgh",
 *       membershipStatus: "Cancelled",
 *       region: "af-south-1"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListMembershipsCommand extends $Command
  .classBuilder<
    ListMembershipsCommandInput,
    ListMembershipsCommandOutput,
    SecurityIRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityIRClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SecurityIncidentResponse", "ListMemberships", {})
  .n("SecurityIRClient", "ListMembershipsCommand")
  .f(void 0, void 0)
  .ser(se_ListMembershipsCommand)
  .de(de_ListMembershipsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMembershipsRequest;
      output: ListMembershipsResponse;
    };
    sdk: {
      input: ListMembershipsCommandInput;
      output: ListMembershipsCommandOutput;
    };
  };
}
