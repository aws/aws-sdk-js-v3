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

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { StartResourceEvaluationRequest, StartResourceEvaluationResponse } from "../models/models_1";
import { de_StartResourceEvaluationCommand, se_StartResourceEvaluationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartResourceEvaluationCommand}.
 */
export interface StartResourceEvaluationCommandInput extends StartResourceEvaluationRequest {}
/**
 * @public
 *
 * The output of {@link StartResourceEvaluationCommand}.
 */
export interface StartResourceEvaluationCommandOutput extends StartResourceEvaluationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Runs an on-demand evaluation for the specified resource to determine whether the resource details will comply with configured Config rules.
 * 			You can also use it for evaluation purposes. Config recommends using an evaluation context. It runs an execution against the resource details with all
 * 			of the Config rules in your account that match with the specified proactive mode and resource type.</p>
 *          <note>
 *             <p>Ensure you have the <code>cloudformation:DescribeType</code> role setup to validate the resource type schema.</p>
 *             <p>You can find the
 * 				<a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html">Resource type schema</a> in "<i>Amazon Web Services public extensions</i>" within the CloudFormation registry or with the following CLI commmand:
 * 			<code>aws cloudformation describe-type --type-name "AWS::S3::Bucket" --type RESOURCE</code>.</p>
 *             <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html#registry-view">Managing extensions through the CloudFormation registry</a>
 * 			and <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services resource and property types reference</a> in the CloudFormation User Guide.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, StartResourceEvaluationCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, StartResourceEvaluationCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // StartResourceEvaluationRequest
 *   ResourceDetails: { // ResourceDetails
 *     ResourceId: "STRING_VALUE", // required
 *     ResourceType: "STRING_VALUE", // required
 *     ResourceConfiguration: "STRING_VALUE", // required
 *     ResourceConfigurationSchemaType: "CFN_RESOURCE_SCHEMA",
 *   },
 *   EvaluationContext: { // EvaluationContext
 *     EvaluationContextIdentifier: "STRING_VALUE",
 *   },
 *   EvaluationMode: "DETECTIVE" || "PROACTIVE", // required
 *   EvaluationTimeout: Number("int"),
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new StartResourceEvaluationCommand(input);
 * const response = await client.send(command);
 * // { // StartResourceEvaluationResponse
 * //   ResourceEvaluationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartResourceEvaluationCommandInput - {@link StartResourceEvaluationCommandInput}
 * @returns {@link StartResourceEvaluationCommandOutput}
 * @see {@link StartResourceEvaluationCommandInput} for command's `input` shape.
 * @see {@link StartResourceEvaluationCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link IdempotentParameterMismatch} (client fault)
 *  <p>Using the same client token with one or more different parameters. Specify a new client token with the parameter changes and try again.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more of the specified parameters are not valid. Verify
 * 			that your parameters are valid and try again.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 */
export class StartResourceEvaluationCommand extends $Command<
  StartResourceEvaluationCommandInput,
  StartResourceEvaluationCommandOutput,
  ConfigServiceClientResolvedConfig
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
  constructor(readonly input: StartResourceEvaluationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartResourceEvaluationCommandInput, StartResourceEvaluationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartResourceEvaluationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "StartResourceEvaluationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "StarlingDoveService",
        operation: "StartResourceEvaluation",
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
  private serialize(input: StartResourceEvaluationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartResourceEvaluationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartResourceEvaluationCommandOutput> {
    return de_StartResourceEvaluationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
