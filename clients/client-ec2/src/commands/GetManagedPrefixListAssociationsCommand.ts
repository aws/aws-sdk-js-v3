// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetManagedPrefixListAssociationsRequest, GetManagedPrefixListAssociationsResult } from "../models/models_6";
import {
  de_GetManagedPrefixListAssociationsCommand,
  se_GetManagedPrefixListAssociationsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetManagedPrefixListAssociationsCommand}.
 */
export interface GetManagedPrefixListAssociationsCommandInput extends GetManagedPrefixListAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link GetManagedPrefixListAssociationsCommand}.
 */
export interface GetManagedPrefixListAssociationsCommandOutput
  extends GetManagedPrefixListAssociationsResult,
    __MetadataBearer {}

/**
 * <p>Gets information about the resources that are associated with the specified managed prefix list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetManagedPrefixListAssociationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetManagedPrefixListAssociationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetManagedPrefixListAssociationsRequest
 *   DryRun: true || false,
 *   PrefixListId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetManagedPrefixListAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // GetManagedPrefixListAssociationsResult
 * //   PrefixListAssociations: [ // PrefixListAssociationSet
 * //     { // PrefixListAssociation
 * //       ResourceId: "STRING_VALUE",
 * //       ResourceOwner: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetManagedPrefixListAssociationsCommandInput - {@link GetManagedPrefixListAssociationsCommandInput}
 * @returns {@link GetManagedPrefixListAssociationsCommandOutput}
 * @see {@link GetManagedPrefixListAssociationsCommandInput} for command's `input` shape.
 * @see {@link GetManagedPrefixListAssociationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetManagedPrefixListAssociationsCommand extends $Command
  .classBuilder<
    GetManagedPrefixListAssociationsCommandInput,
    GetManagedPrefixListAssociationsCommandOutput,
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
  .s("AmazonEC2", "GetManagedPrefixListAssociations", {})
  .n("EC2Client", "GetManagedPrefixListAssociationsCommand")
  .f(void 0, void 0)
  .ser(se_GetManagedPrefixListAssociationsCommand)
  .de(de_GetManagedPrefixListAssociationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetManagedPrefixListAssociationsRequest;
      output: GetManagedPrefixListAssociationsResult;
    };
    sdk: {
      input: GetManagedPrefixListAssociationsCommandInput;
      output: GetManagedPrefixListAssociationsCommandOutput;
    };
  };
}
