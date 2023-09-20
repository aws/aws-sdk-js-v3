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
import { DeleteApplicationVersionMessage } from "../models/models_0";
import { de_DeleteApplicationVersionCommand, se_DeleteApplicationVersionCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteApplicationVersionCommand}.
 */
export interface DeleteApplicationVersionCommandInput extends DeleteApplicationVersionMessage {}
/**
 * @public
 *
 * The output of {@link DeleteApplicationVersionCommand}.
 */
export interface DeleteApplicationVersionCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified version from the specified application.</p>
 *          <note>
 *             <p>You cannot delete an application version that is associated with a running
 *         environment.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DeleteApplicationVersionCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DeleteApplicationVersionCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // DeleteApplicationVersionMessage
 *   ApplicationName: "STRING_VALUE", // required
 *   VersionLabel: "STRING_VALUE", // required
 *   DeleteSourceBundle: true || false,
 * };
 * const command = new DeleteApplicationVersionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteApplicationVersionCommandInput - {@link DeleteApplicationVersionCommandInput}
 * @returns {@link DeleteApplicationVersionCommandOutput}
 * @see {@link DeleteApplicationVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteApplicationVersionCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link InsufficientPrivilegesException} (client fault)
 *  <p>The specified account does not have sufficient privileges for one or more AWS
 *       services.</p>
 *
 * @throws {@link OperationInProgressException} (client fault)
 *  <p>Unable to perform the specified operation because another operation that effects an
 *       element in this activity is already in progress.</p>
 *
 * @throws {@link S3LocationNotInServiceRegionException} (client fault)
 *  <p>The specified S3 bucket does not belong to the S3 region in which the service is
 *       running. The following regions are supported:</p>
 *          <ul>
 *             <li>
 *                <p>IAD/us-east-1</p>
 *             </li>
 *             <li>
 *                <p>PDX/us-west-2</p>
 *             </li>
 *             <li>
 *                <p>DUB/eu-west-1</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link SourceBundleDeletionException} (client fault)
 *  <p>Unable to delete the Amazon S3 source bundle associated with the application version.
 *       The application version was deleted successfully.</p>
 *
 * @throws {@link ElasticBeanstalkServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 * @example To delete an application version
 * ```javascript
 * // The following operation deletes an application version named 22a0-stage-150819_182129 for an application named my-app:
 * const input = {
 *   "ApplicationName": "my-app",
 *   "DeleteSourceBundle": true,
 *   "VersionLabel": "22a0-stage-150819_182129"
 * };
 * const command = new DeleteApplicationVersionCommand(input);
 * await client.send(command);
 * // example id: to-delete-an-application-version-1456269792956
 * ```
 *
 */
export class DeleteApplicationVersionCommand extends $Command<
  DeleteApplicationVersionCommandInput,
  DeleteApplicationVersionCommandOutput,
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
  constructor(readonly input: DeleteApplicationVersionCommandInput) {
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
  ): Handler<DeleteApplicationVersionCommandInput, DeleteApplicationVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteApplicationVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "DeleteApplicationVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSElasticBeanstalkService",
        operation: "DeleteApplicationVersion",
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
  private serialize(input: DeleteApplicationVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteApplicationVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteApplicationVersionCommandOutput> {
    return de_DeleteApplicationVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
