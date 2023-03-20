// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetInstancePortStatesRequest, GetInstancePortStatesResult } from "../models/models_1";
import {
  deserializeAws_json1_1GetInstancePortStatesCommand,
  serializeAws_json1_1GetInstancePortStatesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link GetInstancePortStatesCommand}.
 */
export interface GetInstancePortStatesCommandInput extends GetInstancePortStatesRequest {}
/**
 * @public
 *
 * The output of {@link GetInstancePortStatesCommand}.
 */
export interface GetInstancePortStatesCommandOutput extends GetInstancePortStatesResult, __MetadataBearer {}

/**
 * @public
 * <p>Returns the firewall port states for a specific Amazon Lightsail instance, the IP addresses
 *       allowed to connect to the instance through the ports, and the protocol.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetInstancePortStatesCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetInstancePortStatesCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetInstancePortStatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetInstancePortStatesCommandInput - {@link GetInstancePortStatesCommandInput}
 * @returns {@link GetInstancePortStatesCommandOutput}
 * @see {@link GetInstancePortStatesCommandInput} for command's `input` shape.
 * @see {@link GetInstancePortStatesCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link AccountSetupInProgressException} (client fault)
 *  <p>Lightsail throws this exception when an account is still in the setup in progress
 *       state.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Lightsail throws this exception when user input does not conform to the validation rules
 *       of an input field.</p>
 *          <note>
 *             <p>Domain and distribution APIs are only available in the N. Virginia
 *           (<code>us-east-1</code>) Amazon Web Services Region. Please set your Amazon Web Services
 *         Region configuration to <code>us-east-1</code> to create, view, or edit these
 *         resources.</p>
 *          </note>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Lightsail throws this exception when it cannot find a resource.</p>
 *
 * @throws {@link OperationFailureException} (client fault)
 *  <p>Lightsail throws this exception when an operation fails to execute.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>A general service exception.</p>
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *  <p>Lightsail throws this exception when the user has not been authenticated.</p>
 *
 *
 */
export class GetInstancePortStatesCommand extends $Command<
  GetInstancePortStatesCommandInput,
  GetInstancePortStatesCommandOutput,
  LightsailClientResolvedConfig
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
  constructor(readonly input: GetInstancePortStatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetInstancePortStatesCommandInput, GetInstancePortStatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetInstancePortStatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetInstancePortStatesCommand";
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
  private serialize(input: GetInstancePortStatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetInstancePortStatesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetInstancePortStatesCommandOutput> {
    return deserializeAws_json1_1GetInstancePortStatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
