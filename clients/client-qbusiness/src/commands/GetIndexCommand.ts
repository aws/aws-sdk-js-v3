// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetIndexRequest, GetIndexResponse } from "../models/models_0";
import { de_GetIndexCommand, se_GetIndexCommand } from "../protocols/Aws_restJson1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetIndexCommand}.
 */
export interface GetIndexCommandInput extends GetIndexRequest {}
/**
 * @public
 *
 * The output of {@link GetIndexCommand}.
 */
export interface GetIndexCommandOutput extends GetIndexResponse, __MetadataBearer {}

/**
 * <p>Gets information about an existing Amazon Q Business index.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, GetIndexCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, GetIndexCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * const client = new QBusinessClient(config);
 * const input = { // GetIndexRequest
 *   applicationId: "STRING_VALUE", // required
 *   indexId: "STRING_VALUE", // required
 * };
 * const command = new GetIndexCommand(input);
 * const response = await client.send(command);
 * // { // GetIndexResponse
 * //   applicationId: "STRING_VALUE",
 * //   indexId: "STRING_VALUE",
 * //   displayName: "STRING_VALUE",
 * //   indexArn: "STRING_VALUE",
 * //   status: "CREATING" || "ACTIVE" || "DELETING" || "FAILED" || "UPDATING",
 * //   type: "ENTERPRISE" || "STARTER",
 * //   description: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   capacityConfiguration: { // IndexCapacityConfiguration
 * //     units: Number("int"),
 * //   },
 * //   documentAttributeConfigurations: [ // DocumentAttributeConfigurations
 * //     { // DocumentAttributeConfiguration
 * //       name: "STRING_VALUE",
 * //       type: "STRING" || "STRING_LIST" || "NUMBER" || "DATE",
 * //       search: "ENABLED" || "DISABLED",
 * //     },
 * //   ],
 * //   error: { // ErrorDetail
 * //     errorMessage: "STRING_VALUE",
 * //     errorCode: "InternalError" || "InvalidRequest" || "ResourceInactive" || "ResourceNotFound",
 * //   },
 * //   indexStatistics: { // IndexStatistics
 * //     textDocumentStatistics: { // TextDocumentStatistics
 * //       indexedTextBytes: Number("long"),
 * //       indexedTextDocumentCount: Number("int"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetIndexCommandInput - {@link GetIndexCommandInput}
 * @returns {@link GetIndexCommandOutput}
 * @see {@link GetIndexCommandInput} for command's `input` shape.
 * @see {@link GetIndexCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required
 *             permission policies and user accounts and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait
 *             some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you want to use doesn’t exist. Make sure you have provided the correct
 *             resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling. Reduce the number of requests and try
 *             again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't meet the constraints set by the Amazon Q Business service. Provide the
 *             correct input and try again.</p>
 *
 * @throws {@link QBusinessServiceException}
 * <p>Base exception class for all service exceptions from QBusiness service.</p>
 *
 * @public
 */
export class GetIndexCommand extends $Command
  .classBuilder<
    GetIndexCommandInput,
    GetIndexCommandOutput,
    QBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ExpertQ", "GetIndex", {})
  .n("QBusinessClient", "GetIndexCommand")
  .f(void 0, void 0)
  .ser(se_GetIndexCommand)
  .de(de_GetIndexCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIndexRequest;
      output: GetIndexResponse;
    };
    sdk: {
      input: GetIndexCommandInput;
      output: GetIndexCommandOutput;
    };
  };
}
