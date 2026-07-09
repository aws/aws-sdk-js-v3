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
 * <p>Inserts an ad marker in the playlist for the specified channel and duration using the ad configuration associated with the channel.</p> <p> <b>Note:</b> AWS Elemental MediaTailor (EMT), the service that handles ad requests, provides CloudWatch metrics to help you monitor the success or failure of each InsertAdBreak operation. See <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/monitoring-cloudwatch-metrics.html">Monitoring AWS Elemental MediaTailor with Amazon CloudWatch</a> metrics in the <i>AWS Elemental MediaTailor User Guide</i> for details on available metrics.</p>
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
 * };
 * const command = new InsertAdBreakCommand(input);
 * const response = await client.send(command);
 * // { // InsertAdBreakResponse
 * //   adBreakId: "STRING_VALUE",
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
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ChannelNotBroadcasting} (client fault)
 *  <p>The stream is offline for the given channel ARN.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link IvsServiceException}
 * <p>Base exception class for all service exceptions from Ivs service.</p>
 *
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
