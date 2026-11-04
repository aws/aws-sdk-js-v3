// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchGetRouterNetworkInterfaceRequest, BatchGetRouterNetworkInterfaceResponse } from "../models/models_0";
import { BatchGetRouterNetworkInterface$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchGetRouterNetworkInterfaceCommand}.
 */
export interface BatchGetRouterNetworkInterfaceCommandInput extends BatchGetRouterNetworkInterfaceRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetRouterNetworkInterfaceCommand}.
 */
export interface BatchGetRouterNetworkInterfaceCommandOutput extends BatchGetRouterNetworkInterfaceResponse, __MetadataBearer {}

/**
 * Retrieves information about multiple router network interfaces in AWS Elemental MediaConnect.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, BatchGetRouterNetworkInterfaceCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, BatchGetRouterNetworkInterfaceCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
 * const client = new MediaConnectClient(config);
 * const input = { // BatchGetRouterNetworkInterfaceRequest
 *   Arns: [ // RouterNetworkInterfaceArnList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetRouterNetworkInterfaceCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetRouterNetworkInterfaceResponse
 * //   RouterNetworkInterfaces: [ // RouterNetworkInterfaceList // required
 * //     { // RouterNetworkInterface
 * //       Name: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       Id: "STRING_VALUE", // required
 * //       State: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "ERROR" || "RECOVERING", // required
 * //       NetworkInterfaceType: "PUBLIC" || "VPC", // required
 * //       Configuration: { // RouterNetworkInterfaceConfiguration Union: only one key present
 * //         Public: { // PublicRouterNetworkInterfaceConfiguration
 * //           AllowRules: [ // NetworkInterfaceRuleList // required
 * //             { // PublicRouterNetworkInterfaceRule
 * //               Cidr: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //         Vpc: { // VpcRouterNetworkInterfaceConfiguration
 * //           SecurityGroupIds: [ // SecurityGroupIdList // required
 * //             "STRING_VALUE",
 * //           ],
 * //           SubnetId: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       AssociatedOutputCount: Number("int"), // required
 * //       AssociatedInputCount: Number("int"), // required
 * //       RegionName: "STRING_VALUE", // required
 * //       CreatedAt: new Date("TIMESTAMP"), // required
 * //       UpdatedAt: new Date("TIMESTAMP"), // required
 * //       Tags: { // __mapOfString // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   Errors: [ // BatchGetRouterNetworkInterfaceErrorList // required
 * //     { // BatchGetRouterNetworkInterfaceError
 * //       Arn: "STRING_VALUE", // required
 * //       Code: "STRING_VALUE", // required
 * //       Message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetRouterNetworkInterfaceCommandInput - {@link BatchGetRouterNetworkInterfaceCommandInput}
 * @returns {@link BatchGetRouterNetworkInterfaceCommandOutput}
 * @see {@link BatchGetRouterNetworkInterfaceCommandInput} for command's `input` shape.
 * @see {@link BatchGetRouterNetworkInterfaceCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * This exception is thrown if the request contains a semantic error. The precise meaning depends on the API, and is documented in the error message.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * The server encountered an internal error and is unable to complete the request.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is currently unavailable or busy.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link MediaConnectServiceException}
 *
 * Base exception class for all service exceptions from MediaConnect service.
 *
 * @public
 */
export class BatchGetRouterNetworkInterfaceCommand extends command<BatchGetRouterNetworkInterfaceCommandInput, BatchGetRouterNetworkInterfaceCommandOutput>(
  _ep0,
  _mw0,
  "BatchGetRouterNetworkInterface",
  BatchGetRouterNetworkInterface$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetRouterNetworkInterfaceRequest;
      output: BatchGetRouterNetworkInterfaceResponse;
    };
    sdk: {
      input: BatchGetRouterNetworkInterfaceCommandInput;
      output: BatchGetRouterNetworkInterfaceCommandOutput;
    };
  };
}
