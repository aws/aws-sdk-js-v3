// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeQev2IdcApplicationsMessage, DescribeQev2IdcApplicationsResult } from "../models/models_0";
import { DescribeQev2IdcApplications$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeQev2IdcApplicationsCommand}.
 */
export interface DescribeQev2IdcApplicationsCommandInput extends DescribeQev2IdcApplicationsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeQev2IdcApplicationsCommand}.
 */
export interface DescribeQev2IdcApplicationsCommandOutput extends DescribeQev2IdcApplicationsResult, __MetadataBearer {}

/**
 * <p>Lists the Amazon Redshift Query Editor (QEV2) IAM Identity Center applications. To retrieve additional results, use the MaxRecords and Marker parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeQev2IdcApplicationsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeQev2IdcApplicationsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // DescribeQev2IdcApplicationsMessage
 *   Qev2IdcApplicationArn: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeQev2IdcApplicationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeQev2IdcApplicationsResult
 * //   Qev2IdcApplications: [ // Qev2IdcApplicationList
 * //     { // Qev2IdcApplication
 * //       IdcInstanceArn: "STRING_VALUE",
 * //       Qev2IdcApplicationName: "STRING_VALUE",
 * //       Qev2IdcApplicationArn: "STRING_VALUE",
 * //       IdcManagedApplicationArn: "STRING_VALUE",
 * //       IdcOnboardStatus: "STRING_VALUE",
 * //       IdcDisplayName: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeQev2IdcApplicationsCommandInput - {@link DescribeQev2IdcApplicationsCommandInput}
 * @returns {@link DescribeQev2IdcApplicationsCommandOutput}
 * @see {@link DescribeQev2IdcApplicationsCommandInput} for command's `input` shape.
 * @see {@link DescribeQev2IdcApplicationsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link DependentServiceAccessDeniedFault} (client fault)
 *  <p>A dependent service denied access for the integration.</p>
 *
 * @throws {@link DependentServiceUnavailableFault} (client fault)
 *  <p>Your request cannot be completed because a dependent internal service is
 *             temporarily unavailable. Wait 30 to 60 seconds and try again.</p>
 *
 * @throws {@link Qev2IdcApplicationNotExistsFault} (client fault)
 *  <p>The specified Amazon Redshift Query Editor (QEV2) IAM Identity Center application doesn't exist. Verify that the application ARN is correct and that the application exists in this Region.</p>
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *  <p>The requested operation isn't supported.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class DescribeQev2IdcApplicationsCommand extends command<DescribeQev2IdcApplicationsCommandInput, DescribeQev2IdcApplicationsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeQev2IdcApplications",
  DescribeQev2IdcApplications$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeQev2IdcApplicationsMessage;
      output: DescribeQev2IdcApplicationsResult;
    };
    sdk: {
      input: DescribeQev2IdcApplicationsCommandInput;
      output: DescribeQev2IdcApplicationsCommandOutput;
    };
  };
}
