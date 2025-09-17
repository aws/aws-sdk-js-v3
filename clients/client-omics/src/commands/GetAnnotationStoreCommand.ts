// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetAnnotationStoreRequest, GetAnnotationStoreResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_GetAnnotationStoreCommand, se_GetAnnotationStoreCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAnnotationStoreCommand}.
 */
export interface GetAnnotationStoreCommandInput extends GetAnnotationStoreRequest {}
/**
 * @public
 *
 * The output of {@link GetAnnotationStoreCommand}.
 */
export interface GetAnnotationStoreCommandOutput extends GetAnnotationStoreResponse, __MetadataBearer {}

/**
 * <p>Gets information about an annotation store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, GetAnnotationStoreCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, GetAnnotationStoreCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // GetAnnotationStoreRequest
 *   name: "STRING_VALUE", // required
 * };
 * const command = new GetAnnotationStoreCommand(input);
 * const response = await client.send(command);
 * // { // GetAnnotationStoreResponse
 * //   id: "STRING_VALUE", // required
 * //   reference: { // ReferenceItem Union: only one key present
 * //     referenceArn: "STRING_VALUE",
 * //   },
 * //   status: "STRING_VALUE", // required
 * //   storeArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE", // required
 * //   sseConfig: { // SseConfig
 * //     type: "STRING_VALUE", // required
 * //     keyArn: "STRING_VALUE",
 * //   },
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   updateTime: new Date("TIMESTAMP"), // required
 * //   tags: { // TagMap // required
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   storeOptions: { // StoreOptions Union: only one key present
 * //     tsvStoreOptions: { // TsvStoreOptions
 * //       annotationType: "STRING_VALUE",
 * //       formatToHeader: { // FormatToHeader
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       schema: [ // Schema
 * //         { // SchemaItem
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   storeFormat: "STRING_VALUE",
 * //   statusMessage: "STRING_VALUE", // required
 * //   storeSizeBytes: Number("long"), // required
 * //   numVersions: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param GetAnnotationStoreCommandInput - {@link GetAnnotationStoreCommandInput}
 * @returns {@link GetAnnotationStoreCommandOutput}
 * @see {@link GetAnnotationStoreCommandInput} for command's `input` shape.
 * @see {@link GetAnnotationStoreCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found in the current Region.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link OmicsServiceException}
 * <p>Base exception class for all service exceptions from Omics service.</p>
 *
 *
 * @public
 */
export class GetAnnotationStoreCommand extends $Command
  .classBuilder<
    GetAnnotationStoreCommandInput,
    GetAnnotationStoreCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Omics", "GetAnnotationStore", {})
  .n("OmicsClient", "GetAnnotationStoreCommand")
  .f(void 0, void 0)
  .ser(se_GetAnnotationStoreCommand)
  .de(de_GetAnnotationStoreCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAnnotationStoreRequest;
      output: GetAnnotationStoreResponse;
    };
    sdk: {
      input: GetAnnotationStoreCommandInput;
      output: GetAnnotationStoreCommandOutput;
    };
  };
}
