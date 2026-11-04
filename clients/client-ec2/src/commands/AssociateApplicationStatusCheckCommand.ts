// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateApplicationStatusCheckRequest, AssociateApplicationStatusCheckResult } from "../models/models_0";
import { AssociateApplicationStatusCheck$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateApplicationStatusCheckCommand}.
 */
export interface AssociateApplicationStatusCheckCommandInput extends AssociateApplicationStatusCheckRequest {}
/**
 * @public
 *
 * The output of {@link AssociateApplicationStatusCheckCommand}.
 */
export interface AssociateApplicationStatusCheckCommandOutput extends AssociateApplicationStatusCheckResult, __MetadataBearer {}

/**
 * Associates an application status check with instances or [tags](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html). Once you create an association, health monitoring automatically begins for the specified instances or for instances that match the specified tags. The following rules apply:
 *
 * - You must specify either `TargetTagAssociations` or `InstanceIds`, but not both. Specifying both results in an `InvalidParameterCombination` error.
 * - You must own the application status check. The check must already exist in your account.
 * - You must not leave tag keys blank.
 * - You can create a maximum of 50 tag associations for each application status check.
 * - You can use `DisassociateApplicationStatusCheck` to remove associations.
 * - You can associate [tags](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html) so that the application status check automatically monitors all current and future instances that have the specified tags.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateApplicationStatusCheckCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateApplicationStatusCheckCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // AssociateApplicationStatusCheckRequest
 *   ApplicationStatusCheckId: "STRING_VALUE", // required
 *   TargetTagAssociations: [ // CustomKeyValuePairRequestSet
 *     { // CustomTagKeyValueRequestPair
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   InstanceIds: [ // InstanceIdList
 *     "STRING_VALUE",
 *   ],
 *   ClientToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new AssociateApplicationStatusCheckCommand(input);
 * const response = await client.send(command);
 * // { // AssociateApplicationStatusCheckResult
 * //   SuccessfulResults: [ // SuccessfulAssociationResponseSet
 * //     { // SuccessfulAssociationResponseObject
 * //       ApplicationStatusCheckId: "STRING_VALUE",
 * //       AssociationType: "STRING_VALUE",
 * //       AssociationValue: "STRING_VALUE",
 * //     },
 * //   ],
 * //   UnsuccessfulResults: [ // UnsuccessfulAssociationResponseSet
 * //     { // UnsuccessfulAssociationResponseObject
 * //       ApplicationStatusCheckId: "STRING_VALUE",
 * //       AssociationType: "STRING_VALUE",
 * //       AssociationValue: "STRING_VALUE",
 * //       Reason: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AssociateApplicationStatusCheckCommandInput - {@link AssociateApplicationStatusCheckCommandInput}
 * @returns {@link AssociateApplicationStatusCheckCommandOutput}
 * @see {@link AssociateApplicationStatusCheckCommandInput} for command's `input` shape.
 * @see {@link AssociateApplicationStatusCheckCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 *
 * Base exception class for all service exceptions from EC2 service.
 *
 * @example To associate an application status check with tags
 * ```javascript
 * // This example associates an application status check with instances matching the specified tag.
 * const input = {
 *   ApplicationStatusCheckId: "asc-0123456789abcdef0",
 *   TargetTagAssociations: [
 *     {
 *       Key: "env",
 *       Value: "prod"
 *     }
 *   ]
 * };
 * const command = new AssociateApplicationStatusCheckCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   SuccessfulResults: [
 *     {
 *       ApplicationStatusCheckId: "asc-0123456789abcdef0",
 *       AssociationType: "EC2TAG",
 *       AssociationValue: "env=prod"
 *     }
 *   ],
 *   UnsuccessfulResults:   []
 * }
 * *\/
 * ```
 *
 * @public
 */
export class AssociateApplicationStatusCheckCommand extends command<AssociateApplicationStatusCheckCommandInput, AssociateApplicationStatusCheckCommandOutput>(
  _ep0,
  _mw0,
  "AssociateApplicationStatusCheck",
  AssociateApplicationStatusCheck$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateApplicationStatusCheckRequest;
      output: AssociateApplicationStatusCheckResult;
    };
    sdk: {
      input: AssociateApplicationStatusCheckCommandInput;
      output: AssociateApplicationStatusCheckCommandOutput;
    };
  };
}
