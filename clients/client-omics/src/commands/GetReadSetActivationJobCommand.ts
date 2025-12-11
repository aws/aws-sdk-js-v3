// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetReadSetActivationJobRequest, GetReadSetActivationJobResponse } from "../models/models_0";
import type { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { GetReadSetActivationJob } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetReadSetActivationJobCommand}.
 */
export interface GetReadSetActivationJobCommandInput extends GetReadSetActivationJobRequest {}
/**
 * @public
 *
 * The output of {@link GetReadSetActivationJobCommand}.
 */
export interface GetReadSetActivationJobCommandOutput extends GetReadSetActivationJobResponse, __MetadataBearer {}

/**
 * <p>Returns detailed information about the status of a read set activation job in JSON format.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, GetReadSetActivationJobCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, GetReadSetActivationJobCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // GetReadSetActivationJobRequest
 *   id: "STRING_VALUE", // required
 *   sequenceStoreId: "STRING_VALUE", // required
 * };
 * const command = new GetReadSetActivationJobCommand(input);
 * const response = await client.send(command);
 * // { // GetReadSetActivationJobResponse
 * //   id: "STRING_VALUE", // required
 * //   sequenceStoreId: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * //   statusMessage: "STRING_VALUE",
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   completionTime: new Date("TIMESTAMP"),
 * //   sources: [ // ActivateReadSetSourceList
 * //     { // ActivateReadSetSourceItem
 * //       readSetId: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       statusMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetReadSetActivationJobCommandInput - {@link GetReadSetActivationJobCommandInput}
 * @returns {@link GetReadSetActivationJobCommandOutput}
 * @see {@link GetReadSetActivationJobCommandInput} for command's `input` shape.
 * @see {@link GetReadSetActivationJobCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
export class GetReadSetActivationJobCommand extends $Command
  .classBuilder<
    GetReadSetActivationJobCommandInput,
    GetReadSetActivationJobCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Omics", "GetReadSetActivationJob", {})
  .n("OmicsClient", "GetReadSetActivationJobCommand")
  .sc(GetReadSetActivationJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetReadSetActivationJobRequest;
      output: GetReadSetActivationJobResponse;
    };
    sdk: {
      input: GetReadSetActivationJobCommandInput;
      output: GetReadSetActivationJobCommandOutput;
    };
  };
}
