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
import { GetDirectoryLimitsRequest, GetDirectoryLimitsResult } from "../models/models_0";
import { de_GetDirectoryLimitsCommand, se_GetDirectoryLimitsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDirectoryLimitsCommand}.
 */
export interface GetDirectoryLimitsCommandInput extends GetDirectoryLimitsRequest {}
/**
 * @public
 *
 * The output of {@link GetDirectoryLimitsCommand}.
 */
export interface GetDirectoryLimitsCommandOutput extends GetDirectoryLimitsResult, __MetadataBearer {}

/**
 * @public
 * <p>Obtains directory limit information for the current Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, GetDirectoryLimitsCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, GetDirectoryLimitsCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const input = {};
 * const command = new GetDirectoryLimitsCommand(input);
 * const response = await client.send(command);
 * // { // GetDirectoryLimitsResult
 * //   DirectoryLimits: { // DirectoryLimits
 * //     CloudOnlyDirectoriesLimit: Number("int"),
 * //     CloudOnlyDirectoriesCurrentCount: Number("int"),
 * //     CloudOnlyDirectoriesLimitReached: true || false,
 * //     CloudOnlyMicrosoftADLimit: Number("int"),
 * //     CloudOnlyMicrosoftADCurrentCount: Number("int"),
 * //     CloudOnlyMicrosoftADLimitReached: true || false,
 * //     ConnectedDirectoriesLimit: Number("int"),
 * //     ConnectedDirectoriesCurrentCount: Number("int"),
 * //     ConnectedDirectoriesLimitReached: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDirectoryLimitsCommandInput - {@link GetDirectoryLimitsCommandInput}
 * @returns {@link GetDirectoryLimitsCommandOutput}
 * @see {@link GetDirectoryLimitsCommandInput} for command's `input` shape.
 * @see {@link GetDirectoryLimitsCommandOutput} for command's `response` shape.
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
export class GetDirectoryLimitsCommand extends $Command<
  GetDirectoryLimitsCommandInput,
  GetDirectoryLimitsCommandOutput,
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
  constructor(readonly input: GetDirectoryLimitsCommandInput) {
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
  ): Handler<GetDirectoryLimitsCommandInput, GetDirectoryLimitsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDirectoryLimitsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "GetDirectoryLimitsCommand";
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
  private serialize(input: GetDirectoryLimitsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDirectoryLimitsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDirectoryLimitsCommandOutput> {
    return de_GetDirectoryLimitsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
