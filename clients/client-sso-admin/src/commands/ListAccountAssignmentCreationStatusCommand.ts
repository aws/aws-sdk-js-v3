// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListAccountAssignmentCreationStatusRequest,
  ListAccountAssignmentCreationStatusResponse,
} from "../models/models_0";
import {
  de_ListAccountAssignmentCreationStatusCommand,
  se_ListAccountAssignmentCreationStatusCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAccountAssignmentCreationStatusCommand}.
 */
export interface ListAccountAssignmentCreationStatusCommandInput extends ListAccountAssignmentCreationStatusRequest {}
/**
 * @public
 *
 * The output of {@link ListAccountAssignmentCreationStatusCommand}.
 */
export interface ListAccountAssignmentCreationStatusCommandOutput
  extends ListAccountAssignmentCreationStatusResponse,
    __MetadataBearer {}

/**
 * <p>Lists the status of the Amazon Web Services account assignment creation requests for a specified IAM Identity Center instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListAccountAssignmentCreationStatusCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListAccountAssignmentCreationStatusCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const input = { // ListAccountAssignmentCreationStatusRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filter: { // OperationStatusFilter
 *     Status: "IN_PROGRESS" || "FAILED" || "SUCCEEDED",
 *   },
 * };
 * const command = new ListAccountAssignmentCreationStatusCommand(input);
 * const response = await client.send(command);
 * // { // ListAccountAssignmentCreationStatusResponse
 * //   AccountAssignmentsCreationStatus: [ // AccountAssignmentOperationStatusList
 * //     { // AccountAssignmentOperationStatusMetadata
 * //       Status: "IN_PROGRESS" || "FAILED" || "SUCCEEDED",
 * //       RequestId: "STRING_VALUE",
 * //       CreatedDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAccountAssignmentCreationStatusCommandInput - {@link ListAccountAssignmentCreationStatusCommandInput}
 * @returns {@link ListAccountAssignmentCreationStatusCommandOutput}
 * @see {@link ListAccountAssignmentCreationStatusCommandInput} for command's `input` shape.
 * @see {@link ListAccountAssignmentCreationStatusCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure with an internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a requested resource is not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates that the principal has crossed the throttling limits of the API operations.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed because it contains a syntax error.</p>
 *
 * @throws {@link SSOAdminServiceException}
 * <p>Base exception class for all service exceptions from SSOAdmin service.</p>
 *
 *
 * @public
 */
export class ListAccountAssignmentCreationStatusCommand extends $Command
  .classBuilder<
    ListAccountAssignmentCreationStatusCommandInput,
    ListAccountAssignmentCreationStatusCommandOutput,
    SSOAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSOAdminClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SWBExternalService", "ListAccountAssignmentCreationStatus", {})
  .n("SSOAdminClient", "ListAccountAssignmentCreationStatusCommand")
  .f(void 0, void 0)
  .ser(se_ListAccountAssignmentCreationStatusCommand)
  .de(de_ListAccountAssignmentCreationStatusCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAccountAssignmentCreationStatusRequest;
      output: ListAccountAssignmentCreationStatusResponse;
    };
    sdk: {
      input: ListAccountAssignmentCreationStatusCommandInput;
      output: ListAccountAssignmentCreationStatusCommandOutput;
    };
  };
}
