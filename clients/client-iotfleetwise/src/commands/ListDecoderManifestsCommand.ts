// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDecoderManifestsRequest, ListDecoderManifestsResponse } from "../models/models_0";
import { ListDecoderManifests$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists decoder manifests.
 *
 * > **Note:** This API operation uses pagination. Specify the `nextToken` parameter in the request to return more results.
 *
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
 *
 * You don't have sufficient permission to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request couldn't be completed because the server temporarily failed.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request couldn't be completed due to throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link IoTFleetWiseServiceException}
 *
 * Base exception class for all service exceptions from IoTFleetWise service.
 *
 * @public
 */
export class ListDecoderManifestsCommand extends command<ListDecoderManifestsCommandInput, ListDecoderManifestsCommandOutput>(
  _ep0,
  _mw0,
  "ListDecoderManifests",
  ListDecoderManifests$
) {
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
