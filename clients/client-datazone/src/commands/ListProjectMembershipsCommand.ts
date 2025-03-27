// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListProjectMembershipsInput, ListProjectMembershipsOutput } from "../models/models_1";
import { de_ListProjectMembershipsCommand, se_ListProjectMembershipsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListProjectMembershipsCommand}.
 */
export interface ListProjectMembershipsCommandInput extends ListProjectMembershipsInput {}
/**
 * @public
 *
 * The output of {@link ListProjectMembershipsCommand}.
 */
export interface ListProjectMembershipsCommandOutput extends ListProjectMembershipsOutput, __MetadataBearer {}

/**
 * <p>Lists all members of the specified project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListProjectMembershipsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListProjectMembershipsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // ListProjectMembershipsInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   projectIdentifier: "STRING_VALUE", // required
 *   sortBy: "NAME",
 *   sortOrder: "ASCENDING" || "DESCENDING",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListProjectMembershipsCommand(input);
 * const response = await client.send(command);
 * // { // ListProjectMembershipsOutput
 * //   members: [ // ProjectMembers // required
 * //     { // ProjectMember
 * //       memberDetails: { // MemberDetails Union: only one key present
 * //         user: { // UserDetails
 * //           userId: "STRING_VALUE", // required
 * //         },
 * //         group: { // GroupDetails
 * //           groupId: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       designation: "PROJECT_OWNER" || "PROJECT_CONTRIBUTOR" || "PROJECT_CATALOG_VIEWER" || "PROJECT_CATALOG_CONSUMER" || "PROJECT_CATALOG_STEWARD", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProjectMembershipsCommandInput - {@link ListProjectMembershipsCommandInput}
 * @returns {@link ListProjectMembershipsCommandOutput}
 * @see {@link ListProjectMembershipsCommandInput} for command's `input` shape.
 * @see {@link ListProjectMembershipsCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 *
 * @public
 */
export class ListProjectMembershipsCommand extends $Command
  .classBuilder<
    ListProjectMembershipsCommandInput,
    ListProjectMembershipsCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DataZone", "ListProjectMemberships", {})
  .n("DataZoneClient", "ListProjectMembershipsCommand")
  .f(void 0, void 0)
  .ser(se_ListProjectMembershipsCommand)
  .de(de_ListProjectMembershipsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProjectMembershipsInput;
      output: ListProjectMembershipsOutput;
    };
    sdk: {
      input: ListProjectMembershipsCommandInput;
      output: ListProjectMembershipsCommandOutput;
    };
  };
}
