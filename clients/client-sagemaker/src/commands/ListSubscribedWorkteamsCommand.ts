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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ListSubscribedWorkteamsRequest, ListSubscribedWorkteamsResponse } from "../models/models_3";
import { de_ListSubscribedWorkteamsCommand, se_ListSubscribedWorkteamsCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSubscribedWorkteamsCommand}.
 */
export interface ListSubscribedWorkteamsCommandInput extends ListSubscribedWorkteamsRequest {}
/**
 * @public
 *
 * The output of {@link ListSubscribedWorkteamsCommand}.
 */
export interface ListSubscribedWorkteamsCommandOutput extends ListSubscribedWorkteamsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets a list of the work teams that you are subscribed to in the Amazon Web Services Marketplace. The
 *             list may be empty if no work team satisfies the filter specified in the
 *                 <code>NameContains</code> parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListSubscribedWorkteamsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListSubscribedWorkteamsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListSubscribedWorkteamsRequest
 *   NameContains: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListSubscribedWorkteamsCommand(input);
 * const response = await client.send(command);
 * // { // ListSubscribedWorkteamsResponse
 * //   SubscribedWorkteams: [ // SubscribedWorkteams // required
 * //     { // SubscribedWorkteam
 * //       WorkteamArn: "STRING_VALUE", // required
 * //       MarketplaceTitle: "STRING_VALUE",
 * //       SellerName: "STRING_VALUE",
 * //       MarketplaceDescription: "STRING_VALUE",
 * //       ListingId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSubscribedWorkteamsCommandInput - {@link ListSubscribedWorkteamsCommandInput}
 * @returns {@link ListSubscribedWorkteamsCommandOutput}
 * @see {@link ListSubscribedWorkteamsCommandInput} for command's `input` shape.
 * @see {@link ListSubscribedWorkteamsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class ListSubscribedWorkteamsCommand extends $Command<
  ListSubscribedWorkteamsCommandInput,
  ListSubscribedWorkteamsCommandOutput,
  SageMakerClientResolvedConfig
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
  constructor(readonly input: ListSubscribedWorkteamsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSubscribedWorkteamsCommandInput, ListSubscribedWorkteamsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSubscribedWorkteamsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListSubscribedWorkteamsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "ListSubscribedWorkteams",
      },
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
  private serialize(input: ListSubscribedWorkteamsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSubscribedWorkteamsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSubscribedWorkteamsCommandOutput> {
    return de_ListSubscribedWorkteamsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
