// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRunGroupRequest, GetRunGroupResponse } from "../models/models_0";
import { GetRunGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRunGroupCommand}.
 */
export interface GetRunGroupCommandInput extends GetRunGroupRequest {}
/**
 * @public
 *
 * The output of {@link GetRunGroupCommand}.
 */
export interface GetRunGroupCommandOutput extends GetRunGroupResponse, __MetadataBearer {}

/**
 * Gets information about a run group and returns its metadata.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, GetRunGroupCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, GetRunGroupCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // GetRunGroupRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetRunGroupCommand(input);
 * const response = await client.send(command);
 * // { // GetRunGroupResponse
 * //   arn: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   maxCpus: Number("int"),
 * //   maxRuns: Number("int"),
 * //   maxDuration: Number("int"),
 * //   creationTime: new Date("TIMESTAMP"),
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   maxGpus: Number("int"),
 * // };
 *
 * ```
 *
 * @param GetRunGroupCommandInput - {@link GetRunGroupCommandInput}
 * @returns {@link GetRunGroupCommandOutput}
 * @see {@link GetRunGroupCommandInput} for command's `input` shape.
 * @see {@link GetRunGroupCommandOutput} for command's `response` shape.
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
export class GetRunGroupCommand extends command<GetRunGroupCommandInput, GetRunGroupCommandOutput>(
  _ep0,
  _mw0,
  "GetRunGroup",
  GetRunGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRunGroupRequest;
      output: GetRunGroupResponse;
    };
    sdk: {
      input: GetRunGroupCommandInput;
      output: GetRunGroupCommandOutput;
    };
  };
}
