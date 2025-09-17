// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectCasesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCasesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BatchGetFieldRequest, BatchGetFieldResponse } from "../models/models_0";
import { de_BatchGetFieldCommand, se_BatchGetFieldCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetFieldCommand}.
 */
export interface BatchGetFieldCommandInput extends BatchGetFieldRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetFieldCommand}.
 */
export interface BatchGetFieldCommandOutput extends BatchGetFieldResponse, __MetadataBearer {}

/**
 * <p>Returns the description for the list of fields in the request parameters. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, BatchGetFieldCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, BatchGetFieldCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * // import type { ConnectCasesClientConfig } from "@aws-sdk/client-connectcases";
 * const config = {}; // type is ConnectCasesClientConfig
 * const client = new ConnectCasesClient(config);
 * const input = { // BatchGetFieldRequest
 *   domainId: "STRING_VALUE", // required
 *   fields: [ // BatchGetFieldIdentifierList // required
 *     { // FieldIdentifier
 *       id: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new BatchGetFieldCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetFieldResponse
 * //   fields: [ // BatchGetFieldList // required
 * //     { // GetFieldResponse
 * //       fieldId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       fieldArn: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       type: "STRING_VALUE", // required
 * //       namespace: "STRING_VALUE", // required
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       deleted: true || false,
 * //       createdTime: new Date("TIMESTAMP"),
 * //       lastModifiedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   errors: [ // BatchGetFieldErrorList // required
 * //     { // FieldError
 * //       id: "STRING_VALUE", // required
 * //       errorCode: "STRING_VALUE", // required
 * //       message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetFieldCommandInput - {@link BatchGetFieldCommandInput}
 * @returns {@link BatchGetFieldCommandOutput}
 * @see {@link BatchGetFieldCommandInput} for command's `input` shape.
 * @see {@link BatchGetFieldCommandOutput} for command's `response` shape.
 * @see {@link ConnectCasesClientResolvedConfig | config} for ConnectCasesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>We couldn't process your request because of an issue with the server. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We couldn't find the requested resource. Check that your resources exists and were created in the same Amazon Web Services Region as your request, and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate has been exceeded for this API. Please try again after a few minutes.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. Check the syntax and try again.</p>
 *
 * @throws {@link ConnectCasesServiceException}
 * <p>Base exception class for all service exceptions from ConnectCases service.</p>
 *
 *
 * @public
 */
export class BatchGetFieldCommand extends $Command
  .classBuilder<
    BatchGetFieldCommandInput,
    BatchGetFieldCommandOutput,
    ConnectCasesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectCasesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectCases", "BatchGetField", {})
  .n("ConnectCasesClient", "BatchGetFieldCommand")
  .f(void 0, void 0)
  .ser(se_BatchGetFieldCommand)
  .de(de_BatchGetFieldCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetFieldRequest;
      output: BatchGetFieldResponse;
    };
    sdk: {
      input: BatchGetFieldCommandInput;
      output: BatchGetFieldCommandOutput;
    };
  };
}
