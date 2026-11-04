// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { InsertAdBreakRequest, InsertAdBreakResponse } from "../models/models_0";
import { InsertAdBreak$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link InsertAdBreakCommand}.
 */
export interface InsertAdBreakCommandInput extends InsertAdBreakRequest {}
/**
 * @public
 *
 * The output of {@link InsertAdBreakCommand}.
 */
export interface InsertAdBreakCommandOutput extends InsertAdBreakResponse, __MetadataBearer {}

/**
 * Inserts an ad marker in the playlist for the specified channel and duration using the ad configuration associated with the channel.
 *
 * **Note:** AWS Elemental MediaTailor (EMT), the service that handles ad requests, provides CloudWatch metrics to help you monitor the success or failure of each InsertAdBreak operation. See [Monitoring AWS Elemental MediaTailor with Amazon CloudWatch](https://docs.aws.amazon.com/mediatailor/latest/ug/monitoring-cloudwatch-metrics.html) metrics in the *AWS Elemental MediaTailor User Guide* for details on available metrics.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, InsertAdBreakCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, InsertAdBreakCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * // import type { IvsClientConfig } from "@aws-sdk/client-ivs";
 * const config = {}; // type is IvsClientConfig
 * const client = new IvsClient(config);
 * const input = { // InsertAdBreakRequest
 *   channelArn: "STRING_VALUE", // required
 *   durationSeconds: Number("int"), // required
 *   adBreakId: "STRING_VALUE",
 *   targetStartAt: new Date("TIMESTAMP"),
 * };
 * const command = new InsertAdBreakCommand(input);
 * const response = await client.send(command);
 * // { // InsertAdBreakResponse
 * //   adBreakId: "STRING_VALUE",
 * //   targetStartAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param InsertAdBreakCommandInput - {@link InsertAdBreakCommandInput}
 * @returns {@link InsertAdBreakCommandOutput}
 * @see {@link InsertAdBreakCommandInput} for command's `input` shape.
 * @see {@link InsertAdBreakCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link ChannelNotBroadcasting} (client fault)
 *
 * The stream is offline for the given channel ARN.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error during processing of request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link IvsServiceException}
 *
 * Base exception class for all service exceptions from Ivs service.
 *
 * @public
 */
export class InsertAdBreakCommand extends command<InsertAdBreakCommandInput, InsertAdBreakCommandOutput>(
  _ep0,
  _mw0,
  "InsertAdBreak",
  InsertAdBreak$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InsertAdBreakRequest;
      output: InsertAdBreakResponse;
    };
    sdk: {
      input: InsertAdBreakCommandInput;
      output: InsertAdBreakCommandOutput;
    };
  };
}
