// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateSequenceStoreRequest, UpdateSequenceStoreResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { UpdateSequenceStore } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSequenceStoreCommand}.
 */
export interface UpdateSequenceStoreCommandInput extends UpdateSequenceStoreRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSequenceStoreCommand}.
 */
export interface UpdateSequenceStoreCommandOutput extends UpdateSequenceStoreResponse, __MetadataBearer {}

/**
 * <p>Update one or more parameters for the sequence store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, UpdateSequenceStoreCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, UpdateSequenceStoreCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // UpdateSequenceStoreRequest
 *   id: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 *   fallbackLocation: "STRING_VALUE",
 *   propagatedSetLevelTags: [ // PropagatedSetLevelTags
 *     "STRING_VALUE",
 *   ],
 *   s3AccessConfig: { // S3AccessConfig
 *     accessLogLocation: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateSequenceStoreCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSequenceStoreResponse
 * //   id: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   sseConfig: { // SseConfig
 * //     type: "STRING_VALUE", // required
 * //     keyArn: "STRING_VALUE",
 * //   },
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   updateTime: new Date("TIMESTAMP"),
 * //   propagatedSetLevelTags: [ // PropagatedSetLevelTags
 * //     "STRING_VALUE",
 * //   ],
 * //   status: "STRING_VALUE",
 * //   statusMessage: "STRING_VALUE",
 * //   fallbackLocation: "STRING_VALUE",
 * //   s3Access: { // SequenceStoreS3Access
 * //     s3Uri: "STRING_VALUE",
 * //     s3AccessPointArn: "STRING_VALUE",
 * //     accessLogLocation: "STRING_VALUE",
 * //   },
 * //   eTagAlgorithmFamily: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateSequenceStoreCommandInput - {@link UpdateSequenceStoreCommandInput}
 * @returns {@link UpdateSequenceStoreCommandOutput}
 * @see {@link UpdateSequenceStoreCommandInput} for command's `input` shape.
 * @see {@link UpdateSequenceStoreCommandOutput} for command's `response` shape.
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
export class UpdateSequenceStoreCommand extends $Command
  .classBuilder<
    UpdateSequenceStoreCommandInput,
    UpdateSequenceStoreCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Omics", "UpdateSequenceStore", {})
  .n("OmicsClient", "UpdateSequenceStoreCommand")
  .sc(UpdateSequenceStore)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSequenceStoreRequest;
      output: UpdateSequenceStoreResponse;
    };
    sdk: {
      input: UpdateSequenceStoreCommandInput;
      output: UpdateSequenceStoreCommandOutput;
    };
  };
}
