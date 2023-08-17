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
} from "@smithy/types";

import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { AddFlowVpcInterfacesRequest, AddFlowVpcInterfacesResponse } from "../models/models_0";
import { de_AddFlowVpcInterfacesCommand, se_AddFlowVpcInterfacesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AddFlowVpcInterfacesCommand}.
 */
export interface AddFlowVpcInterfacesCommandInput extends AddFlowVpcInterfacesRequest {}
/**
 * @public
 *
 * The output of {@link AddFlowVpcInterfacesCommand}.
 */
export interface AddFlowVpcInterfacesCommandOutput extends AddFlowVpcInterfacesResponse, __MetadataBearer {}

/**
 * @public
 * Adds VPC interfaces to flow
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, AddFlowVpcInterfacesCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, AddFlowVpcInterfacesCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const input = { // AddFlowVpcInterfacesRequest
 *   FlowArn: "STRING_VALUE", // required
 *   VpcInterfaces: [ // __listOfVpcInterfaceRequest // required
 *     { // VpcInterfaceRequest
 *       Name: "STRING_VALUE", // required
 *       NetworkInterfaceType: "ena" || "efa",
 *       RoleArn: "STRING_VALUE", // required
 *       SecurityGroupIds: [ // __listOf__string // required
 *         "STRING_VALUE",
 *       ],
 *       SubnetId: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new AddFlowVpcInterfacesCommand(input);
 * const response = await client.send(command);
 * // { // AddFlowVpcInterfacesResponse
 * //   FlowArn: "STRING_VALUE",
 * //   VpcInterfaces: [ // __listOfVpcInterface
 * //     { // VpcInterface
 * //       Name: "STRING_VALUE", // required
 * //       NetworkInterfaceIds: [ // __listOf__string // required
 * //         "STRING_VALUE",
 * //       ],
 * //       NetworkInterfaceType: "ena" || "efa", // required
 * //       RoleArn: "STRING_VALUE", // required
 * //       SecurityGroupIds: [ // required
 * //         "STRING_VALUE",
 * //       ],
 * //       SubnetId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AddFlowVpcInterfacesCommandInput - {@link AddFlowVpcInterfacesCommandInput}
 * @returns {@link AddFlowVpcInterfacesCommandOutput}
 * @see {@link AddFlowVpcInterfacesCommandInput} for command's `input` shape.
 * @see {@link AddFlowVpcInterfacesCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link NotFoundException} (client fault)
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
export class AddFlowVpcInterfacesCommand extends $Command<
  AddFlowVpcInterfacesCommandInput,
  AddFlowVpcInterfacesCommandOutput,
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
  constructor(readonly input: AddFlowVpcInterfacesCommandInput) {
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
  ): Handler<AddFlowVpcInterfacesCommandInput, AddFlowVpcInterfacesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AddFlowVpcInterfacesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaConnectClient";
    const commandName = "AddFlowVpcInterfacesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: AddFlowVpcInterfacesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AddFlowVpcInterfacesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddFlowVpcInterfacesCommandOutput> {
    return de_AddFlowVpcInterfacesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
