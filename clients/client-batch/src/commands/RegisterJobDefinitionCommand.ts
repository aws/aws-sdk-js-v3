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

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import {
  RegisterJobDefinitionRequest,
  RegisterJobDefinitionRequestFilterSensitiveLog,
  RegisterJobDefinitionResponse,
  RegisterJobDefinitionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1RegisterJobDefinitionCommand,
  serializeAws_restJson1RegisterJobDefinitionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link RegisterJobDefinitionCommand}.
 */
export interface RegisterJobDefinitionCommandInput extends RegisterJobDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link RegisterJobDefinitionCommand}.
 */
export interface RegisterJobDefinitionCommandOutput extends RegisterJobDefinitionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Registers an Batch job definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, RegisterJobDefinitionCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, RegisterJobDefinitionCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const command = new RegisterJobDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param RegisterJobDefinitionCommandInput - {@link RegisterJobDefinitionCommandInput}
 * @returns {@link RegisterJobDefinitionCommandOutput}
 * @see {@link RegisterJobDefinitionCommandInput} for command's `input` shape.
 * @see {@link RegisterJobDefinitionCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for BatchClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. One example cause is using an action or resource on behalf
 *    of a user that doesn't have permissions to use the action or resource. Another cause is specifying an identifier
 *    that's not valid.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 *
 * @example To register a job definition
 * ```javascript
 * // This example registers a job definition for a simple container job.
 * const input = {
 *   "type": "container",
 *   "containerProperties": {
 *     "command": [
 *       "sleep",
 *       "10"
 *     ],
 *     "image": "busybox",
 *     "resourceRequirements": [
 *       {
 *         "type": "MEMORY",
 *         "value": "128"
 *       },
 *       {
 *         "type": "VCPU",
 *         "value": "1"
 *       }
 *     ]
 *   },
 *   "jobDefinitionName": "sleep10"
 * };
 * const command = new RegisterJobDefinitionCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "jobDefinitionArn": "arn:aws:batch:us-east-1:012345678910:job-definition/sleep10:1",
 *   "jobDefinitionName": "sleep10",
 *   "revision": 1
 * }
 * *\/
 * // example id: to-register-a-job-definition-1481154325325
 * ```
 *
 * @example RegisterJobDefinition with tags
 * ```javascript
 * // This demonstrates calling the RegisterJobDefinition action, including tags.
 * const input = {
 *   "type": "container",
 *   "containerProperties": {
 *     "command": [
 *       "sleep",
 *       "30"
 *     ],
 *     "image": "busybox",
 *     "resourceRequirements": [
 *       {
 *         "type": "MEMORY",
 *         "value": "128"
 *       },
 *       {
 *         "type": "VCPU",
 *         "value": "1"
 *       }
 *     ]
 *   },
 *   "jobDefinitionName": "sleep30",
 *   "tags": {
 *     "Department": "Engineering",
 *     "User": "JaneDoe"
 *   }
 * };
 * const command = new RegisterJobDefinitionCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "jobDefinitionArn": "arn:aws:batch:us-east-1:012345678910:job-definition/sleep30:1",
 *   "jobDefinitionName": "sleep30",
 *   "revision": 1
 * }
 * *\/
 * // example id: registerjobdefinition-with-tags-1591290509028
 * ```
 *
 */
export class RegisterJobDefinitionCommand extends $Command<
  RegisterJobDefinitionCommandInput,
  RegisterJobDefinitionCommandOutput,
  BatchClientResolvedConfig
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
  constructor(readonly input: RegisterJobDefinitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterJobDefinitionCommandInput, RegisterJobDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RegisterJobDefinitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BatchClient";
    const commandName = "RegisterJobDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterJobDefinitionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RegisterJobDefinitionResponseFilterSensitiveLog,
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
  private serialize(input: RegisterJobDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RegisterJobDefinitionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterJobDefinitionCommandOutput> {
    return deserializeAws_restJson1RegisterJobDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
