// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetStreamKeyRequest, GetStreamKeyResponse } from "../models/models_0";
import { GetStreamKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetStreamKeyCommand}.
 */
export interface GetStreamKeyCommandInput extends GetStreamKeyRequest {}
/**
 * @public
 *
 * The output of {@link GetStreamKeyCommand}.
 */
export interface GetStreamKeyCommandOutput extends GetStreamKeyResponse, __MetadataBearer {}

/**
 * <p>Gets stream-key information for a specified ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, GetStreamKeyCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, GetStreamKeyCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * // import type { IvsClientConfig } from "@aws-sdk/client-ivs";
 * const config = {}; // type is IvsClientConfig
 * const client = new IvsClient(config);
 * const input = { // GetStreamKeyRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetStreamKeyCommand(input);
 * const response = await client.send(command);
 * // { // GetStreamKeyResponse
 * //   streamKey: { // StreamKey
 * //     arn: "STRING_VALUE",
 * //     value: "STRING_VALUE",
 * //     channelArn: "STRING_VALUE",
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetStreamKeyCommandInput - {@link GetStreamKeyCommandInput}
 * @returns {@link GetStreamKeyCommandOutput}
 * @see {@link GetStreamKeyCommandInput} for command's `input` shape.
 * @see {@link GetStreamKeyCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
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
export class GetStreamKeyCommand extends command<GetStreamKeyCommandInput, GetStreamKeyCommandOutput>(
  _ep0,
  _mw0,
  "GetStreamKey",
  GetStreamKey$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetStreamKeyRequest;
      output: GetStreamKeyResponse;
    };
    sdk: {
      input: GetStreamKeyCommandInput;
      output: GetStreamKeyCommandOutput;
    };
  };
}
