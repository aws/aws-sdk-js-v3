// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CheckDocumentAccessRequest, CheckDocumentAccessResponse } from "../models/models_0";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";
import { CheckDocumentAccess } from "../schemas/schemas_4_Group";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CheckDocumentAccessCommand}.
 */
export interface CheckDocumentAccessCommandInput extends CheckDocumentAccessRequest {}
/**
 * @public
 *
 * The output of {@link CheckDocumentAccessCommand}.
 */
export interface CheckDocumentAccessCommandOutput extends CheckDocumentAccessResponse, __MetadataBearer {}

/**
 * <p>Verifies if a user has access permissions for a specified document and returns the actual ACL attached to the document. Resolves user access on the document via user aliases and groups when verifying user access.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, CheckDocumentAccessCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, CheckDocumentAccessCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * // import type { QBusinessClientConfig } from "@aws-sdk/client-qbusiness";
 * const config = {}; // type is QBusinessClientConfig
 * const client = new QBusinessClient(config);
 * const input = { // CheckDocumentAccessRequest
 *   applicationId: "STRING_VALUE", // required
 *   indexId: "STRING_VALUE", // required
 *   userId: "STRING_VALUE", // required
 *   documentId: "STRING_VALUE", // required
 *   dataSourceId: "STRING_VALUE",
 * };
 * const command = new CheckDocumentAccessCommand(input);
 * const response = await client.send(command);
 * // { // CheckDocumentAccessResponse
 * //   userGroups: [ // AssociatedGroups
 * //     { // AssociatedGroup
 * //       name: "STRING_VALUE",
 * //       type: "INDEX" || "DATASOURCE",
 * //     },
 * //   ],
 * //   userAliases: [ // AssociatedUsers
 * //     { // AssociatedUser
 * //       id: "STRING_VALUE",
 * //       type: "INDEX" || "DATASOURCE",
 * //     },
 * //   ],
 * //   hasAccess: true || false,
 * //   documentAcl: { // DocumentAcl
 * //     allowlist: { // DocumentAclMembership
 * //       memberRelation: "AND" || "OR",
 * //       conditions: [ // DocumentAclConditions
 * //         { // DocumentAclCondition
 * //           memberRelation: "AND" || "OR",
 * //           users: [ // DocumentAclUsers
 * //             { // DocumentAclUser
 * //               id: "STRING_VALUE",
 * //               type: "INDEX" || "DATASOURCE",
 * //             },
 * //           ],
 * //           groups: [ // DocumentAclGroups
 * //             { // DocumentAclGroup
 * //               name: "STRING_VALUE",
 * //               type: "INDEX" || "DATASOURCE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //     denyList: {
 * //       memberRelation: "AND" || "OR",
 * //       conditions: [
 * //         {
 * //           memberRelation: "AND" || "OR",
 * //           users: [
 * //             {
 * //               id: "STRING_VALUE",
 * //               type: "INDEX" || "DATASOURCE",
 * //             },
 * //           ],
 * //           groups: [
 * //             {
 * //               name: "STRING_VALUE",
 * //               type: "INDEX" || "DATASOURCE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CheckDocumentAccessCommandInput - {@link CheckDocumentAccessCommandInput}
 * @returns {@link CheckDocumentAccessCommandOutput}
 * @see {@link CheckDocumentAccessCommandInput} for command's `input` shape.
 * @see {@link CheckDocumentAccessCommandOutput} for command's `response` shape.
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
export class CheckDocumentAccessCommand extends $Command
  .classBuilder<
    CheckDocumentAccessCommandInput,
    CheckDocumentAccessCommandOutput,
    QBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ExpertQ", "CheckDocumentAccess", {})
  .n("QBusinessClient", "CheckDocumentAccessCommand")
  .sc(CheckDocumentAccess)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CheckDocumentAccessRequest;
      output: CheckDocumentAccessResponse;
    };
    sdk: {
      input: CheckDocumentAccessCommandInput;
      output: CheckDocumentAccessCommandOutput;
    };
  };
}
