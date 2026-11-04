// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DisassociateApplicationStatusCheckRequest,
  DisassociateApplicationStatusCheckResult,
} from "../models/models_5";
import { DisassociateApplicationStatusCheck$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateApplicationStatusCheckCommand}.
 */
export interface DisassociateApplicationStatusCheckCommandInput extends DisassociateApplicationStatusCheckRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateApplicationStatusCheckCommand}.
 */
export interface DisassociateApplicationStatusCheckCommandOutput extends DisassociateApplicationStatusCheckResult, __MetadataBearer {}

/**
 * Disassociates an application status check from instances or [tags](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html). After disassociation, health monitoring stops for the affected instances. The following rules apply:
 *
 * - You must specify either `TargetTagAssociations` or `InstanceIds`, but not both. Specifying both results in an `InvalidParameterCombination` error.
 * - The application status check must already exist and belong to your account.
 * - Tag keys must not be blank.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateApplicationStatusCheckCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateApplicationStatusCheckCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DisassociateApplicationStatusCheckRequest
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
 * const command = new DisassociateApplicationStatusCheckCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateApplicationStatusCheckResult
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
 * @param DisassociateApplicationStatusCheckCommandInput - {@link DisassociateApplicationStatusCheckCommandInput}
 * @returns {@link DisassociateApplicationStatusCheckCommandOutput}
 * @see {@link DisassociateApplicationStatusCheckCommandInput} for command's `input` shape.
 * @see {@link DisassociateApplicationStatusCheckCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 *
 * Base exception class for all service exceptions from EC2 service.
 *
 * @example To disassociate an application status check from tags
 * ```javascript
 * // This example disassociates an application status check from instances matching the specified tag.
 * const input = {
 *   ApplicationStatusCheckId: "asc-0123456789abcdef0",
 *   TargetTagAssociations: [
 *     {
 *       Key: "env",
 *       Value: "prod"
 *     }
 *   ]
 * };
 * const command = new DisassociateApplicationStatusCheckCommand(input);
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
export class DisassociateApplicationStatusCheckCommand extends command<DisassociateApplicationStatusCheckCommandInput, DisassociateApplicationStatusCheckCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateApplicationStatusCheck",
  DisassociateApplicationStatusCheck$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateApplicationStatusCheckRequest;
      output: DisassociateApplicationStatusCheckResult;
    };
    sdk: {
      input: DisassociateApplicationStatusCheckCommandInput;
      output: DisassociateApplicationStatusCheckCommandOutput;
    };
  };
}
