// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDataSourceRequest, GetDataSourceResponse } from "../models/models_0";
import { GetDataSource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDataSourceCommand}.
 */
export interface GetDataSourceCommandInput extends GetDataSourceRequest {}
/**
 * @public
 *
 * The output of {@link GetDataSourceCommand}.
 */
export interface GetDataSourceCommandOutput extends GetDataSourceResponse, __MetadataBearer {}

/**
 * Gets information about an existing Amazon Q Business data source connector.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, GetDataSourceCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, GetDataSourceCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * // import type { QBusinessClientConfig } from "@aws-sdk/client-qbusiness";
 * const config = {}; // type is QBusinessClientConfig
 * const client = new QBusinessClient(config);
 * const input = { // GetDataSourceRequest
 *   applicationId: "STRING_VALUE", // required
 *   indexId: "STRING_VALUE", // required
 *   dataSourceId: "STRING_VALUE", // required
 * };
 * const command = new GetDataSourceCommand(input);
 * const response = await client.send(command);
 * // { // GetDataSourceResponse
 * //   applicationId: "STRING_VALUE",
 * //   indexId: "STRING_VALUE",
 * //   dataSourceId: "STRING_VALUE",
 * //   dataSourceArn: "STRING_VALUE",
 * //   displayName: "STRING_VALUE",
 * //   type: "STRING_VALUE",
 * //   configuration: "DOCUMENT_VALUE",
 * //   vpcConfiguration: { // DataSourceVpcConfiguration
 * //     subnetIds: [ // SubnetIds // required
 * //       "STRING_VALUE",
 * //     ],
 * //     securityGroupIds: [ // SecurityGroupIds // required
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   description: "STRING_VALUE",
 * //   status: "PENDING_CREATION" || "CREATING" || "ACTIVE" || "DELETING" || "FAILED" || "UPDATING",
 * //   syncSchedule: "STRING_VALUE",
 * //   roleArn: "STRING_VALUE",
 * //   error: { // ErrorDetail
 * //     errorMessage: "STRING_VALUE",
 * //     errorCode: "InternalError" || "InvalidRequest" || "ResourceInactive" || "ResourceNotFound",
 * //   },
 * //   documentEnrichmentConfiguration: { // DocumentEnrichmentConfiguration
 * //     inlineConfigurations: [ // InlineDocumentEnrichmentConfigurations
 * //       { // InlineDocumentEnrichmentConfiguration
 * //         condition: { // DocumentAttributeCondition
 * //           key: "STRING_VALUE", // required
 * //           operator: "GREATER_THAN" || "GREATER_THAN_OR_EQUALS" || "LESS_THAN" || "LESS_THAN_OR_EQUALS" || "EQUALS" || "NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS" || "EXISTS" || "NOT_EXISTS" || "BEGINS_WITH", // required
 * //           value: { // DocumentAttributeValue Union: only one key present
 * //             stringValue: "STRING_VALUE",
 * //             stringListValue: [ // DocumentAttributeStringListValue
 * //               "STRING_VALUE",
 * //             ],
 * //             longValue: Number("long"),
 * //             dateValue: new Date("TIMESTAMP"),
 * //           },
 * //         },
 * //         target: { // DocumentAttributeTarget
 * //           key: "STRING_VALUE", // required
 * //           value: {//  Union: only one key present
 * //             stringValue: "STRING_VALUE",
 * //             stringListValue: [
 * //               "STRING_VALUE",
 * //             ],
 * //             longValue: Number("long"),
 * //             dateValue: new Date("TIMESTAMP"),
 * //           },
 * //           attributeValueOperator: "DELETE",
 * //         },
 * //         documentContentOperator: "DELETE",
 * //       },
 * //     ],
 * //     preExtractionHookConfiguration: { // HookConfiguration
 * //       invocationCondition: {
 * //         key: "STRING_VALUE", // required
 * //         operator: "GREATER_THAN" || "GREATER_THAN_OR_EQUALS" || "LESS_THAN" || "LESS_THAN_OR_EQUALS" || "EQUALS" || "NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS" || "EXISTS" || "NOT_EXISTS" || "BEGINS_WITH", // required
 * //         value: {//  Union: only one key present
 * //           stringValue: "STRING_VALUE",
 * //           stringListValue: [
 * //             "STRING_VALUE",
 * //           ],
 * //           longValue: Number("long"),
 * //           dateValue: new Date("TIMESTAMP"),
 * //         },
 * //       },
 * //       lambdaArn: "STRING_VALUE",
 * //       s3BucketName: "STRING_VALUE",
 * //       roleArn: "STRING_VALUE",
 * //     },
 * //     postExtractionHookConfiguration: {
 * //       invocationCondition: {
 * //         key: "STRING_VALUE", // required
 * //         operator: "GREATER_THAN" || "GREATER_THAN_OR_EQUALS" || "LESS_THAN" || "LESS_THAN_OR_EQUALS" || "EQUALS" || "NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS" || "EXISTS" || "NOT_EXISTS" || "BEGINS_WITH", // required
 * //         value: {//  Union: only one key present
 * //           stringValue: "STRING_VALUE",
 * //           stringListValue: [
 * //             "STRING_VALUE",
 * //           ],
 * //           longValue: Number("long"),
 * //           dateValue: new Date("TIMESTAMP"),
 * //         },
 * //       },
 * //       lambdaArn: "STRING_VALUE",
 * //       s3BucketName: "STRING_VALUE",
 * //       roleArn: "STRING_VALUE",
 * //     },
 * //   },
 * //   mediaExtractionConfiguration: { // MediaExtractionConfiguration
 * //     imageExtractionConfiguration: { // ImageExtractionConfiguration
 * //       imageExtractionStatus: "ENABLED" || "DISABLED", // required
 * //     },
 * //     audioExtractionConfiguration: { // AudioExtractionConfiguration
 * //       audioExtractionStatus: "ENABLED" || "DISABLED", // required
 * //     },
 * //     videoExtractionConfiguration: { // VideoExtractionConfiguration
 * //       videoExtractionStatus: "ENABLED" || "DISABLED", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDataSourceCommandInput - {@link GetDataSourceCommandInput}
 * @returns {@link GetDataSourceCommandOutput}
 * @see {@link GetDataSourceCommandInput} for command's `input` shape.
 * @see {@link GetDataSourceCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have access to perform this action. Make sure you have the required permission policies and user accounts and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An issue occurred with the internal server used for your Amazon Q Business service. Wait some minutes and try again, or contact [Support](http://aws.amazon.com/contact-us/) for help.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The application or plugin resource you want to use doesn’t exist. Make sure you have provided the correct resource and try again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to throttling. Reduce the number of requests and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input doesn't meet the constraints set by the Amazon Q Business service. Provide the correct input and try again.
 *
 * @throws {@link QBusinessServiceException}
 *
 * Base exception class for all service exceptions from QBusiness service.
 *
 * @public
 */
export class GetDataSourceCommand extends command<GetDataSourceCommandInput, GetDataSourceCommandOutput>(
  _ep0,
  _mw0,
  "GetDataSource",
  GetDataSource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDataSourceRequest;
      output: GetDataSourceResponse;
    };
    sdk: {
      input: GetDataSourceCommandInput;
      output: GetDataSourceCommandOutput;
    };
  };
}
