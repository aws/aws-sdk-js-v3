// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeSpaceRequest, DescribeSpaceResponse } from "../models/models_4";
import { DescribeSpace$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeSpaceCommand}.
 */
export interface DescribeSpaceCommandInput extends DescribeSpaceRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSpaceCommand}.
 */
export interface DescribeSpaceCommandOutput extends DescribeSpaceResponse, __MetadataBearer {}

/**
 * <p>Describes an Amazon QuickSight space.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeSpaceCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeSpaceCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeSpaceRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   SpaceId: "STRING_VALUE", // required
 *   MaxContributors: Number("int"),
 * };
 * const command = new DescribeSpaceCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSpaceResponse
 * //   spaceId: "STRING_VALUE", // required
 * //   spaceArn: "STRING_VALUE",
 * //   Space: { // SpaceDetails
 * //     name: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     resources: [ // SpaceQuickSightResources
 * //       { // SpaceQuickSightResource
 * //         resourceType: "TOPIC" || "DASHBOARD" || "KNOWLEDGE_BASE" || "ACTION_CONNECTOR" || "DATA_SET", // required
 * //         resourceDetails: { // SpaceQuickSightResourceDetails Union: only one key present
 * //           resourceArn: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //     consumedSourceSize: Number("long"),
 * //     consumedSourceDocCount: Number("int"),
 * //     createdBy: "STRING_VALUE",
 * //     createdByArn: "STRING_VALUE",
 * //   },
 * //   Contributors: [ // SpaceContributorList
 * //     { // SpaceContributor
 * //       userName: "STRING_VALUE",
 * //       rawFileSizeBytes: Number("long"), // required
 * //       percentage: Number("double"),
 * //     },
 * //   ],
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSpaceCommandInput - {@link DescribeSpaceCommandInput}
 * @returns {@link DescribeSpaceCommandOutput}
 * @see {@link DescribeSpaceCommandInput} for command's `input` shape.
 * @see {@link DescribeSpaceCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class DescribeSpaceCommand extends command<DescribeSpaceCommandInput, DescribeSpaceCommandOutput>(
  _ep0,
  _mw0,
  "DescribeSpace",
  DescribeSpace$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSpaceRequest;
      output: DescribeSpaceResponse;
    };
    sdk: {
      input: DescribeSpaceCommandInput;
      output: DescribeSpaceCommandOutput;
    };
  };
}
