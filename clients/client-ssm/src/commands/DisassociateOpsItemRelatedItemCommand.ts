// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateOpsItemRelatedItemRequest, DisassociateOpsItemRelatedItemResponse } from "../models/models_1";
import {
  de_DisassociateOpsItemRelatedItemCommand,
  se_DisassociateOpsItemRelatedItemCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateOpsItemRelatedItemCommand}.
 */
export interface DisassociateOpsItemRelatedItemCommandInput extends DisassociateOpsItemRelatedItemRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateOpsItemRelatedItemCommand}.
 */
export interface DisassociateOpsItemRelatedItemCommandOutput
  extends DisassociateOpsItemRelatedItemResponse,
    __MetadataBearer {}

/**
 * <p>Deletes the association between an OpsItem and a related item. For example, this API
 *    operation can delete an Incident Manager incident from an OpsItem. Incident Manager is a tool in
 *    Amazon Web Services Systems Manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DisassociateOpsItemRelatedItemCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DisassociateOpsItemRelatedItemCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // DisassociateOpsItemRelatedItemRequest
 *   OpsItemId: "STRING_VALUE", // required
 *   AssociationId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateOpsItemRelatedItemCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateOpsItemRelatedItemCommandInput - {@link DisassociateOpsItemRelatedItemCommandInput}
 * @returns {@link DisassociateOpsItemRelatedItemCommandOutput}
 * @see {@link DisassociateOpsItemRelatedItemCommandInput} for command's `input` shape.
 * @see {@link DisassociateOpsItemRelatedItemCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link OpsItemConflictException} (client fault)
 *  <p>The specified OpsItem is in the process of being deleted.</p>
 *
 * @throws {@link OpsItemInvalidParameterException} (client fault)
 *  <p>A specified parameter argument isn't valid. Verify the available arguments and try
 *    again.</p>
 *
 * @throws {@link OpsItemNotFoundException} (client fault)
 *  <p>The specified OpsItem ID doesn't exist. Verify the ID and try again.</p>
 *
 * @throws {@link OpsItemRelatedItemAssociationNotFoundException} (client fault)
 *  <p>The association wasn't found using the parameters you specified in the call. Verify the
 *    information and try again.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class DisassociateOpsItemRelatedItemCommand extends $Command
  .classBuilder<
    DisassociateOpsItemRelatedItemCommandInput,
    DisassociateOpsItemRelatedItemCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "DisassociateOpsItemRelatedItem", {})
  .n("SSMClient", "DisassociateOpsItemRelatedItemCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateOpsItemRelatedItemCommand)
  .de(de_DisassociateOpsItemRelatedItemCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateOpsItemRelatedItemRequest;
      output: {};
    };
    sdk: {
      input: DisassociateOpsItemRelatedItemCommandInput;
      output: DisassociateOpsItemRelatedItemCommandOutput;
    };
  };
}
