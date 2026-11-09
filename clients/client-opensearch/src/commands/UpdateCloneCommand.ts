// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateCloneRequest, UpdateCloneResponse } from "../models/models_1";
import { UpdateClone$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateCloneCommand}.
 */
export interface UpdateCloneCommandInput extends UpdateCloneRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCloneCommand}.
 */
export interface UpdateCloneCommandOutput extends UpdateCloneResponse, __MetadataBearer {}

/**
 * <p>Manages a cloned blue/green upgrade that is in progress on a domain. Use it to shift a percentage of search traffic to the cloned cluster, to cut over to the cloned cluster or back to the primary cluster, or to change the retention period. Specify exactly one of <code>TrafficSplitOptions</code>, <code>CutoverOptions</code>, or <code>RetentionOptions</code> in each request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, UpdateCloneCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, UpdateCloneCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // UpdateCloneRequest
 *   DomainName: "STRING_VALUE", // required
 *   TrafficSplitOptions: { // TrafficSplitRequestOptions
 *     Strategy: "ShiftReadTrafficPercent", // required
 *     CloneReadTrafficPercent: Number("int"), // required
 *   },
 *   CutoverOptions: { // CutoverRequestOptions
 *     Target: "ClonedCluster" || "PrimaryCluster", // required
 *   },
 *   RetentionOptions: { // RetentionOptions Union: only one key present
 *     RetentionInHours: Number("int"),
 *     RetentionAction: "RollbackToPrimaryCluster" || "DeletePrimaryCluster",
 *   },
 * };
 * const command = new UpdateCloneCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCloneResponse
 * //   DomainName: "STRING_VALUE", // required
 * //   ChangeId: "STRING_VALUE", // required
 * //   CutoverOptions: { // CutoverOptions
 * //     Target: "ClonedCluster" || "PrimaryCluster", // required
 * //     Status: "InProgress" || "Completed" || "Failed", // required
 * //   },
 * //   TrafficSplitOptions: { // TrafficSplitOptions
 * //     Current: { // TrafficPercents
 * //       PrimaryReadTrafficPercent: Number("int"), // required
 * //       CloneReadTrafficPercent: Number("int"), // required
 * //     },
 * //     Target: {
 * //       PrimaryReadTrafficPercent: Number("int"), // required
 * //       CloneReadTrafficPercent: Number("int"), // required
 * //     },
 * //     Status: "InProgress" || "Completed" || "Failed", // required
 * //   },
 * //   RetentionOptions: { // RetentionOptions Union: only one key present
 * //     RetentionInHours: Number("int"),
 * //     RetentionAction: "RollbackToPrimaryCluster" || "DeletePrimaryCluster",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateCloneCommandInput - {@link UpdateCloneCommandInput}
 * @returns {@link UpdateCloneCommandOutput}
 * @see {@link UpdateCloneCommandInput} for command's `input` shape.
 * @see {@link UpdateCloneCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access an unsupported operation.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 *
 * @public
 */
export class UpdateCloneCommand extends command<UpdateCloneCommandInput, UpdateCloneCommandOutput>(
  _ep0,
  _mw0,
  "UpdateClone",
  UpdateClone$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCloneRequest;
      output: UpdateCloneResponse;
    };
    sdk: {
      input: UpdateCloneCommandInput;
      output: UpdateCloneCommandOutput;
    };
  };
}
