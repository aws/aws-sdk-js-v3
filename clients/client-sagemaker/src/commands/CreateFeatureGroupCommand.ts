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
  CreateFeatureGroupRequest,
  CreateFeatureGroupRequestFilterSensitiveLog,
  CreateFeatureGroupResponse,
  CreateFeatureGroupResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1CreateFeatureGroupCommand,
  serializeAws_json1_1CreateFeatureGroupCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

export interface CreateFeatureGroupCommandInput extends CreateFeatureGroupRequest {}
export interface CreateFeatureGroupCommandOutput extends CreateFeatureGroupResponse, __MetadataBearer {}

/**
 * <p>Create a new <code>FeatureGroup</code>. A <code>FeatureGroup</code> is a group of
 *             <code>Features</code> defined in the <code>FeatureStore</code> to describe a
 *             <code>Record</code>. </p>
 *          <p>The <code>FeatureGroup</code> defines the schema and features contained in the
 *          FeatureGroup. A <code>FeatureGroup</code> definition is composed of a list of
 *             <code>Features</code>, a <code>RecordIdentifierFeatureName</code>, an
 *             <code>EventTimeFeatureName</code> and configurations for its <code>OnlineStore</code>
 *          and <code>OfflineStore</code>. Check <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">Amazon Web Services service quotas</a> to see
 *          the <code>FeatureGroup</code>s quota for your Amazon Web Services account.</p>
 *          <important>
 *             <p>You must include at least one of <code>OnlineStoreConfig</code> and
 *                <code>OfflineStoreConfig</code> to create a <code>FeatureGroup</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateFeatureGroupCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateFeatureGroupCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateFeatureGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFeatureGroupCommandInput} for command's `input` shape.
 * @see {@link CreateFeatureGroupCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 */
export class CreateFeatureGroupCommand extends $Command<
  CreateFeatureGroupCommandInput,
  CreateFeatureGroupCommandOutput,
  SageMakerClientResolvedConfig
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateFeatureGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateFeatureGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateFeatureGroupRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateFeatureGroupResponseFilterSensitiveLog,
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
