// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDocumentContentRequest, GetDocumentContentResponse } from "../models/models_0";
import { GetDocumentContent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves the content of a document that was ingested into Amazon Q Business. This API validates user authorization against document ACLs before returning a pre-signed URL for secure document access. You can download or view source documents referenced in chat responses through the URL.
 *
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
 *
 * You don't have access to perform this action. Make sure you have the required permission policies and user accounts and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An issue occurred with the internal server used for your Amazon Q Business service. Wait some minutes and try again, or contact [Support](http://aws.amazon.com/contact-us/) for help.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The application or plugin resource you want to use doesn’t exist. Make sure you have provided the correct resource and try again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to throttling. Reduce the number of requests and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input doesn't meet the constraints set by the Amazon Q Business service. Provide the correct input and try again.
 *
 * @throws {@link QBusinessServiceException}
 *
 * Base exception class for all service exceptions from QBusiness service.
 *
 * @public
 */
export class GetDocumentContentCommand extends command<GetDocumentContentCommandInput, GetDocumentContentCommandOutput>(
  _ep0,
  _mw0,
  "GetDocumentContent",
  GetDocumentContent$
) {
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
