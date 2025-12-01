// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import type {
  BatchStartViewerSessionRevocationRequest,
  BatchStartViewerSessionRevocationResponse,
} from "../models/models_0";
import { BatchStartViewerSessionRevocation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchStartViewerSessionRevocationCommand}.
 */
export interface BatchStartViewerSessionRevocationCommandInput extends BatchStartViewerSessionRevocationRequest {}
/**
 * @public
 *
 * The output of {@link BatchStartViewerSessionRevocationCommand}.
 */
export interface BatchStartViewerSessionRevocationCommandOutput
  extends BatchStartViewerSessionRevocationResponse,
    __MetadataBearer {}

/**
 * <p>Performs <a>StartViewerSessionRevocation</a> on multiple channel ARN and viewer
 *       ID pairs simultaneously.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, BatchStartViewerSessionRevocationCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, BatchStartViewerSessionRevocationCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * // import type { IvsClientConfig } from "@aws-sdk/client-ivs";
 * const config = {}; // type is IvsClientConfig
 * const client = new IvsClient(config);
 * const input = { // BatchStartViewerSessionRevocationRequest
 *   viewerSessions: [ // BatchStartViewerSessionRevocationViewerSessionList // required
 *     { // BatchStartViewerSessionRevocationViewerSession
 *       channelArn: "STRING_VALUE", // required
 *       viewerId: "STRING_VALUE", // required
 *       viewerSessionVersionsLessThanOrEqualTo: Number("int"),
 *     },
 *   ],
 * };
 * const command = new BatchStartViewerSessionRevocationCommand(input);
 * const response = await client.send(command);
 * // { // BatchStartViewerSessionRevocationResponse
 * //   errors: [ // BatchStartViewerSessionRevocationErrors
 * //     { // BatchStartViewerSessionRevocationError
 * //       channelArn: "STRING_VALUE", // required
 * //       viewerId: "STRING_VALUE", // required
 * //       code: "STRING_VALUE",
 * //       message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchStartViewerSessionRevocationCommandInput - {@link BatchStartViewerSessionRevocationCommandInput}
 * @returns {@link BatchStartViewerSessionRevocationCommandOutput}
 * @see {@link BatchStartViewerSessionRevocationCommandInput} for command's `input` shape.
 * @see {@link BatchStartViewerSessionRevocationCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link PendingVerification} (client fault)
 *  <p/>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IvsServiceException}
 * <p>Base exception class for all service exceptions from Ivs service.</p>
 *
 *
 * @public
 */
export class BatchStartViewerSessionRevocationCommand extends $Command
  .classBuilder<
    BatchStartViewerSessionRevocationCommandInput,
    BatchStartViewerSessionRevocationCommandOutput,
    IvsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IvsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonInteractiveVideoService", "BatchStartViewerSessionRevocation", {})
  .n("IvsClient", "BatchStartViewerSessionRevocationCommand")
  .sc(BatchStartViewerSessionRevocation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchStartViewerSessionRevocationRequest;
      output: BatchStartViewerSessionRevocationResponse;
    };
    sdk: {
      input: BatchStartViewerSessionRevocationCommandInput;
      output: BatchStartViewerSessionRevocationCommandOutput;
    };
  };
}
