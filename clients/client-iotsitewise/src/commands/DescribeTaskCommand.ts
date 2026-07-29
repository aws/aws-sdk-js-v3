// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeTaskRequest, DescribeTaskResponse } from "../models/models_1";
import { DescribeTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeTaskCommand}.
 */
export interface DescribeTaskCommandInput extends DescribeTaskRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTaskCommand}.
 */
export interface DescribeTaskCommandOutput extends DescribeTaskResponse, __MetadataBearer {}

/**
 * <p>Retrieves detailed information about a specific task in a workspace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribeTaskCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribeTaskCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // DescribeTaskRequest
 *   workspaceName: "STRING_VALUE", // required
 *   taskName: "STRING_VALUE", // required
 *   taskVersion: "STRING_VALUE",
 * };
 * const command = new DescribeTaskCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTaskResponse
 * //   workspaceName: "STRING_VALUE", // required
 * //   taskName: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   taskArn: "STRING_VALUE", // required
 * //   version: "STRING_VALUE", // required
 * //   taskConfiguration: { // TaskConfiguration Union: only one key present
 * //     containerTaskConfiguration: { // ContainerTaskConfiguration
 * //       ecrUri: "STRING_VALUE", // required
 * //       taskExecutionRole: "STRING_VALUE", // required
 * //       processingType: "GENERIC_COMPUTE_PROCESSING" || "HARDWARE_ACCELERATED_PROCESSING", // required
 * //       processingUnit: "UNITS_2" || "UNITS_4" || "UNITS_8" || "UNITS_12" || "UNITS_16" || "UNITS_24" || "UNITS_32" || "UNITS_36" || "UNITS_48" || "UNITS_60" || "UNITS_64" || "UNITS_72" || "UNITS_84" || "UNITS_96", // required
 * //       command: [ // CommandList
 * //         "STRING_VALUE",
 * //       ],
 * //       timeoutSeconds: Number("long"),
 * //       environmentVariables: { // EnvironmentVariablesMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   status: { // ResourceStatus
 * //     error: { // ResourceError
 * //       code: "VALIDATION_ERROR" || "INTERNAL_FAILURE",
 * //       message: "STRING_VALUE",
 * //     },
 * //     state: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "FAILED",
 * //   },
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param DescribeTaskCommandInput - {@link DescribeTaskCommandInput}
 * @returns {@link DescribeTaskCommandOutput}
 * @see {@link DescribeTaskCommandInput} for command's `input` shape.
 * @see {@link DescribeTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>IoT SiteWise can't process your request right now. Try again later.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters. Check your request and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
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
export class DescribeTaskCommand extends command<DescribeTaskCommandInput, DescribeTaskCommandOutput>(
  _ep0,
  _mw0,
  "DescribeTask",
  DescribeTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTaskRequest;
      output: DescribeTaskResponse;
    };
    sdk: {
      input: DescribeTaskCommandInput;
      output: DescribeTaskCommandOutput;
    };
  };
}
