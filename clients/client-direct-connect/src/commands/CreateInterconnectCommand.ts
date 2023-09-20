// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { CreateInterconnectRequest, Interconnect } from "../models/models_0";
import { de_CreateInterconnectCommand, se_CreateInterconnectCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateInterconnectCommand}.
 */
export interface CreateInterconnectCommandInput extends CreateInterconnectRequest {}
/**
 * @public
 *
 * The output of {@link CreateInterconnectCommand}.
 */
export interface CreateInterconnectCommandOutput extends Interconnect, __MetadataBearer {}

/**
 * @public
 * <p>Creates an interconnect between an Direct Connect Partner's network and a specific Direct Connect location.</p>
 *          <p>An interconnect is a connection that is capable of hosting other connections. The
 *       Direct Connect Partner can use an interconnect to provide Direct Connect hosted
 *       connections to customers through their own network services. Like a standard connection, an
 *       interconnect links the partner's network to an Direct Connect location over a standard Ethernet
 *       fiber-optic cable. One end is connected to the partner's router, the other to an Direct Connect
 *       router.</p>
 *          <p>You can automatically add the new interconnect to a link aggregation group (LAG) by
 *       specifying a LAG ID in the request. This ensures that the new interconnect is allocated on
 *       the same Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the
 *       endpoint, the request fails and no interconnect is created.</p>
 *          <p>For each end customer, the Direct Connect Partner provisions a connection on their interconnect by calling <a>AllocateHostedConnection</a>.
 *       The end customer can then connect to Amazon Web Services resources by creating a virtual interface on their connection, using the VLAN assigned to them by the Direct Connect Partner.</p>
 *          <note>
 *             <p>Intended for use by Direct Connect Partners only.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, CreateInterconnectCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, CreateInterconnectCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const input = { // CreateInterconnectRequest
 *   interconnectName: "STRING_VALUE", // required
 *   bandwidth: "STRING_VALUE", // required
 *   location: "STRING_VALUE", // required
 *   lagId: "STRING_VALUE",
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE",
 *     },
 *   ],
 *   providerName: "STRING_VALUE",
 * };
 * const command = new CreateInterconnectCommand(input);
 * const response = await client.send(command);
 * // { // Interconnect
 * //   interconnectId: "STRING_VALUE",
 * //   interconnectName: "STRING_VALUE",
 * //   interconnectState: "requested" || "pending" || "available" || "down" || "deleting" || "deleted" || "unknown",
 * //   region: "STRING_VALUE",
 * //   location: "STRING_VALUE",
 * //   bandwidth: "STRING_VALUE",
 * //   loaIssueTime: new Date("TIMESTAMP"),
 * //   lagId: "STRING_VALUE",
 * //   awsDevice: "STRING_VALUE",
 * //   jumboFrameCapable: true || false,
 * //   awsDeviceV2: "STRING_VALUE",
 * //   awsLogicalDeviceId: "STRING_VALUE",
 * //   hasLogicalRedundancy: "unknown" || "yes" || "no",
 * //   tags: [ // TagList
 * //     { // Tag
 * //       key: "STRING_VALUE", // required
 * //       value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   providerName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateInterconnectCommandInput - {@link CreateInterconnectCommandInput}
 * @returns {@link CreateInterconnectCommandOutput}
 * @see {@link CreateInterconnectCommandInput} for command's `input` shape.
 * @see {@link CreateInterconnectCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 * @throws {@link DirectConnectClientException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link DirectConnectServerException} (server fault)
 *  <p>A server-side error occurred.</p>
 *
 * @throws {@link DuplicateTagKeysException} (client fault)
 *  <p>A tag key was specified more than once.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>You have reached the limit on the number of tags that can be assigned.</p>
 *
 * @throws {@link DirectConnectServiceException}
 * <p>Base exception class for all service exceptions from DirectConnect service.</p>
 *
 */
export class CreateInterconnectCommand extends $Command<
  CreateInterconnectCommandInput,
  CreateInterconnectCommandOutput,
  DirectConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: CreateInterconnectCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateInterconnectCommandInput, CreateInterconnectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateInterconnectCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "CreateInterconnectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "OvertureService",
        operation: "CreateInterconnect",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CreateInterconnectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateInterconnectCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateInterconnectCommandOutput> {
    return de_CreateInterconnectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
