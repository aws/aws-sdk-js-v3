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
import { RemoveFlowOutputRequest, RemoveFlowOutputResponse } from "../models/models_0";
import { de_RemoveFlowOutputCommand, se_RemoveFlowOutputCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RemoveFlowOutputCommand}.
 */
export interface RemoveFlowOutputCommandInput extends RemoveFlowOutputRequest {}
/**
 * @public
 *
 * The output of {@link RemoveFlowOutputCommand}.
 */
export interface RemoveFlowOutputCommandOutput extends RemoveFlowOutputResponse, __MetadataBearer {}

/**
 * @public
 * Removes an output from an existing flow. This request can be made only on an output that does not have an entitlement associated with it. If the output has an entitlement, you must revoke the entitlement instead. When an entitlement is revoked from a flow, the service automatically removes the associated output.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, RemoveFlowOutputCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, RemoveFlowOutputCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const input = { // RemoveFlowOutputRequest
 *   FlowArn: "STRING_VALUE", // required
 *   OutputArn: "STRING_VALUE", // required
 * };
 * const command = new RemoveFlowOutputCommand(input);
 * const response = await client.send(command);
 * // { // RemoveFlowOutputResponse
 * //   FlowArn: "STRING_VALUE",
 * //   OutputArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RemoveFlowOutputCommandInput - {@link RemoveFlowOutputCommandInput}
 * @returns {@link RemoveFlowOutputCommandOutput}
 * @see {@link RemoveFlowOutputCommandInput} for command's `input` shape.
 * @see {@link RemoveFlowOutputCommandOutput} for command's `response` shape.
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
export class RemoveFlowOutputCommand extends $Command<
  RemoveFlowOutputCommandInput,
  RemoveFlowOutputCommandOutput,
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
  constructor(readonly input: RemoveFlowOutputCommandInput) {
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
  ): Handler<RemoveFlowOutputCommandInput, RemoveFlowOutputCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RemoveFlowOutputCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaConnectClient";
    const commandName = "RemoveFlowOutputCommand";
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
  private serialize(input: RemoveFlowOutputCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RemoveFlowOutputCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RemoveFlowOutputCommandOutput> {
    return de_RemoveFlowOutputCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
