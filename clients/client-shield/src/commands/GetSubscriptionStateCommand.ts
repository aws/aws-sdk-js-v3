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

import { GetSubscriptionStateRequest, GetSubscriptionStateResponse } from "../models/models_0";
import { de_GetSubscriptionStateCommand, se_GetSubscriptionStateCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSubscriptionStateCommand}.
 */
export interface GetSubscriptionStateCommandInput extends GetSubscriptionStateRequest {}
/**
 * @public
 *
 * The output of {@link GetSubscriptionStateCommand}.
 */
export interface GetSubscriptionStateCommandOutput extends GetSubscriptionStateResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the <code>SubscriptionState</code>, either <code>Active</code> or <code>Inactive</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, GetSubscriptionStateCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, GetSubscriptionStateCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const input = {};
 * const command = new GetSubscriptionStateCommand(input);
 * const response = await client.send(command);
 * // { // GetSubscriptionStateResponse
 * //   SubscriptionState: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetSubscriptionStateCommandInput - {@link GetSubscriptionStateCommandInput}
 * @returns {@link GetSubscriptionStateCommandOutput}
 * @see {@link GetSubscriptionStateCommandInput} for command's `input` shape.
 * @see {@link GetSubscriptionStateCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for ShieldClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
 *
 * @throws {@link ShieldServiceException}
 * <p>Base exception class for all service exceptions from Shield service.</p>
 *
 */
export class GetSubscriptionStateCommand extends $Command<
  GetSubscriptionStateCommandInput,
  GetSubscriptionStateCommandOutput,
  ShieldClientResolvedConfig
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
  constructor(readonly input: GetSubscriptionStateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ShieldClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSubscriptionStateCommandInput, GetSubscriptionStateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSubscriptionStateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ShieldClient";
    const commandName = "GetSubscriptionStateCommand";
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
  private serialize(input: GetSubscriptionStateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSubscriptionStateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSubscriptionStateCommandOutput> {
    return de_GetSubscriptionStateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
