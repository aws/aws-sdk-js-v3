// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeTrunkInterfaceAssociationsRequest } from "../models/models_5";
import { DescribeTrunkInterfaceAssociationsResult } from "../models/models_6";
import {
  de_DescribeTrunkInterfaceAssociationsCommand,
  se_DescribeTrunkInterfaceAssociationsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTrunkInterfaceAssociationsCommand}.
 */
export interface DescribeTrunkInterfaceAssociationsCommandInput extends DescribeTrunkInterfaceAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTrunkInterfaceAssociationsCommand}.
 */
export interface DescribeTrunkInterfaceAssociationsCommandOutput
  extends DescribeTrunkInterfaceAssociationsResult,
    __MetadataBearer {}

/**
 * <p>Describes one or more network interface trunk associations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeTrunkInterfaceAssociationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeTrunkInterfaceAssociationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeTrunkInterfaceAssociationsRequest
 *   AssociationIds: [ // TrunkInterfaceAssociationIdList
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeTrunkInterfaceAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTrunkInterfaceAssociationsResult
 * //   InterfaceAssociations: [ // TrunkInterfaceAssociationList
 * //     { // TrunkInterfaceAssociation
 * //       AssociationId: "STRING_VALUE",
 * //       BranchInterfaceId: "STRING_VALUE",
 * //       TrunkInterfaceId: "STRING_VALUE",
 * //       InterfaceProtocol: "VLAN" || "GRE",
 * //       VlanId: Number("int"),
 * //       GreKey: Number("int"),
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeTrunkInterfaceAssociationsCommandInput - {@link DescribeTrunkInterfaceAssociationsCommandInput}
 * @returns {@link DescribeTrunkInterfaceAssociationsCommandOutput}
 * @see {@link DescribeTrunkInterfaceAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeTrunkInterfaceAssociationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeTrunkInterfaceAssociationsCommand extends $Command
  .classBuilder<
    DescribeTrunkInterfaceAssociationsCommandInput,
    DescribeTrunkInterfaceAssociationsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "DescribeTrunkInterfaceAssociations", {})
  .n("EC2Client", "DescribeTrunkInterfaceAssociationsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeTrunkInterfaceAssociationsCommand)
  .de(de_DescribeTrunkInterfaceAssociationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTrunkInterfaceAssociationsRequest;
      output: DescribeTrunkInterfaceAssociationsResult;
    };
    sdk: {
      input: DescribeTrunkInterfaceAssociationsCommandInput;
      output: DescribeTrunkInterfaceAssociationsCommandOutput;
    };
  };
}
