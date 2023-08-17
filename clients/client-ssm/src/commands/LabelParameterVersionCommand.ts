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

import { LabelParameterVersionRequest, LabelParameterVersionResult } from "../models/models_1";
import { de_LabelParameterVersionCommand, se_LabelParameterVersionCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link LabelParameterVersionCommand}.
 */
export interface LabelParameterVersionCommandInput extends LabelParameterVersionRequest {}
/**
 * @public
 *
 * The output of {@link LabelParameterVersionCommand}.
 */
export interface LabelParameterVersionCommandOutput extends LabelParameterVersionResult, __MetadataBearer {}

/**
 * @public
 * <p>A parameter label is a user-defined alias to help you manage different versions of a
 *    parameter. When you modify a parameter, Amazon Web Services Systems Manager automatically saves a new version and
 *    increments the version number by one. A label can help you remember the purpose of a parameter
 *    when there are multiple versions. </p>
 *          <p>Parameter labels have the following requirements and restrictions.</p>
 *          <ul>
 *             <li>
 *                <p>A version of a parameter can have a maximum of 10 labels.</p>
 *             </li>
 *             <li>
 *                <p>You can't attach the same label to different versions of the same parameter. For example,
 *      if version 1 has the label Production, then you can't attach Production to version 2.</p>
 *             </li>
 *             <li>
 *                <p>You can move a label from one version of a parameter to another.</p>
 *             </li>
 *             <li>
 *                <p>You can't create a label when you create a new parameter. You must attach a label to a
 *      specific version of a parameter.</p>
 *             </li>
 *             <li>
 *                <p>If you no longer want to use a parameter label, then you can either delete it or move it
 *      to a different version of a parameter.</p>
 *             </li>
 *             <li>
 *                <p>A label can have a maximum of 100 characters.</p>
 *             </li>
 *             <li>
 *                <p>Labels can contain letters (case sensitive), numbers, periods (.), hyphens (-), or
 *      underscores (_).</p>
 *             </li>
 *             <li>
 *                <p>Labels can't begin with a number, "<code>aws</code>" or "<code>ssm</code>" (not case
 *      sensitive). If a label fails to meet these requirements, then the label isn't associated with a
 *      parameter and the system displays it in the list of InvalidLabels.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, LabelParameterVersionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, LabelParameterVersionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // LabelParameterVersionRequest
 *   Name: "STRING_VALUE", // required
 *   ParameterVersion: Number("long"),
 *   Labels: [ // ParameterLabelList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new LabelParameterVersionCommand(input);
 * const response = await client.send(command);
 * // { // LabelParameterVersionResult
 * //   InvalidLabels: [ // ParameterLabelList
 * //     "STRING_VALUE",
 * //   ],
 * //   ParameterVersion: Number("long"),
 * // };
 *
 * ```
 *
 * @param LabelParameterVersionCommandInput - {@link LabelParameterVersionCommandInput}
 * @returns {@link LabelParameterVersionCommandOutput}
 * @see {@link LabelParameterVersionCommandInput} for command's `input` shape.
 * @see {@link LabelParameterVersionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link ParameterNotFound} (client fault)
 *  <p>The parameter couldn't be found. Verify the name and try again.</p>
 *
 * @throws {@link ParameterVersionLabelLimitExceeded} (client fault)
 *  <p>A parameter version can have a maximum of ten labels.</p>
 *
 * @throws {@link ParameterVersionNotFound} (client fault)
 *  <p>The specified parameter version wasn't found. Verify the parameter name and version, and try
 *    again.</p>
 *
 * @throws {@link TooManyUpdates} (client fault)
 *  <p>There are concurrent updates for a resource that supports one update at a time.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class LabelParameterVersionCommand extends $Command<
  LabelParameterVersionCommandInput,
  LabelParameterVersionCommandOutput,
  SSMClientResolvedConfig
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
  constructor(readonly input: LabelParameterVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<LabelParameterVersionCommandInput, LabelParameterVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, LabelParameterVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "LabelParameterVersionCommand";
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
  private serialize(input: LabelParameterVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_LabelParameterVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<LabelParameterVersionCommandOutput> {
    return de_LabelParameterVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
