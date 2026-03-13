// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import type {
  ListNetworkMigrationDeployedStacksRequest,
  ListNetworkMigrationDeployedStacksResponse,
} from "../models/models_0";
import { ListNetworkMigrationDeployedStacks$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListNetworkMigrationDeployedStacksCommand}.
 */
export interface ListNetworkMigrationDeployedStacksCommandInput extends ListNetworkMigrationDeployedStacksRequest {}
/**
 * @public
 *
 * The output of {@link ListNetworkMigrationDeployedStacksCommand}.
 */
export interface ListNetworkMigrationDeployedStacksCommandOutput extends ListNetworkMigrationDeployedStacksResponse, __MetadataBearer {}

/**
 * <p>Lists CloudFormation stacks that have been deployed as part of the network migration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, ListNetworkMigrationDeployedStacksCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, ListNetworkMigrationDeployedStacksCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // ListNetworkMigrationDeployedStacksRequest
 *   networkMigrationExecutionID: "STRING_VALUE", // required
 *   networkMigrationDefinitionID: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListNetworkMigrationDeployedStacksCommand(input);
 * const response = await client.send(command);
 * // { // ListNetworkMigrationDeployedStacksResponse
 * //   items: [ // NetworkMigrationDeployedStacksList
 * //     { // NetworkMigrationDeployedStackDetails
 * //       status: "STRING_VALUE",
 * //       stackPhysicalID: "STRING_VALUE",
 * //       stackLogicalID: "STRING_VALUE",
 * //       segmentID: "STRING_VALUE",
 * //       targetAccount: "STRING_VALUE",
 * //       failedResources: [ // NetworkMigrationFailedResourcesList
 * //         { // NetworkMigrationFailedResourceDetails
 * //           logicalID: "STRING_VALUE",
 * //           status: "STRING_VALUE",
 * //           statusReason: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListNetworkMigrationDeployedStacksCommandInput - {@link ListNetworkMigrationDeployedStacksCommandInput}
 * @returns {@link ListNetworkMigrationDeployedStacksCommandOutput}
 * @see {@link ListNetworkMigrationDeployedStacksCommandInput} for command's `input` shape.
 * @see {@link ListNetworkMigrationDeployedStacksCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Operating denied due to a file permission or access check error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Reached throttling quota exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 *
 * @example Sample ListNetworkMigrationDeployedStacks call
 * ```javascript
 * //
 * const input = {
 *   networkMigrationDefinitionID: "nmd-01234567891234567",
 *   networkMigrationExecutionID: "01234567-abcd-abcd-abcd-0123456789ab"
 * };
 * const command = new ListNetworkMigrationDeployedStacksCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       failedResources:       [],
 *       segmentID: "12345678-abcd-abcd-efab-0123456789ab",
 *       stackLogicalID: "logical-id1",
 *       stackPhysicalID: "arn:aws:cloudformation:us-east-1:012345678901:stack/ExampleStack/b2345678-abcd-abcd-efab-0123456789ab",
 *       status: "CREATE_STARTED",
 *       targetAccount: "234567890123"
 *     }
 *   ],
 *   nextToken: "NextTokenId"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListNetworkMigrationDeployedStacksCommand extends $Command
  .classBuilder<
    ListNetworkMigrationDeployedStacksCommandInput,
    ListNetworkMigrationDeployedStacksCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationMigrationService", "ListNetworkMigrationDeployedStacks", {})
  .n("MgnClient", "ListNetworkMigrationDeployedStacksCommand")
  .sc(ListNetworkMigrationDeployedStacks$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNetworkMigrationDeployedStacksRequest;
      output: ListNetworkMigrationDeployedStacksResponse;
    };
    sdk: {
      input: ListNetworkMigrationDeployedStacksCommandInput;
      output: ListNetworkMigrationDeployedStacksCommandOutput;
    };
  };
}
