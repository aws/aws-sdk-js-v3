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

import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetConnectivityInfoRequest, GetConnectivityInfoResponse } from "../models/models_0";
import { de_GetConnectivityInfoCommand, se_GetConnectivityInfoCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetConnectivityInfoCommand}.
 */
export interface GetConnectivityInfoCommandInput extends GetConnectivityInfoRequest {}
/**
 * @public
 *
 * The output of {@link GetConnectivityInfoCommand}.
 */
export interface GetConnectivityInfoCommandOutput extends GetConnectivityInfoResponse, __MetadataBearer {}

/**
 * @public
 * Retrieves the connectivity information for a core.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetConnectivityInfoCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetConnectivityInfoCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // GetConnectivityInfoRequest
 *   ThingName: "STRING_VALUE", // required
 * };
 * const command = new GetConnectivityInfoCommand(input);
 * const response = await client.send(command);
 * // { // GetConnectivityInfoResponse
 * //   ConnectivityInfo: [ // __listOfConnectivityInfo
 * //     { // ConnectivityInfo
 * //       HostAddress: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       Metadata: "STRING_VALUE",
 * //       PortNumber: Number("int"),
 * //     },
 * //   ],
 * //   Message: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetConnectivityInfoCommandInput - {@link GetConnectivityInfoCommandInput}
 * @returns {@link GetConnectivityInfoCommandOutput}
 * @see {@link GetConnectivityInfoCommandInput} for command's `input` shape.
 * @see {@link GetConnectivityInfoCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  General error information.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  General error information.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 */
export class GetConnectivityInfoCommand extends $Command<
  GetConnectivityInfoCommandInput,
  GetConnectivityInfoCommandOutput,
  GreengrassClientResolvedConfig
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
  constructor(readonly input: GetConnectivityInfoCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetConnectivityInfoCommandInput, GetConnectivityInfoCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetConnectivityInfoCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "GetConnectivityInfoCommand";
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
  private serialize(input: GetConnectivityInfoCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetConnectivityInfoCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetConnectivityInfoCommandOutput> {
    return de_GetConnectivityInfoCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
