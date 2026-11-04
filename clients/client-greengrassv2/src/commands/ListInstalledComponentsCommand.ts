// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListInstalledComponentsRequest, ListInstalledComponentsResponse } from "../models/models_0";
import { ListInstalledComponents$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListInstalledComponentsCommand}.
 */
export interface ListInstalledComponentsCommandInput extends ListInstalledComponentsRequest {}
/**
 * @public
 *
 * The output of {@link ListInstalledComponentsCommand}.
 */
export interface ListInstalledComponentsCommandOutput extends ListInstalledComponentsResponse, __MetadataBearer {}

/**
 * Retrieves a paginated list of the components that a Greengrass core device runs. By default, this list doesn't include components that are deployed as dependencies of other components. To include dependencies in the response, set the `topologyFilter` parameter to `ALL`.
 *
 * > **Note:**
 * >
 * > IoT Greengrass relies on individual devices to send status updates to the Amazon Web Services Cloud. If the IoT Greengrass Core software isn't running on the device, or if device isn't connected to the Amazon Web Services Cloud, then the reported status of that device might not reflect its current status. The status timestamp indicates when the device status was last updated.
 * >
 * > Core devices send status updates at the following times:
 * >
 * > - When the IoT Greengrass Core software starts
 * > - When the core device receives a deployment from the Amazon Web Services Cloud
 * > - When the status of any component on the core device becomes `BROKEN`
 * > - At a [regular interval that you can configure](https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-nucleus-component.html#greengrass-nucleus-component-configuration-fss), which defaults to 24 hours
 * > - For IoT Greengrass Core v2.7.0, the core device sends status updates upon local deployment and cloud deployment
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, ListInstalledComponentsCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, ListInstalledComponentsCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * // import type { GreengrassV2ClientConfig } from "@aws-sdk/client-greengrassv2";
 * const config = {}; // type is GreengrassV2ClientConfig
 * const client = new GreengrassV2Client(config);
 * const input = { // ListInstalledComponentsRequest
 *   coreDeviceThingName: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   topologyFilter: "ALL" || "ROOT",
 * };
 * const command = new ListInstalledComponentsCommand(input);
 * const response = await client.send(command);
 * // { // ListInstalledComponentsResponse
 * //   installedComponents: [ // InstalledComponentList
 * //     { // InstalledComponent
 * //       componentName: "STRING_VALUE",
 * //       componentVersion: "STRING_VALUE",
 * //       lifecycleState: "NEW" || "INSTALLED" || "STARTING" || "RUNNING" || "STOPPING" || "ERRORED" || "BROKEN" || "FINISHED",
 * //       lifecycleStateDetails: "STRING_VALUE",
 * //       isRoot: true || false,
 * //       lastStatusChangeTimestamp: new Date("TIMESTAMP"),
 * //       lastReportedTimestamp: new Date("TIMESTAMP"),
 * //       lastInstallationSource: "STRING_VALUE",
 * //       lifecycleStatusCodes: [ // InstalledComponentLifecycleStatusCodeList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInstalledComponentsCommandInput - {@link ListInstalledComponentsCommandInput}
 * @returns {@link ListInstalledComponentsCommandOutput}
 * @see {@link ListInstalledComponentsCommandInput} for command's `input` shape.
 * @see {@link ListInstalledComponentsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for GreengrassV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have permission to perform the action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * IoT Greengrass can't process your request right now. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Your request exceeded a request rate quota. For example, you might have exceeded the amount of times that you can retrieve device or deployment status per second.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters.
 *
 * @throws {@link GreengrassV2ServiceException}
 *
 * Base exception class for all service exceptions from GreengrassV2 service.
 *
 * @public
 */
export class ListInstalledComponentsCommand extends command<ListInstalledComponentsCommandInput, ListInstalledComponentsCommandOutput>(
  _ep0,
  _mw0,
  "ListInstalledComponents",
  ListInstalledComponents$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListInstalledComponentsRequest;
      output: ListInstalledComponentsResponse;
    };
    sdk: {
      input: ListInstalledComponentsCommandInput;
      output: ListInstalledComponentsCommandOutput;
    };
  };
}
