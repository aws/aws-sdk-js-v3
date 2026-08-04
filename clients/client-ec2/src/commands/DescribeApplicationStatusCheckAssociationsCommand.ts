// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeApplicationStatusCheckAssociationsRequest,
  DescribeApplicationStatusCheckAssociationsResult,
} from "../models/models_3";
import { DescribeApplicationStatusCheckAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeApplicationStatusCheckAssociationsCommand}.
 */
export interface DescribeApplicationStatusCheckAssociationsCommandInput extends DescribeApplicationStatusCheckAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeApplicationStatusCheckAssociationsCommand}.
 */
export interface DescribeApplicationStatusCheckAssociationsCommandOutput extends DescribeApplicationStatusCheckAssociationsResult, __MetadataBearer {}

/**
 * <p>Describes the associations for one or more application status checks. For more
 *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring-application-status-checks.html">Application
 *                 status checks</a>. To avoid timeouts and retrieve complete results, use the
 *             pagination parameters.</p>
 *          <note>
 *             <p>The order of the elements in the response, including those within nested
 *                 structures, might vary.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeApplicationStatusCheckAssociationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeApplicationStatusCheckAssociationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeApplicationStatusCheckAssociationsRequest
 *   ApplicationStatusCheckIds: [ // ApplicationStatusCheckIdList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new DescribeApplicationStatusCheckAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeApplicationStatusCheckAssociationsResult
 * //   Associations: [ // ApplicationStatusCheckAssociationSet
 * //     { // ApplicationStatusCheckAssociationObject
 * //       ApplicationStatusCheckId: "STRING_VALUE",
 * //       AssociationType: "tag" || "instance-id",
 * //       Key: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   Tags: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeApplicationStatusCheckAssociationsCommandInput - {@link DescribeApplicationStatusCheckAssociationsCommandInput}
 * @returns {@link DescribeApplicationStatusCheckAssociationsCommandOutput}
 * @see {@link DescribeApplicationStatusCheckAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicationStatusCheckAssociationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeApplicationStatusCheckAssociationsCommand extends command<DescribeApplicationStatusCheckAssociationsCommandInput, DescribeApplicationStatusCheckAssociationsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeApplicationStatusCheckAssociations",
  DescribeApplicationStatusCheckAssociations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeApplicationStatusCheckAssociationsRequest;
      output: DescribeApplicationStatusCheckAssociationsResult;
    };
    sdk: {
      input: DescribeApplicationStatusCheckAssociationsCommandInput;
      output: DescribeApplicationStatusCheckAssociationsCommandOutput;
    };
  };
}
