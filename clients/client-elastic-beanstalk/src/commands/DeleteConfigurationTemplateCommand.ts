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

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { DeleteConfigurationTemplateMessage } from "../models/models_0";
import { de_DeleteConfigurationTemplateCommand, se_DeleteConfigurationTemplateCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteConfigurationTemplateCommand}.
 */
export interface DeleteConfigurationTemplateCommandInput extends DeleteConfigurationTemplateMessage {}
/**
 * @public
 *
 * The output of {@link DeleteConfigurationTemplateCommand}.
 */
export interface DeleteConfigurationTemplateCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified configuration template.</p>
 *          <note>
 *             <p>When you launch an environment using a configuration template, the environment gets a
 *         copy of the template. You can delete or modify the environment's copy of the template
 *         without affecting the running environment.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DeleteConfigurationTemplateCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DeleteConfigurationTemplateCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // DeleteConfigurationTemplateMessage
 *   ApplicationName: "STRING_VALUE", // required
 *   TemplateName: "STRING_VALUE", // required
 * };
 * const command = new DeleteConfigurationTemplateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConfigurationTemplateCommandInput - {@link DeleteConfigurationTemplateCommandInput}
 * @returns {@link DeleteConfigurationTemplateCommandOutput}
 * @see {@link DeleteConfigurationTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteConfigurationTemplateCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link OperationInProgressException} (client fault)
 *  <p>Unable to perform the specified operation because another operation that effects an
 *       element in this activity is already in progress.</p>
 *
 * @throws {@link ElasticBeanstalkServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 * @example To delete a configuration template
 * ```javascript
 * // The following operation deletes a configuration template named my-template for an application named my-app:
 * const input = {
 *   "ApplicationName": "my-app",
 *   "TemplateName": "my-template"
 * };
 * const command = new DeleteConfigurationTemplateCommand(input);
 * await client.send(command);
 * // example id: to-delete-a-configuration-template-1456269836701
 * ```
 *
 */
export class DeleteConfigurationTemplateCommand extends $Command<
  DeleteConfigurationTemplateCommandInput,
  DeleteConfigurationTemplateCommandOutput,
  ElasticBeanstalkClientResolvedConfig
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
  constructor(readonly input: DeleteConfigurationTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticBeanstalkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteConfigurationTemplateCommandInput, DeleteConfigurationTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteConfigurationTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "DeleteConfigurationTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSElasticBeanstalkService",
        operation: "DeleteConfigurationTemplate",
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
  private serialize(input: DeleteConfigurationTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteConfigurationTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteConfigurationTemplateCommandOutput> {
    return de_DeleteConfigurationTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
