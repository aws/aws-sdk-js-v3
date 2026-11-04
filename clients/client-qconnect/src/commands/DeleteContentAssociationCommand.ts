// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteContentAssociationRequest, DeleteContentAssociationResponse } from "../models/models_0";
import { DeleteContentAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteContentAssociationCommand}.
 */
export interface DeleteContentAssociationCommandInput extends DeleteContentAssociationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteContentAssociationCommand}.
 */
export interface DeleteContentAssociationCommandOutput extends DeleteContentAssociationResponse, __MetadataBearer {}

/**
 * Deletes the content association.
 *
 * For more information about content associations--what they are and when they are used--see [Integrate Amazon Q in Connect with step-by-step guides](https://docs.aws.amazon.com/connect/latest/adminguide/integrate-q-with-guides.html) in the *Connect Customer Administrator Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, DeleteContentAssociationCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, DeleteContentAssociationCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // DeleteContentAssociationRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   contentId: "STRING_VALUE", // required
 *   contentAssociationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteContentAssociationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteContentAssociationCommandInput - {@link DeleteContentAssociationCommandInput}
 * @returns {@link DeleteContentAssociationCommandOutput}
 * @see {@link DeleteContentAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteContentAssociationCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by a service.
 *
 * @throws {@link QConnectServiceException}
 *
 * Base exception class for all service exceptions from QConnect service.
 *
 * @public
 */
export class DeleteContentAssociationCommand extends command<DeleteContentAssociationCommandInput, DeleteContentAssociationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteContentAssociation",
  DeleteContentAssociation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteContentAssociationRequest;
      output: {};
    };
    sdk: {
      input: DeleteContentAssociationCommandInput;
      output: DeleteContentAssociationCommandOutput;
    };
  };
}
