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

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { RemoveTagsInput, RemoveTagsOutput } from "../models/models_0";
import { de_RemoveTagsCommand, se_RemoveTagsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RemoveTagsCommand}.
 */
export interface RemoveTagsCommandInput extends RemoveTagsInput {}
/**
 * @public
 *
 * The output of {@link RemoveTagsCommand}.
 */
export interface RemoveTagsCommandOutput extends RemoveTagsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Removes tags from an Amazon EMR resource, such as a cluster or Amazon EMR Studio. Tags make it easier to associate resources in various ways, such as grouping
 *          clusters to track your Amazon EMR resource allocation costs. For more information,
 *          see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag
 *             Clusters</a>. </p>
 *          <p>The following example removes the stack tag with value Prod from a cluster:</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, RemoveTagsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, RemoveTagsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // RemoveTagsInput
 *   ResourceId: "STRING_VALUE", // required
 *   TagKeys: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new RemoveTagsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveTagsCommandInput - {@link RemoveTagsCommandInput}
 * @returns {@link RemoveTagsCommandOutput}
 * @see {@link RemoveTagsCommandInput} for command's `input` shape.
 * @see {@link RemoveTagsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Amazon EMR
 *          service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 */
export class RemoveTagsCommand extends $Command<
  RemoveTagsCommandInput,
  RemoveTagsCommandOutput,
  EMRClientResolvedConfig
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
  constructor(readonly input: RemoveTagsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveTagsCommandInput, RemoveTagsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, RemoveTagsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "RemoveTagsCommand";
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
  private serialize(input: RemoveTagsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RemoveTagsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RemoveTagsCommandOutput> {
    return de_RemoveTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
