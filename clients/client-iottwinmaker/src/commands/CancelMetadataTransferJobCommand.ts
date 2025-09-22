// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTTwinMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTTwinMakerClient";
import { CancelMetadataTransferJobRequest, CancelMetadataTransferJobResponse } from "../models/models_0";
import { CancelMetadataTransferJob } from "../schemas/schemas_9_Create";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Cancels the metadata transfer job.</p>
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
 *  <p>Access is denied.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict occurred.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource wasn't found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Failed</p>
 *
 * @throws {@link IoTTwinMakerServiceException}
 * <p>Base exception class for all service exceptions from IoTTwinMaker service.</p>
 *
 *
 * @public
 */
export class CancelMetadataTransferJobCommand extends $Command
  .classBuilder<
    CancelMetadataTransferJobCommandInput,
    CancelMetadataTransferJobCommandOutput,
    IoTTwinMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTTwinMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTTwinMaker", "CancelMetadataTransferJob", {})
  .n("IoTTwinMakerClient", "CancelMetadataTransferJobCommand")
  .sc(CancelMetadataTransferJob)
  .build() {
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
