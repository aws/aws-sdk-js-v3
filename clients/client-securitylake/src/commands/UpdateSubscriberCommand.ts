// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateSubscriberRequest, UpdateSubscriberResponse } from "../models/models_0";
import { UpdateSubscriber } from "../schemas/schemas_0";
import { SecurityLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityLakeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSubscriberCommand}.
 */
export interface UpdateSubscriberCommandInput extends UpdateSubscriberRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSubscriberCommand}.
 */
export interface UpdateSubscriberCommandOutput extends UpdateSubscriberResponse, __MetadataBearer {}

/**
 * <p>Updates an existing subscription for the given Amazon Security Lake account ID. You can update
 *          a subscriber by changing the sources that the subscriber consumes data from.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityLakeClient, UpdateSubscriberCommand } from "@aws-sdk/client-securitylake"; // ES Modules import
 * // const { SecurityLakeClient, UpdateSubscriberCommand } = require("@aws-sdk/client-securitylake"); // CommonJS import
 * // import type { SecurityLakeClientConfig } from "@aws-sdk/client-securitylake";
 * const config = {}; // type is SecurityLakeClientConfig
 * const client = new SecurityLakeClient(config);
 * const input = { // UpdateSubscriberRequest
 *   subscriberId: "STRING_VALUE", // required
 *   subscriberIdentity: { // AwsIdentity
 *     principal: "STRING_VALUE", // required
 *     externalId: "STRING_VALUE", // required
 *   },
 *   subscriberName: "STRING_VALUE",
 *   subscriberDescription: "STRING_VALUE",
 *   sources: [ // LogSourceResourceList
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
 * };
 * const command = new UpdateSubscriberCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSubscriberResponse
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
 * @param UpdateSubscriberCommandInput - {@link UpdateSubscriberCommandInput}
 * @returns {@link UpdateSubscriberCommandOutput}
 * @see {@link UpdateSubscriberCommandInput} for command's `input` shape.
 * @see {@link UpdateSubscriberCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class UpdateSubscriberCommand extends $Command
  .classBuilder<
    UpdateSubscriberCommandInput,
    UpdateSubscriberCommandOutput,
    SecurityLakeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityLakeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityLake", "UpdateSubscriber", {})
  .n("SecurityLakeClient", "UpdateSubscriberCommand")
  .sc(UpdateSubscriber)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSubscriberRequest;
      output: UpdateSubscriberResponse;
    };
    sdk: {
      input: UpdateSubscriberCommandInput;
      output: UpdateSubscriberCommandOutput;
    };
  };
}
