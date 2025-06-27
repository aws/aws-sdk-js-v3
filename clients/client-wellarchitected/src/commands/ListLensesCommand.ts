// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListLensesInput, ListLensesOutput } from "../models/models_0";
import { de_ListLensesCommand, se_ListLensesCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLensesCommand}.
 */
export interface ListLensesCommandInput extends ListLensesInput {}
/**
 * @public
 *
 * The output of {@link ListLensesCommand}.
 */
export interface ListLensesCommandOutput extends ListLensesOutput, __MetadataBearer {}

/**
 * <p>List the available lenses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListLensesCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListLensesCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const input = { // ListLensesInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   LensType: "AWS_OFFICIAL" || "CUSTOM_SHARED" || "CUSTOM_SELF",
 *   LensStatus: "ALL" || "DRAFT" || "PUBLISHED",
 *   LensName: "STRING_VALUE",
 * };
 * const command = new ListLensesCommand(input);
 * const response = await client.send(command);
 * // { // ListLensesOutput
 * //   LensSummaries: [ // LensSummaries
 * //     { // LensSummary
 * //       LensArn: "STRING_VALUE",
 * //       LensAlias: "STRING_VALUE",
 * //       LensName: "STRING_VALUE",
 * //       LensType: "AWS_OFFICIAL" || "CUSTOM_SHARED" || "CUSTOM_SELF",
 * //       Description: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //       LensVersion: "STRING_VALUE",
 * //       Owner: "STRING_VALUE",
 * //       LensStatus: "CURRENT" || "NOT_CURRENT" || "DEPRECATED" || "DELETED" || "UNSHARED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLensesCommandInput - {@link ListLensesCommandInput}
 * @returns {@link ListLensesCommandOutput}
 * @see {@link ListLensesCommandInput} for command's `input` shape.
 * @see {@link ListLensesCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
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
 *
 * @public
 */
export class ListLensesCommand extends $Command
  .classBuilder<
    ListLensesCommandInput,
    ListLensesCommandOutput,
    WellArchitectedClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WellArchitectedClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WellArchitectedApiServiceLambda", "ListLenses", {})
  .n("WellArchitectedClient", "ListLensesCommand")
  .f(void 0, void 0)
  .ser(se_ListLensesCommand)
  .de(de_ListLensesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLensesInput;
      output: ListLensesOutput;
    };
    sdk: {
      input: ListLensesCommandInput;
      output: ListLensesCommandOutput;
    };
  };
}
