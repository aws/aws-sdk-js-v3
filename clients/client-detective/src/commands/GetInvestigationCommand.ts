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

import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { GetInvestigationRequest, GetInvestigationResponse } from "../models/models_0";
import { de_GetInvestigationCommand, se_GetInvestigationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetInvestigationCommand}.
 */
export interface GetInvestigationCommandInput extends GetInvestigationRequest {}
/**
 * @public
 *
 * The output of {@link GetInvestigationCommand}.
 */
export interface GetInvestigationCommandOutput extends GetInvestigationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the investigation results of an investigation for a behavior graph. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, GetInvestigationCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, GetInvestigationCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * const client = new DetectiveClient(config);
 * const input = { // GetInvestigationRequest
 *   GraphArn: "STRING_VALUE", // required
 *   InvestigationId: "STRING_VALUE", // required
 * };
 * const command = new GetInvestigationCommand(input);
 * const response = await client.send(command);
 * // { // GetInvestigationResponse
 * //   GraphArn: "STRING_VALUE",
 * //   InvestigationId: "STRING_VALUE",
 * //   EntityArn: "STRING_VALUE",
 * //   EntityType: "IAM_ROLE" || "IAM_USER",
 * //   CreatedTime: new Date("TIMESTAMP"),
 * //   ScopeStartTime: new Date("TIMESTAMP"),
 * //   ScopeEndTime: new Date("TIMESTAMP"),
 * //   Status: "RUNNING" || "FAILED" || "SUCCESSFUL",
 * //   Severity: "INFORMATIONAL" || "LOW" || "MEDIUM" || "HIGH" || "CRITICAL",
 * //   State: "ACTIVE" || "ARCHIVED",
 * // };
 *
 * ```
 *
 * @param GetInvestigationCommandInput - {@link GetInvestigationCommandInput}
 * @returns {@link GetInvestigationCommandOutput}
 * @see {@link GetInvestigationCommandInput} for command's `input` shape.
 * @see {@link GetInvestigationCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for DetectiveClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request issuer does not have permission to access this resource or perform this
 *          operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request was valid but failed because of a problem with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request refers to a nonexistent resource.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request cannot be completed because too many other requests are occurring at the
 *          same time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters are invalid.</p>
 *
 * @throws {@link DetectiveServiceException}
 * <p>Base exception class for all service exceptions from Detective service.</p>
 *
 */
export class GetInvestigationCommand extends $Command<
  GetInvestigationCommandInput,
  GetInvestigationCommandOutput,
  DetectiveClientResolvedConfig
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
  constructor(readonly input: GetInvestigationCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DetectiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetInvestigationCommandInput, GetInvestigationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetInvestigationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DetectiveClient";
    const commandName = "GetInvestigationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonDetective",
        operation: "GetInvestigation",
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
  private serialize(input: GetInvestigationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetInvestigationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetInvestigationCommandOutput> {
    return de_GetInvestigationCommand(output, context);
  }
}
