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

import { GetTransitGatewayRegistrationsRequest, GetTransitGatewayRegistrationsResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import {
  de_GetTransitGatewayRegistrationsCommand,
  se_GetTransitGatewayRegistrationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetTransitGatewayRegistrationsCommand}.
 */
export interface GetTransitGatewayRegistrationsCommandInput extends GetTransitGatewayRegistrationsRequest {}
/**
 * @public
 *
 * The output of {@link GetTransitGatewayRegistrationsCommand}.
 */
export interface GetTransitGatewayRegistrationsCommandOutput
  extends GetTransitGatewayRegistrationsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets information about the transit gateway registrations in a specified
 *             global network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetTransitGatewayRegistrationsCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetTransitGatewayRegistrationsCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const input = { // GetTransitGatewayRegistrationsRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   TransitGatewayArns: [ // TransitGatewayArnList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetTransitGatewayRegistrationsCommand(input);
 * const response = await client.send(command);
 * // { // GetTransitGatewayRegistrationsResponse
 * //   TransitGatewayRegistrations: [ // TransitGatewayRegistrationList
 * //     { // TransitGatewayRegistration
 * //       GlobalNetworkId: "STRING_VALUE",
 * //       TransitGatewayArn: "STRING_VALUE",
 * //       State: { // TransitGatewayRegistrationStateReason
 * //         Code: "PENDING" || "AVAILABLE" || "DELETING" || "DELETED" || "FAILED",
 * //         Message: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetTransitGatewayRegistrationsCommandInput - {@link GetTransitGatewayRegistrationsCommandInput}
 * @returns {@link GetTransitGatewayRegistrationsCommandOutput}
 * @see {@link GetTransitGatewayRegistrationsCommandInput} for command's `input` shape.
 * @see {@link GetTransitGatewayRegistrationsCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
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
export class GetTransitGatewayRegistrationsCommand extends $Command<
  GetTransitGatewayRegistrationsCommandInput,
  GetTransitGatewayRegistrationsCommandOutput,
  NetworkManagerClientResolvedConfig
> {
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
  constructor(readonly input: GetTransitGatewayRegistrationsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetTransitGatewayRegistrationsCommandInput, GetTransitGatewayRegistrationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetTransitGatewayRegistrationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "GetTransitGatewayRegistrationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "NetworkManager",
        operation: "GetTransitGatewayRegistrations",
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
    input: GetTransitGatewayRegistrationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetTransitGatewayRegistrationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetTransitGatewayRegistrationsCommandOutput> {
    return de_GetTransitGatewayRegistrationsCommand(output, context);
  }
}
