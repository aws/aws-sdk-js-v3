// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAgentContextRequest, GetAgentContextResponse } from "../models/models_0";
import { GetAgentContext$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAgentContextCommand}.
 */
export interface GetAgentContextCommandInput extends GetAgentContextRequest {}
/**
 * @public
 *
 * The output of {@link GetAgentContextCommand}.
 */
export interface GetAgentContextCommandOutput extends GetAgentContextResponse, __MetadataBearer {}

/**
 * <p>Retrieves detailed information about a specific context associated with a profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, GetAgentContextCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, GetAgentContextCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // GetAgentContextRequest
 *   profileArn: "STRING_VALUE", // required
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetAgentContextCommand(input);
 * const response = await client.send(command);
 * // { // GetAgentContextResponse
 * //   context: { // ContextSummary
 * //     id: "STRING_VALUE", // required
 * //     profileArn: "STRING_VALUE", // required
 * //     title: "STRING_VALUE", // required
 * //     contextType: "APPLICATION", // required
 * //     content: { // ContextContent
 * //       accountIds: [ // ContextAccountIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       regions: [ // ContextRegionList
 * //         "STRING_VALUE",
 * //       ],
 * //       awsServices: [ // ContextAwsServiceList
 * //         "STRING_VALUE",
 * //       ],
 * //       resourceTypes: [ // ContextResourceTypeList
 * //         "STRING_VALUE",
 * //       ],
 * //       resourceTags: [ // ContextResourceTagList
 * //         { // ContextResourceTag
 * //           key: "STRING_VALUE", // required
 * //           value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       applicationOverview: "STRING_VALUE",
 * //       industry: "STRING_VALUE",
 * //       applicationType: "SAS" || "DESKTOP_APPLICATION" || "OTHER",
 * //       criticality: "MISSION_CRITICAL" || "BUSINESS_CRITICAL" || "NON_CRITICAL" || "TEST_DEVELOPMENT",
 * //       architectureOverview: "STRING_VALUE",
 * //       additionalContext: "STRING_VALUE",
 * //     },
 * //     applicationType: "SAS" || "DESKTOP_APPLICATION" || "OTHER",
 * //     criticality: "MISSION_CRITICAL" || "BUSINESS_CRITICAL" || "NON_CRITICAL" || "TEST_DEVELOPMENT",
 * //     createdBy: "STRING_VALUE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     lastModifiedBy: "STRING_VALUE",
 * //     lastModifiedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAgentContextCommandInput - {@link GetAgentContextCommandInput}
 * @returns {@link GetAgentContextCommandOutput}
 * @see {@link GetAgentContextCommandInput} for command's `input` shape.
 * @see {@link GetAgentContextCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetAgentContextCommand extends command<GetAgentContextCommandInput, GetAgentContextCommandOutput>(
  _ep0,
  _mw0,
  "GetAgentContext",
  GetAgentContext$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAgentContextRequest;
      output: GetAgentContextResponse;
    };
    sdk: {
      input: GetAgentContextCommandInput;
      output: GetAgentContextCommandOutput;
    };
  };
}
