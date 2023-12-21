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
import { UntagContactRequest, UntagContactResponse } from "../models/models_2";
import { de_UntagContactCommand, se_UntagContactCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UntagContactCommand}.
 */
export interface UntagContactCommandInput extends UntagContactRequest {}
/**
 * @public
 *
 * The output of {@link UntagContactCommand}.
 */
export interface UntagContactCommandOutput extends UntagContactResponse, __MetadataBearer {}

/**
 * @public
 * <p>Removes the specified tags from the contact resource. For more information about this API is
 *    used, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/granular-billing.html">Set
 *     up granular billing for a detailed view of your Amazon Connect usage</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UntagContactCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UntagContactCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // UntagContactRequest
 *   ContactId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 *   TagKeys: [ // ContactTagKeys // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UntagContactCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UntagContactCommandInput - {@link UntagContactCommandInput}
 * @returns {@link UntagContactCommandOutput}
 * @see {@link UntagContactCommandInput} for command's `input` shape.
 * @see {@link UntagContactCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
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
export class UntagContactCommand extends $Command<
  UntagContactCommandInput,
  UntagContactCommandOutput,
  ConnectClientResolvedConfig
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
  constructor(readonly input: UntagContactCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UntagContactCommandInput, UntagContactCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UntagContactCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "UntagContactCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectService",
        operation: "UntagContact",
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
  private serialize(input: UntagContactCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UntagContactCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UntagContactCommandOutput> {
    return de_UntagContactCommand(output, context);
  }
}
