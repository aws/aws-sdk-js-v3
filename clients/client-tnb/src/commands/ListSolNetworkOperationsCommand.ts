// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListSolNetworkOperationsInput, ListSolNetworkOperationsOutput } from "../models/models_0";
import { ListSolNetworkOperations$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSolNetworkOperationsCommand}.
 */
export interface ListSolNetworkOperationsCommandInput extends ListSolNetworkOperationsInput {}
/**
 * @public
 *
 * The output of {@link ListSolNetworkOperationsCommand}.
 */
export interface ListSolNetworkOperationsCommandOutput extends ListSolNetworkOperationsOutput, __MetadataBearer {}

/**
 * <p>Lists details for a network operation, including when the operation started and the
 *          status of the operation.</p>
 *          <p>A network operation is any operation that is done to your network, such as network instance instantiation or termination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, ListSolNetworkOperationsCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, ListSolNetworkOperationsCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * // import type { TnbClientConfig } from "@aws-sdk/client-tnb";
 * const config = {}; // type is TnbClientConfig
 * const client = new TnbClient(config);
 * const input = { // ListSolNetworkOperationsInput
 *   nsInstanceId: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSolNetworkOperationsCommand(input);
 * const response = await client.send(command);
 * // { // ListSolNetworkOperationsOutput
 * //   nextToken: "STRING_VALUE",
 * //   networkOperations: [ // ListSolNetworkOperationsResources
 * //     { // ListSolNetworkOperationsInfo
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       operationState: "PROCESSING" || "COMPLETED" || "FAILED" || "CANCELLING" || "CANCELLED", // required
 * //       nsInstanceId: "STRING_VALUE", // required
 * //       lcmOperationType: "INSTANTIATE" || "UPDATE" || "TERMINATE", // required
 * //       updateType: "MODIFY_VNF_INFORMATION" || "UPDATE_NS",
 * //       error: { // ProblemDetails
 * //         detail: "STRING_VALUE", // required
 * //         title: "STRING_VALUE",
 * //       },
 * //       metadata: { // ListSolNetworkOperationsMetadata
 * //         nsdInfoId: "STRING_VALUE",
 * //         vnfInstanceId: "STRING_VALUE",
 * //         createdAt: new Date("TIMESTAMP"), // required
 * //         lastModified: new Date("TIMESTAMP"), // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSolNetworkOperationsCommandInput - {@link ListSolNetworkOperationsCommandInput}
 * @returns {@link ListSolNetworkOperationsCommandOutput}
 * @see {@link ListSolNetworkOperationsCommandInput} for command's `input` shape.
 * @see {@link ListSolNetworkOperationsCommandOutput} for command's `response` shape.
 * @see {@link TnbClientResolvedConfig | config} for TnbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Insufficient permissions to make request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred. Problem on the server.</p>
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
 * @example List Sol Network Instantiate operations
 * ```javascript
 * //
 * const input = { /* empty *\/ };
 * const command = new ListSolNetworkOperationsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   networkOperations: [
 *     {
 *       arn: "arn:aws:tnb:us-west-2:123456789000:network-operation/no-0d5b823eb5c2a9241",
 *       id: "no-0d5b823eb5c2a9241",
 *       lcmOperationType: "INSTANTIATE",
 *       metadata: {
 *         createdAt: "2022-06-10T19:48:34Z",
 *         lastModified: "2022-06-10T21:48:33Z",
 *         nsdInfoId: "np-0d0f3e2eae4fc1ac1"
 *       },
 *       nsInstanceId: "ni-0d5b823eb5c2a9241",
 *       operationState: "COMPLETED"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example List Sol Network Instantiate operations with nextToken and maxResults
 * ```javascript
 * //
 * const input = {
 *   maxResults: 25,
 *   nextToken: ""
 * };
 * const command = new ListSolNetworkOperationsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   networkOperations: [
 *     {
 *       arn: "arn:aws:tnb:us-west-2:123456789000:network-operation/no-0d5b823eb5c2a9241",
 *       error: {
 *         detail: "An error occurred (InsufficientInstanceCapacity) when calling the RunInstances operation (reached max retries: 4). We currently do not have sufficient capacity in the Availability Zone you requested",
 *         title: "InsufficientInstanceCapacity"
 *       },
 *       id: "no-0d5b823eb5c2a9241",
 *       lcmOperationType: "INSTANTIATE",
 *       metadata: {
 *         createdAt: "2022-06-10T19:48:33Z",
 *         lastModified: "2022-06-10T19:48:33Z",
 *         nsdInfoId: "np-0d0f3e2eae4fc1ac1"
 *       },
 *       nsInstanceId: "ni-0d5b823eb5c2a9241",
 *       operationState: "COMPLETED"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example List Sol Network Update operations
 * ```javascript
 * //
 * const input = {
 *   nsInstanceId: "ni-0d5b823eb5c2a9241"
 * };
 * const command = new ListSolNetworkOperationsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   networkOperations: [
 *     {
 *       arn: "arn:aws:tnb:us-west-2:123456789000:network-operation/no-0d5b823eb5c2a9241",
 *       id: "no-0d5b823eb5c2a9241",
 *       lcmOperationType: "UPDATE",
 *       metadata: {
 *         createdAt: "2022-06-10T19:48:34Z",
 *         lastModified: "2022-06-10T21:48:33Z",
 *         vnfInstanceId: "fi-0d5b823eb5c2a9241"
 *       },
 *       nsInstanceId: "ni-0d5b823eb5c2a9241",
 *       operationState: "COMPLETED",
 *       updateType: "MODIFY_VNF_INFORMATION"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example List Sol Network Update operations
 * ```javascript
 * //
 * const input = {
 *   nsInstanceId: "ni-0d5b823eb5c2a9241"
 * };
 * const command = new ListSolNetworkOperationsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   networkOperations: [
 *     {
 *       arn: "arn:aws:tnb:us-west-2:123456789000:network-operation/no-0d5b823eb5c2a9241",
 *       id: "no-0d5b823eb5c2a9241",
 *       lcmOperationType: "UPDATE",
 *       metadata: {
 *         createdAt: "2022-06-10T19:48:34Z",
 *         lastModified: "2022-06-10T21:48:33Z",
 *         nsdInfoId: "np-0d0f3e2eae4fc1ac1"
 *       },
 *       nsInstanceId: "ni-0d5b823eb5c2a9241",
 *       operationState: "COMPLETED",
 *       updateType: "UPDATE_NS"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListSolNetworkOperationsCommand extends $Command
  .classBuilder<
    ListSolNetworkOperationsCommandInput,
    ListSolNetworkOperationsCommandOutput,
    TnbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TnbClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TNB", "ListSolNetworkOperations", {})
  .n("TnbClient", "ListSolNetworkOperationsCommand")
  .sc(ListSolNetworkOperations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSolNetworkOperationsInput;
      output: ListSolNetworkOperationsOutput;
    };
    sdk: {
      input: ListSolNetworkOperationsCommandInput;
      output: ListSolNetworkOperationsCommandOutput;
    };
  };
}
