// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutMetadataRequest } from "../models/models_0";
import { PutMetadata$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutMetadataCommand}.
 */
export interface PutMetadataCommandInput extends PutMetadataRequest {}
/**
 * @public
 *
 * The output of {@link PutMetadataCommand}.
 */
export interface PutMetadataCommandOutput extends __MetadataBearer {}

/**
 * Inserts metadata into the active stream of the specified channel. At most 5 requests per second per channel are allowed, each with a maximum 1 KB payload. (If 5 TPS is not sufficient for your needs, we recommend batching your data into a single PutMetadata call.) At most 155 requests per second per account are allowed. Also see [Embedding Metadata within a Video Stream](https://docs.aws.amazon.com/ivs/latest/userguide/metadata.html) in the *Amazon IVS User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, PutMetadataCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, PutMetadataCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * // import type { IvsClientConfig } from "@aws-sdk/client-ivs";
 * const config = {}; // type is IvsClientConfig
 * const client = new IvsClient(config);
 * const input = { // PutMetadataRequest
 *   channelArn: "STRING_VALUE", // required
 *   metadata: "STRING_VALUE", // required
 * };
 * const command = new PutMetadataCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutMetadataCommandInput - {@link PutMetadataCommandInput}
 * @returns {@link PutMetadataCommandOutput}
 * @see {@link PutMetadataCommandInput} for command's `input` shape.
 * @see {@link PutMetadataCommandOutput} for command's `response` shape.
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
export class PutMetadataCommand extends command<PutMetadataCommandInput, PutMetadataCommandOutput>(
  _ep0,
  _mw0,
  "PutMetadata",
  PutMetadata$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutMetadataRequest;
      output: {};
    };
    sdk: {
      input: PutMetadataCommandInput;
      output: PutMetadataCommandOutput;
    };
  };
}
