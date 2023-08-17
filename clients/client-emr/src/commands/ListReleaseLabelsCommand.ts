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
import { ListReleaseLabelsInput, ListReleaseLabelsOutput } from "../models/models_0";
import { de_ListReleaseLabelsCommand, se_ListReleaseLabelsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListReleaseLabelsCommand}.
 */
export interface ListReleaseLabelsCommandInput extends ListReleaseLabelsInput {}
/**
 * @public
 *
 * The output of {@link ListReleaseLabelsCommand}.
 */
export interface ListReleaseLabelsCommandOutput extends ListReleaseLabelsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves release labels of Amazon EMR services in the Region where the API is
 *          called.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListReleaseLabelsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListReleaseLabelsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // ListReleaseLabelsInput
 *   Filters: { // ReleaseLabelFilter
 *     Prefix: "STRING_VALUE",
 *     Application: "STRING_VALUE",
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListReleaseLabelsCommand(input);
 * const response = await client.send(command);
 * // { // ListReleaseLabelsOutput
 * //   ReleaseLabels: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListReleaseLabelsCommandInput - {@link ListReleaseLabelsCommandInput}
 * @returns {@link ListReleaseLabelsCommandOutput}
 * @see {@link ListReleaseLabelsCommandInput} for command's `input` shape.
 * @see {@link ListReleaseLabelsCommandOutput} for command's `response` shape.
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
export class ListReleaseLabelsCommand extends $Command<
  ListReleaseLabelsCommandInput,
  ListReleaseLabelsCommandOutput,
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
  constructor(readonly input: ListReleaseLabelsCommandInput) {
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
  ): Handler<ListReleaseLabelsCommandInput, ListReleaseLabelsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListReleaseLabelsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "ListReleaseLabelsCommand";
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
  private serialize(input: ListReleaseLabelsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListReleaseLabelsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListReleaseLabelsCommandOutput> {
    return de_ListReleaseLabelsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
