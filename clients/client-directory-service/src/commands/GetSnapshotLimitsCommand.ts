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

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { GetSnapshotLimitsRequest, GetSnapshotLimitsResult } from "../models/models_0";
import { de_GetSnapshotLimitsCommand, se_GetSnapshotLimitsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSnapshotLimitsCommand}.
 */
export interface GetSnapshotLimitsCommandInput extends GetSnapshotLimitsRequest {}
/**
 * @public
 *
 * The output of {@link GetSnapshotLimitsCommand}.
 */
export interface GetSnapshotLimitsCommandOutput extends GetSnapshotLimitsResult, __MetadataBearer {}

/**
 * @public
 * <p>Obtains the manual snapshot limits for a directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, GetSnapshotLimitsCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, GetSnapshotLimitsCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const input = { // GetSnapshotLimitsRequest
 *   DirectoryId: "STRING_VALUE", // required
 * };
 * const command = new GetSnapshotLimitsCommand(input);
 * const response = await client.send(command);
 * // { // GetSnapshotLimitsResult
 * //   SnapshotLimits: { // SnapshotLimits
 * //     ManualSnapshotsLimit: Number("int"),
 * //     ManualSnapshotsCurrentCount: Number("int"),
 * //     ManualSnapshotsLimitReached: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSnapshotLimitsCommandInput - {@link GetSnapshotLimitsCommandInput}
 * @returns {@link GetSnapshotLimitsCommandOutput}
 * @see {@link GetSnapshotLimitsCommandInput} for command's `input` shape.
 * @see {@link GetSnapshotLimitsCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *  <p>The specified entity could not be found.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 */
export class GetSnapshotLimitsCommand extends $Command<
  GetSnapshotLimitsCommandInput,
  GetSnapshotLimitsCommandOutput,
  DirectoryServiceClientResolvedConfig
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
  constructor(readonly input: GetSnapshotLimitsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSnapshotLimitsCommandInput, GetSnapshotLimitsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSnapshotLimitsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "GetSnapshotLimitsCommand";
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
  private serialize(input: GetSnapshotLimitsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSnapshotLimitsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSnapshotLimitsCommandOutput> {
    return de_GetSnapshotLimitsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
