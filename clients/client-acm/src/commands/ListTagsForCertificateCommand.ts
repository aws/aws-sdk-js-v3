// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTagsForCertificateRequest, ListTagsForCertificateResponse } from "../models/models_0";
import { ListTagsForCertificate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTagsForCertificateCommand}.
 */
export interface ListTagsForCertificateCommandInput extends ListTagsForCertificateRequest {}
/**
 * @public
 *
 * The output of {@link ListTagsForCertificateCommand}.
 */
export interface ListTagsForCertificateCommandOutput extends ListTagsForCertificateResponse, __MetadataBearer {}

/**
 * <p>Lists the tags that have been applied to the ACM certificate. Use the certificate's Amazon Resource Name (ARN) to specify the certificate. To add a tag to an ACM certificate, use the <a>AddTagsToCertificate</a> action. To delete a tag, use the <a>RemoveTagsFromCertificate</a> action. </p> <note> <p>This action applies only to the <code>certificate</code> resource type. For all other ACM resource types, use <a>ListTagsForResource</a> instead.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, ListTagsForCertificateCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, ListTagsForCertificateCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * // import type { ACMClientConfig } from "@aws-sdk/client-acm";
 * const config = {}; // type is ACMClientConfig
 * const client = new ACMClient(config);
 * const input = { // ListTagsForCertificateRequest
 *   CertificateArn: "STRING_VALUE", // required
 * };
 * const command = new ListTagsForCertificateCommand(input);
 * const response = await client.send(command);
 * // { // ListTagsForCertificateResponse
 * //   Tags: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListTagsForCertificateCommandInput - {@link ListTagsForCertificateCommandInput}
 * @returns {@link ListTagsForCertificateCommandOutput}
 * @see {@link ListTagsForCertificateCommandInput} for command's `input` shape.
 * @see {@link ListTagsForCertificateCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for ACMClient's `config` shape.
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified certificate cannot be found in the caller's account or the caller's account cannot be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The supplied input failed to satisfy constraints of an Amazon Web Services service.</p>
 *
 * @throws {@link ACMServiceException}
 * <p>Base exception class for all service exceptions from ACM service.</p>
 *
 *
 * @public
 */
export class ListTagsForCertificateCommand extends command<ListTagsForCertificateCommandInput, ListTagsForCertificateCommandOutput>(
  _ep0,
  _mw0,
  "ListTagsForCertificate",
  ListTagsForCertificate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTagsForCertificateRequest;
      output: ListTagsForCertificateResponse;
    };
    sdk: {
      input: ListTagsForCertificateCommandInput;
      output: ListTagsForCertificateCommandOutput;
    };
  };
}
