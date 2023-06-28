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
} from "@smithy/types";

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import {
  CreateLaunchConfigurationTemplateRequest,
  CreateLaunchConfigurationTemplateRequestFilterSensitiveLog,
  CreateLaunchConfigurationTemplateResponse,
  CreateLaunchConfigurationTemplateResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_CreateLaunchConfigurationTemplateCommand,
  se_CreateLaunchConfigurationTemplateCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateLaunchConfigurationTemplateCommand}.
 */
export interface CreateLaunchConfigurationTemplateCommandInput extends CreateLaunchConfigurationTemplateRequest {}
/**
 * @public
 *
 * The output of {@link CreateLaunchConfigurationTemplateCommand}.
 */
export interface CreateLaunchConfigurationTemplateCommandOutput
  extends CreateLaunchConfigurationTemplateResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates a new Launch Configuration Template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, CreateLaunchConfigurationTemplateCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, CreateLaunchConfigurationTemplateCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * const client = new DrsClient(config);
 * const input = { // CreateLaunchConfigurationTemplateRequest
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   launchDisposition: "STRING_VALUE",
 *   targetInstanceTypeRightSizingMethod: "STRING_VALUE",
 *   copyPrivateIp: true || false,
 *   copyTags: true || false,
 *   licensing: { // Licensing
 *     osByol: true || false,
 *   },
 *   exportBucketArn: "STRING_VALUE",
 * };
 * const command = new CreateLaunchConfigurationTemplateCommand(input);
 * const response = await client.send(command);
 * // { // CreateLaunchConfigurationTemplateResponse
 * //   launchConfigurationTemplate: { // LaunchConfigurationTemplate
 * //     launchConfigurationTemplateID: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     tags: { // TagsMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     launchDisposition: "STRING_VALUE",
 * //     targetInstanceTypeRightSizingMethod: "STRING_VALUE",
 * //     copyPrivateIp: true || false,
 * //     copyTags: true || false,
 * //     licensing: { // Licensing
 * //       osByol: true || false,
 * //     },
 * //     exportBucketArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateLaunchConfigurationTemplateCommandInput - {@link CreateLaunchConfigurationTemplateCommandInput}
 * @returns {@link CreateLaunchConfigurationTemplateCommandOutput}
 * @see {@link CreateLaunchConfigurationTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateLaunchConfigurationTemplateCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request could not be completed because its exceeded the service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>The account performing the request has not been initialized.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the AWS service.</p>
 *
 * @throws {@link DrsServiceException}
 * <p>Base exception class for all service exceptions from Drs service.</p>
 *
 */
export class CreateLaunchConfigurationTemplateCommand extends $Command<
  CreateLaunchConfigurationTemplateCommandInput,
  CreateLaunchConfigurationTemplateCommandOutput,
  DrsClientResolvedConfig
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
  constructor(readonly input: CreateLaunchConfigurationTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DrsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateLaunchConfigurationTemplateCommandInput, CreateLaunchConfigurationTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateLaunchConfigurationTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DrsClient";
    const commandName = "CreateLaunchConfigurationTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLaunchConfigurationTemplateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateLaunchConfigurationTemplateResponseFilterSensitiveLog,
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
  private serialize(
    input: CreateLaunchConfigurationTemplateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateLaunchConfigurationTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateLaunchConfigurationTemplateCommandOutput> {
    return de_CreateLaunchConfigurationTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
