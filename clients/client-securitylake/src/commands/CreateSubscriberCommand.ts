// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateSubscriberRequest, CreateSubscriberResponse } from "../models/models_0";
import { de_CreateSubscriberCommand, se_CreateSubscriberCommand } from "../protocols/Aws_restJson1";
import { SecurityLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityLakeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSubscriberCommand}.
 */
export interface CreateSubscriberCommandInput extends CreateSubscriberRequest {}
/**
 * @public
 *
 * The output of {@link CreateSubscriberCommand}.
 */
export interface CreateSubscriberCommandOutput extends CreateSubscriberResponse, __MetadataBearer {}

/**
 * <p>Creates a subscription permission for accounts that are already enabled in
 *          Amazon Security Lake. You can create a subscriber with access to data in the current Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityLakeClient, CreateSubscriberCommand } from "@aws-sdk/client-securitylake"; // ES Modules import
 * // const { SecurityLakeClient, CreateSubscriberCommand } = require("@aws-sdk/client-securitylake"); // CommonJS import
 * const client = new SecurityLakeClient(config);
 * const input = { // CreateSubscriberRequest
 *   subscriberIdentity: { // AwsIdentity
 *     principal: "STRING_VALUE", // required
 *     externalId: "STRING_VALUE", // required
 *   },
 *   subscriberName: "STRING_VALUE", // required
 *   subscriberDescription: "STRING_VALUE",
 *   sources: [ // LogSourceResourceList // required
 *     { // LogSourceResource Union: only one key present
 *       awsLogSource: { // AwsLogSourceResource
 *         sourceName: "ROUTE53" || "VPC_FLOW" || "SH_FINDINGS" || "CLOUD_TRAIL_MGMT" || "LAMBDA_EXECUTION" || "S3_DATA" || "EKS_AUDIT" || "WAF",
 *         sourceVersion: "STRING_VALUE",
 *       },
 *       customLogSource: { // CustomLogSourceResource
 *         sourceName: "STRING_VALUE",
 *         sourceVersion: "STRING_VALUE",
 *         provider: { // CustomLogSourceProvider
 *           roleArn: "STRING_VALUE",
 *           location: "STRING_VALUE",
 *         },
 *         attributes: { // CustomLogSourceAttributes
 *           crawlerArn: "STRING_VALUE",
 *           databaseArn: "STRING_VALUE",
 *           tableArn: "STRING_VALUE",
 *         },
 *       },
 *     },
 *   ],
 *   accessTypes: [ // AccessTypeList
 *     "LAKEFORMATION" || "S3",
 *   ],
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateSubscriberCommand(input);
 * const response = await client.send(command);
 * // { // CreateSubscriberResponse
 * //   subscriber: { // SubscriberResource
 * //     subscriberId: "STRING_VALUE", // required
 * //     subscriberArn: "STRING_VALUE", // required
 * //     subscriberIdentity: { // AwsIdentity
 * //       principal: "STRING_VALUE", // required
 * //       externalId: "STRING_VALUE", // required
 * //     },
 * //     subscriberName: "STRING_VALUE", // required
 * //     subscriberDescription: "STRING_VALUE",
 * //     sources: [ // LogSourceResourceList // required
 * //       { // LogSourceResource Union: only one key present
 * //         awsLogSource: { // AwsLogSourceResource
 * //           sourceName: "ROUTE53" || "VPC_FLOW" || "SH_FINDINGS" || "CLOUD_TRAIL_MGMT" || "LAMBDA_EXECUTION" || "S3_DATA" || "EKS_AUDIT" || "WAF",
 * //           sourceVersion: "STRING_VALUE",
 * //         },
 * //         customLogSource: { // CustomLogSourceResource
 * //           sourceName: "STRING_VALUE",
 * //           sourceVersion: "STRING_VALUE",
 * //           provider: { // CustomLogSourceProvider
 * //             roleArn: "STRING_VALUE",
 * //             location: "STRING_VALUE",
 * //           },
 * //           attributes: { // CustomLogSourceAttributes
 * //             crawlerArn: "STRING_VALUE",
 * //             databaseArn: "STRING_VALUE",
 * //             tableArn: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //     ],
 * //     accessTypes: [ // AccessTypeList
 * //       "LAKEFORMATION" || "S3",
 * //     ],
 * //     roleArn: "STRING_VALUE",
 * //     s3BucketArn: "STRING_VALUE",
 * //     subscriberEndpoint: "STRING_VALUE",
 * //     subscriberStatus: "ACTIVE" || "DEACTIVATED" || "PENDING" || "READY",
 * //     resourceShareArn: "STRING_VALUE",
 * //     resourceShareName: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateSubscriberCommandInput - {@link CreateSubscriberCommandInput}
 * @returns {@link CreateSubscriberCommandOutput}
 * @see {@link CreateSubscriberCommandInput} for command's `input` shape.
 * @see {@link CreateSubscriberCommandOutput} for command's `response` shape.
 * @see {@link SecurityLakeClientResolvedConfig | config} for SecurityLakeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. Access denied errors appear when Amazon Security Lake explicitly or implicitly denies an authorization
 *          request. An explicit denial occurs when a policy contains a Deny statement for the specific
 *          Amazon Web Services action. An implicit denial occurs when there is no applicable Deny statement and also
 *          no applicable Allow statement.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is malformed or contains an error such as an invalid parameter value or a missing required parameter.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Occurs when a conflict with a previous successful write is detected. This generally
 *          occurs when the previous write did not have time to propagate to the host serving the
 *          current request. A retry (with appropriate backoff logic) is the recommended response to
 *          this exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service exceptions are sometimes caused by transient issues. Before you start
 *          troubleshooting, perform the operation again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link SecurityLakeServiceException}
 * <p>Base exception class for all service exceptions from SecurityLake service.</p>
 *
 * @public
 */
export class CreateSubscriberCommand extends $Command
  .classBuilder<
    CreateSubscriberCommandInput,
    CreateSubscriberCommandOutput,
    SecurityLakeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SecurityLakeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SecurityLake", "CreateSubscriber", {})
  .n("SecurityLakeClient", "CreateSubscriberCommand")
  .f(void 0, void 0)
  .ser(se_CreateSubscriberCommand)
  .de(de_CreateSubscriberCommand)
  .build() {}
