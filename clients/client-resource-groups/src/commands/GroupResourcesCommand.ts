// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GroupResourcesInput, GroupResourcesOutput } from "../models/models_0";
import { GroupResources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GroupResourcesCommand}.
 */
export interface GroupResourcesCommandInput extends GroupResourcesInput {}
/**
 * @public
 *
 * The output of {@link GroupResourcesCommand}.
 */
export interface GroupResourcesCommandOutput extends GroupResourcesOutput, __MetadataBearer {}

/**
 * Adds the specified resources to the specified group.
 *
 * > **Important:**
 * >
 * > You can only use this operation with the following groups:
 * >
 * > - `AWS::EC2::HostManagement`
 * > - `AWS::EC2::CapacityReservationPool`
 * > - `AWS::ResourceGroups::ApplicationGroup`
 * >
 * > Other resource group types and resource types are not currently supported by this operation.
 *
 * **Minimum permissions**
 *
 * To run this command, you must have the following permissions:
 *
 * - `resource-groups:GroupResources`
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsClient, GroupResourcesCommand } from "@aws-sdk/client-resource-groups"; // ES Modules import
 * // const { ResourceGroupsClient, GroupResourcesCommand } = require("@aws-sdk/client-resource-groups"); // CommonJS import
 * // import type { ResourceGroupsClientConfig } from "@aws-sdk/client-resource-groups";
 * const config = {}; // type is ResourceGroupsClientConfig
 * const client = new ResourceGroupsClient(config);
 * const input = { // GroupResourcesInput
 *   Group: "STRING_VALUE", // required
 *   ResourceArns: [ // ResourceArnList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GroupResourcesCommand(input);
 * const response = await client.send(command);
 * // { // GroupResourcesOutput
 * //   Succeeded: [ // ResourceArnList
 * //     "STRING_VALUE",
 * //   ],
 * //   Failed: [ // FailedResourceList
 * //     { // FailedResource
 * //       ResourceArn: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //       ErrorCode: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Pending: [ // PendingResourceList
 * //     { // PendingResource
 * //       ResourceArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GroupResourcesCommandInput - {@link GroupResourcesCommandInput}
 * @returns {@link GroupResourcesCommandOutput}
 * @see {@link GroupResourcesCommandInput} for command's `input` shape.
 * @see {@link GroupResourcesCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsClientResolvedConfig | config} for ResourceGroupsClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The request includes one or more parameters that violate validation rules.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The caller isn't authorized to make the request. Check permissions.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * An internal error occurred while processing the request. Try again later.
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *
 * The request uses an HTTP method that isn't allowed for the specified resource.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * One or more of the specified resources don't exist.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * You've exceeded throttling limits by making too many requests in a period of time.
 *
 * @throws {@link ResourceGroupsServiceException}
 *
 * Base exception class for all service exceptions from ResourceGroups service.
 *
 * @public
 */
export class GroupResourcesCommand extends command<GroupResourcesCommandInput, GroupResourcesCommandOutput>(
  _ep0,
  _mw0,
  "GroupResources",
  GroupResources$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GroupResourcesInput;
      output: GroupResourcesOutput;
    };
    sdk: {
      input: GroupResourcesCommandInput;
      output: GroupResourcesCommandOutput;
    };
  };
}
