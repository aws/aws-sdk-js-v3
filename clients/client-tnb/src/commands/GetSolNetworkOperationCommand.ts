// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetSolNetworkOperationInput,
  GetSolNetworkOperationOutput,
  GetSolNetworkOperationOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_GetSolNetworkOperationCommand, se_GetSolNetworkOperationCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSolNetworkOperationCommand}.
 */
export interface GetSolNetworkOperationCommandInput extends GetSolNetworkOperationInput {}
/**
 * @public
 *
 * The output of {@link GetSolNetworkOperationCommand}.
 */
export interface GetSolNetworkOperationCommandOutput extends GetSolNetworkOperationOutput, __MetadataBearer {}

/**
 * <p>Gets the details of a network operation, including the tasks involved in the network
 *          operation and the status of the tasks.</p>
 *          <p>A network operation is any operation that is done to your network, such as network instance instantiation or termination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, GetSolNetworkOperationCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, GetSolNetworkOperationCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * // import type { TnbClientConfig } from "@aws-sdk/client-tnb";
 * const config = {}; // type is TnbClientConfig
 * const client = new TnbClient(config);
 * const input = { // GetSolNetworkOperationInput
 *   nsLcmOpOccId: "STRING_VALUE", // required
 * };
 * const command = new GetSolNetworkOperationCommand(input);
 * const response = await client.send(command);
 * // { // GetSolNetworkOperationOutput
 * //   id: "STRING_VALUE",
 * //   arn: "STRING_VALUE", // required
 * //   operationState: "PROCESSING" || "COMPLETED" || "FAILED" || "CANCELLING" || "CANCELLED",
 * //   nsInstanceId: "STRING_VALUE",
 * //   lcmOperationType: "INSTANTIATE" || "UPDATE" || "TERMINATE",
 * //   updateType: "MODIFY_VNF_INFORMATION" || "UPDATE_NS",
 * //   error: { // ProblemDetails
 * //     detail: "STRING_VALUE", // required
 * //     title: "STRING_VALUE",
 * //   },
 * //   metadata: { // GetSolNetworkOperationMetadata
 * //     updateNsMetadata: { // UpdateNsMetadata
 * //       nsdInfoId: "STRING_VALUE", // required
 * //       additionalParamsForNs: "DOCUMENT_VALUE",
 * //     },
 * //     modifyVnfInfoMetadata: { // ModifyVnfInfoMetadata
 * //       vnfInstanceId: "STRING_VALUE", // required
 * //       vnfConfigurableProperties: "DOCUMENT_VALUE", // required
 * //     },
 * //     instantiateMetadata: { // InstantiateMetadata
 * //       nsdInfoId: "STRING_VALUE", // required
 * //       additionalParamsForNs: "DOCUMENT_VALUE",
 * //     },
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     lastModified: new Date("TIMESTAMP"), // required
 * //   },
 * //   tasks: [ // GetSolNetworkOperationTasksList
 * //     { // GetSolNetworkOperationTaskDetails
 * //       taskName: "STRING_VALUE",
 * //       taskContext: { // StringMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       taskErrorDetails: { // ErrorInfo
 * //         cause: "STRING_VALUE",
 * //         details: "STRING_VALUE",
 * //       },
 * //       taskStatus: "SCHEDULED" || "STARTED" || "IN_PROGRESS" || "COMPLETED" || "ERROR" || "SKIPPED" || "CANCELLED",
 * //       taskStartTime: new Date("TIMESTAMP"),
 * //       taskEndTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSolNetworkOperationCommandInput - {@link GetSolNetworkOperationCommandInput}
 * @returns {@link GetSolNetworkOperationCommandOutput}
 * @see {@link GetSolNetworkOperationCommandInput} for command's `input` shape.
 * @see {@link GetSolNetworkOperationCommandOutput} for command's `response` shape.
 * @see {@link TnbClientResolvedConfig | config} for TnbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Insufficient permissions to make request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred. Problem on the server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Exception caused by throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Unable to process the request because the client provided input failed to satisfy
 *          request constraints.</p>
 *
 * @throws {@link TnbServiceException}
 * <p>Base exception class for all service exceptions from Tnb service.</p>
 *
 *
 * @example Get Sol Network Instantiate operation
 * ```javascript
 * //
 * const input = {
 *   nsLcmOpOccId: "no-0d5b823eb5c2a9241"
 * };
 * const command = new GetSolNetworkOperationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   arn: "arn:aws:tnb:us-west-2:123456789000:network-operation/no-0d5b823eb5c2a9241",
 *   id: "no-0d5b823eb5c2a9241",
 *   lcmOperationType: "INSTANTIATE",
 *   metadata: {
 *     createdAt: "2022-06-10T19:48:34Z",
 *     instantiateMetadata: {
 *       additionalParamsForNs: {
 *         availability_zone: "us-west-2a",
 *         cidr_block: "10.0.0.0/16"
 *       },
 *       nsdInfoId: "np-0d0f3e2eae4fc1ac1"
 *     },
 *     lastModified: "2022-06-10T21:48:33Z"
 *   },
 *   nsInstanceId: "ni-0d5b823eb5c2a9241",
 *   operationState: "COMPLETED",
 *   tasks: [
 *     {
 *       taskContext: {
 *         cloudWatchLogsARN: "arn:aws:logs:us-east-1:123456789000:log-group:/aws/codebuild/TestProject:log-stream:a4dc6b0b-2ea3-48c5-bb30-636c4f376b81"
 *       },
 *       taskEndTime: "2022-06-10T21:48:33Z",
 *       taskName: "HookExecution",
 *       taskStartTime: "2022-06-10T19:48:34Z",
 *       taskStatus: "IN_PROGRESS"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example Get Sol Network Update operation
 * ```javascript
 * //
 * const input = {
 *   nsLcmOpOccId: "no-0d5b823eb5c2a9241"
 * };
 * const command = new GetSolNetworkOperationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   arn: "arn:aws:tnb:us-west-2:123456789000:network-operation/no-0d5b823eb5c2a9241",
 *   id: "no-0d5b823eb5c2a9241",
 *   lcmOperationType: "UPDATE",
 *   metadata: {
 *     createdAt: "2022-06-10T19:48:34Z",
 *     lastModified: "2022-06-10T21:48:33Z",
 *     updateNsMetadata: {
 *       additionalParamsForNs: {
 *         availability_zone: "us-west-2a",
 *         cidr_block: "10.0.0.0/16"
 *       },
 *       nsdInfoId: "np-0d0f3e2eae4fc1ac1"
 *     }
 *   },
 *   nsInstanceId: "ni-0d5b823eb5c2a9241",
 *   operationState: "COMPLETED",
 *   tasks: [
 *     {
 *       taskContext: {
 *         cloudWatchLogsARN: "arn:aws:logs:us-east-1:123456789000:log-group:/aws/codebuild/TestProject:log-stream:a4dc6b0b-2ea3-48c5-bb30-636c4f376b81"
 *       },
 *       taskEndTime: "2022-06-10T21:48:33Z",
 *       taskName: "HookExecution",
 *       taskStartTime: "2022-06-10T19:48:34Z",
 *       taskStatus: "IN_PROGRESS"
 *     }
 *   ],
 *   updateType: "UPDATE_NS"
 * }
 * *\/
 * ```
 *
 * @example Get Sol Network Update operation
 * ```javascript
 * //
 * const input = {
 *   nsLcmOpOccId: "no-0d5b823eb5c2a9241"
 * };
 * const command = new GetSolNetworkOperationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   arn: "arn:aws:tnb:us-west-2:123456789000:network-operation/no-0d5b823eb5c2a9241",
 *   id: "no-0d5b823eb5c2a9241",
 *   lcmOperationType: "UPDATE",
 *   metadata: {
 *     createdAt: "2022-06-10T19:48:34Z",
 *     lastModified: "2022-06-10T21:48:33Z",
 *     modifyVnfInfoMetadata: {
 *       vnfConfigurableProperties: {
 *         pcf.pods: "10",
 *         pcf.port: "8080"
 *       },
 *       vnfInstanceId: "fi-0d5b823eb5c2a9241"
 *     }
 *   },
 *   nsInstanceId: "ni-0d5b823eb5c2a9241",
 *   operationState: "COMPLETED",
 *   tasks: [
 *     {
 *       taskContext: {
 *         cloudWatchLogsARN: "arn:aws:logs:us-east-1:123456789000:log-group:/aws/codebuild/TestProject:log-stream:a4dc6b0b-2ea3-48c5-bb30-636c4f376b81"
 *       },
 *       taskEndTime: "2022-06-10T21:48:33Z",
 *       taskName: "HookExecution",
 *       taskStartTime: "2022-06-10T19:48:34Z",
 *       taskStatus: "IN_PROGRESS"
 *     }
 *   ],
 *   updateType: "MODIFY_VNF_INFORMATION"
 * }
 * *\/
 * ```
 *
 * @example Get Sol Network Instantiate operation which has a failure
 * ```javascript
 * //
 * const input = {
 *   nsLcmOpOccId: "no-0d5b823eb5c2a9241"
 * };
 * const command = new GetSolNetworkOperationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   arn: "arn:aws:tnb:us-west-2:123456789000:network-operation/no-0d5b823eb5c2a9241",
 *   error: {
 *     detail: "The service encountered an error. Sorry for the inconvenience.",
 *     title: "InternalServerException"
 *   },
 *   id: "no-0d5b823eb5c2a9241",
 *   lcmOperationType: "INSTANTIATE",
 *   metadata: {
 *     createdAt: "2022-06-10T19:48:33Z",
 *     lastModified: "2022-06-10T19:48:33Z"
 *   },
 *   nsInstanceId: "ni-0d5b823eb5c2a9241",
 *   operationState: "FAILED",
 *   tasks: [
 *     {
 *       taskContext: {
 *         cloudWatchLogsARN: "arn:aws:logs:us-east-1:123456789000:log-group:/aws/codebuild/TestProject:log-stream:a4dc6b0b-2ea3-48c5-bb30-636c4f376b81"
 *       },
 *       taskEndTime: "2022-06-10T21:48:33Z",
 *       taskName: "HookExecution",
 *       taskStartTime: "2022-06-10T19:48:34Z",
 *       taskStatus: "IN_PROGRESS"
 *     },
 *     {
 *       taskEndTime: "2022-06-10T21:48:33Z",
 *       taskErrorDetails: {
 *         cause: "InternalServerException",
 *         details: "The service encountered an error. Sorry for the inconvenience."
 *       },
 *       taskName: "HookExecution",
 *       taskStartTime: "2022-06-10T19:48:34Z",
 *       taskStatus: "ERROR"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetSolNetworkOperationCommand extends $Command
  .classBuilder<
    GetSolNetworkOperationCommandInput,
    GetSolNetworkOperationCommandOutput,
    TnbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TnbClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TNB", "GetSolNetworkOperation", {})
  .n("TnbClient", "GetSolNetworkOperationCommand")
  .f(void 0, GetSolNetworkOperationOutputFilterSensitiveLog)
  .ser(se_GetSolNetworkOperationCommand)
  .de(de_GetSolNetworkOperationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSolNetworkOperationInput;
      output: GetSolNetworkOperationOutput;
    };
    sdk: {
      input: GetSolNetworkOperationCommandInput;
      output: GetSolNetworkOperationCommandOutput;
    };
  };
}
