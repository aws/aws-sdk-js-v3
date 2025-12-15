// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteCustomDomainAssociationRequest, DeleteCustomDomainAssociationResponse } from "../models/models_0";
import type {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";
import { DeleteCustomDomainAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface DeleteCustomDomainAssociationCommandOutput
  extends DeleteCustomDomainAssociationResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a custom domain association for Amazon Redshift Serverless.</p>
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The submitted action has conflicts.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link RedshiftServerlessServiceException}
 * <p>Base exception class for all service exceptions from RedshiftServerless service.</p>
 *
 *
 * @public
 */
export class DeleteCustomDomainAssociationCommand extends $Command
  .classBuilder<
    DeleteCustomDomainAssociationCommandInput,
    DeleteCustomDomainAssociationCommandOutput,
    RedshiftServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServerless", "DeleteCustomDomainAssociation", {})
  .n("RedshiftServerlessClient", "DeleteCustomDomainAssociationCommand")
  .sc(DeleteCustomDomainAssociation$)
  .build() {
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
