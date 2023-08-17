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

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { GetTemplateInput, GetTemplateOutput } from "../models/models_0";
import { de_GetTemplateCommand, se_GetTemplateCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetTemplateCommand}.
 */
export interface GetTemplateCommandInput extends GetTemplateInput {}
/**
 * @public
 *
 * The output of {@link GetTemplateCommand}.
 */
export interface GetTemplateCommandOutput extends GetTemplateOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns the template body for a specified stack. You can get the template for running or deleted stacks.</p>
 *          <p>For deleted stacks, <code>GetTemplate</code> returns the template for up to 90 days after the stack has been
 *    deleted.</p>
 *          <note>
 *             <p>If the template doesn't exist, a <code>ValidationError</code> is returned.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, GetTemplateCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, GetTemplateCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // GetTemplateInput
 *   StackName: "STRING_VALUE",
 *   ChangeSetName: "STRING_VALUE",
 *   TemplateStage: "Original" || "Processed",
 * };
 * const command = new GetTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetTemplateOutput
 * //   TemplateBody: "STRING_VALUE",
 * //   StagesAvailable: [ // StageList
 * //     "Original" || "Processed",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetTemplateCommandInput - {@link GetTemplateCommandInput}
 * @returns {@link GetTemplateCommandOutput}
 * @see {@link GetTemplateCommandInput} for command's `input` shape.
 * @see {@link GetTemplateCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link ChangeSetNotFoundException} (client fault)
 *  <p>The specified change set name or ID doesn't exit. To view valid change sets for a stack, use the
 *     <code>ListChangeSets</code> operation.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 */
export class GetTemplateCommand extends $Command<
  GetTemplateCommandInput,
  GetTemplateCommandOutput,
  CloudFormationClientResolvedConfig
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
  constructor(readonly input: GetTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetTemplateCommandInput, GetTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetTemplateCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "GetTemplateCommand";
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
  private serialize(input: GetTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTemplateCommandOutput> {
    return de_GetTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
