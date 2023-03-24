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

import { FisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FisClient";
import { CreateExperimentTemplateRequest, CreateExperimentTemplateResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateExperimentTemplateCommand,
  serializeAws_restJson1CreateExperimentTemplateCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateExperimentTemplateCommand}.
 */
export interface CreateExperimentTemplateCommandInput extends CreateExperimentTemplateRequest {}
/**
 * @public
 *
 * The output of {@link CreateExperimentTemplateCommand}.
 */
export interface CreateExperimentTemplateCommandOutput extends CreateExperimentTemplateResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an experiment template. </p>
 *          <p>An experiment template includes the following components:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Targets</b>: A target can be a specific resource in
 *                your Amazon Web Services environment, or one or more resources that match criteria that you
 *                specify, for example, resources that have specific tags.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Actions</b>: The actions to carry out on the
 *                target. You can specify multiple actions, the duration of each action, and when to start each action during an experiment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Stop conditions</b>: If a stop condition is
 *                triggered while an experiment is running, the experiment is automatically
 *                stopped. You can define a stop condition as a CloudWatch alarm.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/experiment-templates.html">Experiment templates</a>
 *          in the <i>Fault Injection Simulator User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, CreateExperimentTemplateCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, CreateExperimentTemplateCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * const client = new FisClient(config);
 * const input = {
 *   clientToken: "STRING_VALUE", // required
 *   description: "STRING_VALUE", // required
 *   stopConditions: [ // required
 *     {
 *       source: "STRING_VALUE", // required
 *       value: "STRING_VALUE",
 *     },
 *   ],
 *   targets: {
 *     "<keys>": {
 *       resourceType: "STRING_VALUE", // required
 *       resourceArns: [
 *         "STRING_VALUE",
 *       ],
 *       resourceTags: {
 *         "<keys>": "STRING_VALUE",
 *       },
 *       filters: [
 *         {
 *           path: "STRING_VALUE", // required
 *           values: [ // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *       selectionMode: "STRING_VALUE", // required
 *       parameters: {
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   },
 *   actions: { // required
 *     "<keys>": {
 *       actionId: "STRING_VALUE", // required
 *       description: "STRING_VALUE",
 *       parameters: {
 *         "<keys>": "STRING_VALUE",
 *       },
 *       targets: {
 *         "<keys>": "STRING_VALUE",
 *       },
 *       startAfter: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   roleArn: "STRING_VALUE", // required
 *   tags: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   logConfiguration: {
 *     cloudWatchLogsConfiguration: {
 *       logGroupArn: "STRING_VALUE", // required
 *     },
 *     s3Configuration: {
 *       bucketName: "STRING_VALUE", // required
 *       prefix: "STRING_VALUE",
 *     },
 *     logSchemaVersion: Number("int"), // required
 *   },
 * };
 * const command = new CreateExperimentTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateExperimentTemplateCommandInput - {@link CreateExperimentTemplateCommandInput}
 * @returns {@link CreateExperimentTemplateCommandOutput}
 * @see {@link CreateExperimentTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateExperimentTemplateCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for FisClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of a conflict.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded your service quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The specified input is not valid, or fails to satisfy the constraints for the request.</p>
 *
 *
 */
export class CreateExperimentTemplateCommand extends $Command<
  CreateExperimentTemplateCommandInput,
  CreateExperimentTemplateCommandOutput,
  FisClientResolvedConfig
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
  constructor(readonly input: CreateExperimentTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateExperimentTemplateCommandInput, CreateExperimentTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateExperimentTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FisClient";
    const commandName = "CreateExperimentTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: CreateExperimentTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateExperimentTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateExperimentTemplateCommandOutput> {
    return deserializeAws_restJson1CreateExperimentTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
