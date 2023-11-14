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

import { UpgradeReviewTemplateLensReviewInput } from "../models/models_0";
import {
  de_UpgradeReviewTemplateLensReviewCommand,
  se_UpgradeReviewTemplateLensReviewCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpgradeReviewTemplateLensReviewCommand}.
 */
export interface UpgradeReviewTemplateLensReviewCommandInput extends UpgradeReviewTemplateLensReviewInput {}
/**
 * @public
 *
 * The output of {@link UpgradeReviewTemplateLensReviewCommand}.
 */
export interface UpgradeReviewTemplateLensReviewCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Upgrade the lens review of a review template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, UpgradeReviewTemplateLensReviewCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, UpgradeReviewTemplateLensReviewCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const input = { // UpgradeReviewTemplateLensReviewInput
 *   TemplateArn: "STRING_VALUE", // required
 *   LensAlias: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new UpgradeReviewTemplateLensReviewCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpgradeReviewTemplateLensReviewCommandInput - {@link UpgradeReviewTemplateLensReviewCommandInput}
 * @returns {@link UpgradeReviewTemplateLensReviewCommandOutput}
 * @see {@link UpgradeReviewTemplateLensReviewCommandInput} for command's `input` shape.
 * @see {@link UpgradeReviewTemplateLensReviewCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The resource has already been processed, was deleted, or is too large.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
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
export class UpgradeReviewTemplateLensReviewCommand extends $Command<
  UpgradeReviewTemplateLensReviewCommandInput,
  UpgradeReviewTemplateLensReviewCommandOutput,
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
  constructor(readonly input: UpgradeReviewTemplateLensReviewCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WellArchitectedClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpgradeReviewTemplateLensReviewCommandInput, UpgradeReviewTemplateLensReviewCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpgradeReviewTemplateLensReviewCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WellArchitectedClient";
    const commandName = "UpgradeReviewTemplateLensReviewCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "WellArchitectedApiServiceLambda",
        operation: "UpgradeReviewTemplateLensReview",
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
  private serialize(
    input: UpgradeReviewTemplateLensReviewCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpgradeReviewTemplateLensReviewCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpgradeReviewTemplateLensReviewCommandOutput> {
    return de_UpgradeReviewTemplateLensReviewCommand(output, context);
  }
}
