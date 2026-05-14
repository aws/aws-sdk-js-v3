// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DSQLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DSQLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetStreamInput, GetStreamOutput } from "../models/models_0";
import { GetStream$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetStreamCommand}.
 */
export interface GetStreamCommandInput extends GetStreamInput {}
/**
 * @public
 *
 * The output of {@link GetStreamCommand}.
 */
export interface GetStreamCommandOutput extends GetStreamOutput, __MetadataBearer {}

/**
 * <p>Retrieves information about a stream.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DSQLClient, GetStreamCommand } from "@aws-sdk/client-dsql"; // ES Modules import
 * // const { DSQLClient, GetStreamCommand } = require("@aws-sdk/client-dsql"); // CommonJS import
 * // import type { DSQLClientConfig } from "@aws-sdk/client-dsql";
 * const config = {}; // type is DSQLClientConfig
 * const client = new DSQLClient(config);
 * const input = { // GetStreamInput
 *   clusterIdentifier: "STRING_VALUE", // required
 *   streamIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetStreamCommand(input);
 * const response = await client.send(command);
 * // { // GetStreamOutput
 * //   clusterIdentifier: "STRING_VALUE", // required
 * //   streamIdentifier: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   status: "CREATING" || "ACTIVE" || "DELETING" || "DELETED" || "FAILED" || "IMPAIRED", // required
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   ordering: "UNORDERED", // required
 * //   format: "JSON", // required
 * //   targetDefinition: { // TargetDefinition Union: only one key present
 * //     kinesis: { // KinesisTargetDefinition
 * //       streamArn: "STRING_VALUE", // required
 * //       roleArn: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   statusReason: { // StatusReason
 * //     error: "KINESIS_THROUGHPUT_EXCEEDED" || "KINESIS_STREAM_NOT_FOUND" || "ROLE_ACCESS_DENIED" || "KINESIS_ACCESS_DENIED" || "KINESIS_KMS_ACCESS_DENIED" || "KINESIS_OVERSIZE_RECORD" || "CLUSTER_CMK_INACCESSIBLE" || "INTERNAL_ERROR", // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //   },
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetStreamCommandInput - {@link GetStreamCommandInput}
 * @returns {@link GetStreamCommandOutput}
 * @see {@link GetStreamCommandInput} for command's `input` shape.
 * @see {@link GetStreamCommandOutput} for command's `response` shape.
 * @see {@link DSQLClientResolvedConfig | config} for DSQLClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link DSQLServiceException}
 * <p>Base exception class for all service exceptions from DSQL service.</p>
 *
 *
 * @public
 */
export class GetStreamCommand extends $Command
  .classBuilder<
    GetStreamCommandInput,
    GetStreamCommandOutput,
    DSQLClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DSQLClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DSQL", "GetStream", {})
  .n("DSQLClient", "GetStreamCommand")
  .sc(GetStream$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetStreamInput;
      output: GetStreamOutput;
    };
    sdk: {
      input: GetStreamCommandInput;
      output: GetStreamCommandOutput;
    };
  };
}
