// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { CreateAgentContextRequest, CreateAgentContextResponse } from "../models/models_0";
import { CreateAgentContext$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAgentContextCommand}.
 */
export interface CreateAgentContextCommandInput extends CreateAgentContextRequest {}
/**
 * @public
 *
 * The output of {@link CreateAgentContextCommand}.
 */
export interface CreateAgentContextCommandOutput extends CreateAgentContextResponse, __MetadataBearer {}

/**
 * Creates a context associated with an optimization profile. Contexts provide application and environment information used during recommendation generation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, CreateAgentContextCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, CreateAgentContextCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // CreateAgentContextRequest
 *   clientToken: "STRING_VALUE",
 *   profileArn: "STRING_VALUE", // required
 *   title: "STRING_VALUE", // required
 *   contextType: "APPLICATION", // required
 *   content: { // ContextContent
 *     accountIds: [ // ContextAccountIdList
 *       "STRING_VALUE",
 *     ],
 *     regions: [ // ContextRegionList
 *       "STRING_VALUE",
 *     ],
 *     awsServices: [ // ContextAwsServiceList
 *       "STRING_VALUE",
 *     ],
 *     resourceTypes: [ // ContextResourceTypeList
 *       "STRING_VALUE",
 *     ],
 *     resourceTags: [ // ContextResourceTagList
 *       { // ContextResourceTag
 *         key: "STRING_VALUE", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     applicationOverview: "STRING_VALUE",
 *     industry: "STRING_VALUE",
 *     applicationType: "SAS" || "DESKTOP_APPLICATION" || "OTHER",
 *     criticality: "MISSION_CRITICAL" || "BUSINESS_CRITICAL" || "NON_CRITICAL" || "TEST_DEVELOPMENT",
 *     architectureOverview: "STRING_VALUE",
 *     additionalContext: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateAgentContextCommand(input);
 * const response = await client.send(command);
 * // { // CreateAgentContextResponse
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
 * @param CreateAgentContextCommandInput - {@link CreateAgentContextCommandInput}
 * @returns {@link CreateAgentContextCommandOutput}
 * @see {@link CreateAgentContextCommandInput} for command's `input` shape.
 * @see {@link CreateAgentContextCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The resource has already been processed, was deleted, or is too large.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is a problem with the Well-Architected Tool API service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource was not found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The user has reached their resource quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The user input is not valid.
 *
 * @throws {@link WellArchitectedServiceException}
 *
 * Base exception class for all service exceptions from WellArchitected service.
 *
 * @public
 */
export class CreateAgentContextCommand extends command<CreateAgentContextCommandInput, CreateAgentContextCommandOutput>(
  _ep1,
  _mw0,
  "CreateAgentContext",
  CreateAgentContext$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAgentContextRequest;
      output: CreateAgentContextResponse;
    };
    sdk: {
      input: CreateAgentContextCommandInput;
      output: CreateAgentContextCommandOutput;
    };
  };
}
