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

import { GetAccountSettingsRequest, GetAccountSettingsResponse } from "../models/models_0";
import {
  OpenSearchServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../OpenSearchServerlessClient";
import { de_GetAccountSettingsCommand, se_GetAccountSettingsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetAccountSettingsCommand}.
 */
export interface GetAccountSettingsCommandInput extends GetAccountSettingsRequest {}
/**
 * @public
 *
 * The output of {@link GetAccountSettingsCommand}.
 */
export interface GetAccountSettingsCommandOutput extends GetAccountSettingsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns account-level settings related to OpenSearch Serverless.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, GetAccountSettingsCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, GetAccountSettingsCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * const client = new OpenSearchServerlessClient(config);
 * const input = {};
 * const command = new GetAccountSettingsCommand(input);
 * const response = await client.send(command);
 * // { // GetAccountSettingsResponse
 * //   accountSettingsDetail: { // AccountSettingsDetail
 * //     capacityLimits: { // CapacityLimits
 * //       maxIndexingCapacityInOCU: Number("int"),
 * //       maxSearchCapacityInOCU: Number("int"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAccountSettingsCommandInput - {@link GetAccountSettingsCommandInput}
 * @returns {@link GetAccountSettingsCommandOutput}
 * @see {@link GetAccountSettingsCommandInput} for command's `input` shape.
 * @see {@link GetAccountSettingsCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchServerlessClientResolvedConfig | config} for OpenSearchServerlessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Thrown when an error internal to the service occurs while processing a request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Thrown when the HTTP request contains invalid input or is missing required
 *             input.</p>
 *
 * @throws {@link OpenSearchServerlessServiceException}
 * <p>Base exception class for all service exceptions from OpenSearchServerless service.</p>
 *
 */
export class GetAccountSettingsCommand extends $Command<
  GetAccountSettingsCommandInput,
  GetAccountSettingsCommandOutput,
  OpenSearchServerlessClientResolvedConfig
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
  constructor(readonly input: GetAccountSettingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpenSearchServerlessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAccountSettingsCommandInput, GetAccountSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAccountSettingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchServerlessClient";
    const commandName = "GetAccountSettingsCommand";
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
  private serialize(input: GetAccountSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetAccountSettingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAccountSettingsCommandOutput> {
    return de_GetAccountSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
