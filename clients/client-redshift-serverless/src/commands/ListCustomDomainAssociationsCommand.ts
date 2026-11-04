// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListCustomDomainAssociationsRequest, ListCustomDomainAssociationsResponse } from "../models/models_0";
import { ListCustomDomainAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListCustomDomainAssociationsCommand}.
 */
export interface ListCustomDomainAssociationsCommandInput extends ListCustomDomainAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListCustomDomainAssociationsCommand}.
 */
export interface ListCustomDomainAssociationsCommandOutput extends ListCustomDomainAssociationsResponse, __MetadataBearer {}

/**
 * Lists custom domain associations for Amazon Redshift Serverless.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, ListCustomDomainAssociationsCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, ListCustomDomainAssociationsCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * // import type { RedshiftServerlessClientConfig } from "@aws-sdk/client-redshift-serverless";
 * const config = {}; // type is RedshiftServerlessClientConfig
 * const client = new RedshiftServerlessClient(config);
 * const input = { // ListCustomDomainAssociationsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   customDomainName: "STRING_VALUE",
 *   customDomainCertificateArn: "STRING_VALUE",
 * };
 * const command = new ListCustomDomainAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListCustomDomainAssociationsResponse
 * //   nextToken: "STRING_VALUE",
 * //   associations: [ // AssociationList
 * //     { // Association
 * //       customDomainCertificateArn: "STRING_VALUE",
 * //       customDomainCertificateExpiryTime: new Date("TIMESTAMP"),
 * //       customDomainName: "STRING_VALUE",
 * //       workgroupName: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListCustomDomainAssociationsCommandInput - {@link ListCustomDomainAssociationsCommandInput}
 * @returns {@link ListCustomDomainAssociationsCommandOutput}
 * @see {@link ListCustomDomainAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListCustomDomainAssociationsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link InvalidPaginationException} (client fault)
 *
 * The provided pagination token is invalid.
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
export class ListCustomDomainAssociationsCommand extends command<ListCustomDomainAssociationsCommandInput, ListCustomDomainAssociationsCommandOutput>(
  _ep0,
  _mw0,
  "ListCustomDomainAssociations",
  ListCustomDomainAssociations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCustomDomainAssociationsRequest;
      output: ListCustomDomainAssociationsResponse;
    };
    sdk: {
      input: ListCustomDomainAssociationsCommandInput;
      output: ListCustomDomainAssociationsCommandOutput;
    };
  };
}
