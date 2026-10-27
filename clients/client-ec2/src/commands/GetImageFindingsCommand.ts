// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetImageFindingsRequest, GetImageFindingsResult } from "../models/models_6";
import { GetImageFindings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetImageFindingsCommand}.
 */
export interface GetImageFindingsCommandInput extends GetImageFindingsRequest {}
/**
 * @public
 *
 * The output of {@link GetImageFindingsCommand}.
 */
export interface GetImageFindingsCommandOutput extends GetImageFindingsResult, __MetadataBearer {}

/**
 * <p>Describes the Amazon Inspector vulnerability findings for the specified AMI.</p>
 *          <p>You can get findings for AMIs that you own, AMIs that are shared with you, and public
 *       AMIs. Amazon Inspector returns findings only for AMIs that it has scanned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetImageFindingsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetImageFindingsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetImageFindingsRequest
 *   ImageId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new GetImageFindingsCommand(input);
 * const response = await client.send(command);
 * // { // GetImageFindingsResult
 * //   ImageFindings: [ // GetImageFindingsEntrySet
 * //     { // ImageFinding
 * //       FixAvailable: true || false,
 * //       Score: Number("double"),
 * //       FirstObservedAt: new Date("TIMESTAMP"),
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //       Title: "STRING_VALUE",
 * //       Paths: [ // ImageFindingPathSet
 * //         "STRING_VALUE",
 * //       ],
 * //       SeverityLabel: "informational" || "low" || "medium" || "high" || "critical",
 * //       SnapshotId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetImageFindingsCommandInput - {@link GetImageFindingsCommandInput}
 * @returns {@link GetImageFindingsCommandOutput}
 * @see {@link GetImageFindingsCommandInput} for command's `input` shape.
 * @see {@link GetImageFindingsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetImageFindingsCommand extends command<GetImageFindingsCommandInput, GetImageFindingsCommandOutput>(
  _ep0,
  _mw0,
  "GetImageFindings",
  GetImageFindings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetImageFindingsRequest;
      output: GetImageFindingsResult;
    };
    sdk: {
      input: GetImageFindingsCommandInput;
      output: GetImageFindingsCommandOutput;
    };
  };
}
