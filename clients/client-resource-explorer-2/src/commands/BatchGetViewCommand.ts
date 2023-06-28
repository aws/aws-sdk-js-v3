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

import { BatchGetViewInput, BatchGetViewOutput, BatchGetViewOutputFilterSensitiveLog } from "../models/models_0";
import { de_BatchGetViewCommand, se_BatchGetViewCommand } from "../protocols/Aws_restJson1";
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
 * The input for {@link BatchGetViewCommand}.
 */
export interface BatchGetViewCommandInput extends BatchGetViewInput {}
/**
 * @public
 *
 * The output of {@link BatchGetViewCommand}.
 */
export interface BatchGetViewCommandOutput extends BatchGetViewOutput, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves details about a list of views.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceExplorer2Client, BatchGetViewCommand } from "@aws-sdk/client-resource-explorer-2"; // ES Modules import
 * // const { ResourceExplorer2Client, BatchGetViewCommand } = require("@aws-sdk/client-resource-explorer-2"); // CommonJS import
 * const client = new ResourceExplorer2Client(config);
 * const input = { // BatchGetViewInput
 *   ViewArns: [ // ViewArnList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetViewCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetViewOutput
 * //   Views: [ // ViewList
 * //     { // View
 * //       ViewArn: "STRING_VALUE",
 * //       Owner: "STRING_VALUE",
 * //       LastUpdatedAt: new Date("TIMESTAMP"),
 * //       Scope: "STRING_VALUE",
 * //       IncludedProperties: [ // IncludedPropertyList
 * //         { // IncludedProperty
 * //           Name: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       Filters: { // SearchFilter
 * //         FilterString: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * //   Errors: [ // BatchGetViewErrors
 * //     { // BatchGetViewError
 * //       ViewArn: "STRING_VALUE", // required
 * //       ErrorMessage: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetViewCommandInput - {@link BatchGetViewCommandInput}
 * @returns {@link BatchGetViewCommandOutput}
 * @see {@link BatchGetViewCommandInput} for command's `input` shape.
 * @see {@link BatchGetViewCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request failed because you exceeded a rate limit for this operation. For more
 *             information, see <a href="https://docs.aws.amazon.com/arexug/mainline/quotas.html">Quotas
 *                 for Resource Explorer</a>.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The principal making the request isn't permitted to perform the operation.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>You provided an invalid value for one of the operation's parameters. Check the syntax
 *             for the operation, and try again.</p>
 *
 * @throws {@link ResourceExplorer2ServiceException}
 * <p>Base exception class for all service exceptions from ResourceExplorer2 service.</p>
 *
 */
export class BatchGetViewCommand extends $Command<
  BatchGetViewCommandInput,
  BatchGetViewCommandOutput,
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
  constructor(readonly input: BatchGetViewCommandInput) {
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
  ): Handler<BatchGetViewCommandInput, BatchGetViewCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, BatchGetViewCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResourceExplorer2Client";
    const commandName = "BatchGetViewCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: BatchGetViewOutputFilterSensitiveLog,
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
  private serialize(input: BatchGetViewCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchGetViewCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetViewCommandOutput> {
    return de_BatchGetViewCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
