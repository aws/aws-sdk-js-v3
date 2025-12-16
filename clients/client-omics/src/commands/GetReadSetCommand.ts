// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer, StreamingBlobPayloadOutputTypes } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { type GetReadSetRequest, GetReadSetResponse } from "../models/models_0";
import type { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { GetReadSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetReadSetCommand}.
 */
export interface GetReadSetCommandInput extends GetReadSetRequest {}
/**
 * @public
 *
 * The output of {@link GetReadSetCommand}.
 */
export interface GetReadSetCommandOutput extends Omit<GetReadSetResponse, "payload">, __MetadataBearer {
  payload?: StreamingBlobPayloadOutputTypes;
}

/**
 * <p>Retrieves detailed information from parts of a read set and returns the read set in the same format that it was uploaded. You must have read sets uploaded to your sequence store in order to run this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, GetReadSetCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, GetReadSetCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // GetReadSetRequest
 *   id: "STRING_VALUE", // required
 *   sequenceStoreId: "STRING_VALUE", // required
 *   file: "STRING_VALUE",
 *   partNumber: Number("int"), // required
 * };
 * const command = new GetReadSetCommand(input);
 * const response = await client.send(command);
 * // consume or destroy the stream to free the socket.
 * const bytes = await response.payload.transformToByteArray();
 * // const str = await response.payload.transformToString();
 * // response.payload.destroy(); // only applicable to Node.js Readable streams.
 *
 * // { // GetReadSetResponse
 * //   payload: "<SdkStream>", // see \@smithy/types -> StreamingBlobPayloadOutputTypes
 * // };
 *
 * ```
 *
 * @param GetReadSetCommandInput - {@link GetReadSetCommandInput}
 * @returns {@link GetReadSetCommandOutput}
 * @see {@link GetReadSetCommandInput} for command's `input` shape.
 * @see {@link GetReadSetCommandOutput} for command's `response` shape.
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
 * @throws {@link RangeNotSatisfiableException} (client fault)
 *  <p>The ranges specified in the request are not valid.</p>
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
export class GetReadSetCommand extends $Command
  .classBuilder<
    GetReadSetCommandInput,
    GetReadSetCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Omics", "GetReadSet", {})
  .n("OmicsClient", "GetReadSetCommand")
  .sc(GetReadSet$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetReadSetRequest;
      output: GetReadSetResponse;
    };
    sdk: {
      input: GetReadSetCommandInput;
      output: GetReadSetCommandOutput;
    };
  };
}
