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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import {
  AssociateTrafficDistributionGroupUserRequest,
  AssociateTrafficDistributionGroupUserResponse,
} from "../models/models_0";
import {
  de_AssociateTrafficDistributionGroupUserCommand,
  se_AssociateTrafficDistributionGroupUserCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateTrafficDistributionGroupUserCommand}.
 */
export interface AssociateTrafficDistributionGroupUserCommandInput
  extends AssociateTrafficDistributionGroupUserRequest {}
/**
 * @public
 *
 * The output of {@link AssociateTrafficDistributionGroupUserCommand}.
 */
export interface AssociateTrafficDistributionGroupUserCommandOutput
  extends AssociateTrafficDistributionGroupUserResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Associates an agent with a traffic distribution group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, AssociateTrafficDistributionGroupUserCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, AssociateTrafficDistributionGroupUserCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // AssociateTrafficDistributionGroupUserRequest
 *   TrafficDistributionGroupId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 * };
 * const command = new AssociateTrafficDistributionGroupUserCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateTrafficDistributionGroupUserCommandInput - {@link AssociateTrafficDistributionGroupUserCommandInput}
 * @returns {@link AssociateTrafficDistributionGroupUserCommandOutput}
 * @see {@link AssociateTrafficDistributionGroupUserCommandInput} for command's `input` shape.
 * @see {@link AssociateTrafficDistributionGroupUserCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>A resource already has that name.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 */
export class AssociateTrafficDistributionGroupUserCommand extends $Command<
  AssociateTrafficDistributionGroupUserCommandInput,
  AssociateTrafficDistributionGroupUserCommandOutput,
  ConnectClientResolvedConfig
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
  constructor(readonly input: AssociateTrafficDistributionGroupUserCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateTrafficDistributionGroupUserCommandInput, AssociateTrafficDistributionGroupUserCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateTrafficDistributionGroupUserCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "AssociateTrafficDistributionGroupUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectService",
        operation: "AssociateTrafficDistributionGroupUser",
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
    input: AssociateTrafficDistributionGroupUserCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_AssociateTrafficDistributionGroupUserCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateTrafficDistributionGroupUserCommandOutput> {
    return de_AssociateTrafficDistributionGroupUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
