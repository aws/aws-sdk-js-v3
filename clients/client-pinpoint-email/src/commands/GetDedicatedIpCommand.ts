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

import { GetDedicatedIpRequest, GetDedicatedIpResponse } from "../models/models_0";
import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import { de_GetDedicatedIpCommand, se_GetDedicatedIpCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDedicatedIpCommand}.
 */
export interface GetDedicatedIpCommandInput extends GetDedicatedIpRequest {}
/**
 * @public
 *
 * The output of {@link GetDedicatedIpCommand}.
 */
export interface GetDedicatedIpCommandOutput extends GetDedicatedIpResponse, __MetadataBearer {}

/**
 * @public
 * <p>Get information about a dedicated IP address, including the name of the dedicated IP
 *             pool that it's associated with, as well information about the automatic warm-up process
 *             for the address.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, GetDedicatedIpCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, GetDedicatedIpCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const input = { // GetDedicatedIpRequest
 *   Ip: "STRING_VALUE", // required
 * };
 * const command = new GetDedicatedIpCommand(input);
 * const response = await client.send(command);
 * // { // GetDedicatedIpResponse
 * //   DedicatedIp: { // DedicatedIp
 * //     Ip: "STRING_VALUE", // required
 * //     WarmupStatus: "IN_PROGRESS" || "DONE", // required
 * //     WarmupPercentage: Number("int"), // required
 * //     PoolName: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDedicatedIpCommandInput - {@link GetDedicatedIpCommandInput}
 * @returns {@link GetDedicatedIpCommandOutput}
 * @see {@link GetDedicatedIpCommandInput} for command's `input` shape.
 * @see {@link GetDedicatedIpCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for PinpointEmailClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link PinpointEmailServiceException}
 * <p>Base exception class for all service exceptions from PinpointEmail service.</p>
 *
 */
export class GetDedicatedIpCommand extends $Command<
  GetDedicatedIpCommandInput,
  GetDedicatedIpCommandOutput,
  PinpointEmailClientResolvedConfig
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
  constructor(readonly input: GetDedicatedIpCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointEmailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDedicatedIpCommandInput, GetDedicatedIpCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDedicatedIpCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointEmailClient";
    const commandName = "GetDedicatedIpCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonPinpointEmailService",
        operation: "GetDedicatedIp",
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
  private serialize(input: GetDedicatedIpCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDedicatedIpCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDedicatedIpCommandOutput> {
    return de_GetDedicatedIpCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
