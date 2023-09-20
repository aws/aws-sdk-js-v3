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

import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetServiceRoleForAccountRequest, GetServiceRoleForAccountResponse } from "../models/models_0";
import { de_GetServiceRoleForAccountCommand, se_GetServiceRoleForAccountCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetServiceRoleForAccountCommand}.
 */
export interface GetServiceRoleForAccountCommandInput extends GetServiceRoleForAccountRequest {}
/**
 * @public
 *
 * The output of {@link GetServiceRoleForAccountCommand}.
 */
export interface GetServiceRoleForAccountCommandOutput extends GetServiceRoleForAccountResponse, __MetadataBearer {}

/**
 * @public
 * Retrieves the service role that is attached to your account.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetServiceRoleForAccountCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetServiceRoleForAccountCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = {};
 * const command = new GetServiceRoleForAccountCommand(input);
 * const response = await client.send(command);
 * // { // GetServiceRoleForAccountResponse
 * //   AssociatedAt: "STRING_VALUE",
 * //   RoleArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetServiceRoleForAccountCommandInput - {@link GetServiceRoleForAccountCommandInput}
 * @returns {@link GetServiceRoleForAccountCommandOutput}
 * @see {@link GetServiceRoleForAccountCommandInput} for command's `input` shape.
 * @see {@link GetServiceRoleForAccountCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  General error information.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 */
export class GetServiceRoleForAccountCommand extends $Command<
  GetServiceRoleForAccountCommandInput,
  GetServiceRoleForAccountCommandOutput,
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
  constructor(readonly input: GetServiceRoleForAccountCommandInput) {
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
  ): Handler<GetServiceRoleForAccountCommandInput, GetServiceRoleForAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetServiceRoleForAccountCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "GetServiceRoleForAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Greengrass",
        operation: "GetServiceRoleForAccount",
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
  private serialize(input: GetServiceRoleForAccountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetServiceRoleForAccountCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetServiceRoleForAccountCommandOutput> {
    return de_GetServiceRoleForAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
