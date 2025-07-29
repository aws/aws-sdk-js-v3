// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateCollectionRequest, UpdateCollectionResponse } from "../models/models_0";
import {
  OpenSearchServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../OpenSearchServerlessClient";
import { de_UpdateCollectionCommand, se_UpdateCollectionCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateCollectionCommand}.
 */
export interface UpdateCollectionCommandInput extends UpdateCollectionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCollectionCommand}.
 */
export interface UpdateCollectionCommandOutput extends UpdateCollectionResponse, __MetadataBearer {}

/**
 * <p>Updates an OpenSearch Serverless collection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, UpdateCollectionCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, UpdateCollectionCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * const client = new OpenSearchServerlessClient(config);
 * const input = { // UpdateCollectionRequest
 *   id: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateCollectionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCollectionResponse
 * //   updateCollectionDetail: { // UpdateCollectionDetail
 * //     id: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //     type: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     createdDate: Number("long"),
 * //     lastModifiedDate: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateCollectionCommandInput - {@link UpdateCollectionCommandInput}
 * @returns {@link UpdateCollectionCommandOutput}
 * @see {@link UpdateCollectionCommandInput} for command's `input` shape.
 * @see {@link UpdateCollectionCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchServerlessClientResolvedConfig | config} for OpenSearchServerlessClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>When creating a resource, thrown when a resource with the same name already exists or
 *             is being created. When deleting a resource, thrown when the resource is not in the
 *             ACTIVE or FAILED state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Thrown when an error internal to the service occurs while processing a request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Thrown when the HTTP request contains invalid input or is missing required
 *             input.</p>
 *
 * @throws {@link OpenSearchServerlessServiceException}
 * <p>Base exception class for all service exceptions from OpenSearchServerless service.</p>
 *
 *
 * @public
 */
export class UpdateCollectionCommand extends $Command
  .classBuilder<
    UpdateCollectionCommandInput,
    UpdateCollectionCommandOutput,
    OpenSearchServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchServerlessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OpenSearchServerless", "UpdateCollection", {})
  .n("OpenSearchServerlessClient", "UpdateCollectionCommand")
  .f(void 0, void 0)
  .ser(se_UpdateCollectionCommand)
  .de(de_UpdateCollectionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCollectionRequest;
      output: UpdateCollectionResponse;
    };
    sdk: {
      input: UpdateCollectionCommandInput;
      output: UpdateCollectionCommandOutput;
    };
  };
}
