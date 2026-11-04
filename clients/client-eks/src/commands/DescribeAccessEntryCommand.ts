// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeAccessEntryRequest, DescribeAccessEntryResponse } from "../models/models_0";
import { DescribeAccessEntry$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeAccessEntryCommand}.
 */
export interface DescribeAccessEntryCommandInput extends DescribeAccessEntryRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAccessEntryCommand}.
 */
export interface DescribeAccessEntryCommandOutput extends DescribeAccessEntryResponse, __MetadataBearer {}

/**
 * Describes an access entry.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DescribeAccessEntryCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DescribeAccessEntryCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * // import type { EKSClientConfig } from "@aws-sdk/client-eks";
 * const config = {}; // type is EKSClientConfig
 * const client = new EKSClient(config);
 * const input = { // DescribeAccessEntryRequest
 *   clusterName: "STRING_VALUE", // required
 *   principalArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeAccessEntryCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAccessEntryResponse
 * //   accessEntry: { // AccessEntry
 * //     clusterName: "STRING_VALUE",
 * //     principalArn: "STRING_VALUE",
 * //     kubernetesGroups: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //     accessEntryArn: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     modifiedAt: new Date("TIMESTAMP"),
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     username: "STRING_VALUE",
 * //     type: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAccessEntryCommandInput - {@link DescribeAccessEntryCommandInput}
 * @returns {@link DescribeAccessEntryCommandOutput}
 * @see {@link DescribeAccessEntryCommandInput} for command's `input` shape.
 * @see {@link DescribeAccessEntryCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is invalid given the state of the cluster. Check the state of the cluster and the associated operations.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource could not be found. You can view your available clusters with `ListClusters`. You can view your available managed node groups with `ListNodegroups`. Amazon EKS clusters and node groups are Amazon Web Services Region specific.
 *
 * @throws {@link ServerException} (server fault)
 *
 * These errors are usually caused by a server-side issue.
 *
 * @throws {@link EKSServiceException}
 *
 * Base exception class for all service exceptions from EKS service.
 *
 * @public
 */
export class DescribeAccessEntryCommand extends command<DescribeAccessEntryCommandInput, DescribeAccessEntryCommandOutput>(
  _ep0,
  _mw0,
  "DescribeAccessEntry",
  DescribeAccessEntry$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAccessEntryRequest;
      output: DescribeAccessEntryResponse;
    };
    sdk: {
      input: DescribeAccessEntryCommandInput;
      output: DescribeAccessEntryCommandOutput;
    };
  };
}
