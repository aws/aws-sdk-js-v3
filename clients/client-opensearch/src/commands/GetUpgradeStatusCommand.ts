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

import { GetUpgradeStatusRequest, GetUpgradeStatusResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { de_GetUpgradeStatusCommand, se_GetUpgradeStatusCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetUpgradeStatusCommand}.
 */
export interface GetUpgradeStatusCommandInput extends GetUpgradeStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetUpgradeStatusCommand}.
 */
export interface GetUpgradeStatusCommandOutput extends GetUpgradeStatusResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the most recent status of the last upgrade or upgrade eligibility check performed on
 *    an Amazon OpenSearch Service domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, GetUpgradeStatusCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, GetUpgradeStatusCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const input = { // GetUpgradeStatusRequest
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new GetUpgradeStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetUpgradeStatusResponse
 * //   UpgradeStep: "PRE_UPGRADE_CHECK" || "SNAPSHOT" || "UPGRADE",
 * //   StepStatus: "IN_PROGRESS" || "SUCCEEDED" || "SUCCEEDED_WITH_ISSUES" || "FAILED",
 * //   UpgradeName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetUpgradeStatusCommandInput - {@link GetUpgradeStatusCommandInput}
 * @returns {@link GetUpgradeStatusCommandOutput}
 * @see {@link GetUpgradeStatusCommandInput} for command's `input` shape.
 * @see {@link GetUpgradeStatusCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access an unsupported operation.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 */
export class GetUpgradeStatusCommand extends $Command<
  GetUpgradeStatusCommandInput,
  GetUpgradeStatusCommandOutput,
  OpenSearchClientResolvedConfig
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
  constructor(readonly input: GetUpgradeStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpenSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetUpgradeStatusCommandInput, GetUpgradeStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetUpgradeStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchClient";
    const commandName = "GetUpgradeStatusCommand";
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
  private serialize(input: GetUpgradeStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetUpgradeStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetUpgradeStatusCommandOutput> {
    return de_GetUpgradeStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
