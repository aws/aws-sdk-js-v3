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
import { GetAssociatedRoleRequest, GetAssociatedRoleResponse } from "../models/models_0";
import { de_GetAssociatedRoleCommand, se_GetAssociatedRoleCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetAssociatedRoleCommand}.
 */
export interface GetAssociatedRoleCommandInput extends GetAssociatedRoleRequest {}
/**
 * @public
 *
 * The output of {@link GetAssociatedRoleCommand}.
 */
export interface GetAssociatedRoleCommandOutput extends GetAssociatedRoleResponse, __MetadataBearer {}

/**
 * @public
 * Retrieves the role associated with a particular group.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetAssociatedRoleCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetAssociatedRoleCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // GetAssociatedRoleRequest
 *   GroupId: "STRING_VALUE", // required
 * };
 * const command = new GetAssociatedRoleCommand(input);
 * const response = await client.send(command);
 * // { // GetAssociatedRoleResponse
 * //   AssociatedAt: "STRING_VALUE",
 * //   RoleArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAssociatedRoleCommandInput - {@link GetAssociatedRoleCommandInput}
 * @returns {@link GetAssociatedRoleCommandOutput}
 * @see {@link GetAssociatedRoleCommandInput} for command's `input` shape.
 * @see {@link GetAssociatedRoleCommandOutput} for command's `response` shape.
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
export class GetAssociatedRoleCommand extends $Command<
  GetAssociatedRoleCommandInput,
  GetAssociatedRoleCommandOutput,
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
  constructor(readonly input: GetAssociatedRoleCommandInput) {
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
  ): Handler<GetAssociatedRoleCommandInput, GetAssociatedRoleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAssociatedRoleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "GetAssociatedRoleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Greengrass",
        operation: "GetAssociatedRole",
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
  private serialize(input: GetAssociatedRoleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetAssociatedRoleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAssociatedRoleCommandOutput> {
    return de_GetAssociatedRoleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
