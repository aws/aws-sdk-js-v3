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

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { ListTaskDefinitionFamiliesRequest, ListTaskDefinitionFamiliesResponse } from "../models/models_0";
import { de_ListTaskDefinitionFamiliesCommand, se_ListTaskDefinitionFamiliesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTaskDefinitionFamiliesCommand}.
 */
export interface ListTaskDefinitionFamiliesCommandInput extends ListTaskDefinitionFamiliesRequest {}
/**
 * @public
 *
 * The output of {@link ListTaskDefinitionFamiliesCommand}.
 */
export interface ListTaskDefinitionFamiliesCommandOutput extends ListTaskDefinitionFamiliesResponse, __MetadataBearer {}

/**
 * @public
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
 * const input = { // ListTaskDefinitionFamiliesRequest
 *   familyPrefix: "STRING_VALUE",
 *   status: "ACTIVE" || "INACTIVE" || "ALL",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListTaskDefinitionFamiliesCommand(input);
 * const response = await client.send(command);
 * // { // ListTaskDefinitionFamiliesResponse
 * //   families: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTaskDefinitionFamiliesCommandInput - {@link ListTaskDefinitionFamiliesCommandInput}
 * @returns {@link ListTaskDefinitionFamiliesCommandOutput}
 * @see {@link ListTaskDefinitionFamiliesCommandInput} for command's `input` shape.
 * @see {@link ListTaskDefinitionFamiliesCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using
 * 			an action or resource on behalf of a user that doesn't have permissions to use the
 * 			action or resource,. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
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

  /**
   * @public
   */
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
  private serialize(input: ListTaskDefinitionFamiliesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListTaskDefinitionFamiliesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListTaskDefinitionFamiliesCommandOutput> {
    return de_ListTaskDefinitionFamiliesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
