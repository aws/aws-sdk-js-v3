// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeVirtualRouterInput, DescribeVirtualRouterOutput } from "../models/models_0";
import { DescribeVirtualRouter$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeVirtualRouterCommand}.
 */
export interface DescribeVirtualRouterCommandInput extends DescribeVirtualRouterInput {}
/**
 * @public
 *
 * The output of {@link DescribeVirtualRouterCommand}.
 */
export interface DescribeVirtualRouterCommandOutput extends DescribeVirtualRouterOutput, __MetadataBearer {}

/**
 * Describes an existing virtual router.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, DescribeVirtualRouterCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, DescribeVirtualRouterCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * // import type { AppMeshClientConfig } from "@aws-sdk/client-app-mesh";
 * const config = {}; // type is AppMeshClientConfig
 * const client = new AppMeshClient(config);
 * const input = { // DescribeVirtualRouterInput
 *   virtualRouterName: "STRING_VALUE", // required
 *   meshName: "STRING_VALUE", // required
 *   meshOwner: "STRING_VALUE",
 * };
 * const command = new DescribeVirtualRouterCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVirtualRouterOutput
 * //   virtualRouter: { // VirtualRouterData
 * //     meshName: "STRING_VALUE", // required
 * //     virtualRouterName: "STRING_VALUE", // required
 * //     spec: { // VirtualRouterSpec
 * //       listeners: [ // VirtualRouterListeners
 * //         { // VirtualRouterListener
 * //           portMapping: { // PortMapping
 * //             port: Number("int"), // required
 * //             protocol: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       ],
 * //     },
 * //     metadata: { // ResourceMetadata
 * //       arn: "STRING_VALUE", // required
 * //       version: Number("long"), // required
 * //       uid: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       lastUpdatedAt: new Date("TIMESTAMP"), // required
 * //       meshOwner: "STRING_VALUE", // required
 * //       resourceOwner: "STRING_VALUE", // required
 * //     },
 * //     status: { // VirtualRouterStatus
 * //       status: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeVirtualRouterCommandInput - {@link DescribeVirtualRouterCommandInput}
 * @returns {@link DescribeVirtualRouterCommandOutput}
 * @see {@link DescribeVirtualRouterCommandInput} for command's `input` shape.
 * @see {@link DescribeVirtualRouterCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for AppMeshClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The request syntax was malformed. Check your request syntax and try again.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * You don't have permissions to perform this action.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The specified resource doesn't exist. Check your request syntax and try again.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The request has failed due to a temporary failure of the service.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The maximum request rate permitted by the App Mesh APIs has been exceeded for your account. For best results, use an increasing or variable sleep interval between requests.
 *
 * @throws {@link AppMeshServiceException}
 *
 * Base exception class for all service exceptions from AppMesh service.
 *
 * @public
 */
export class DescribeVirtualRouterCommand extends command<DescribeVirtualRouterCommandInput, DescribeVirtualRouterCommandOutput>(
  _ep0,
  _mw0,
  "DescribeVirtualRouter",
  DescribeVirtualRouter$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeVirtualRouterInput;
      output: DescribeVirtualRouterOutput;
    };
    sdk: {
      input: DescribeVirtualRouterCommandInput;
      output: DescribeVirtualRouterCommandOutput;
    };
  };
}
