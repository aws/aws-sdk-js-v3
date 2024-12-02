// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { BatchGetMemberAccountDetailsRequest, BatchGetMemberAccountDetailsResponse } from "../models/models_0";
import {
  de_BatchGetMemberAccountDetailsCommand,
  se_BatchGetMemberAccountDetailsCommand,
} from "../protocols/Aws_restJson1";
import { SecurityIRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityIRClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetMemberAccountDetailsCommand}.
 */
export interface BatchGetMemberAccountDetailsCommandInput extends BatchGetMemberAccountDetailsRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetMemberAccountDetailsCommand}.
 */
export interface BatchGetMemberAccountDetailsCommandOutput
  extends BatchGetMemberAccountDetailsResponse,
    __MetadataBearer {}

/**
 * <p>Grants permission to view an existing membership.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityIRClient, BatchGetMemberAccountDetailsCommand } from "@aws-sdk/client-security-ir"; // ES Modules import
 * // const { SecurityIRClient, BatchGetMemberAccountDetailsCommand } = require("@aws-sdk/client-security-ir"); // CommonJS import
 * const client = new SecurityIRClient(config);
 * const input = { // BatchGetMemberAccountDetailsRequest
 *   membershipId: "STRING_VALUE", // required
 *   accountIds: [ // AWSAccountIds // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetMemberAccountDetailsCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetMemberAccountDetailsResponse
 * //   items: [ // GetMembershipAccountDetailItems
 * //     { // GetMembershipAccountDetailItem
 * //       accountId: "STRING_VALUE",
 * //       relationshipStatus: "Associated" || "Disassociated",
 * //       relationshipType: "Organization",
 * //     },
 * //   ],
 * //   errors: [ // GetMembershipAccountDetailErrors
 * //     { // GetMembershipAccountDetailError
 * //       accountId: "STRING_VALUE", // required
 * //       error: "STRING_VALUE", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetMemberAccountDetailsCommandInput - {@link BatchGetMemberAccountDetailsCommandInput}
 * @returns {@link BatchGetMemberAccountDetailsCommandOutput}
 * @see {@link BatchGetMemberAccountDetailsCommandInput} for command's `input` shape.
 * @see {@link BatchGetMemberAccountDetailsCommandOutput} for command's `response` shape.
 * @see {@link SecurityIRClientResolvedConfig | config} for SecurityIRClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p/>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p/>
 *
 * @throws {@link InvalidTokenException} (client fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link SecurityIncidentResponseNotActiveException} (client fault)
 *  <p/>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p/>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link SecurityIRServiceException}
 * <p>Base exception class for all service exceptions from SecurityIR service.</p>
 *
 * @public
 */
export class BatchGetMemberAccountDetailsCommand extends $Command
  .classBuilder<
    BatchGetMemberAccountDetailsCommandInput,
    BatchGetMemberAccountDetailsCommandOutput,
    SecurityIRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityIRClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SecurityIncidentResponse", "BatchGetMemberAccountDetails", {})
  .n("SecurityIRClient", "BatchGetMemberAccountDetailsCommand")
  .f(void 0, void 0)
  .ser(se_BatchGetMemberAccountDetailsCommand)
  .de(de_BatchGetMemberAccountDetailsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetMemberAccountDetailsRequest;
      output: BatchGetMemberAccountDetailsResponse;
    };
    sdk: {
      input: BatchGetMemberAccountDetailsCommandInput;
      output: BatchGetMemberAccountDetailsCommandOutput;
    };
  };
}
