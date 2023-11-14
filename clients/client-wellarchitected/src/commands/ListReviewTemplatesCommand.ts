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

import { ListReviewTemplatesInput, ListReviewTemplatesOutput } from "../models/models_0";
import { de_ListReviewTemplatesCommand, se_ListReviewTemplatesCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListReviewTemplatesCommand}.
 */
export interface ListReviewTemplatesCommandInput extends ListReviewTemplatesInput {}
/**
 * @public
 *
 * The output of {@link ListReviewTemplatesCommand}.
 */
export interface ListReviewTemplatesCommandOutput extends ListReviewTemplatesOutput, __MetadataBearer {}

/**
 * @public
 * <p>List review templates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListReviewTemplatesCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListReviewTemplatesCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const input = { // ListReviewTemplatesInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListReviewTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // ListReviewTemplatesOutput
 * //   ReviewTemplates: [ // ReviewTemplates
 * //     { // ReviewTemplateSummary
 * //       Description: "STRING_VALUE",
 * //       Lenses: [ // ReviewTemplateLenses
 * //         "STRING_VALUE",
 * //       ],
 * //       Owner: "STRING_VALUE",
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //       TemplateArn: "STRING_VALUE",
 * //       TemplateName: "STRING_VALUE",
 * //       UpdateStatus: "CURRENT" || "LENS_NOT_CURRENT",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListReviewTemplatesCommandInput - {@link ListReviewTemplatesCommandInput}
 * @returns {@link ListReviewTemplatesCommandOutput}
 * @see {@link ListReviewTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListReviewTemplatesCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 */
export class ListReviewTemplatesCommand extends $Command<
  ListReviewTemplatesCommandInput,
  ListReviewTemplatesCommandOutput,
  WellArchitectedClientResolvedConfig
> {
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
  constructor(readonly input: ListReviewTemplatesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WellArchitectedClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListReviewTemplatesCommandInput, ListReviewTemplatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListReviewTemplatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WellArchitectedClient";
    const commandName = "ListReviewTemplatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "WellArchitectedApiServiceLambda",
        operation: "ListReviewTemplates",
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
  private serialize(input: ListReviewTemplatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListReviewTemplatesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListReviewTemplatesCommandOutput> {
    return de_ListReviewTemplatesCommand(output, context);
  }
}
