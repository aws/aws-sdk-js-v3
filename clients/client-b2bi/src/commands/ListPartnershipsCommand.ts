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

import { B2biClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../B2biClient";
import { ListPartnershipsRequest, ListPartnershipsResponse } from "../models/models_0";
import { de_ListPartnershipsCommand, se_ListPartnershipsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListPartnershipsCommand}.
 */
export interface ListPartnershipsCommandInput extends ListPartnershipsRequest {}
/**
 * @public
 *
 * The output of {@link ListPartnershipsCommand}.
 */
export interface ListPartnershipsCommandOutput extends ListPartnershipsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the partnerships associated with your Amazon Web Services account for your current or specified region. A partnership represents the connection between you and your trading partner. It ties
 *    together a profile and one or more trading capabilities.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { B2biClient, ListPartnershipsCommand } from "@aws-sdk/client-b2bi"; // ES Modules import
 * // const { B2biClient, ListPartnershipsCommand } = require("@aws-sdk/client-b2bi"); // CommonJS import
 * const client = new B2biClient(config);
 * const input = { // ListPartnershipsRequest
 *   profileId: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListPartnershipsCommand(input);
 * const response = await client.send(command);
 * // { // ListPartnershipsResponse
 * //   partnerships: [ // PartnershipList // required
 * //     { // PartnershipSummary
 * //       profileId: "STRING_VALUE", // required
 * //       partnershipId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE",
 * //       capabilities: [ // PartnershipCapabilities
 * //         "STRING_VALUE",
 * //       ],
 * //       tradingPartnerId: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       modifiedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPartnershipsCommandInput - {@link ListPartnershipsCommandInput}
 * @returns {@link ListPartnershipsCommandOutput}
 * @see {@link ListPartnershipsCommandInput} for command's `input` shape.
 * @see {@link ListPartnershipsCommandOutput} for command's `response` shape.
 * @see {@link B2biClientResolvedConfig | config} for B2biClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown when an error occurs in the Amazon Web Services B2B Data Interchange service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Occurs when the requested resource does not exist, or cannot be found. In some cases, the resource exists in a region other than the region specified in the API call.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling: the data speed and rendering may be limited depending on various parameters and conditions.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Occurs when a B2BI object cannot be validated against a request from another object.</p>
 *
 * @throws {@link B2biServiceException}
 * <p>Base exception class for all service exceptions from B2bi service.</p>
 *
 */
export class ListPartnershipsCommand extends $Command<
  ListPartnershipsCommandInput,
  ListPartnershipsCommandOutput,
  B2biClientResolvedConfig
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
  constructor(readonly input: ListPartnershipsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: B2biClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPartnershipsCommandInput, ListPartnershipsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPartnershipsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "B2biClient";
    const commandName = "ListPartnershipsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "B2BI",
        operation: "ListPartnerships",
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
  private serialize(input: ListPartnershipsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListPartnershipsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPartnershipsCommandOutput> {
    return de_ListPartnershipsCommand(output, context);
  }
}
