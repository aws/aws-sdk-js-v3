// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import type {
  GetServiceLastAccessedDetailsWithEntitiesRequest,
  GetServiceLastAccessedDetailsWithEntitiesResponse,
} from "../models/models_0";
import { GetServiceLastAccessedDetailsWithEntities } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetServiceLastAccessedDetailsWithEntitiesCommand}.
 */
export interface GetServiceLastAccessedDetailsWithEntitiesCommandInput
  extends GetServiceLastAccessedDetailsWithEntitiesRequest {}
/**
 * @public
 *
 * The output of {@link GetServiceLastAccessedDetailsWithEntitiesCommand}.
 */
export interface GetServiceLastAccessedDetailsWithEntitiesCommandOutput
  extends GetServiceLastAccessedDetailsWithEntitiesResponse,
    __MetadataBearer {}

/**
 * <p>After you generate a group or policy report using the
 *                 <code>GenerateServiceLastAccessedDetails</code> operation, you can use the
 *                 <code>JobId</code> parameter in
 *                 <code>GetServiceLastAccessedDetailsWithEntities</code>. This operation retrieves the
 *             status of your report job and a list of entities that could have used group or policy
 *             permissions to access the specified service.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Group</b> – For a group report, this
 *                     operation returns a list of users in the group that could have used the group’s
 *                     policies in an attempt to access the service.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Policy</b> – For a policy report, this
 *                     operation returns a list of entities (users or roles) that could have used the
 *                     policy in an attempt to access the service.</p>
 *             </li>
 *          </ul>
 *          <p>You can also use this operation for user or role reports to retrieve details about
 *             those entities.</p>
 *          <p>If the operation fails, the <code>GetServiceLastAccessedDetailsWithEntities</code>
 *             operation returns the reason that it failed.</p>
 *          <p>By default, the list of associated entities is sorted by date, with the most recent
 *             access listed first.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetServiceLastAccessedDetailsWithEntitiesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetServiceLastAccessedDetailsWithEntitiesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // GetServiceLastAccessedDetailsWithEntitiesRequest
 *   JobId: "STRING_VALUE", // required
 *   ServiceNamespace: "STRING_VALUE", // required
 *   MaxItems: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new GetServiceLastAccessedDetailsWithEntitiesCommand(input);
 * const response = await client.send(command);
 * // { // GetServiceLastAccessedDetailsWithEntitiesResponse
 * //   JobStatus: "IN_PROGRESS" || "COMPLETED" || "FAILED", // required
 * //   JobCreationDate: new Date("TIMESTAMP"), // required
 * //   JobCompletionDate: new Date("TIMESTAMP"), // required
 * //   EntityDetailsList: [ // entityDetailsListType // required
 * //     { // EntityDetails
 * //       EntityInfo: { // EntityInfo
 * //         Arn: "STRING_VALUE", // required
 * //         Name: "STRING_VALUE", // required
 * //         Type: "USER" || "ROLE" || "GROUP", // required
 * //         Id: "STRING_VALUE", // required
 * //         Path: "STRING_VALUE",
 * //       },
 * //       LastAuthenticated: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   IsTruncated: true || false,
 * //   Marker: "STRING_VALUE",
 * //   Error: { // ErrorDetails
 * //     Message: "STRING_VALUE", // required
 * //     Code: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetServiceLastAccessedDetailsWithEntitiesCommandInput - {@link GetServiceLastAccessedDetailsWithEntitiesCommandInput}
 * @returns {@link GetServiceLastAccessedDetailsWithEntitiesCommandOutput}
 * @see {@link GetServiceLastAccessedDetailsWithEntitiesCommandInput} for command's `input` shape.
 * @see {@link GetServiceLastAccessedDetailsWithEntitiesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @example To get sntity details from a previously-generated report
 * ```javascript
 * // The following operation returns details about the entities that attempted to access the IAM service.
 * const input = {
 *   JobId: "examplef-1305-c245-eba4-71fe298bcda7",
 *   ServiceNamespace: "iam"
 * };
 * const command = new GetServiceLastAccessedDetailsWithEntitiesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   EntityDetailsList: [
 *     {
 *       EntityInfo: {
 *         Arn: "arn:aws:iam::123456789012:user/AWSExampleUser01",
 *         Id: "AIDAEX2EXAMPLEB6IGCDC",
 *         Name: "AWSExampleUser01",
 *         Path: "/",
 *         Type: "USER"
 *       },
 *       LastAuthenticated: "2018-10-24T19:10:00Z"
 *     },
 *     {
 *       EntityInfo: {
 *         Arn: "arn:aws:iam::123456789012:role/AWSExampleRole01",
 *         Id: "AROAEAEXAMPLEIANXSIU4",
 *         Name: "AWSExampleRole01",
 *         Path: "/",
 *         Type: "ROLE"
 *       }
 *     }
 *   ],
 *   IsTruncated: false,
 *   JobCompletionDate: "2018-10-24T19:47:35.241Z",
 *   JobCreationDate: "2018-10-24T19:47:31.466Z",
 *   JobStatus: "COMPLETED"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetServiceLastAccessedDetailsWithEntitiesCommand extends $Command
  .classBuilder<
    GetServiceLastAccessedDetailsWithEntitiesCommandInput,
    GetServiceLastAccessedDetailsWithEntitiesCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "GetServiceLastAccessedDetailsWithEntities", {})
  .n("IAMClient", "GetServiceLastAccessedDetailsWithEntitiesCommand")
  .sc(GetServiceLastAccessedDetailsWithEntities)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetServiceLastAccessedDetailsWithEntitiesRequest;
      output: GetServiceLastAccessedDetailsWithEntitiesResponse;
    };
    sdk: {
      input: GetServiceLastAccessedDetailsWithEntitiesCommandInput;
      output: GetServiceLastAccessedDetailsWithEntitiesCommandOutput;
    };
  };
}
