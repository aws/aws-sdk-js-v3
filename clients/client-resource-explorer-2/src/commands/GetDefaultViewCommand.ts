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

import { GetDefaultViewOutput } from "../models/models_0";
import { de_GetDefaultViewCommand, se_GetDefaultViewCommand } from "../protocols/Aws_restJson1";
import {
  ResourceExplorer2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ResourceExplorer2Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDefaultViewCommand}.
 */
export interface GetDefaultViewCommandInput {}
/**
 * @public
 *
 * The output of {@link GetDefaultViewCommand}.
 */
export interface GetDefaultViewCommandOutput extends GetDefaultViewOutput, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the Amazon Resource Name (ARN) of the view that is the default for the
 *             Amazon Web Services Region in which you call this operation. You can then call <a>GetView</a> to retrieve the details of that view.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceExplorer2Client, GetDefaultViewCommand } from "@aws-sdk/client-resource-explorer-2"; // ES Modules import
 * // const { ResourceExplorer2Client, GetDefaultViewCommand } = require("@aws-sdk/client-resource-explorer-2"); // CommonJS import
 * const client = new ResourceExplorer2Client(config);
 * const input = {};
 * const command = new GetDefaultViewCommand(input);
 * const response = await client.send(command);
 * // { // GetDefaultViewOutput
 * //   ViewArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDefaultViewCommandInput - {@link GetDefaultViewCommandInput}
 * @returns {@link GetDefaultViewCommandOutput}
 * @see {@link GetDefaultViewCommandInput} for command's `input` shape.
 * @see {@link GetDefaultViewCommandOutput} for command's `response` shape.
 * @see {@link ResourceExplorer2ClientResolvedConfig | config} for ResourceExplorer2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The credentials that you used to call this operation don't have the minimum required
 *             permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed because of internal service error. Try your request again
 *             later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>You specified a resource that doesn't exist. Check the ID or ARN that you used to
 *             identity the resource, and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request failed because you exceeded a rate limit for this operation. For more
 *             information, see <a href="https://docs.aws.amazon.com/arexug/mainline/quotas.html">Quotas
 *                 for Resource Explorer</a>.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>You provided an invalid value for one of the operation's parameters. Check the syntax
 *             for the operation, and try again.</p>
 *
 * @throws {@link ResourceExplorer2ServiceException}
 * <p>Base exception class for all service exceptions from ResourceExplorer2 service.</p>
 *
 */
export class GetDefaultViewCommand extends $Command<
  GetDefaultViewCommandInput,
  GetDefaultViewCommandOutput,
  ResourceExplorer2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: GetDefaultViewCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResourceExplorer2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDefaultViewCommandInput, GetDefaultViewCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDefaultViewCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResourceExplorer2Client";
    const commandName = "GetDefaultViewCommand";
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
  private serialize(input: GetDefaultViewCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDefaultViewCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDefaultViewCommandOutput> {
    return de_GetDefaultViewCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
