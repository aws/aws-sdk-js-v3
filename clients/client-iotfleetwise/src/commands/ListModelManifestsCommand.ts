// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListModelManifestsRequest, ListModelManifestsResponse } from "../models/models_0";
import { ListModelManifests$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListModelManifestsCommand}.
 */
export interface ListModelManifestsCommandInput extends ListModelManifestsRequest {}
/**
 * @public
 *
 * The output of {@link ListModelManifestsCommand}.
 */
export interface ListModelManifestsCommandOutput extends ListModelManifestsResponse, __MetadataBearer {}

/**
 * <p> Retrieves a list of vehicle models (model manifests). </p>
 *          <note>
 *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the request to return more results.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, ListModelManifestsCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, ListModelManifestsCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * // import type { IoTFleetWiseClientConfig } from "@aws-sdk/client-iotfleetwise";
 * const config = {}; // type is IoTFleetWiseClientConfig
 * const client = new IoTFleetWiseClient(config);
 * const input = { // ListModelManifestsRequest
 *   signalCatalogArn: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   listResponseScope: "METADATA_ONLY",
 * };
 * const command = new ListModelManifestsCommand(input);
 * const response = await client.send(command);
 * // { // ListModelManifestsResponse
 * //   summaries: [ // modelManifestSummaries
 * //     { // ModelManifestSummary
 * //       name: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       signalCatalogArn: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       status: "ACTIVE" || "DRAFT" || "INVALID" || "VALIDATING",
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       lastModificationTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListModelManifestsCommandInput - {@link ListModelManifestsCommandInput}
 * @returns {@link ListModelManifestsCommandOutput}
 * @see {@link ListModelManifestsCommandInput} for command's `input` shape.
 * @see {@link ListModelManifestsCommandOutput} for command's `response` shape.
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
export class ListModelManifestsCommand extends command<ListModelManifestsCommandInput, ListModelManifestsCommandOutput>(
  _ep0,
  _mw0,
  "ListModelManifests",
  ListModelManifests$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListModelManifestsRequest;
      output: ListModelManifestsResponse;
    };
    sdk: {
      input: ListModelManifestsCommandInput;
      output: ListModelManifestsCommandOutput;
    };
  };
}
