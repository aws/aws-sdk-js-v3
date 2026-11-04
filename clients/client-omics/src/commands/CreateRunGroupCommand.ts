// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateRunGroupRequest, CreateRunGroupResponse } from "../models/models_0";
import { CreateRunGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateRunGroupCommand}.
 */
export interface CreateRunGroupCommandInput extends CreateRunGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateRunGroupCommand}.
 */
export interface CreateRunGroupCommandOutput extends CreateRunGroupResponse, __MetadataBearer {}

/**
 * Creates a run group to limit the compute resources for the runs that are added to the group. Returns an ARN, ID, and tags for the run group.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, CreateRunGroupCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, CreateRunGroupCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // CreateRunGroupRequest
 *   name: "STRING_VALUE",
 *   maxCpus: Number("int"),
 *   maxRuns: Number("int"),
 *   maxDuration: Number("int"),
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   requestId: "STRING_VALUE", // required
 *   maxGpus: Number("int"),
 * };
 * const command = new CreateRunGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateRunGroupResponse
 * //   arn: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateRunGroupCommandInput - {@link CreateRunGroupCommandInput}
 * @returns {@link CreateRunGroupCommandOutput}
 * @see {@link CreateRunGroupCommandInput} for command's `input` shape.
 * @see {@link CreateRunGroupCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request cannot be applied to the target resource in its current state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred. Try the request again.
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *
 * The request timed out.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The target resource was not found in the current Region.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request exceeds a service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link OmicsServiceException}
 *
 * Base exception class for all service exceptions from Omics service.
 *
 * @public
 */
export class CreateRunGroupCommand extends command<CreateRunGroupCommandInput, CreateRunGroupCommandOutput>(
  _ep0,
  _mw0,
  "CreateRunGroup",
  CreateRunGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRunGroupRequest;
      output: CreateRunGroupResponse;
    };
    sdk: {
      input: CreateRunGroupCommandInput;
      output: CreateRunGroupCommandOutput;
    };
  };
}
