import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { CreateOrUpdateTagsType } from "../models/models_0";
import {
  deserializeAws_queryCreateOrUpdateTagsCommand,
  serializeAws_queryCreateOrUpdateTagsCommand,
} from "../protocols/Aws_query";
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

export type CreateOrUpdateTagsCommandInput = CreateOrUpdateTagsType;
export type CreateOrUpdateTagsCommandOutput = __MetadataBearer;

/**
 * <p>Creates or updates tags for the specified Auto Scaling group.</p>
 *         <p>When you specify a tag with a key that already exists, the operation overwrites the
 *             previous tag definition, and you do not get an error message.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-tagging.html">Tagging Auto Scaling groups and
 *                 instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 */
export class CreateOrUpdateTagsCommand extends $Command<
  CreateOrUpdateTagsCommandInput,
  CreateOrUpdateTagsCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateOrUpdateTagsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateOrUpdateTagsCommandInput, CreateOrUpdateTagsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "CreateOrUpdateTagsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateOrUpdateTagsType.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateOrUpdateTagsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateOrUpdateTagsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateOrUpdateTagsCommandOutput> {
    return deserializeAws_queryCreateOrUpdateTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
