// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetRunGroupRequest, GetRunGroupResponse } from "../models/models_0";
import type { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { GetRunGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Gets information about a run group and returns its metadata.</p>
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request cannot be applied to the target resource in its current state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>The request timed out.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found in the current Region.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link OmicsServiceException}
 * <p>Base exception class for all service exceptions from Omics service.</p>
 *
 *
 * @public
 */
export class GetRunGroupCommand extends $Command
  .classBuilder<
    GetRunGroupCommandInput,
    GetRunGroupCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Omics", "GetRunGroup", {})
  .n("OmicsClient", "GetRunGroupCommand")
  .sc(GetRunGroup)
  .build() {
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
