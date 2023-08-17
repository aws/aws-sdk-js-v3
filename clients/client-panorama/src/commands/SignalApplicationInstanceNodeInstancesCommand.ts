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

import {
  SignalApplicationInstanceNodeInstancesRequest,
  SignalApplicationInstanceNodeInstancesResponse,
} from "../models/models_0";
import { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import {
  de_SignalApplicationInstanceNodeInstancesCommand,
  se_SignalApplicationInstanceNodeInstancesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SignalApplicationInstanceNodeInstancesCommand}.
 */
export interface SignalApplicationInstanceNodeInstancesCommandInput
  extends SignalApplicationInstanceNodeInstancesRequest {}
/**
 * @public
 *
 * The output of {@link SignalApplicationInstanceNodeInstancesCommand}.
 */
export interface SignalApplicationInstanceNodeInstancesCommandOutput
  extends SignalApplicationInstanceNodeInstancesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Signal camera nodes to stop or resume.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, SignalApplicationInstanceNodeInstancesCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, SignalApplicationInstanceNodeInstancesCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * const client = new PanoramaClient(config);
 * const input = { // SignalApplicationInstanceNodeInstancesRequest
 *   ApplicationInstanceId: "STRING_VALUE", // required
 *   NodeSignals: [ // NodeSignalList // required
 *     { // NodeSignal
 *       NodeInstanceId: "STRING_VALUE", // required
 *       Signal: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new SignalApplicationInstanceNodeInstancesCommand(input);
 * const response = await client.send(command);
 * // { // SignalApplicationInstanceNodeInstancesResponse
 * //   ApplicationInstanceId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param SignalApplicationInstanceNodeInstancesCommandInput - {@link SignalApplicationInstanceNodeInstancesCommandInput}
 * @returns {@link SignalApplicationInstanceNodeInstancesCommandOutput}
 * @see {@link SignalApplicationInstanceNodeInstancesCommandInput} for command's `input` shape.
 * @see {@link SignalApplicationInstanceNodeInstancesCommandOutput} for command's `response` shape.
 * @see {@link PanoramaClientResolvedConfig | config} for PanoramaClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The requestor does not have permission to access the target action or resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a limit to be exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request contains an invalid parameter value.</p>
 *
 * @throws {@link PanoramaServiceException}
 * <p>Base exception class for all service exceptions from Panorama service.</p>
 *
 */
export class SignalApplicationInstanceNodeInstancesCommand extends $Command<
  SignalApplicationInstanceNodeInstancesCommandInput,
  SignalApplicationInstanceNodeInstancesCommandOutput,
  PanoramaClientResolvedConfig
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
  constructor(readonly input: SignalApplicationInstanceNodeInstancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PanoramaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SignalApplicationInstanceNodeInstancesCommandInput, SignalApplicationInstanceNodeInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SignalApplicationInstanceNodeInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PanoramaClient";
    const commandName = "SignalApplicationInstanceNodeInstancesCommand";
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
  private serialize(
    input: SignalApplicationInstanceNodeInstancesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_SignalApplicationInstanceNodeInstancesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SignalApplicationInstanceNodeInstancesCommandOutput> {
    return de_SignalApplicationInstanceNodeInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
