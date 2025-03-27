// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutGroupRequest, PutGroupResponse } from "../models/models_1";
import { de_PutGroupCommand, se_PutGroupCommand } from "../protocols/Aws_restJson1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutGroupCommand}.
 */
export interface PutGroupCommandInput extends PutGroupRequest {}
/**
 * @public
 *
 * The output of {@link PutGroupCommand}.
 */
export interface PutGroupCommandOutput extends PutGroupResponse, __MetadataBearer {}

/**
 * <p>Create, or updates, a mapping of users—who have access to a document—to
 *             groups.</p>
 *          <p>You can also map sub groups to groups. For example, the group "Company Intellectual
 *             Property Teams" includes sub groups "Research" and "Engineering". These sub groups
 *             include their own list of users or people who work in these teams. Only users who work
 *             in research and engineering, and therefore belong in the intellectual property group,
 *             can see top-secret company documents in their Amazon Q Business chat results.</p>
 *          <p>There are two options for creating groups, either passing group members inline or using an S3 file via the
 *             S3PathForGroupMembers field. For inline groups, there is a limit of 1000 members per group and for provided S3 files
 *             there is a limit of 100 thousand members. When creating a group using an S3 file, you provide both
 *             an S3 file and a <code>RoleArn</code> for Amazon Q Buisness to access the file.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, PutGroupCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, PutGroupCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * const client = new QBusinessClient(config);
 * const input = { // PutGroupRequest
 *   applicationId: "STRING_VALUE", // required
 *   indexId: "STRING_VALUE", // required
 *   groupName: "STRING_VALUE", // required
 *   dataSourceId: "STRING_VALUE",
 *   type: "INDEX" || "DATASOURCE", // required
 *   groupMembers: { // GroupMembers
 *     memberGroups: [ // MemberGroups
 *       { // MemberGroup
 *         groupName: "STRING_VALUE", // required
 *         type: "INDEX" || "DATASOURCE",
 *       },
 *     ],
 *     memberUsers: [ // MemberUsers
 *       { // MemberUser
 *         userId: "STRING_VALUE", // required
 *         type: "INDEX" || "DATASOURCE",
 *       },
 *     ],
 *     s3PathForGroupMembers: { // S3
 *       bucket: "STRING_VALUE", // required
 *       key: "STRING_VALUE", // required
 *     },
 *   },
 *   roleArn: "STRING_VALUE",
 * };
 * const command = new PutGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutGroupCommandInput - {@link PutGroupCommandInput}
 * @returns {@link PutGroupCommandOutput}
 * @see {@link PutGroupCommandInput} for command's `input` shape.
 * @see {@link PutGroupCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required
 *             permission policies and user accounts and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You are trying to perform an action that conflicts with the current status of your
 *             resource. Fix any inconsistencies with your resources and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait
 *             some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The application or plugin resource you want to use doesn’t exist. Make sure you have
 *             provided the correct resource and try again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded the set limits for your Amazon Q Business service. </p>
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
 *
 * @public
 */
export class PutGroupCommand extends $Command
  .classBuilder<
    PutGroupCommandInput,
    PutGroupCommandOutput,
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
  .s("ExpertQ", "PutGroup", {})
  .n("QBusinessClient", "PutGroupCommand")
  .f(void 0, void 0)
  .ser(se_PutGroupCommand)
  .de(de_PutGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutGroupRequest;
      output: {};
    };
    sdk: {
      input: PutGroupCommandInput;
      output: PutGroupCommandOutput;
    };
  };
}
