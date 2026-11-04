// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribePrincipalIdFormatRequest, DescribePrincipalIdFormatResult } from "../models/models_4";
import { DescribePrincipalIdFormat$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribePrincipalIdFormatCommand}.
 */
export interface DescribePrincipalIdFormatCommandInput extends DescribePrincipalIdFormatRequest {}
/**
 * @public
 *
 * The output of {@link DescribePrincipalIdFormatCommand}.
 */
export interface DescribePrincipalIdFormatCommandOutput extends DescribePrincipalIdFormatResult, __MetadataBearer {}

/**
 * Describes the ID format settings for the root user and all IAM roles and IAM users that have explicitly specified a longer ID (17-character ID) preference.
 *
 * By default, all IAM roles and IAM users default to the same ID settings as the root user, unless they explicitly override the settings. This request is useful for identifying those IAM users and IAM roles that have overridden the default ID settings.
 *
 * The following resource types support longer IDs: `bundle` | `conversion-task` | `customer-gateway` | `dhcp-options` | `elastic-ip-allocation` | `elastic-ip-association` | `export-task` | `flow-log` | `image` | `import-task` | `instance` | `internet-gateway` | `network-acl` | `network-acl-association` | `network-interface` | `network-interface-attachment` | `prefix-list` | `reservation` | `route-table` | `route-table-association` | `security-group` | `snapshot` | `subnet` | `subnet-cidr-block-association` | `volume` | `vpc` | `vpc-cidr-block-association` | `vpc-endpoint` | `vpc-peering-connection` | `vpn-connection` | `vpn-gateway`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribePrincipalIdFormatCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribePrincipalIdFormatCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribePrincipalIdFormatRequest
 *   DryRun: true || false,
 *   Resources: [ // ResourceList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribePrincipalIdFormatCommand(input);
 * const response = await client.send(command);
 * // { // DescribePrincipalIdFormatResult
 * //   Principals: [ // PrincipalIdFormatList
 * //     { // PrincipalIdFormat
 * //       Arn: "STRING_VALUE",
 * //       Statuses: [ // IdFormatList
 * //         { // IdFormat
 * //           Deadline: new Date("TIMESTAMP"),
 * //           Resource: "STRING_VALUE",
 * //           UseLongIds: true || false,
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribePrincipalIdFormatCommandInput - {@link DescribePrincipalIdFormatCommandInput}
 * @returns {@link DescribePrincipalIdFormatCommandOutput}
 * @see {@link DescribePrincipalIdFormatCommandInput} for command's `input` shape.
 * @see {@link DescribePrincipalIdFormatCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 *
 * Base exception class for all service exceptions from EC2 service.
 *
 * @public
 */
export class DescribePrincipalIdFormatCommand extends command<DescribePrincipalIdFormatCommandInput, DescribePrincipalIdFormatCommandOutput>(
  _ep0,
  _mw0,
  "DescribePrincipalIdFormat",
  DescribePrincipalIdFormat$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePrincipalIdFormatRequest;
      output: DescribePrincipalIdFormatResult;
    };
    sdk: {
      input: DescribePrincipalIdFormatCommandInput;
      output: DescribePrincipalIdFormatCommandOutput;
    };
  };
}
