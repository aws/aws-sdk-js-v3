// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListCustomDomainAssociationsRequest, ListCustomDomainAssociationsResponse } from "../models/models_0";
import {
  de_ListCustomDomainAssociationsCommand,
  se_ListCustomDomainAssociationsCommand,
} from "../protocols/Aws_json1_1";
import {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface ListCustomDomainAssociationsCommandOutput
  extends ListCustomDomainAssociationsResponse,
    __MetadataBearer {}

/**
 * <p> Lists custom domain associations for Amazon Redshift Serverless.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, ListCustomDomainAssociationsCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, ListCustomDomainAssociationsCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link InvalidPaginationException} (client fault)
 *  <p>The provided pagination token is invalid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link RedshiftServerlessServiceException}
 * <p>Base exception class for all service exceptions from RedshiftServerless service.</p>
 *
 * @public
 */
export class ListCustomDomainAssociationsCommand extends $Command
  .classBuilder<
    ListCustomDomainAssociationsCommandInput,
    ListCustomDomainAssociationsCommandOutput,
    RedshiftServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftServerlessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RedshiftServerless", "ListCustomDomainAssociations", {})
  .n("RedshiftServerlessClient", "ListCustomDomainAssociationsCommand")
  .f(void 0, void 0)
  .ser(se_ListCustomDomainAssociationsCommand)
  .de(de_ListCustomDomainAssociationsCommand)
  .build() {
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
