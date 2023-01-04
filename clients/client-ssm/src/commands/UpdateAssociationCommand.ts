// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  UpdateAssociationRequest,
  UpdateAssociationRequestFilterSensitiveLog,
  UpdateAssociationResult,
  UpdateAssociationResultFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_json1_1UpdateAssociationCommand,
  serializeAws_json1_1UpdateAssociationCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

export interface UpdateAssociationCommandInput extends UpdateAssociationRequest {}
export interface UpdateAssociationCommandOutput extends UpdateAssociationResult, __MetadataBearer {}

/**
 * <p>Updates an association. You can update the association name and version, the document
 *    version, schedule, parameters, and Amazon Simple Storage Service (Amazon S3) output. When you
 *    call <code>UpdateAssociation</code>, the system removes all optional parameters from the request
 *    and overwrites the association with null values for those parameters. This is by design. You must
 *    specify all optional parameters in the call, even if you are not changing the parameters. This
 *    includes the <code>Name</code> parameter. Before calling this API action, we recommend that you
 *    call the <a>DescribeAssociation</a> API operation and make a note of all optional
 *    parameters required for your <code>UpdateAssociation</code> call.</p>
 *          <p>In order to call this API operation, your Identity and Access Management (IAM) user
 *    account, group, or role must be configured with permission to call the <a>DescribeAssociation</a> API operation. If you don't have permission to call
 *     <code>DescribeAssociation</code>, then you receive the following error: <code>An error occurred
 *     (AccessDeniedException) when calling the UpdateAssociation operation: User: <user_arn>
 *     isn't authorized to perform: ssm:DescribeAssociation on resource:
 *    <resource_arn></code>
 *          </p>
 *          <important>
 *             <p>When you update an association, the association immediately runs against the specified
 *     targets. You can add the <code>ApplyOnlyAtCronInterval</code> parameter to run the association
 *     during the next schedule run.</p>
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
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 */
export class UpdateAssociationCommand extends $Command<
  UpdateAssociationCommandInput,
  UpdateAssociationCommandOutput,
  SSMClientResolvedConfig
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateAssociationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "UpdateAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateAssociationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateAssociationResultFilterSensitiveLog,
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
