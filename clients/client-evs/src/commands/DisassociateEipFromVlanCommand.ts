// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvsClient";
import { DisassociateEipFromVlanRequest, DisassociateEipFromVlanResponse } from "../models/models_0";
import { de_DisassociateEipFromVlanCommand, se_DisassociateEipFromVlanCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateEipFromVlanCommand}.
 */
export interface DisassociateEipFromVlanCommandInput extends DisassociateEipFromVlanRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateEipFromVlanCommand}.
 */
export interface DisassociateEipFromVlanCommandOutput extends DisassociateEipFromVlanResponse, __MetadataBearer {}

/**
 * <p>Disassociates an Elastic IP address from a public HCX VLAN. This operation is only allowed for public HCX VLANs at this time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvsClient, DisassociateEipFromVlanCommand } from "@aws-sdk/client-evs"; // ES Modules import
 * // const { EvsClient, DisassociateEipFromVlanCommand } = require("@aws-sdk/client-evs"); // CommonJS import
 * const client = new EvsClient(config);
 * const input = { // DisassociateEipFromVlanRequest
 *   clientToken: "STRING_VALUE",
 *   environmentId: "STRING_VALUE", // required
 *   vlanName: "STRING_VALUE", // required
 *   associationId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateEipFromVlanCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateEipFromVlanResponse
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
 * @param DisassociateEipFromVlanCommandInput - {@link DisassociateEipFromVlanCommandInput}
 * @returns {@link DisassociateEipFromVlanCommandOutput}
 * @see {@link DisassociateEipFromVlanCommandInput} for command's `input` shape.
 * @see {@link DisassociateEipFromVlanCommandOutput} for command's `response` shape.
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
export class DisassociateEipFromVlanCommand extends $Command
  .classBuilder<
    DisassociateEipFromVlanCommandInput,
    DisassociateEipFromVlanCommandOutput,
    EvsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EvsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonElasticVMwareService", "DisassociateEipFromVlan", {})
  .n("EvsClient", "DisassociateEipFromVlanCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateEipFromVlanCommand)
  .de(de_DisassociateEipFromVlanCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateEipFromVlanRequest;
      output: DisassociateEipFromVlanResponse;
    };
    sdk: {
      input: DisassociateEipFromVlanCommandInput;
      output: DisassociateEipFromVlanCommandOutput;
    };
  };
}
