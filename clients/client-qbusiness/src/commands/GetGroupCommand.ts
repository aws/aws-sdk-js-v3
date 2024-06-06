// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetGroupRequest, GetGroupResponse } from "../models/models_0";
import { de_GetGroupCommand, se_GetGroupCommand } from "../protocols/Aws_restJson1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetGroupCommand}.
 */
export interface GetGroupCommandInput extends GetGroupRequest {}
/**
 * @public
 *
 * The output of {@link GetGroupCommand}.
 */
export interface GetGroupCommandOutput extends GetGroupResponse, __MetadataBearer {}

/**
 * <p>Describes a group by group name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, GetGroupCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, GetGroupCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * const client = new QBusinessClient(config);
 * const input = { // GetGroupRequest
 *   applicationId: "STRING_VALUE", // required
 *   indexId: "STRING_VALUE", // required
 *   groupName: "STRING_VALUE", // required
 *   dataSourceId: "STRING_VALUE",
 * };
 * const command = new GetGroupCommand(input);
 * const response = await client.send(command);
 * // { // GetGroupResponse
 * //   status: { // GroupStatusDetail
 * //     status: "FAILED" || "SUCCEEDED" || "PROCESSING" || "DELETING" || "DELETED",
 * //     lastUpdatedAt: new Date("TIMESTAMP"),
 * //     errorDetail: { // ErrorDetail
 * //       errorMessage: "STRING_VALUE",
 * //       errorCode: "InternalError" || "InvalidRequest" || "ResourceInactive" || "ResourceNotFound",
 * //     },
 * //   },
 * //   statusHistory: [ // GroupStatusDetails
 * //     {
 * //       status: "FAILED" || "SUCCEEDED" || "PROCESSING" || "DELETING" || "DELETED",
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //       errorDetail: {
 * //         errorMessage: "STRING_VALUE",
 * //         errorCode: "InternalError" || "InvalidRequest" || "ResourceInactive" || "ResourceNotFound",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetGroupCommandInput - {@link GetGroupCommandInput}
 * @returns {@link GetGroupCommandOutput}
 * @see {@link GetGroupCommandInput} for command's `input` shape.
 * @see {@link GetGroupCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required
 *             permission policies and user accounts and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You are trying to perform an action that conflicts with the current status of your
 *             resource. Fix any inconsistences with your resources and try again.</p>
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
export class GetGroupCommand extends $Command
  .classBuilder<
    GetGroupCommandInput,
    GetGroupCommandOutput,
    QBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ExpertQ", "GetGroup", {})
  .n("QBusinessClient", "GetGroupCommand")
  .f(void 0, void 0)
  .ser(se_GetGroupCommand)
  .de(de_GetGroupCommand)
  .build() {}
