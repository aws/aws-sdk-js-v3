// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateOpsItemRelatedItemRequest, AssociateOpsItemRelatedItemResponse } from "../models/models_0";
import { AssociateOpsItemRelatedItem$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface AssociateOpsItemRelatedItemCommandOutput extends AssociateOpsItemRelatedItemResponse, __MetadataBearer {}

/**
 * Associates a related item to a Systems Manager OpsCenter OpsItem. For example, you can associate an Incident Manager incident or analysis with an OpsItem. Incident Manager and OpsCenter are tools in Amazon Web Services Systems Manager.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, AssociateOpsItemRelatedItemCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, AssociateOpsItemRelatedItemCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
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
 * @throws {@link OpsItemLimitExceededException} (client fault)
 *
 * The request caused OpsItems to exceed one or more quotas.
 *
 * @throws {@link OpsItemNotFoundException} (client fault)
 *
 * The specified OpsItem ID doesn't exist. Verify the ID and try again.
 *
 * @throws {@link OpsItemRelatedItemAlreadyExistsException} (client fault)
 *
 * The Amazon Resource Name (ARN) is already associated with the OpsItem.
 *
 * @throws {@link SSMServiceException}
 *
 * Base exception class for all service exceptions from SSM service.
 *
 * @public
 */
export class AssociateOpsItemRelatedItemCommand extends command<AssociateOpsItemRelatedItemCommandInput, AssociateOpsItemRelatedItemCommandOutput>(
  _ep0,
  _mw0,
  "AssociateOpsItemRelatedItem",
  AssociateOpsItemRelatedItem$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateOpsItemRelatedItemRequest;
      output: AssociateOpsItemRelatedItemResponse;
    };
    sdk: {
      input: AssociateOpsItemRelatedItemCommandInput;
      output: AssociateOpsItemRelatedItemCommandOutput;
    };
  };
}
