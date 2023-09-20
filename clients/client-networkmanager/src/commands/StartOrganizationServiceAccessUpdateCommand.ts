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

import {
  StartOrganizationServiceAccessUpdateRequest,
  StartOrganizationServiceAccessUpdateResponse,
} from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import {
  de_StartOrganizationServiceAccessUpdateCommand,
  se_StartOrganizationServiceAccessUpdateCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartOrganizationServiceAccessUpdateCommand}.
 */
export interface StartOrganizationServiceAccessUpdateCommandInput extends StartOrganizationServiceAccessUpdateRequest {}
/**
 * @public
 *
 * The output of {@link StartOrganizationServiceAccessUpdateCommand}.
 */
export interface StartOrganizationServiceAccessUpdateCommandOutput
  extends StartOrganizationServiceAccessUpdateResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Enables the Network Manager service for an Amazon Web Services Organization. This can only be called by a management account within the organization. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, StartOrganizationServiceAccessUpdateCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, StartOrganizationServiceAccessUpdateCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const input = { // StartOrganizationServiceAccessUpdateRequest
 *   Action: "STRING_VALUE", // required
 * };
 * const command = new StartOrganizationServiceAccessUpdateCommand(input);
 * const response = await client.send(command);
 * // { // StartOrganizationServiceAccessUpdateResponse
 * //   OrganizationStatus: { // OrganizationStatus
 * //     OrganizationId: "STRING_VALUE",
 * //     OrganizationAwsServiceAccessStatus: "STRING_VALUE",
 * //     SLRDeploymentStatus: "STRING_VALUE",
 * //     AccountStatusList: [ // AccountStatusList
 * //       { // AccountStatus
 * //         AccountId: "STRING_VALUE",
 * //         SLRDeploymentStatus: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param StartOrganizationServiceAccessUpdateCommandInput - {@link StartOrganizationServiceAccessUpdateCommandInput}
 * @returns {@link StartOrganizationServiceAccessUpdateCommandOutput}
 * @see {@link StartOrganizationServiceAccessUpdateCommandInput} for command's `input` shape.
 * @see {@link StartOrganizationServiceAccessUpdateCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict processing the request. Updating or deleting the resource can
 *             cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal error.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>A service limit was exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints.</p>
 *
 * @throws {@link NetworkManagerServiceException}
 * <p>Base exception class for all service exceptions from NetworkManager service.</p>
 *
 */
export class StartOrganizationServiceAccessUpdateCommand extends $Command<
  StartOrganizationServiceAccessUpdateCommandInput,
  StartOrganizationServiceAccessUpdateCommandOutput,
  NetworkManagerClientResolvedConfig
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
  constructor(readonly input: StartOrganizationServiceAccessUpdateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartOrganizationServiceAccessUpdateCommandInput, StartOrganizationServiceAccessUpdateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartOrganizationServiceAccessUpdateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "StartOrganizationServiceAccessUpdateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "NetworkManager",
        operation: "StartOrganizationServiceAccessUpdate",
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
  private serialize(
    input: StartOrganizationServiceAccessUpdateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_StartOrganizationServiceAccessUpdateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartOrganizationServiceAccessUpdateCommandOutput> {
    return de_StartOrganizationServiceAccessUpdateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
