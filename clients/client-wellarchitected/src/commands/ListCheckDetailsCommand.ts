// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListCheckDetailsInput, ListCheckDetailsOutput } from "../models/models_0";
import { de_ListCheckDetailsCommand, se_ListCheckDetailsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCheckDetailsCommand}.
 */
export interface ListCheckDetailsCommandInput extends ListCheckDetailsInput {}
/**
 * @public
 *
 * The output of {@link ListCheckDetailsCommand}.
 */
export interface ListCheckDetailsCommandOutput extends ListCheckDetailsOutput, __MetadataBearer {}

/**
 * <p>List of Trusted Advisor check details by account related to the workload.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListCheckDetailsCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListCheckDetailsCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const input = { // ListCheckDetailsInput
 *   WorkloadId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   LensArn: "STRING_VALUE", // required
 *   PillarId: "STRING_VALUE", // required
 *   QuestionId: "STRING_VALUE", // required
 *   ChoiceId: "STRING_VALUE", // required
 * };
 * const command = new ListCheckDetailsCommand(input);
 * const response = await client.send(command);
 * // { // ListCheckDetailsOutput
 * //   CheckDetails: [ // CheckDetails
 * //     { // CheckDetail
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Provider: "TRUSTED_ADVISOR",
 * //       LensArn: "STRING_VALUE",
 * //       PillarId: "STRING_VALUE",
 * //       QuestionId: "STRING_VALUE",
 * //       ChoiceId: "STRING_VALUE",
 * //       Status: "OKAY" || "WARNING" || "ERROR" || "NOT_AVAILABLE" || "FETCH_FAILED",
 * //       AccountId: "STRING_VALUE",
 * //       FlaggedResources: Number("int"),
 * //       Reason: "ASSUME_ROLE_ERROR" || "ACCESS_DENIED" || "UNKNOWN_ERROR" || "PREMIUM_SUPPORT_REQUIRED",
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCheckDetailsCommandInput - {@link ListCheckDetailsCommandInput}
 * @returns {@link ListCheckDetailsCommandOutput}
 * @see {@link ListCheckDetailsCommandInput} for command's `input` shape.
 * @see {@link ListCheckDetailsCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 * @public
 */
export class ListCheckDetailsCommand extends $Command
  .classBuilder<
    ListCheckDetailsCommandInput,
    ListCheckDetailsCommandOutput,
    WellArchitectedClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: WellArchitectedClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WellArchitectedApiServiceLambda", "ListCheckDetails", {})
  .n("WellArchitectedClient", "ListCheckDetailsCommand")
  .f(void 0, void 0)
  .ser(se_ListCheckDetailsCommand)
  .de(de_ListCheckDetailsCommand)
  .build() {}
