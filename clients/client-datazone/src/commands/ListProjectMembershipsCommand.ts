// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListProjectMembershipsInput, ListProjectMembershipsOutput } from "../models/models_1";
import { ListProjectMemberships$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists all members of the specified project.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListProjectMembershipsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListProjectMembershipsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
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
 * //       designation: "PROJECT_OWNER" || "PROJECT_CONTRIBUTOR" || "PROJECT_CATALOG_VIEWER" || "PROJECT_CATALOG_CONSUMER" || "PROJECT_CATALOG_STEWARD" || "USER_CREATED_DESIGNATION", // required
 * //       userCreatedDesignationId: "STRING_VALUE",
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource cannot be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the Amazon Web Services service.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link DataZoneServiceException}
 *
 * Base exception class for all service exceptions from DataZone service.
 *
 * @public
 */
export class ListProjectMembershipsCommand extends command<ListProjectMembershipsCommandInput, ListProjectMembershipsCommandOutput>(
  _ep0,
  _mw0,
  "ListProjectMemberships",
  ListProjectMemberships$
) {
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
