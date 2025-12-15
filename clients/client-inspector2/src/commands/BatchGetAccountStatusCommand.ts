// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import type { BatchGetAccountStatusRequest, BatchGetAccountStatusResponse } from "../models/models_0";
import { BatchGetAccountStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetAccountStatusCommand}.
 */
export interface BatchGetAccountStatusCommandInput extends BatchGetAccountStatusRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetAccountStatusCommand}.
 */
export interface BatchGetAccountStatusCommandOutput extends BatchGetAccountStatusResponse, __MetadataBearer {}

/**
 * <p>Retrieves the Amazon Inspector status of multiple Amazon Web Services accounts within your environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, BatchGetAccountStatusCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, BatchGetAccountStatusCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // BatchGetAccountStatusRequest
 *   accountIds: [ // AccountIdSet
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetAccountStatusCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetAccountStatusResponse
 * //   accounts: [ // AccountStateList // required
 * //     { // AccountState
 * //       accountId: "STRING_VALUE", // required
 * //       state: { // State
 * //         status: "STRING_VALUE", // required
 * //         errorCode: "STRING_VALUE", // required
 * //         errorMessage: "STRING_VALUE", // required
 * //       },
 * //       resourceState: { // ResourceState
 * //         ec2: {
 * //           status: "STRING_VALUE", // required
 * //           errorCode: "STRING_VALUE", // required
 * //           errorMessage: "STRING_VALUE", // required
 * //         },
 * //         ecr: {
 * //           status: "STRING_VALUE", // required
 * //           errorCode: "STRING_VALUE", // required
 * //           errorMessage: "STRING_VALUE", // required
 * //         },
 * //         lambda: {
 * //           status: "STRING_VALUE", // required
 * //           errorCode: "STRING_VALUE", // required
 * //           errorMessage: "STRING_VALUE", // required
 * //         },
 * //         lambdaCode: {
 * //           status: "STRING_VALUE", // required
 * //           errorCode: "STRING_VALUE", // required
 * //           errorMessage: "STRING_VALUE", // required
 * //         },
 * //         codeRepository: "<State>",
 * //       },
 * //     },
 * //   ],
 * //   failedAccounts: [ // FailedAccountList
 * //     { // FailedAccount
 * //       accountId: "STRING_VALUE", // required
 * //       status: "STRING_VALUE",
 * //       resourceStatus: { // ResourceStatus
 * //         ec2: "STRING_VALUE", // required
 * //         ecr: "STRING_VALUE", // required
 * //         lambda: "STRING_VALUE",
 * //         lambdaCode: "STRING_VALUE",
 * //         codeRepository: "STRING_VALUE",
 * //       },
 * //       errorCode: "STRING_VALUE", // required
 * //       errorMessage: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetAccountStatusCommandInput - {@link BatchGetAccountStatusCommandInput}
 * @returns {@link BatchGetAccountStatusCommandOutput}
 * @see {@link BatchGetAccountStatusCommandInput} for command's `input` shape.
 * @see {@link BatchGetAccountStatusCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *          <p> For <code>Enable</code>, you receive this error if you attempt to use a feature in an
 *          unsupported Amazon Web Services Region. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access an invalid resource. Make sure the resource is specified
 *          correctly.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid
 *          inputs.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 *
 * @public
 */
export class BatchGetAccountStatusCommand extends $Command
  .classBuilder<
    BatchGetAccountStatusCommandInput,
    BatchGetAccountStatusCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Inspector2", "BatchGetAccountStatus", {})
  .n("Inspector2Client", "BatchGetAccountStatusCommand")
  .sc(BatchGetAccountStatus$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetAccountStatusRequest;
      output: BatchGetAccountStatusResponse;
    };
    sdk: {
      input: BatchGetAccountStatusCommandInput;
      output: BatchGetAccountStatusCommandOutput;
    };
  };
}
