// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelMetadataTransferJobRequest, CancelMetadataTransferJobResponse } from "../models/models_0";
import { CancelMetadataTransferJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelMetadataTransferJobCommand}.
 */
export interface CancelMetadataTransferJobCommandInput extends CancelMetadataTransferJobRequest {}
/**
 * @public
 *
 * The output of {@link CancelMetadataTransferJobCommand}.
 */
export interface CancelMetadataTransferJobCommandOutput extends CancelMetadataTransferJobResponse, __MetadataBearer {}

/**
 * Cancels the metadata transfer job.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, CancelMetadataTransferJobCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, CancelMetadataTransferJobCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * // import type { IoTTwinMakerClientConfig } from "@aws-sdk/client-iottwinmaker";
 * const config = {}; // type is IoTTwinMakerClientConfig
 * const client = new IoTTwinMakerClient(config);
 * const input = { // CancelMetadataTransferJobRequest
 *   metadataTransferJobId: "STRING_VALUE", // required
 * };
 * const command = new CancelMetadataTransferJobCommand(input);
 * const response = await client.send(command);
 * // { // CancelMetadataTransferJobResponse
 * //   metadataTransferJobId: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   updateDateTime: new Date("TIMESTAMP"), // required
 * //   status: { // MetadataTransferJobStatus
 * //     state: "STRING_VALUE",
 * //     error: { // ErrorDetails
 * //       code: "STRING_VALUE",
 * //       message: "STRING_VALUE",
 * //     },
 * //     queuedPosition: Number("int"),
 * //   },
 * //   progress: { // MetadataTransferJobProgress
 * //     totalCount: Number("int"),
 * //     succeededCount: Number("int"),
 * //     skippedCount: Number("int"),
 * //     failedCount: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CancelMetadataTransferJobCommandInput - {@link CancelMetadataTransferJobCommandInput}
 * @returns {@link CancelMetadataTransferJobCommandOutput}
 * @see {@link CancelMetadataTransferJobCommandInput} for command's `input` shape.
 * @see {@link CancelMetadataTransferJobCommandOutput} for command's `response` shape.
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access is denied.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * A conflict occurred.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error has occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource wasn't found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Failed
 *
 * @throws {@link IoTTwinMakerServiceException}
 *
 * Base exception class for all service exceptions from IoTTwinMaker service.
 *
 * @public
 */
export class CancelMetadataTransferJobCommand extends command<CancelMetadataTransferJobCommandInput, CancelMetadataTransferJobCommandOutput>(
  _ep0,
  _mw0,
  "CancelMetadataTransferJob",
  CancelMetadataTransferJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelMetadataTransferJobRequest;
      output: CancelMetadataTransferJobResponse;
    };
    sdk: {
      input: CancelMetadataTransferJobCommandInput;
      output: CancelMetadataTransferJobCommandOutput;
    };
  };
}
