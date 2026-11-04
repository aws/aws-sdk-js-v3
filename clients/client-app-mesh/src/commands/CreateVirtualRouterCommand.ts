// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateVirtualRouterInput, CreateVirtualRouterOutput } from "../models/models_0";
import { CreateVirtualRouter$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateVirtualRouterCommand}.
 */
export interface CreateVirtualRouterCommandInput extends CreateVirtualRouterInput {}
/**
 * @public
 *
 * The output of {@link CreateVirtualRouterCommand}.
 */
export interface CreateVirtualRouterCommandOutput extends CreateVirtualRouterOutput, __MetadataBearer {}

/**
 * Creates a virtual router within a service mesh.
 *
 * Specify a `listener` for any inbound traffic that your virtual router receives. Create a virtual router for each protocol and port that you need to route. Virtual routers handle traffic for one or more virtual services within your mesh. After you create your virtual router, create and associate routes for your virtual router that direct incoming requests to different virtual nodes.
 *
 * For more information about virtual routers, see [Virtual routers](https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_routers.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, CreateVirtualRouterCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, CreateVirtualRouterCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * // import type { AppMeshClientConfig } from "@aws-sdk/client-app-mesh";
 * const config = {}; // type is AppMeshClientConfig
 * const client = new AppMeshClient(config);
 * const input = { // CreateVirtualRouterInput
 *   virtualRouterName: "STRING_VALUE", // required
 *   meshName: "STRING_VALUE", // required
 *   spec: { // VirtualRouterSpec
 *     listeners: [ // VirtualRouterListeners
 *       { // VirtualRouterListener
 *         portMapping: { // PortMapping
 *           port: Number("int"), // required
 *           protocol: "STRING_VALUE", // required
 *         },
 *       },
 *     ],
 *   },
 *   tags: [ // TagList
 *     { // TagRef
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 *   meshOwner: "STRING_VALUE",
 * };
 * const command = new CreateVirtualRouterCommand(input);
 * const response = await client.send(command);
 * // { // CreateVirtualRouterOutput
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
 * @param CreateVirtualRouterCommandInput - {@link CreateVirtualRouterCommandInput}
 * @returns {@link CreateVirtualRouterCommandOutput}
 * @see {@link CreateVirtualRouterCommandInput} for command's `input` shape.
 * @see {@link CreateVirtualRouterCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for AppMeshClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The request syntax was malformed. Check your request syntax and try again.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request contains a client token that was used for a previous update resource call with different specifications. Try the request again with a new client token.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * You don't have permissions to perform this action.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * You have exceeded a service limit for your account. For more information, see [Service Limits](https://docs.aws.amazon.com/app-mesh/latest/userguide/service-quotas.html) in the *App Mesh User Guide*.
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
export class CreateVirtualRouterCommand extends command<CreateVirtualRouterCommandInput, CreateVirtualRouterCommandOutput>(
  _ep0,
  _mw0,
  "CreateVirtualRouter",
  CreateVirtualRouter$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateVirtualRouterInput;
      output: CreateVirtualRouterOutput;
    };
    sdk: {
      input: CreateVirtualRouterCommandInput;
      output: CreateVirtualRouterCommandOutput;
    };
  };
}
