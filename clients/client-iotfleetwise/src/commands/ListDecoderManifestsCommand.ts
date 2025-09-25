// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import { ListDecoderManifestsRequest, ListDecoderManifestsResponse } from "../models/models_0";
import { ListDecoderManifests } from "../schemas/schemas_9_Manifest";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDecoderManifestsCommand}.
 */
export interface ListDecoderManifestsCommandInput extends ListDecoderManifestsRequest {}
/**
 * @public
 *
 * The output of {@link ListDecoderManifestsCommand}.
 */
export interface ListDecoderManifestsCommandOutput extends ListDecoderManifestsResponse, __MetadataBearer {}

/**
 * <p> Lists decoder manifests. </p>
 *          <note>
 *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the request to return more results.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, ListDecoderManifestsCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, ListDecoderManifestsCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * // import type { IoTFleetWiseClientConfig } from "@aws-sdk/client-iotfleetwise";
 * const config = {}; // type is IoTFleetWiseClientConfig
 * const client = new IoTFleetWiseClient(config);
 * const input = { // ListDecoderManifestsRequest
 *   modelManifestArn: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   listResponseScope: "METADATA_ONLY",
 * };
 * const command = new ListDecoderManifestsCommand(input);
 * const response = await client.send(command);
 * // { // ListDecoderManifestsResponse
 * //   summaries: [ // decoderManifestSummaries
 * //     { // DecoderManifestSummary
 * //       name: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       modelManifestArn: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       status: "ACTIVE" || "DRAFT" || "INVALID" || "VALIDATING",
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       lastModificationTime: new Date("TIMESTAMP"), // required
 * //       message: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDecoderManifestsCommandInput - {@link ListDecoderManifestsCommandInput}
 * @returns {@link ListDecoderManifestsCommandOutput}
 * @see {@link ListDecoderManifestsCommandInput} for command's `input` shape.
 * @see {@link ListDecoderManifestsCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request couldn't be completed because the server temporarily failed.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request couldn't be completed due to throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link IoTFleetWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTFleetWise service.</p>
 *
 *
 * @public
 */
export class ListDecoderManifestsCommand extends $Command
  .classBuilder<
    ListDecoderManifestsCommandInput,
    ListDecoderManifestsCommandOutput,
    IoTFleetWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTFleetWiseClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IoTAutobahnControlPlane", "ListDecoderManifests", {})
  .n("IoTFleetWiseClient", "ListDecoderManifestsCommand")
  .sc(ListDecoderManifests)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDecoderManifestsRequest;
      output: ListDecoderManifestsResponse;
    };
    sdk: {
      input: ListDecoderManifestsCommandInput;
      output: ListDecoderManifestsCommandOutput;
    };
  };
}
