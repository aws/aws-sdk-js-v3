// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeApplicationFleetAssociationsRequest,
  DescribeApplicationFleetAssociationsResult,
} from "../models/models_0";
import { DescribeApplicationFleetAssociations } from "../schemas/schemas_8_ApplicationFleet";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeApplicationFleetAssociationsCommand}.
 */
export interface DescribeApplicationFleetAssociationsCommandInput extends DescribeApplicationFleetAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeApplicationFleetAssociationsCommand}.
 */
export interface DescribeApplicationFleetAssociationsCommandOutput
  extends DescribeApplicationFleetAssociationsResult,
    __MetadataBearer {}

/**
 * <p>Retrieves a list that describes one or more application fleet associations. Either ApplicationArn or FleetName must be specified.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DescribeApplicationFleetAssociationsCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DescribeApplicationFleetAssociationsCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // DescribeApplicationFleetAssociationsRequest
 *   FleetName: "STRING_VALUE",
 *   ApplicationArn: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeApplicationFleetAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeApplicationFleetAssociationsResult
 * //   ApplicationFleetAssociations: [ // ApplicationFleetAssociationList
 * //     { // ApplicationFleetAssociation
 * //       FleetName: "STRING_VALUE", // required
 * //       ApplicationArn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeApplicationFleetAssociationsCommandInput - {@link DescribeApplicationFleetAssociationsCommandInput}
 * @returns {@link DescribeApplicationFleetAssociationsCommandOutput}
 * @see {@link DescribeApplicationFleetAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicationFleetAssociationsCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Indicates an incorrect combination of parameters, or a missing parameter.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The attempted operation is not permitted.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 *
 * @public
 */
export class DescribeApplicationFleetAssociationsCommand extends $Command
  .classBuilder<
    DescribeApplicationFleetAssociationsCommandInput,
    DescribeApplicationFleetAssociationsCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PhotonAdminProxyService", "DescribeApplicationFleetAssociations", {})
  .n("AppStreamClient", "DescribeApplicationFleetAssociationsCommand")
  .sc(DescribeApplicationFleetAssociations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeApplicationFleetAssociationsRequest;
      output: DescribeApplicationFleetAssociationsResult;
    };
    sdk: {
      input: DescribeApplicationFleetAssociationsCommandInput;
      output: DescribeApplicationFleetAssociationsCommandOutput;
    };
  };
}
