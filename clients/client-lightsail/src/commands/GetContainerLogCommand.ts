// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetContainerLogRequest, GetContainerLogResult } from "../models/models_0";
import { GetContainerLog$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetContainerLogCommand}.
 */
export interface GetContainerLogCommandInput extends GetContainerLogRequest {}
/**
 * @public
 *
 * The output of {@link GetContainerLogCommand}.
 */
export interface GetContainerLogCommandOutput extends GetContainerLogResult, __MetadataBearer {}

/**
 * Returns the log events of a container of your Amazon Lightsail container service.
 *
 * If your container service has more than one node (i.e., a scale greater than 1), then the log events that are returned for the specified container are merged from all nodes on your container service.
 *
 * > **Note:** Container logs are retained for a certain amount of time. For more information, see [Amazon Lightsail endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/lightsail.html) in the *Amazon Web Services General Reference*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetContainerLogCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetContainerLogCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
 * const client = new LightsailClient(config);
 * const input = { // GetContainerLogRequest
 *   serviceName: "STRING_VALUE", // required
 *   containerName: "STRING_VALUE", // required
 *   startTime: new Date("TIMESTAMP"),
 *   endTime: new Date("TIMESTAMP"),
 *   filterPattern: "STRING_VALUE",
 *   pageToken: "STRING_VALUE",
 * };
 * const command = new GetContainerLogCommand(input);
 * const response = await client.send(command);
 * // { // GetContainerLogResult
 * //   logEvents: [ // ContainerServiceLogEventList
 * //     { // ContainerServiceLogEvent
 * //       createdAt: new Date("TIMESTAMP"),
 * //       message: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetContainerLogCommandInput - {@link GetContainerLogCommandInput}
 * @returns {@link GetContainerLogCommandOutput}
 * @see {@link GetContainerLogCommandInput} for command's `input` shape.
 * @see {@link GetContainerLogCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * Lightsail throws this exception when user input does not conform to the validation rules of an input field.
 *
 * > **Note:** Domain and distribution APIs are only available in the N. Virginia (`us-east-1`) Amazon Web Services Region. Please set your Amazon Web Services Region configuration to `us-east-1` to create, view, or edit these resources.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * Lightsail throws this exception when it cannot find a resource.
 *
 * @throws {@link RegionSetupInProgressException} (client fault)
 *
 * Lightsail throws this exception when an operation is performed on resources in an opt-in Region that is currently being set up.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * A general service exception.
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *
 * Lightsail throws this exception when the user has not been authenticated.
 *
 * @throws {@link LightsailServiceException}
 *
 * Base exception class for all service exceptions from Lightsail service.
 *
 * @public
 */
export class GetContainerLogCommand extends command<GetContainerLogCommandInput, GetContainerLogCommandOutput>(
  _ep0,
  _mw0,
  "GetContainerLog",
  GetContainerLog$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetContainerLogRequest;
      output: GetContainerLogResult;
    };
    sdk: {
      input: GetContainerLogCommandInput;
      output: GetContainerLogCommandOutput;
    };
  };
}
