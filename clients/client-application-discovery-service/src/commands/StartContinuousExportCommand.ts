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

import {
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient";
import { StartContinuousExportRequest, StartContinuousExportResponse } from "../models/models_0";
import { de_StartContinuousExportCommand, se_StartContinuousExportCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartContinuousExportCommand}.
 */
export interface StartContinuousExportCommandInput extends StartContinuousExportRequest {}
/**
 * @public
 *
 * The output of {@link StartContinuousExportCommand}.
 */
export interface StartContinuousExportCommandOutput extends StartContinuousExportResponse, __MetadataBearer {}

/**
 * @public
 * <p>Start the continuous flow of agent's discovered data into Amazon Athena.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, StartContinuousExportCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, StartContinuousExportCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const input = {};
 * const command = new StartContinuousExportCommand(input);
 * const response = await client.send(command);
 * // { // StartContinuousExportResponse
 * //   exportId: "STRING_VALUE",
 * //   s3Bucket: "STRING_VALUE",
 * //   startTime: new Date("TIMESTAMP"),
 * //   dataSource: "AGENT",
 * //   schemaStorageConfig: { // SchemaStorageConfig
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param StartContinuousExportCommandInput - {@link StartContinuousExportCommandInput}
 * @returns {@link StartContinuousExportCommandOutput}
 * @see {@link StartContinuousExportCommandInput} for command's `input` shape.
 * @see {@link StartContinuousExportCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for ApplicationDiscoveryServiceClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *  <p>The user does not have permission to perform the action. Check the IAM
 *       policy associated with this user.</p>
 *
 * @throws {@link ConflictErrorException} (client fault)
 *  <p>Conflict error.</p>
 *
 * @throws {@link HomeRegionNotSetException} (client fault)
 *  <p>The home Region is not set. Set the home Region to continue.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid. Verify the parameters and try again.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of one or more parameters are either invalid or out of range. Verify the
 *       parameter values and try again.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This operation is not permitted.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>This issue occurs when the same <code>clientRequestToken</code> is used with the
 *         <code>StartImportTask</code> action, but with different parameters. For example, you use the
 *       same request token but have two different import URLs, you can encounter this issue. If the
 *       import tasks are meant to be different, use a different <code>clientRequestToken</code>, and
 *       try again.</p>
 *
 * @throws {@link ServerInternalErrorException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 * @throws {@link ApplicationDiscoveryServiceServiceException}
 * <p>Base exception class for all service exceptions from ApplicationDiscoveryService service.</p>
 *
 */
export class StartContinuousExportCommand extends $Command<
  StartContinuousExportCommandInput,
  StartContinuousExportCommandOutput,
  ApplicationDiscoveryServiceClientResolvedConfig
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
  constructor(readonly input: StartContinuousExportCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationDiscoveryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartContinuousExportCommandInput, StartContinuousExportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartContinuousExportCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationDiscoveryServiceClient";
    const commandName = "StartContinuousExportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSPoseidonService_V2015_11_01",
        operation: "StartContinuousExport",
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
  private serialize(input: StartContinuousExportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartContinuousExportCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartContinuousExportCommandOutput> {
    return de_StartContinuousExportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
