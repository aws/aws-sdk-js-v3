// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetNotebookMetadataInput, GetNotebookMetadataOutput } from "../models/models_0";
import { GetNotebookMetadata } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetNotebookMetadataCommand}.
 */
export interface GetNotebookMetadataCommandInput extends GetNotebookMetadataInput {}
/**
 * @public
 *
 * The output of {@link GetNotebookMetadataCommand}.
 */
export interface GetNotebookMetadataCommandOutput extends GetNotebookMetadataOutput, __MetadataBearer {}

/**
 * <p>Retrieves notebook metadata for the specified notebook ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, GetNotebookMetadataCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, GetNotebookMetadataCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // GetNotebookMetadataInput
 *   NotebookId: "STRING_VALUE", // required
 * };
 * const command = new GetNotebookMetadataCommand(input);
 * const response = await client.send(command);
 * // { // GetNotebookMetadataOutput
 * //   NotebookMetadata: { // NotebookMetadata
 * //     NotebookId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     WorkGroup: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     Type: "IPYNB",
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetNotebookMetadataCommandInput - {@link GetNotebookMetadataCommandInput}
 * @returns {@link GetNotebookMetadataCommandOutput}
 * @see {@link GetNotebookMetadataCommandInput} for command's `input` shape.
 * @see {@link GetNotebookMetadataCommandOutput} for command's `response` shape.
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
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Indicates that the request was throttled.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 *
 * @public
 */
export class GetNotebookMetadataCommand extends $Command
  .classBuilder<
    GetNotebookMetadataCommandInput,
    GetNotebookMetadataCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAthena", "GetNotebookMetadata", {})
  .n("AthenaClient", "GetNotebookMetadataCommand")
  .sc(GetNotebookMetadata)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetNotebookMetadataInput;
      output: GetNotebookMetadataOutput;
    };
    sdk: {
      input: GetNotebookMetadataCommandInput;
      output: GetNotebookMetadataCommandOutput;
    };
  };
}
