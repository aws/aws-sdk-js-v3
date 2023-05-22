// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { SerdeContext as __SerdeContext } from "@smithy/types";

import { BatchGetSecurityControlsRequest, BatchGetSecurityControlsResponse } from "../models/models_1";
import { de_BatchGetSecurityControlsCommand, se_BatchGetSecurityControlsCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchGetSecurityControlsCommand}.
 */
export interface BatchGetSecurityControlsCommandInput extends BatchGetSecurityControlsRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetSecurityControlsCommand}.
 */
export interface BatchGetSecurityControlsCommandOutput extends BatchGetSecurityControlsResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *          Provides details about a batch of security controls for the current Amazon Web Services account and Amazon Web Services Region.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, BatchGetSecurityControlsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, BatchGetSecurityControlsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // BatchGetSecurityControlsRequest
 *   SecurityControlIds: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetSecurityControlsCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetSecurityControlsResponse
 * //   SecurityControls: [ // SecurityControls // required
 * //     { // SecurityControl
 * //       SecurityControlId: "STRING_VALUE", // required
 * //       SecurityControlArn: "STRING_VALUE", // required
 * //       Title: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE", // required
 * //       RemediationUrl: "STRING_VALUE", // required
 * //       SeverityRating: "LOW" || "MEDIUM" || "HIGH" || "CRITICAL", // required
 * //       SecurityControlStatus: "ENABLED" || "DISABLED", // required
 * //     },
 * //   ],
 * //   UnprocessedIds: [ // UnprocessedSecurityControls
 * //     { // UnprocessedSecurityControl
 * //       SecurityControlId: "STRING_VALUE", // required
 * //       ErrorCode: "INVALID_INPUT" || "ACCESS_DENIED" || "NOT_FOUND" || "LIMIT_EXCEEDED", // required
 * //       ErrorReason: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetSecurityControlsCommandInput - {@link BatchGetSecurityControlsCommandInput}
 * @returns {@link BatchGetSecurityControlsCommandOutput}
 * @see {@link BatchGetSecurityControlsCommandInput} for command's `input` shape.
 * @see {@link BatchGetSecurityControlsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 */
export class BatchGetSecurityControlsCommand extends $Command<
  BatchGetSecurityControlsCommandInput,
  BatchGetSecurityControlsCommandOutput,
  SecurityHubClientResolvedConfig
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
  constructor(readonly input: BatchGetSecurityControlsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetSecurityControlsCommandInput, BatchGetSecurityControlsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetSecurityControlsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "BatchGetSecurityControlsCommand";
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
  private serialize(input: BatchGetSecurityControlsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchGetSecurityControlsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetSecurityControlsCommandOutput> {
    return de_BatchGetSecurityControlsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
