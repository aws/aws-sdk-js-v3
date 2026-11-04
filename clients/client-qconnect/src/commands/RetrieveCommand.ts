// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RetrieveResponse } from "../models/models_0";
import type { RetrieveRequest } from "../models/models_1";
import { Retrieve$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RetrieveCommand}.
 */
export interface RetrieveCommandInput extends RetrieveRequest {}
/**
 * @public
 *
 * The output of {@link RetrieveCommand}.
 */
export interface RetrieveCommandOutput extends RetrieveResponse, __MetadataBearer {}

/**
 * Retrieves content from knowledge sources based on a query.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, RetrieveCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, RetrieveCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // RetrieveRequest
 *   assistantId: "STRING_VALUE", // required
 *   retrievalConfiguration: { // RetrievalConfiguration
 *     knowledgeSource: { // KnowledgeSource Union: only one key present
 *       assistantAssociationIds: [ // AssistantAssociationIdList
 *         "STRING_VALUE",
 *       ],
 *     },
 *     filter: { // RetrievalFilterConfiguration Union: only one key present
 *       andAll: [ // RetrievalFilterList
 *         {//  Union: only one key present
 *           andAll: [
 *             "<RetrievalFilterConfiguration>",
 *           ],
 *           equals: { // FilterAttribute
 *             key: "STRING_VALUE", // required
 *             value: "DOCUMENT_VALUE", // required
 *           },
 *           greaterThan: {
 *             key: "STRING_VALUE", // required
 *             value: "DOCUMENT_VALUE", // required
 *           },
 *           greaterThanOrEquals: {
 *             key: "STRING_VALUE", // required
 *             value: "DOCUMENT_VALUE", // required
 *           },
 *           in: {
 *             key: "STRING_VALUE", // required
 *             value: "DOCUMENT_VALUE", // required
 *           },
 *           lessThan: {
 *             key: "STRING_VALUE", // required
 *             value: "DOCUMENT_VALUE", // required
 *           },
 *           lessThanOrEquals: "<FilterAttribute>",
 *           listContains: "<FilterAttribute>",
 *           notEquals: "<FilterAttribute>",
 *           notIn: "<FilterAttribute>",
 *           orAll: [
 *             "<RetrievalFilterConfiguration>",
 *           ],
 *           startsWith: "<FilterAttribute>",
 *           stringContains: "<FilterAttribute>",
 *         },
 *       ],
 *       equals: "<FilterAttribute>",
 *       greaterThan: "<FilterAttribute>",
 *       greaterThanOrEquals: "<FilterAttribute>",
 *       in: "<FilterAttribute>",
 *       lessThan: "<FilterAttribute>",
 *       lessThanOrEquals: "<FilterAttribute>",
 *       listContains: "<FilterAttribute>",
 *       notEquals: "<FilterAttribute>",
 *       notIn: "<FilterAttribute>",
 *       orAll: [
 *         "<RetrievalFilterConfiguration>",
 *       ],
 *       startsWith: "<FilterAttribute>",
 *       stringContains: "<FilterAttribute>",
 *     },
 *     numberOfResults: Number("int"),
 *     overrideKnowledgeBaseSearchType: "STRING_VALUE",
 *   },
 *   retrievalQuery: "STRING_VALUE", // required
 * };
 * const command = new RetrieveCommand(input);
 * const response = await client.send(command);
 * // { // RetrieveResponse
 * //   results: [ // RetrieveResultList // required
 * //     { // RetrieveResult
 * //       associationId: "STRING_VALUE", // required
 * //       sourceId: "STRING_VALUE", // required
 * //       referenceType: "STRING_VALUE", // required
 * //       contentText: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   errors: [ // RetrieveErrorList
 * //     { // RetrieveError
 * //       associationId: "STRING_VALUE", // required
 * //       code: "STRING_VALUE", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param RetrieveCommandInput - {@link RetrieveCommandInput}
 * @returns {@link RetrieveCommandOutput}
 * @see {@link RetrieveCommandInput} for command's `input` shape.
 * @see {@link RetrieveCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be processed because of conflict in the current state of the resource. For example, if you're using a `Create` API (such as `CreateAssistant`) that accepts name, a conflicting resource (usually with the same name) is being created or mutated.
 *
 * @throws {@link DependencyFailedException} (client fault)
 *
 * The request failed because it depends on another request that failed.
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *
 * The request reached the service more than 15 minutes after the date stamp on the request or more than 15 minutes after the request expiration date (such as for pre-signed URLs), or the date stamp on the request is more than 15 minutes in the future.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * You've exceeded your service quota. To perform the requested action, remove some of the relevant resources, or use service quotas to request a service quota increase.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by a service.
 *
 * @throws {@link QConnectServiceException}
 *
 * Base exception class for all service exceptions from QConnect service.
 *
 * @public
 */
export class RetrieveCommand extends command<RetrieveCommandInput, RetrieveCommandOutput>(
  _ep0,
  _mw0,
  "Retrieve",
  Retrieve$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RetrieveRequest;
      output: RetrieveResponse;
    };
    sdk: {
      input: RetrieveCommandInput;
      output: RetrieveCommandOutput;
    };
  };
}
