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

import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { RegisterOnPremisesInstanceInput } from "../models/models_0";
import { de_RegisterOnPremisesInstanceCommand, se_RegisterOnPremisesInstanceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RegisterOnPremisesInstanceCommand}.
 */
export interface RegisterOnPremisesInstanceCommandInput extends RegisterOnPremisesInstanceInput {}
/**
 * @public
 *
 * The output of {@link RegisterOnPremisesInstanceCommand}.
 */
export interface RegisterOnPremisesInstanceCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Registers an on-premises instance.</p>
 *          <note>
 *             <p>Only one IAM ARN (an IAM session ARN or IAM user ARN) is supported in the request. You cannot use both.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, RegisterOnPremisesInstanceCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, RegisterOnPremisesInstanceCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const input = { // RegisterOnPremisesInstanceInput
 *   instanceName: "STRING_VALUE", // required
 *   iamSessionArn: "STRING_VALUE",
 *   iamUserArn: "STRING_VALUE",
 * };
 * const command = new RegisterOnPremisesInstanceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RegisterOnPremisesInstanceCommandInput - {@link RegisterOnPremisesInstanceCommandInput}
 * @returns {@link RegisterOnPremisesInstanceCommandOutput}
 * @see {@link RegisterOnPremisesInstanceCommandInput} for command's `input` shape.
 * @see {@link RegisterOnPremisesInstanceCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link IamArnRequiredException} (client fault)
 *  <p>No IAM ARN was included in the request. You must use an IAM session ARN or user ARN in the request.</p>
 *
 * @throws {@link IamSessionArnAlreadyRegisteredException} (client fault)
 *  <p>The request included an IAM session ARN that has already been used to
 *             register a different instance.</p>
 *
 * @throws {@link IamUserArnAlreadyRegisteredException} (client fault)
 *  <p>The specified user ARN is already registered with an on-premises instance.</p>
 *
 * @throws {@link IamUserArnRequiredException} (client fault)
 *  <p>An user ARN was not specified.</p>
 *
 * @throws {@link InstanceNameAlreadyRegisteredException} (client fault)
 *  <p>The specified on-premises instance name is already registered.</p>
 *
 * @throws {@link InstanceNameRequiredException} (client fault)
 *  <p>An on-premises instance name was not specified.</p>
 *
 * @throws {@link InvalidIamSessionArnException} (client fault)
 *  <p>The IAM session ARN was specified in an invalid format.</p>
 *
 * @throws {@link InvalidIamUserArnException} (client fault)
 *  <p>The user ARN was specified in an invalid format.</p>
 *
 * @throws {@link InvalidInstanceNameException} (client fault)
 *  <p>The on-premises instance name was specified in an invalid format.</p>
 *
 * @throws {@link MultipleIamArnsProvidedException} (client fault)
 *  <p>Both an user ARN and an IAM session ARN were included in the request.
 *             Use only one ARN type.</p>
 *
 * @throws {@link CodeDeployServiceException}
 * <p>Base exception class for all service exceptions from CodeDeploy service.</p>
 *
 */
export class RegisterOnPremisesInstanceCommand extends $Command<
  RegisterOnPremisesInstanceCommandInput,
  RegisterOnPremisesInstanceCommandOutput,
  CodeDeployClientResolvedConfig
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
  constructor(readonly input: RegisterOnPremisesInstanceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeDeployClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterOnPremisesInstanceCommandInput, RegisterOnPremisesInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RegisterOnPremisesInstanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeDeployClient";
    const commandName = "RegisterOnPremisesInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeDeploy_20141006",
        operation: "RegisterOnPremisesInstance",
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
  private serialize(input: RegisterOnPremisesInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RegisterOnPremisesInstanceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RegisterOnPremisesInstanceCommandOutput> {
    return de_RegisterOnPremisesInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
