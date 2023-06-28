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
  RegisterApplicationInput,
  RegisterApplicationInputFilterSensitiveLog,
  RegisterApplicationOutput,
} from "../models/models_0";
import { de_RegisterApplicationCommand, se_RegisterApplicationCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SsmSapClientResolvedConfig } from "../SsmSapClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RegisterApplicationCommand}.
 */
export interface RegisterApplicationCommandInput extends RegisterApplicationInput {}
/**
 * @public
 *
 * The output of {@link RegisterApplicationCommand}.
 */
export interface RegisterApplicationCommandOutput extends RegisterApplicationOutput, __MetadataBearer {}

/**
 * @public
 * <p>Register an SAP application with AWS Systems Manager for SAP. You must meet the
 *          following requirements before registering. </p>
 *          <p>The SAP application you want to register with AWS Systems Manager for SAP is running
 *          on Amazon EC2.</p>
 *          <p>AWS Systems Manager Agent must be setup on an Amazon EC2 instance along with the required
 *          IAM permissions.</p>
 *          <p>Amazon EC2 instance(s) must have access to the secrets created in AWS Secrets Manager to
 *          manage SAP applications and components.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SsmSapClient, RegisterApplicationCommand } from "@aws-sdk/client-ssm-sap"; // ES Modules import
 * // const { SsmSapClient, RegisterApplicationCommand } = require("@aws-sdk/client-ssm-sap"); // CommonJS import
 * const client = new SsmSapClient(config);
 * const input = { // RegisterApplicationInput
 *   ApplicationId: "STRING_VALUE", // required
 *   ApplicationType: "STRING_VALUE", // required
 *   Instances: [ // InstanceList // required
 *     "STRING_VALUE",
 *   ],
 *   SapInstanceNumber: "STRING_VALUE",
 *   Sid: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Credentials: [ // ApplicationCredentialList // required
 *     { // ApplicationCredential
 *       DatabaseName: "STRING_VALUE", // required
 *       CredentialType: "STRING_VALUE", // required
 *       SecretId: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new RegisterApplicationCommand(input);
 * const response = await client.send(command);
 * // { // RegisterApplicationOutput
 * //   Application: { // Application
 * //     Id: "STRING_VALUE",
 * //     Type: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     AppRegistryArn: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     Components: [ // ComponentIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     LastUpdated: new Date("TIMESTAMP"),
 * //     StatusMessage: "STRING_VALUE",
 * //   },
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterApplicationCommandInput - {@link RegisterApplicationCommandInput}
 * @returns {@link RegisterApplicationCommandOutput}
 * @see {@link RegisterApplicationCommandInput} for command's `input` shape.
 * @see {@link RegisterApplicationCommandOutput} for command's `response` shape.
 * @see {@link SsmSapClientResolvedConfig | config} for SsmSapClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict has occurred.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service. </p>
 *
 * @throws {@link SsmSapServiceException}
 * <p>Base exception class for all service exceptions from SsmSap service.</p>
 *
 */
export class RegisterApplicationCommand extends $Command<
  RegisterApplicationCommandInput,
  RegisterApplicationCommandOutput,
  SsmSapClientResolvedConfig
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
  constructor(readonly input: RegisterApplicationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SsmSapClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterApplicationCommandInput, RegisterApplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RegisterApplicationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SsmSapClient";
    const commandName = "RegisterApplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterApplicationInputFilterSensitiveLog,
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
  private serialize(input: RegisterApplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RegisterApplicationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterApplicationCommandOutput> {
    return de_RegisterApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
