// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAcceleratorRequest, CreateAcceleratorResponse } from "../models/models_0";
import { CreateAccelerator$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAcceleratorCommand}.
 */
export interface CreateAcceleratorCommandInput extends CreateAcceleratorRequest {}
/**
 * @public
 *
 * The output of {@link CreateAcceleratorCommand}.
 */
export interface CreateAcceleratorCommandOutput extends CreateAcceleratorResponse, __MetadataBearer {}

/**
 * Create an accelerator. An accelerator includes one or more listeners that process inbound connections and direct traffic to one or more endpoint groups, each of which includes endpoints, such as Network Load Balancers.
 *
 * > **Important:** Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the US West (Oregon) Region to create, update, or otherwise work with accelerators. That is, for example, specify `--region us-west-2` on Amazon Web Services CLI commands.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, CreateAcceleratorCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, CreateAcceleratorCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * // import type { GlobalAcceleratorClientConfig } from "@aws-sdk/client-global-accelerator";
 * const config = {}; // type is GlobalAcceleratorClientConfig
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // CreateAcceleratorRequest
 *   Name: "STRING_VALUE", // required
 *   IpAddressType: "IPV4" || "DUAL_STACK",
 *   IpAddresses: [ // IpAddresses
 *     "STRING_VALUE",
 *   ],
 *   Enabled: true || false,
 *   IdempotencyToken: "STRING_VALUE", // required
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateAcceleratorCommand(input);
 * const response = await client.send(command);
 * // { // CreateAcceleratorResponse
 * //   Accelerator: { // Accelerator
 * //     AcceleratorArn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     IpAddressType: "IPV4" || "DUAL_STACK",
 * //     Enabled: true || false,
 * //     IpSets: [ // IpSets
 * //       { // IpSet
 * //         IpFamily: "STRING_VALUE",
 * //         IpAddresses: [ // IpAddresses
 * //           "STRING_VALUE",
 * //         ],
 * //         IpAddressFamily: "IPv4" || "IPv6",
 * //         IpAddressDetails: [ // IpAddressDetails
 * //           { // IpAddressDetail
 * //             IpAddress: "STRING_VALUE",
 * //             NetworkZone: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     DnsName: "STRING_VALUE",
 * //     Status: "DEPLOYED" || "IN_PROGRESS",
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //     DualStackDnsName: "STRING_VALUE",
 * //     Events: [ // AcceleratorEvents
 * //       { // AcceleratorEvent
 * //         Message: "STRING_VALUE",
 * //         Timestamp: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateAcceleratorCommandInput - {@link CreateAcceleratorCommandInput}
 * @returns {@link CreateAcceleratorCommandOutput}
 * @see {@link CreateAcceleratorCommandInput} for command's `input` shape.
 * @see {@link CreateAcceleratorCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have access permission.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *
 * There was an internal error for Global Accelerator.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * An argument that you specified is invalid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * Processing your request would cause you to exceed an Global Accelerator limit.
 *
 * @throws {@link TransactionInProgressException} (client fault)
 *
 * There's already a transaction in progress. Another transaction can't be processed.
 *
 * @throws {@link GlobalAcceleratorServiceException}
 *
 * Base exception class for all service exceptions from GlobalAccelerator service.
 *
 * @public
 */
export class CreateAcceleratorCommand extends command<CreateAcceleratorCommandInput, CreateAcceleratorCommandOutput>(
  _ep0,
  _mw0,
  "CreateAccelerator",
  CreateAccelerator$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAcceleratorRequest;
      output: CreateAcceleratorResponse;
    };
    sdk: {
      input: CreateAcceleratorCommandInput;
      output: CreateAcceleratorCommandOutput;
    };
  };
}
