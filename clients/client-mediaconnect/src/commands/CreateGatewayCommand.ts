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

import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { CreateGatewayRequest, CreateGatewayResponse } from "../models/models_0";
import { de_CreateGatewayCommand, se_CreateGatewayCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateGatewayCommand}.
 */
export interface CreateGatewayCommandInput extends CreateGatewayRequest {}
/**
 * @public
 *
 * The output of {@link CreateGatewayCommand}.
 */
export interface CreateGatewayCommandOutput extends CreateGatewayResponse, __MetadataBearer {}

/**
 * @public
 * Creates a new gateway. The request must include at least one network (up to 4).
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, CreateGatewayCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, CreateGatewayCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const input = { // CreateGatewayRequest
 *   EgressCidrBlocks: [ // __listOf__string // required
 *     "STRING_VALUE",
 *   ],
 *   Name: "STRING_VALUE", // required
 *   Networks: [ // __listOfGatewayNetwork // required
 *     { // GatewayNetwork
 *       CidrBlock: "STRING_VALUE", // required
 *       Name: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateGatewayCommand(input);
 * const response = await client.send(command);
 * // { // CreateGatewayResponse
 * //   Gateway: { // Gateway
 * //     EgressCidrBlocks: [ // __listOf__string // required
 * //       "STRING_VALUE",
 * //     ],
 * //     GatewayArn: "STRING_VALUE", // required
 * //     GatewayMessages: [ // __listOfMessageDetail
 * //       { // MessageDetail
 * //         Code: "STRING_VALUE", // required
 * //         Message: "STRING_VALUE", // required
 * //         ResourceName: "STRING_VALUE",
 * //       },
 * //     ],
 * //     GatewayState: "CREATING" || "ACTIVE" || "UPDATING" || "ERROR" || "DELETING" || "DELETED",
 * //     Name: "STRING_VALUE", // required
 * //     Networks: [ // __listOfGatewayNetwork // required
 * //       { // GatewayNetwork
 * //         CidrBlock: "STRING_VALUE", // required
 * //         Name: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateGatewayCommandInput - {@link CreateGatewayCommandInput}
 * @returns {@link CreateGatewayCommandOutput}
 * @see {@link CreateGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateGatewayCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link ConflictException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link CreateGateway420Exception} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link MediaConnectServiceException}
 * <p>Base exception class for all service exceptions from MediaConnect service.</p>
 *
 */
export class CreateGatewayCommand extends $Command<
  CreateGatewayCommandInput,
  CreateGatewayCommandOutput,
  MediaConnectClientResolvedConfig
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
  constructor(readonly input: CreateGatewayCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateGatewayCommandInput, CreateGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateGatewayCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaConnectClient";
    const commandName = "CreateGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MediaConnect",
        operation: "CreateGateway",
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
  private serialize(input: CreateGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateGatewayCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateGatewayCommandOutput> {
    return de_CreateGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
