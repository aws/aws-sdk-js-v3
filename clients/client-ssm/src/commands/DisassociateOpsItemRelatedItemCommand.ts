// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateOpsItemRelatedItemRequest, DisassociateOpsItemRelatedItemResponse } from "../models/models_0";
import { DisassociateOpsItemRelatedItem$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DisassociateOpsItemRelatedItemCommandOutput extends DisassociateOpsItemRelatedItemResponse, __MetadataBearer {}

/**
 * Deletes the association between an OpsItem and a related item. For example, this API operation can delete an Incident Manager incident from an OpsItem. Incident Manager is a tool in Amazon Web Services Systems Manager.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DisassociateOpsItemRelatedItemCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DisassociateOpsItemRelatedItemCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
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
 *
 * An error occurred on the server side.
 *
 * @throws {@link OpsItemConflictException} (client fault)
 *
 * The specified OpsItem is in the process of being deleted.
 *
 * @throws {@link OpsItemInvalidParameterException} (client fault)
 *
 * A specified parameter argument isn't valid. Verify the available arguments and try again.
 *
 * @throws {@link OpsItemNotFoundException} (client fault)
 *
 * The specified OpsItem ID doesn't exist. Verify the ID and try again.
 *
 * @throws {@link OpsItemRelatedItemAssociationNotFoundException} (client fault)
 *
 * The association wasn't found using the parameters you specified in the call. Verify the information and try again.
 *
 * @throws {@link SSMServiceException}
 *
 * Base exception class for all service exceptions from SSM service.
 *
 * @public
 */
export class DisassociateOpsItemRelatedItemCommand extends command<DisassociateOpsItemRelatedItemCommandInput, DisassociateOpsItemRelatedItemCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateOpsItemRelatedItem",
  DisassociateOpsItemRelatedItem$
) {
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
