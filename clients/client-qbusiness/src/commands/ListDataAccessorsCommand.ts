// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListDataAccessorsRequest,
  ListDataAccessorsResponse,
  ListDataAccessorsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ListDataAccessorsCommand, se_ListDataAccessorsCommand } from "../protocols/Aws_restJson1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDataAccessorsCommand}.
 */
export interface ListDataAccessorsCommandInput extends ListDataAccessorsRequest {}
/**
 * @public
 *
 * The output of {@link ListDataAccessorsCommand}.
 */
export interface ListDataAccessorsCommandOutput extends ListDataAccessorsResponse, __MetadataBearer {}

/**
 * <p>Lists the data accessors for a Amazon Q Business application. This operation returns a paginated list of data accessor summaries, including the friendly name, unique identifier, ARN, associated IAM role, and creation/update timestamps for each data accessor.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, ListDataAccessorsCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, ListDataAccessorsCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * const client = new QBusinessClient(config);
 * const input = { // ListDataAccessorsRequest
 *   applicationId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDataAccessorsCommand(input);
 * const response = await client.send(command);
 * // { // ListDataAccessorsResponse
 * //   dataAccessors: [ // DataAccessors
 * //     { // DataAccessor
 * //       displayName: "STRING_VALUE",
 * //       dataAccessorId: "STRING_VALUE",
 * //       dataAccessorArn: "STRING_VALUE",
 * //       idcApplicationArn: "STRING_VALUE",
 * //       principal: "STRING_VALUE",
 * //       authenticationDetail: { // DataAccessorAuthenticationDetail
 * //         authenticationType: "AWS_IAM_IDC_TTI" || "AWS_IAM_IDC_AUTH_CODE", // required
 * //         authenticationConfiguration: { // DataAccessorAuthenticationConfiguration Union: only one key present
 * //           idcTrustedTokenIssuerConfiguration: { // DataAccessorIdcTrustedTokenIssuerConfiguration
 * //             idcTrustedTokenIssuerArn: "STRING_VALUE", // required
 * //           },
 * //         },
 * //         externalIds: [ // DataAccessorExternalIds
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataAccessorsCommandInput - {@link ListDataAccessorsCommandInput}
 * @returns {@link ListDataAccessorsCommandOutput}
 * @see {@link ListDataAccessorsCommandInput} for command's `input` shape.
 * @see {@link ListDataAccessorsCommandOutput} for command's `response` shape.
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
export class ListDataAccessorsCommand extends $Command
  .classBuilder<
    ListDataAccessorsCommandInput,
    ListDataAccessorsCommandOutput,
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
  .s("ExpertQ", "ListDataAccessors", {})
  .n("QBusinessClient", "ListDataAccessorsCommand")
  .f(void 0, ListDataAccessorsResponseFilterSensitiveLog)
  .ser(se_ListDataAccessorsCommand)
  .de(de_ListDataAccessorsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataAccessorsRequest;
      output: ListDataAccessorsResponse;
    };
    sdk: {
      input: ListDataAccessorsCommandInput;
      output: ListDataAccessorsCommandOutput;
    };
  };
}
