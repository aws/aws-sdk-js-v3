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

import { UpdateAppRequest } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_UpdateAppCommand, se_UpdateAppCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateAppCommand}.
 */
export interface UpdateAppCommandInput extends UpdateAppRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAppCommand}.
 */
export interface UpdateAppCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Updates a specified app.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Deploy or Manage
 *       permissions level for the stack, or an attached policy that explicitly grants permissions. For
 *       more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, UpdateAppCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, UpdateAppCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = { // UpdateAppRequest
 *   AppId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   DataSources: [ // DataSources
 *     { // DataSource
 *       Type: "STRING_VALUE",
 *       Arn: "STRING_VALUE",
 *       DatabaseName: "STRING_VALUE",
 *     },
 *   ],
 *   Type: "aws-flow-ruby" || "java" || "rails" || "php" || "nodejs" || "static" || "other",
 *   AppSource: { // Source
 *     Type: "git" || "svn" || "archive" || "s3",
 *     Url: "STRING_VALUE",
 *     Username: "STRING_VALUE",
 *     Password: "STRING_VALUE",
 *     SshKey: "STRING_VALUE",
 *     Revision: "STRING_VALUE",
 *   },
 *   Domains: [ // Strings
 *     "STRING_VALUE",
 *   ],
 *   EnableSsl: true || false,
 *   SslConfiguration: { // SslConfiguration
 *     Certificate: "STRING_VALUE", // required
 *     PrivateKey: "STRING_VALUE", // required
 *     Chain: "STRING_VALUE",
 *   },
 *   Attributes: { // AppAttributes
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Environment: [ // EnvironmentVariables
 *     { // EnvironmentVariable
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *       Secure: true || false,
 *     },
 *   ],
 * };
 * const command = new UpdateAppCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateAppCommandInput - {@link UpdateAppCommandInput}
 * @returns {@link UpdateAppCommandOutput}
 * @see {@link UpdateAppCommandInput} for command's `input` shape.
 * @see {@link UpdateAppCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for OpsWorksClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Indicates that a request was not valid.</p>
 *
 * @throws {@link OpsWorksServiceException}
 * <p>Base exception class for all service exceptions from OpsWorks service.</p>
 *
 */
export class UpdateAppCommand extends $Command<
  UpdateAppCommandInput,
  UpdateAppCommandOutput,
  OpsWorksClientResolvedConfig
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
  constructor(readonly input: UpdateAppCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpsWorksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateAppCommandInput, UpdateAppCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateAppCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksClient";
    const commandName = "UpdateAppCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "OpsWorks_20130218",
        operation: "UpdateApp",
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
  private serialize(input: UpdateAppCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateAppCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAppCommandOutput> {
    return de_UpdateAppCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
