import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { UpdateAssociationRequest, UpdateAssociationResult } from "../models/models_1";
import {
  deserializeAws_json1_1UpdateAssociationCommand,
  serializeAws_json1_1UpdateAssociationCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface UpdateAssociationCommandInput extends UpdateAssociationRequest {}
export interface UpdateAssociationCommandOutput extends UpdateAssociationResult, __MetadataBearer {}

/**
 * <p>Updates an association. You can update the association name and version, the document
 *    version, schedule, parameters, and Amazon Simple Storage Service (Amazon S3) output. </p>
 *          <p>In order to call this API operation, your Identity and Access Management (IAM) user
 *    account, group, or role must be configured with permission to call the <a>DescribeAssociation</a> API operation. If you don't have permission to call
 *     <code>DescribeAssociation</code>, then you receive the following error: <code>An error occurred
 *     (AccessDeniedException) when calling the UpdateAssociation operation: User: <user_arn>
 *     isn't authorized to perform: ssm:DescribeAssociation on resource:
 *    <resource_arn></code>
 *          </p>
 *          <important>
 *             <p>When you update an association, the association immediately runs against the specified
 *     targets.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateAssociationCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateAssociationCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new UpdateAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAssociationCommandInput} for command's `input` shape.
 * @see {@link UpdateAssociationCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateAssociationCommand extends $Command<
  UpdateAssociationCommandInput,
  UpdateAssociationCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateAssociationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateAssociationCommandInput, UpdateAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "UpdateAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateAssociationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateAssociationResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateAssociationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateAssociationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAssociationCommandOutput> {
    return deserializeAws_json1_1UpdateAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
