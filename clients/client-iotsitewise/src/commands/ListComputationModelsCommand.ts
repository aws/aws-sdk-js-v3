// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListComputationModelsRequest, ListComputationModelsResponse } from "../models/models_0";
import { ListComputationModels$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListComputationModelsCommand}.
 */
export interface ListComputationModelsCommandInput extends ListComputationModelsRequest {}
/**
 * @public
 *
 * The output of {@link ListComputationModelsCommand}.
 */
export interface ListComputationModelsCommandOutput extends ListComputationModelsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of summaries of all computation models.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListComputationModelsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListComputationModelsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // ListComputationModelsRequest
 *   computationModelType: "ANOMALY_DETECTION",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListComputationModelsCommand(input);
 * const response = await client.send(command);
 * // { // ListComputationModelsResponse
 * //   computationModelSummaries: [ // ComputationModelSummaries // required
 * //     { // ComputationModelSummary
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       type: "ANOMALY_DETECTION", // required
 * //       creationDate: new Date("TIMESTAMP"), // required
 * //       lastUpdateDate: new Date("TIMESTAMP"), // required
 * //       status: { // ComputationModelStatus
 * //         state: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "FAILED", // required
 * //         error: { // ErrorDetails
 * //           code: "VALIDATION_ERROR" || "INTERNAL_FAILURE", // required
 * //           message: "STRING_VALUE", // required
 * //           details: [ // DetailedErrors
 * //             { // DetailedError
 * //               code: "INCOMPATIBLE_COMPUTE_LOCATION" || "INCOMPATIBLE_FORWARDING_CONFIGURATION", // required
 * //               message: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       version: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListComputationModelsCommandInput - {@link ListComputationModelsCommandInput}
 * @returns {@link ListComputationModelsCommandOutput}
 * @see {@link ListComputationModelsCommandInput} for command's `input` shape.
 * @see {@link ListComputationModelsCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>IoT SiteWise can't process your request right now. Try again later.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters. Check your request and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a rate limit. For example, you might have exceeded the number of
 *       IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so
 *       on.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *
 * @throws {@link IoTSiteWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTSiteWise service.</p>
 *
 *
 * @public
 */
export class ListComputationModelsCommand extends command<ListComputationModelsCommandInput, ListComputationModelsCommandOutput>(
  _ep0,
  _mw0,
  "ListComputationModels",
  ListComputationModels$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListComputationModelsRequest;
      output: ListComputationModelsResponse;
    };
    sdk: {
      input: ListComputationModelsCommandInput;
      output: ListComputationModelsCommandOutput;
    };
  };
}
