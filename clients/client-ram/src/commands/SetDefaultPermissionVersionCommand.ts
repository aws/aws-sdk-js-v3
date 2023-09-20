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

import { SetDefaultPermissionVersionRequest, SetDefaultPermissionVersionResponse } from "../models/models_0";
import {
  de_SetDefaultPermissionVersionCommand,
  se_SetDefaultPermissionVersionCommand,
} from "../protocols/Aws_restJson1";
import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SetDefaultPermissionVersionCommand}.
 */
export interface SetDefaultPermissionVersionCommandInput extends SetDefaultPermissionVersionRequest {}
/**
 * @public
 *
 * The output of {@link SetDefaultPermissionVersionCommand}.
 */
export interface SetDefaultPermissionVersionCommandOutput
  extends SetDefaultPermissionVersionResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Designates the specified version number as the default version for the specified
 *             customer managed permission. New resource shares automatically use this new default permission. Existing
 *             resource shares continue to use their original permission version, but you can use <a>ReplacePermissionAssociations</a> to update them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, SetDefaultPermissionVersionCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, SetDefaultPermissionVersionCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const input = { // SetDefaultPermissionVersionRequest
 *   permissionArn: "STRING_VALUE", // required
 *   permissionVersion: Number("int"), // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new SetDefaultPermissionVersionCommand(input);
 * const response = await client.send(command);
 * // { // SetDefaultPermissionVersionResponse
 * //   returnValue: true || false,
 * //   clientToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SetDefaultPermissionVersionCommandInput - {@link SetDefaultPermissionVersionCommandInput}
 * @returns {@link SetDefaultPermissionVersionCommandOutput}
 * @see {@link SetDefaultPermissionVersionCommandInput} for command's `input` shape.
 * @see {@link SetDefaultPermissionVersionCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>The operation failed because the client token input parameter matched one that was
 *             used with a previous call to the operation, but at least one of the other input
 *             parameters is different from the previous call.</p>
 *
 * @throws {@link InvalidClientTokenException} (client fault)
 *  <p>The operation failed because the specified client token isn't valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The operation failed because a parameter you specified isn't valid.</p>
 *
 * @throws {@link MalformedArnException} (client fault)
 *  <p>The operation failed because the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> has a format that isn't
 *             valid.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The operation failed because the service could not respond to the request due to an
 *             internal problem. Try again later.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The operation failed because the service isn't available. Try again later.</p>
 *
 * @throws {@link UnknownResourceException} (client fault)
 *  <p>The operation failed because a specified resource couldn't be found.</p>
 *
 * @throws {@link RAMServiceException}
 * <p>Base exception class for all service exceptions from RAM service.</p>
 *
 */
export class SetDefaultPermissionVersionCommand extends $Command<
  SetDefaultPermissionVersionCommandInput,
  SetDefaultPermissionVersionCommandOutput,
  RAMClientResolvedConfig
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
  constructor(readonly input: SetDefaultPermissionVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SetDefaultPermissionVersionCommandInput, SetDefaultPermissionVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SetDefaultPermissionVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RAMClient";
    const commandName = "SetDefaultPermissionVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonResourceSharing",
        operation: "SetDefaultPermissionVersion",
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
  private serialize(input: SetDefaultPermissionVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SetDefaultPermissionVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SetDefaultPermissionVersionCommandOutput> {
    return de_SetDefaultPermissionVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
