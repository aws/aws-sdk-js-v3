// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateCustomDomainAssociationRequest, CreateCustomDomainAssociationResponse } from "../models/models_0";
import { CreateCustomDomainAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateCustomDomainAssociationCommand}.
 */
export interface CreateCustomDomainAssociationCommandInput extends CreateCustomDomainAssociationRequest {}
/**
 * @public
 *
 * The output of {@link CreateCustomDomainAssociationCommand}.
 */
export interface CreateCustomDomainAssociationCommandOutput extends CreateCustomDomainAssociationResponse, __MetadataBearer {}

/**
 * Creates a custom domain association for Amazon Redshift Serverless.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, CreateCustomDomainAssociationCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, CreateCustomDomainAssociationCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * // import type { RedshiftServerlessClientConfig } from "@aws-sdk/client-redshift-serverless";
 * const config = {}; // type is RedshiftServerlessClientConfig
 * const client = new RedshiftServerlessClient(config);
 * const input = { // CreateCustomDomainAssociationRequest
 *   workgroupName: "STRING_VALUE", // required
 *   customDomainName: "STRING_VALUE", // required
 *   customDomainCertificateArn: "STRING_VALUE", // required
 * };
 * const command = new CreateCustomDomainAssociationCommand(input);
 * const response = await client.send(command);
 * // { // CreateCustomDomainAssociationResponse
 * //   customDomainName: "STRING_VALUE",
 * //   workgroupName: "STRING_VALUE",
 * //   customDomainCertificateArn: "STRING_VALUE",
 * //   customDomainCertificateExpiryTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateCustomDomainAssociationCommandInput - {@link CreateCustomDomainAssociationCommandInput}
 * @returns {@link CreateCustomDomainAssociationCommandOutput}
 * @see {@link CreateCustomDomainAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateCustomDomainAssociationCommandOutput} for command's `response` shape.
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
export class CreateCustomDomainAssociationCommand extends command<CreateCustomDomainAssociationCommandInput, CreateCustomDomainAssociationCommandOutput>(
  _ep0,
  _mw0,
  "CreateCustomDomainAssociation",
  CreateCustomDomainAssociation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCustomDomainAssociationRequest;
      output: CreateCustomDomainAssociationResponse;
    };
    sdk: {
      input: CreateCustomDomainAssociationCommandInput;
      output: CreateCustomDomainAssociationCommandOutput;
    };
  };
}
