// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetDocumentContentRequest, GetDocumentContentResponse } from "../models/models_0";
import type { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";
import { GetDocumentContent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDocumentContentCommand}.
 */
export interface GetDocumentContentCommandInput extends GetDocumentContentRequest {}
/**
 * @public
 *
 * The output of {@link GetDocumentContentCommand}.
 */
export interface GetDocumentContentCommandOutput extends GetDocumentContentResponse, __MetadataBearer {}

/**
 * <p>Retrieves the content of a document that was ingested into Amazon Q Business. This API validates user authorization against document ACLs before returning a pre-signed URL for secure document access. You can download or view source documents referenced in chat responses through the URL.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, GetDocumentContentCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, GetDocumentContentCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * // import type { QBusinessClientConfig } from "@aws-sdk/client-qbusiness";
 * const config = {}; // type is QBusinessClientConfig
 * const client = new QBusinessClient(config);
 * const input = { // GetDocumentContentRequest
 *   applicationId: "STRING_VALUE", // required
 *   indexId: "STRING_VALUE", // required
 *   dataSourceId: "STRING_VALUE",
 *   documentId: "STRING_VALUE", // required
 *   outputFormat: "RAW" || "EXTRACTED",
 * };
 * const command = new GetDocumentContentCommand(input);
 * const response = await client.send(command);
 * // { // GetDocumentContentResponse
 * //   presignedUrl: "STRING_VALUE", // required
 * //   mimeType: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetDocumentContentCommandInput - {@link GetDocumentContentCommandInput}
 * @returns {@link GetDocumentContentCommandOutput}
 * @see {@link GetDocumentContentCommandInput} for command's `input` shape.
 * @see {@link GetDocumentContentCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required permission policies and user accounts and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The application or plugin resource you want to use doesn’t exist. Make sure you have provided the correct resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling. Reduce the number of requests and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't meet the constraints set by the Amazon Q Business service. Provide the correct input and try again.</p>
 *
 * @throws {@link QBusinessServiceException}
 * <p>Base exception class for all service exceptions from QBusiness service.</p>
 *
 *
 * @public
 */
export class GetDocumentContentCommand extends $Command
  .classBuilder<
    GetDocumentContentCommandInput,
    GetDocumentContentCommandOutput,
    QBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ExpertQ", "GetDocumentContent", {})
  .n("QBusinessClient", "GetDocumentContentCommand")
  .sc(GetDocumentContent$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDocumentContentRequest;
      output: GetDocumentContentResponse;
    };
    sdk: {
      input: GetDocumentContentCommandInput;
      output: GetDocumentContentCommandOutput;
    };
  };
}
