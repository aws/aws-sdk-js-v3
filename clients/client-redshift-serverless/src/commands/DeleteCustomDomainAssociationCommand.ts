// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteCustomDomainAssociationRequest, DeleteCustomDomainAssociationResponse } from "../models/models_0";
import { DeleteCustomDomainAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteCustomDomainAssociationCommand}.
 */
export interface DeleteCustomDomainAssociationCommandInput extends DeleteCustomDomainAssociationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCustomDomainAssociationCommand}.
 */
export interface DeleteCustomDomainAssociationCommandOutput extends DeleteCustomDomainAssociationResponse, __MetadataBearer {}

/**
 * Deletes a custom domain association for Amazon Redshift Serverless.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, DeleteCustomDomainAssociationCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, DeleteCustomDomainAssociationCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * // import type { RedshiftServerlessClientConfig } from "@aws-sdk/client-redshift-serverless";
 * const config = {}; // type is RedshiftServerlessClientConfig
 * const client = new RedshiftServerlessClient(config);
 * const input = { // DeleteCustomDomainAssociationRequest
 *   workgroupName: "STRING_VALUE", // required
 *   customDomainName: "STRING_VALUE", // required
 * };
 * const command = new DeleteCustomDomainAssociationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCustomDomainAssociationCommandInput - {@link DeleteCustomDomainAssociationCommandInput}
 * @returns {@link DeleteCustomDomainAssociationCommandOutput}
 * @see {@link DeleteCustomDomainAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomDomainAssociationCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The submitted action has conflicts.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource could not be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input failed to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link RedshiftServerlessServiceException}
 *
 * Base exception class for all service exceptions from RedshiftServerless service.
 *
 * @public
 */
export class DeleteCustomDomainAssociationCommand extends command<DeleteCustomDomainAssociationCommandInput, DeleteCustomDomainAssociationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteCustomDomainAssociation",
  DeleteCustomDomainAssociation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCustomDomainAssociationRequest;
      output: {};
    };
    sdk: {
      input: DeleteCustomDomainAssociationCommandInput;
      output: DeleteCustomDomainAssociationCommandOutput;
    };
  };
}
