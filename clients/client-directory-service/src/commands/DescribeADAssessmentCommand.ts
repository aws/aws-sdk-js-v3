// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  DirectoryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeADAssessmentRequest, DescribeADAssessmentResult } from "../models/models_0";
import { DescribeADAssessment } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeADAssessmentCommand}.
 */
export interface DescribeADAssessmentCommandInput extends DescribeADAssessmentRequest {}
/**
 * @public
 *
 * The output of {@link DescribeADAssessmentCommand}.
 */
export interface DescribeADAssessmentCommandOutput extends DescribeADAssessmentResult, __MetadataBearer {}

/**
 * <p>Retrieves detailed information about a directory assessment, including its current
 *             status, validation results, and configuration details. Use this operation to monitor
 *             assessment progress and review results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeADAssessmentCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DescribeADAssessmentCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // DescribeADAssessmentRequest
 *   AssessmentId: "STRING_VALUE", // required
 * };
 * const command = new DescribeADAssessmentCommand(input);
 * const response = await client.send(command);
 * // { // DescribeADAssessmentResult
 * //   Assessment: { // Assessment
 * //     AssessmentId: "STRING_VALUE",
 * //     DirectoryId: "STRING_VALUE",
 * //     DnsName: "STRING_VALUE",
 * //     StartTime: new Date("TIMESTAMP"),
 * //     LastUpdateDateTime: new Date("TIMESTAMP"),
 * //     Status: "STRING_VALUE",
 * //     StatusCode: "STRING_VALUE",
 * //     StatusReason: "STRING_VALUE",
 * //     CustomerDnsIps: [ // CustomerDnsIps
 * //       "STRING_VALUE",
 * //     ],
 * //     VpcId: "STRING_VALUE",
 * //     SubnetIds: [ // SubnetIds
 * //       "STRING_VALUE",
 * //     ],
 * //     SecurityGroupIds: [ // SecurityGroupIds
 * //       "STRING_VALUE",
 * //     ],
 * //     SelfManagedInstanceIds: [ // AssessmentInstanceIds
 * //       "STRING_VALUE",
 * //     ],
 * //     ReportType: "STRING_VALUE",
 * //     Version: "STRING_VALUE",
 * //   },
 * //   AssessmentReports: [ // AssessmentReports
 * //     { // AssessmentReport
 * //       DomainControllerIp: "STRING_VALUE",
 * //       Validations: [ // AssessmentValidations
 * //         { // AssessmentValidation
 * //           Category: "STRING_VALUE",
 * //           Name: "STRING_VALUE",
 * //           Status: "STRING_VALUE",
 * //           StatusCode: "STRING_VALUE",
 * //           StatusReason: "STRING_VALUE",
 * //           StartTime: new Date("TIMESTAMP"),
 * //           LastUpdateDateTime: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeADAssessmentCommandInput - {@link DescribeADAssessmentCommandInput}
 * @returns {@link DescribeADAssessmentCommandOutput}
 * @see {@link DescribeADAssessmentCommandInput} for command's `input` shape.
 * @see {@link DescribeADAssessmentCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *  <p>The specified entity could not be found.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The operation is not supported.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 *
 * @public
 */
export class DescribeADAssessmentCommand extends $Command
  .classBuilder<
    DescribeADAssessmentCommandInput,
    DescribeADAssessmentCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DirectoryService_20150416", "DescribeADAssessment", {})
  .n("DirectoryServiceClient", "DescribeADAssessmentCommand")
  .sc(DescribeADAssessment)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeADAssessmentRequest;
      output: DescribeADAssessmentResult;
    };
    sdk: {
      input: DescribeADAssessmentCommandInput;
      output: DescribeADAssessmentCommandOutput;
    };
  };
}
