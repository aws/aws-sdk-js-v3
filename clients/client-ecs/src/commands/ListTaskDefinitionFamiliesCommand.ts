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

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import {
  ListTaskDefinitionFamiliesRequest,
  ListTaskDefinitionFamiliesRequestFilterSensitiveLog,
  ListTaskDefinitionFamiliesResponse,
  ListTaskDefinitionFamiliesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListTaskDefinitionFamiliesCommand,
  serializeAws_json1_1ListTaskDefinitionFamiliesCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link ListTaskDefinitionFamiliesCommand}.
 */
export interface ListTaskDefinitionFamiliesCommandInput extends ListTaskDefinitionFamiliesRequest {}
/**
 * The output of {@link ListTaskDefinitionFamiliesCommand}.
 */
export interface ListTaskDefinitionFamiliesCommandOutput extends ListTaskDefinitionFamiliesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of task definition families that are registered to your account. This
 * 			list includes task definition families that no longer have any <code>ACTIVE</code> task
 * 			definition revisions.</p>
 *          <p>You can filter out task definition families that don't contain any <code>ACTIVE</code>
 * 			task definition revisions by setting the <code>status</code> parameter to
 * 				<code>ACTIVE</code>. You can also filter the results with the
 * 				<code>familyPrefix</code> parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, ListTaskDefinitionFamiliesCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, ListTaskDefinitionFamiliesCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new ListTaskDefinitionFamiliesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTaskDefinitionFamiliesCommandInput} for command's `input` shape.
 * @see {@link ListTaskDefinitionFamiliesCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @example To list your registered task definition families
 * ```javascript
 * // This example lists all of your registered task definition families.
 * const input = {};
 * const command = new ListTaskDefinitionFamiliesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "families": [
 *     "node-js-app",
 *     "web-timer",
 *     "hpcc",
 *     "hpcc-c4-8xlarge"
 *   ]
 * }
 * *\/
 * // example id: b5c89769-1d94-4ca2-a79e-8069103c7f75
 * ```
 *
 * @example To filter your registered task definition families
 * ```javascript
 * // This example lists the task definition revisions that start with "hpcc".
 * const input = {
 *   "familyPrefix": "hpcc"
 * };
 * const command = new ListTaskDefinitionFamiliesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "families": [
 *     "hpcc",
 *     "hpcc-c4-8xlarge"
 *   ]
 * }
 * *\/
 * // example id: 8a4cf9a6-42c1-4fe3-852d-99ac8968e11b
 * ```
 *
 */
export class ListTaskDefinitionFamiliesCommand extends $Command<
  ListTaskDefinitionFamiliesCommandInput,
  ListTaskDefinitionFamiliesCommandOutput,
  ECSClientResolvedConfig
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

  constructor(readonly input: ListTaskDefinitionFamiliesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTaskDefinitionFamiliesCommandInput, ListTaskDefinitionFamiliesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTaskDefinitionFamiliesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "ListTaskDefinitionFamiliesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTaskDefinitionFamiliesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListTaskDefinitionFamiliesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTaskDefinitionFamiliesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListTaskDefinitionFamiliesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListTaskDefinitionFamiliesCommandOutput> {
    return deserializeAws_json1_1ListTaskDefinitionFamiliesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
