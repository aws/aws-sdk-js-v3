// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetShareRequest, GetShareResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_GetShareCommand, se_GetShareCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetShareCommand}.
 */
export interface GetShareCommandInput extends GetShareRequest {}
/**
 * @public
 *
 * The output of {@link GetShareCommand}.
 */
export interface GetShareCommandOutput extends GetShareResponse, __MetadataBearer {}

/**
 * <p>Retrieves the metadata for the specified resource share.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, GetShareCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, GetShareCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // GetShareRequest
 *   shareId: "STRING_VALUE", // required
 * };
 * const command = new GetShareCommand(input);
 * const response = await client.send(command);
 * // { // GetShareResponse
 * //   share: { // ShareDetails
 * //     shareId: "STRING_VALUE",
 * //     resourceArn: "STRING_VALUE",
 * //     resourceId: "STRING_VALUE",
 * //     principalSubscriber: "STRING_VALUE",
 * //     ownerId: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //     statusMessage: "STRING_VALUE",
 * //     shareName: "STRING_VALUE",
 * //     creationTime: new Date("TIMESTAMP"),
 * //     updateTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetShareCommandInput - {@link GetShareCommandInput}
 * @returns {@link GetShareCommandOutput}
 * @see {@link GetShareCommandInput} for command's `input` shape.
 * @see {@link GetShareCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request cannot be applied to the target resource in its current state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found in the current Region.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds a service quota.</p>
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
export class GetShareCommand extends $Command
  .classBuilder<
    GetShareCommandInput,
    GetShareCommandOutput,
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
  .s("Omics", "GetShare", {})
  .n("OmicsClient", "GetShareCommand")
  .f(void 0, void 0)
  .ser(se_GetShareCommand)
  .de(de_GetShareCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetShareRequest;
      output: GetShareResponse;
    };
    sdk: {
      input: GetShareCommandInput;
      output: GetShareCommandOutput;
    };
  };
}
