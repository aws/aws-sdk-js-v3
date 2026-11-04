// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetResourceExplorerSetupInput, GetResourceExplorerSetupOutput } from "../models/models_0";
import { GetResourceExplorerSetup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetResourceExplorerSetupCommand}.
 */
export interface GetResourceExplorerSetupCommandInput extends GetResourceExplorerSetupInput {}
/**
 * @public
 *
 * The output of {@link GetResourceExplorerSetupCommand}.
 */
export interface GetResourceExplorerSetupCommandOutput extends GetResourceExplorerSetupOutput, __MetadataBearer {}

/**
 * Retrieves the status and details of a Resource Explorer setup operation. This operation returns information about the progress of creating or deleting Resource Explorer configurations across Regions.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceExplorer2Client, GetResourceExplorerSetupCommand } from "@aws-sdk/client-resource-explorer-2"; // ES Modules import
 * // const { ResourceExplorer2Client, GetResourceExplorerSetupCommand } = require("@aws-sdk/client-resource-explorer-2"); // CommonJS import
 * // import type { ResourceExplorer2ClientConfig } from "@aws-sdk/client-resource-explorer-2";
 * const config = {}; // type is ResourceExplorer2ClientConfig
 * const client = new ResourceExplorer2Client(config);
 * const input = { // GetResourceExplorerSetupInput
 *   TaskId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetResourceExplorerSetupCommand(input);
 * const response = await client.send(command);
 * // { // GetResourceExplorerSetupOutput
 * //   Regions: [ // RegionStatusList
 * //     { // RegionStatus
 * //       Region: "STRING_VALUE",
 * //       Index: { // IndexStatus
 * //         Status: "STRING_VALUE",
 * //         Index: { // Index
 * //           Region: "STRING_VALUE",
 * //           Arn: "STRING_VALUE",
 * //           Type: "STRING_VALUE",
 * //         },
 * //         ErrorDetails: { // ErrorDetails
 * //           Code: "STRING_VALUE",
 * //           Message: "STRING_VALUE",
 * //         },
 * //       },
 * //       View: { // ViewStatus
 * //         Status: "STRING_VALUE",
 * //         View: { // View
 * //           ViewArn: "STRING_VALUE",
 * //           ViewName: "STRING_VALUE",
 * //           Owner: "STRING_VALUE",
 * //           LastUpdatedAt: new Date("TIMESTAMP"),
 * //           Scope: "STRING_VALUE",
 * //           IncludedProperties: [ // IncludedPropertyList
 * //             { // IncludedProperty
 * //               Name: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //           Filters: { // SearchFilter
 * //             FilterString: "STRING_VALUE", // required
 * //           },
 * //         },
 * //         ErrorDetails: {
 * //           Code: "STRING_VALUE",
 * //           Message: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetResourceExplorerSetupCommandInput - {@link GetResourceExplorerSetupCommandInput}
 * @returns {@link GetResourceExplorerSetupCommandOutput}
 * @see {@link GetResourceExplorerSetupCommandInput} for command's `input` shape.
 * @see {@link GetResourceExplorerSetupCommandOutput} for command's `response` shape.
 * @see {@link ResourceExplorer2ClientResolvedConfig | config} for ResourceExplorer2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The credentials that you used to call this operation don't have the minimum required permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request failed because of internal service error. Try your request again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * You specified a resource that doesn't exist. Check the ID or ARN that you used to identity the resource, and try again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request failed because you exceeded a rate limit for this operation. For more information, see [Quotas for Resource Explorer](https://docs.aws.amazon.com/resource-explorer/latest/userguide/quotas.html).
 *
 * @throws {@link ValidationException} (client fault)
 *
 * You provided an invalid value for one of the operation's parameters. Check the syntax for the operation, and try again.
 *
 * @throws {@link ResourceExplorer2ServiceException}
 *
 * Base exception class for all service exceptions from ResourceExplorer2 service.
 *
 * @public
 */
export class GetResourceExplorerSetupCommand extends command<GetResourceExplorerSetupCommandInput, GetResourceExplorerSetupCommandOutput>(
  _ep0,
  _mw0,
  "GetResourceExplorerSetup",
  GetResourceExplorerSetup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResourceExplorerSetupInput;
      output: GetResourceExplorerSetupOutput;
    };
    sdk: {
      input: GetResourceExplorerSetupCommandInput;
      output: GetResourceExplorerSetupCommandOutput;
    };
  };
}
