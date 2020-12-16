import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { CreateLayerRequest, CreateLayerResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreateLayerCommand,
  serializeAws_json1_1CreateLayerCommand,
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

export type CreateLayerCommandInput = CreateLayerRequest;
export type CreateLayerCommandOutput = CreateLayerResult & __MetadataBearer;

/**
 * <p>Creates a layer. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-create.html">How to
 *         Create a Layer</a>.</p>
 *          <note>
 *             <p>You should use <b>CreateLayer</b> for noncustom layer types such as PHP App Server only if the stack
 *         does not have an existing layer of that type. A stack can have at most one instance of each
 *         noncustom layer; if you attempt to create a second instance, <b>CreateLayer</b> fails. A
 *         stack can have an arbitrary number of custom layers, so you can call <b>CreateLayer</b> as
 *         many times as you like for that layer type.</p>
 *          </note>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 */
export class CreateLayerCommand extends $Command<
  CreateLayerCommandInput,
  CreateLayerCommandOutput,
  OpsWorksClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateLayerCommandInput) {
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
  ): Handler<CreateLayerCommandInput, CreateLayerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksClient";
    const commandName = "CreateLayerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLayerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateLayerResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateLayerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateLayerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLayerCommandOutput> {
    return deserializeAws_json1_1CreateLayerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
