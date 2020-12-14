import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateFeatureGroupRequest, CreateFeatureGroupResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateFeatureGroupCommand,
  serializeAws_json1_1CreateFeatureGroupCommand,
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

export type CreateFeatureGroupCommandInput = CreateFeatureGroupRequest;
export type CreateFeatureGroupCommandOutput = CreateFeatureGroupResponse & __MetadataBearer;

/**
 * <p>Create a new <code>FeatureGroup</code>. A <code>FeatureGroup</code> is a group of
 *             <code>Features</code> defined in the <code>FeatureStore</code> to describe a
 *             <code>Record</code>. </p>
 *          <p>The <code>FeatureGroup</code> defines the schema and features contained in the
 *          FeatureGroup. A <code>FeatureGroup</code> definition is composed of a list of
 *             <code>Features</code>, a <code>RecordIdentifierFeatureName</code>, an
 *             <code>EventTimeFeatureName</code> and configurations for its <code>OnlineStore</code>
 *          and <code>OfflineStore</code>. Check <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">AWS service quotas</a> to see
 *          the <code>FeatureGroup</code>s quota for your AWS account.</p>
 *          <important>
 *             <p>You must include at least one of <code>OnlineStoreConfig</code> and
 *                <code>OfflineStoreConfig</code> to create a <code>FeatureGroup</code>.</p>
 *          </important>
 */
export class CreateFeatureGroupCommand extends $Command<
  CreateFeatureGroupCommandInput,
  CreateFeatureGroupCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateFeatureGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateFeatureGroupCommandInput, CreateFeatureGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateFeatureGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateFeatureGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateFeatureGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateFeatureGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateFeatureGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateFeatureGroupCommandOutput> {
    return deserializeAws_json1_1CreateFeatureGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
