// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  BatchGetStandardsControlAssociationsRequest,
  BatchGetStandardsControlAssociationsResponse,
} from "../models/models_2";
import {
  de_BatchGetStandardsControlAssociationsCommand,
  se_BatchGetStandardsControlAssociationsCommand,
} from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetStandardsControlAssociationsCommand}.
 */
export interface BatchGetStandardsControlAssociationsCommandInput extends BatchGetStandardsControlAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetStandardsControlAssociationsCommand}.
 */
export interface BatchGetStandardsControlAssociationsCommandOutput
  extends BatchGetStandardsControlAssociationsResponse,
    __MetadataBearer {}

/**
 * <p>
 *          For a batch of security controls and standards, identifies whether each control is currently enabled or disabled in a standard.
 *       </p>
 *          <p>
 *          Calls to this operation return a <code>RESOURCE_NOT_FOUND_EXCEPTION</code> error when the standard subscription for the association has a <code>NOT_READY_FOR_UPDATES</code> value for <code>StandardsControlsUpdatable</code>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, BatchGetStandardsControlAssociationsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, BatchGetStandardsControlAssociationsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // BatchGetStandardsControlAssociationsRequest
 *   StandardsControlAssociationIds: [ // StandardsControlAssociationIds // required
 *     { // StandardsControlAssociationId
 *       SecurityControlId: "STRING_VALUE", // required
 *       StandardsArn: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new BatchGetStandardsControlAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetStandardsControlAssociationsResponse
 * //   StandardsControlAssociationDetails: [ // StandardsControlAssociationDetails // required
 * //     { // StandardsControlAssociationDetail
 * //       StandardsArn: "STRING_VALUE", // required
 * //       SecurityControlId: "STRING_VALUE", // required
 * //       SecurityControlArn: "STRING_VALUE", // required
 * //       AssociationStatus: "ENABLED" || "DISABLED", // required
 * //       RelatedRequirements: [ // RelatedRequirementsList
 * //         "STRING_VALUE",
 * //       ],
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //       UpdatedReason: "STRING_VALUE",
 * //       StandardsControlTitle: "STRING_VALUE",
 * //       StandardsControlDescription: "STRING_VALUE",
 * //       StandardsControlArns: [ // StandardsControlArnList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   UnprocessedAssociations: [ // UnprocessedStandardsControlAssociations
 * //     { // UnprocessedStandardsControlAssociation
 * //       StandardsControlAssociationId: { // StandardsControlAssociationId
 * //         SecurityControlId: "STRING_VALUE", // required
 * //         StandardsArn: "STRING_VALUE", // required
 * //       },
 * //       ErrorCode: "INVALID_INPUT" || "ACCESS_DENIED" || "NOT_FOUND" || "LIMIT_EXCEEDED", // required
 * //       ErrorReason: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetStandardsControlAssociationsCommandInput - {@link BatchGetStandardsControlAssociationsCommandInput}
 * @returns {@link BatchGetStandardsControlAssociationsCommandOutput}
 * @see {@link BatchGetStandardsControlAssociationsCommandInput} for command's `input` shape.
 * @see {@link BatchGetStandardsControlAssociationsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @public
 */
export class BatchGetStandardsControlAssociationsCommand extends $Command
  .classBuilder<
    BatchGetStandardsControlAssociationsCommandInput,
    BatchGetStandardsControlAssociationsCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SecurityHubAPIService", "BatchGetStandardsControlAssociations", {})
  .n("SecurityHubClient", "BatchGetStandardsControlAssociationsCommand")
  .f(void 0, void 0)
  .ser(se_BatchGetStandardsControlAssociationsCommand)
  .de(de_BatchGetStandardsControlAssociationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetStandardsControlAssociationsRequest;
      output: BatchGetStandardsControlAssociationsResponse;
    };
    sdk: {
      input: BatchGetStandardsControlAssociationsCommandInput;
      output: BatchGetStandardsControlAssociationsCommandOutput;
    };
  };
}
