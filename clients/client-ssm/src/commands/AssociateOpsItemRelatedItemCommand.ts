// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateOpsItemRelatedItemRequest, AssociateOpsItemRelatedItemResponse } from "../models/models_0";
import { de_AssociateOpsItemRelatedItemCommand, se_AssociateOpsItemRelatedItemCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateOpsItemRelatedItemCommand}.
 */
export interface AssociateOpsItemRelatedItemCommandInput extends AssociateOpsItemRelatedItemRequest {}
/**
 * @public
 *
 * The output of {@link AssociateOpsItemRelatedItemCommand}.
 */
export interface AssociateOpsItemRelatedItemCommandOutput
  extends AssociateOpsItemRelatedItemResponse,
    __MetadataBearer {}

/**
 * <p>Associates a related item to a Systems Manager OpsCenter OpsItem. For example, you can associate an
 *    Incident Manager incident or analysis with an OpsItem. Incident Manager and OpsCenter are capabilities of
 *    Amazon Web Services Systems Manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, AssociateOpsItemRelatedItemCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, AssociateOpsItemRelatedItemCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // AssociateOpsItemRelatedItemRequest
 *   OpsItemId: "STRING_VALUE", // required
 *   AssociationType: "STRING_VALUE", // required
 *   ResourceType: "STRING_VALUE", // required
 *   ResourceUri: "STRING_VALUE", // required
 * };
 * const command = new AssociateOpsItemRelatedItemCommand(input);
 * const response = await client.send(command);
 * // { // AssociateOpsItemRelatedItemResponse
 * //   AssociationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateOpsItemRelatedItemCommandInput - {@link AssociateOpsItemRelatedItemCommandInput}
 * @returns {@link AssociateOpsItemRelatedItemCommandOutput}
 * @see {@link AssociateOpsItemRelatedItemCommandInput} for command's `input` shape.
 * @see {@link AssociateOpsItemRelatedItemCommandOutput} for command's `response` shape.
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
 * @throws {@link OpsItemLimitExceededException} (client fault)
 *  <p>The request caused OpsItems to exceed one or more quotas.</p>
 *
 * @throws {@link OpsItemNotFoundException} (client fault)
 *  <p>The specified OpsItem ID doesn't exist. Verify the ID and try again.</p>
 *
 * @throws {@link OpsItemRelatedItemAlreadyExistsException} (client fault)
 *  <p>The Amazon Resource Name (ARN) is already associated with the OpsItem.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 * @public
 */
export class AssociateOpsItemRelatedItemCommand extends $Command
  .classBuilder<
    AssociateOpsItemRelatedItemCommandInput,
    AssociateOpsItemRelatedItemCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "AssociateOpsItemRelatedItem", {})
  .n("SSMClient", "AssociateOpsItemRelatedItemCommand")
  .f(void 0, void 0)
  .ser(se_AssociateOpsItemRelatedItemCommand)
  .de(de_AssociateOpsItemRelatedItemCommand)
  .build() {}
