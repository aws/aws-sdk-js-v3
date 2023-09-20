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
import { AssociateRoleToGroupRequest, AssociateRoleToGroupResponse } from "../models/models_0";
import { de_AssociateRoleToGroupCommand, se_AssociateRoleToGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateRoleToGroupCommand}.
 */
export interface AssociateRoleToGroupCommandInput extends AssociateRoleToGroupRequest {}
/**
 * @public
 *
 * The output of {@link AssociateRoleToGroupCommand}.
 */
export interface AssociateRoleToGroupCommandOutput extends AssociateRoleToGroupResponse, __MetadataBearer {}

/**
 * @public
 * Associates a role with a group. Your Greengrass core will use the role to access AWS cloud services. The role's permissions should allow Greengrass core Lambda functions to perform actions against the cloud.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, AssociateRoleToGroupCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, AssociateRoleToGroupCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // AssociateRoleToGroupRequest
 *   GroupId: "STRING_VALUE", // required
 *   RoleArn: "STRING_VALUE", // required
 * };
 * const command = new AssociateRoleToGroupCommand(input);
 * const response = await client.send(command);
 * // { // AssociateRoleToGroupResponse
 * //   AssociatedAt: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateRoleToGroupCommandInput - {@link AssociateRoleToGroupCommandInput}
 * @returns {@link AssociateRoleToGroupCommandOutput}
 * @see {@link AssociateRoleToGroupCommandInput} for command's `input` shape.
 * @see {@link AssociateRoleToGroupCommandOutput} for command's `response` shape.
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
export class AssociateRoleToGroupCommand extends $Command<
  AssociateRoleToGroupCommandInput,
  AssociateRoleToGroupCommandOutput,
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
  constructor(readonly input: AssociateRoleToGroupCommandInput) {
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
  ): Handler<AssociateRoleToGroupCommandInput, AssociateRoleToGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateRoleToGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "AssociateRoleToGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Greengrass",
        operation: "AssociateRoleToGroup",
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
  private serialize(input: AssociateRoleToGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AssociateRoleToGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateRoleToGroupCommandOutput> {
    return de_AssociateRoleToGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
