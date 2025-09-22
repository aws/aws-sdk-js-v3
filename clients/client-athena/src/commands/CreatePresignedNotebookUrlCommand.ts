// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreatePresignedNotebookUrlRequest, CreatePresignedNotebookUrlResponse } from "../models/models_0";
import { CreatePresignedNotebookUrl } from "../schemas/schemas_9_Get";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePresignedNotebookUrlCommand}.
 */
export interface CreatePresignedNotebookUrlCommandInput extends CreatePresignedNotebookUrlRequest {}
/**
 * @public
 *
 * The output of {@link CreatePresignedNotebookUrlCommand}.
 */
export interface CreatePresignedNotebookUrlCommandOutput extends CreatePresignedNotebookUrlResponse, __MetadataBearer {}

/**
 * <p>Gets an authentication token and the URL at which the notebook can be accessed. During
 *             programmatic access, <code>CreatePresignedNotebookUrl</code> must be called every 10
 *             minutes to refresh the authentication token. For information about granting programmatic
 *             access, see <a href="https://docs.aws.amazon.com/athena/latest/ug/setting-up.html#setting-up-grant-programmatic-access">Grant
 *                 programmatic access</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, CreatePresignedNotebookUrlCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, CreatePresignedNotebookUrlCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // CreatePresignedNotebookUrlRequest
 *   SessionId: "STRING_VALUE", // required
 * };
 * const command = new CreatePresignedNotebookUrlCommand(input);
 * const response = await client.send(command);
 * // { // CreatePresignedNotebookUrlResponse
 * //   NotebookUrl: "STRING_VALUE", // required
 * //   AuthToken: "STRING_VALUE", // required
 * //   AuthTokenExpirationTime: Number("long"), // required
 * // };
 *
 * ```
 *
 * @param CreatePresignedNotebookUrlCommandInput - {@link CreatePresignedNotebookUrlCommandInput}
 * @returns {@link CreatePresignedNotebookUrlCommandOutput}
 * @see {@link CreatePresignedNotebookUrlCommandInput} for command's `input` shape.
 * @see {@link CreatePresignedNotebookUrlCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource, such as a workgroup, was not found.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 *
 * @public
 */
export class CreatePresignedNotebookUrlCommand extends $Command
  .classBuilder<
    CreatePresignedNotebookUrlCommandInput,
    CreatePresignedNotebookUrlCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAthena", "CreatePresignedNotebookUrl", {})
  .n("AthenaClient", "CreatePresignedNotebookUrlCommand")
  .sc(CreatePresignedNotebookUrl)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePresignedNotebookUrlRequest;
      output: CreatePresignedNotebookUrlResponse;
    };
    sdk: {
      input: CreatePresignedNotebookUrlCommandInput;
      output: CreatePresignedNotebookUrlCommandOutput;
    };
  };
}
