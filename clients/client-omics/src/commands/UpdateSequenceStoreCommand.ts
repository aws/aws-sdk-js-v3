// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateSequenceStoreRequest, UpdateSequenceStoreResponse } from "../models/models_0";
import { UpdateSequenceStore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Update one or more parameters for the sequence store.
 *
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
export class UpdateSequenceStoreCommand extends command<UpdateSequenceStoreCommandInput, UpdateSequenceStoreCommandOutput>(
  _ep0,
  _mw0,
  "UpdateSequenceStore",
  UpdateSequenceStore$
) {
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
