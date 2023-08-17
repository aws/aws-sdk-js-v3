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

import { GetViewInput, GetViewOutput, GetViewOutputFilterSensitiveLog } from "../models/models_0";
import { de_GetViewCommand, se_GetViewCommand } from "../protocols/Aws_restJson1";
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
 * The input for {@link GetViewCommand}.
 */
export interface GetViewCommandInput extends GetViewInput {}
/**
 * @public
 *
 * The output of {@link GetViewCommand}.
 */
export interface GetViewCommandOutput extends GetViewOutput, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves details of the specified view.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceExplorer2Client, GetViewCommand } from "@aws-sdk/client-resource-explorer-2"; // ES Modules import
 * // const { ResourceExplorer2Client, GetViewCommand } = require("@aws-sdk/client-resource-explorer-2"); // CommonJS import
 * const client = new ResourceExplorer2Client(config);
 * const input = { // GetViewInput
 *   ViewArn: "STRING_VALUE", // required
 * };
 * const command = new GetViewCommand(input);
 * const response = await client.send(command);
 * // { // GetViewOutput
 * //   View: { // View
 * //     ViewArn: "STRING_VALUE",
 * //     Owner: "STRING_VALUE",
 * //     LastUpdatedAt: new Date("TIMESTAMP"),
 * //     Scope: "STRING_VALUE",
 * //     IncludedProperties: [ // IncludedPropertyList
 * //       { // IncludedProperty
 * //         Name: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     Filters: { // SearchFilter
 * //       FilterString: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetViewCommandInput - {@link GetViewCommandInput}
 * @returns {@link GetViewCommandOutput}
 * @see {@link GetViewCommandInput} for command's `input` shape.
 * @see {@link GetViewCommandOutput} for command's `response` shape.
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
export class GetViewCommand extends $Command<
  GetViewCommandInput,
  GetViewCommandOutput,
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
  constructor(readonly input: GetViewCommandInput) {
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
  ): Handler<GetViewCommandInput, GetViewCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetViewCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResourceExplorer2Client";
    const commandName = "GetViewCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetViewOutputFilterSensitiveLog,
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
  private serialize(input: GetViewCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetViewCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetViewCommandOutput> {
    return de_GetViewCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
