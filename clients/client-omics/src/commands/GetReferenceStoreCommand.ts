// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetReferenceStoreRequest, GetReferenceStoreResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_GetReferenceStoreCommand, se_GetReferenceStoreCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetReferenceStoreCommand}.
 */
export interface GetReferenceStoreCommandInput extends GetReferenceStoreRequest {}
/**
 * @public
 *
 * The output of {@link GetReferenceStoreCommand}.
 */
export interface GetReferenceStoreCommandOutput extends GetReferenceStoreResponse, __MetadataBearer {}

/**
 * <p>Gets information about a reference store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, GetReferenceStoreCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, GetReferenceStoreCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const input = { // GetReferenceStoreRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetReferenceStoreCommand(input);
 * const response = await client.send(command);
 * // { // GetReferenceStoreResponse
 * //   id: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   sseConfig: { // SseConfig
 * //     type: "STRING_VALUE", // required
 * //     keyArn: "STRING_VALUE",
 * //   },
 * //   creationTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetReferenceStoreCommandInput - {@link GetReferenceStoreCommandInput}
 * @returns {@link GetReferenceStoreCommandOutput}
 * @see {@link GetReferenceStoreCommandInput} for command's `input` shape.
 * @see {@link GetReferenceStoreCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>The request timed out.</p>
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
 * @public
 */
export class GetReferenceStoreCommand extends $Command
  .classBuilder<
    GetReferenceStoreCommandInput,
    GetReferenceStoreCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Omics", "GetReferenceStore", {})
  .n("OmicsClient", "GetReferenceStoreCommand")
  .f(void 0, void 0)
  .ser(se_GetReferenceStoreCommand)
  .de(de_GetReferenceStoreCommand)
  .build() {}
