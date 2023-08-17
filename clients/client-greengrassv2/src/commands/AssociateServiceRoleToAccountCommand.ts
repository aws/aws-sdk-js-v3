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

import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import { AssociateServiceRoleToAccountRequest, AssociateServiceRoleToAccountResponse } from "../models/models_0";
import {
  de_AssociateServiceRoleToAccountCommand,
  se_AssociateServiceRoleToAccountCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateServiceRoleToAccountCommand}.
 */
export interface AssociateServiceRoleToAccountCommandInput extends AssociateServiceRoleToAccountRequest {}
/**
 * @public
 *
 * The output of {@link AssociateServiceRoleToAccountCommand}.
 */
export interface AssociateServiceRoleToAccountCommandOutput
  extends AssociateServiceRoleToAccountResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Associates a Greengrass service role with IoT Greengrass for your Amazon Web Services account in this Amazon Web Services Region. IoT Greengrass
 *       uses this role to verify the identity of client devices and manage core device connectivity
 *       information. The role must include the <a href="https://console.aws.amazon.com/iam/home#/policies/arn:awsiam::aws:policy/service-role/AWSGreengrassResourceAccessRolePolicy">AWSGreengrassResourceAccessRolePolicy</a> managed policy or a custom policy that
 *       defines equivalent permissions for the IoT Greengrass features that you use. For more information, see
 *         <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-service-role.html">Greengrass service role</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, AssociateServiceRoleToAccountCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, AssociateServiceRoleToAccountCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const input = { // AssociateServiceRoleToAccountRequest
 *   roleArn: "STRING_VALUE", // required
 * };
 * const command = new AssociateServiceRoleToAccountCommand(input);
 * const response = await client.send(command);
 * // { // AssociateServiceRoleToAccountResponse
 * //   associatedAt: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateServiceRoleToAccountCommandInput - {@link AssociateServiceRoleToAccountCommandInput}
 * @returns {@link AssociateServiceRoleToAccountCommandOutput}
 * @see {@link AssociateServiceRoleToAccountCommandInput} for command's `input` shape.
 * @see {@link AssociateServiceRoleToAccountCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for GreengrassV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>IoT Greengrass can't process your request right now. Try again later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters.</p>
 *
 * @throws {@link GreengrassV2ServiceException}
 * <p>Base exception class for all service exceptions from GreengrassV2 service.</p>
 *
 */
export class AssociateServiceRoleToAccountCommand extends $Command<
  AssociateServiceRoleToAccountCommandInput,
  AssociateServiceRoleToAccountCommandOutput,
  GreengrassV2ClientResolvedConfig
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
  constructor(readonly input: AssociateServiceRoleToAccountCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateServiceRoleToAccountCommandInput, AssociateServiceRoleToAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateServiceRoleToAccountCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassV2Client";
    const commandName = "AssociateServiceRoleToAccountCommand";
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
  private serialize(input: AssociateServiceRoleToAccountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AssociateServiceRoleToAccountCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateServiceRoleToAccountCommandOutput> {
    return de_AssociateServiceRoleToAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
