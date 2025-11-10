// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvsClient";
import { AssociateEipToVlanRequest, AssociateEipToVlanResponse } from "../models/models_0";
import { AssociateEipToVlan } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateEipToVlanCommand}.
 */
export interface AssociateEipToVlanCommandInput extends AssociateEipToVlanRequest {}
/**
 * @public
 *
 * The output of {@link AssociateEipToVlanCommand}.
 */
export interface AssociateEipToVlanCommandOutput extends AssociateEipToVlanResponse, __MetadataBearer {}

/**
 * <p>Associates an Elastic IP address with a public HCX VLAN. This operation is only allowed for public HCX VLANs at this time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvsClient, AssociateEipToVlanCommand } from "@aws-sdk/client-evs"; // ES Modules import
 * // const { EvsClient, AssociateEipToVlanCommand } = require("@aws-sdk/client-evs"); // CommonJS import
 * // import type { EvsClientConfig } from "@aws-sdk/client-evs";
 * const config = {}; // type is EvsClientConfig
 * const client = new EvsClient(config);
 * const input = { // AssociateEipToVlanRequest
 *   clientToken: "STRING_VALUE",
 *   environmentId: "STRING_VALUE", // required
 *   vlanName: "STRING_VALUE", // required
 *   allocationId: "STRING_VALUE", // required
 * };
 * const command = new AssociateEipToVlanCommand(input);
 * const response = await client.send(command);
 * // { // AssociateEipToVlanResponse
 * //   vlan: { // Vlan
 * //     vlanId: Number("int"),
 * //     cidr: "STRING_VALUE",
 * //     availabilityZone: "STRING_VALUE",
 * //     functionName: "STRING_VALUE",
 * //     subnetId: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     modifiedAt: new Date("TIMESTAMP"),
 * //     vlanState: "CREATING" || "CREATED" || "DELETING" || "DELETED" || "CREATE_FAILED",
 * //     stateDetails: "STRING_VALUE",
 * //     eipAssociations: [ // EipAssociationList
 * //       { // EipAssociation
 * //         associationId: "STRING_VALUE",
 * //         allocationId: "STRING_VALUE",
 * //         ipAddress: "STRING_VALUE",
 * //       },
 * //     ],
 * //     isPublic: true || false,
 * //     networkAclId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateEipToVlanCommandInput - {@link AssociateEipToVlanCommandInput}
 * @returns {@link AssociateEipToVlanCommandOutput}
 * @see {@link AssociateEipToVlanCommandInput} for command's `input` shape.
 * @see {@link AssociateEipToVlanCommandOutput} for command's `response` shape.
 * @see {@link EvsClientResolvedConfig | config} for EvsClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A service resource associated with the request could not be found. The resource might not be specified correctly, or it may have a <code>state</code> of <code>DELETED</code>.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The operation couldn't be performed because the service is throttling requests. This exception is thrown when there are too many requests accepted concurrently from the service endpoint.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints. You will see this exception if invalid inputs are provided for any of the Amazon EVS environment operations, or if a list operation is performed on an environment resource that is still initializing.</p>
 *
 * @throws {@link EvsServiceException}
 * <p>Base exception class for all service exceptions from Evs service.</p>
 *
 *
 * @public
 */
export class AssociateEipToVlanCommand extends $Command
  .classBuilder<
    AssociateEipToVlanCommandInput,
    AssociateEipToVlanCommandOutput,
    EvsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EvsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElasticVMwareService", "AssociateEipToVlan", {})
  .n("EvsClient", "AssociateEipToVlanCommand")
  .sc(AssociateEipToVlan)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateEipToVlanRequest;
      output: AssociateEipToVlanResponse;
    };
    sdk: {
      input: AssociateEipToVlanCommandInput;
      output: AssociateEipToVlanCommandOutput;
    };
  };
}
