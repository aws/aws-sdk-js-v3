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

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { DescribeUpdateDirectoryRequest, DescribeUpdateDirectoryResult } from "../models/models_0";
import { de_DescribeUpdateDirectoryCommand, se_DescribeUpdateDirectoryCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeUpdateDirectoryCommand}.
 */
export interface DescribeUpdateDirectoryCommandInput extends DescribeUpdateDirectoryRequest {}
/**
 * @public
 *
 * The output of {@link DescribeUpdateDirectoryCommand}.
 */
export interface DescribeUpdateDirectoryCommandOutput extends DescribeUpdateDirectoryResult, __MetadataBearer {}

/**
 * @public
 * <p>
 *       Describes the updates of a directory for a particular update type.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeUpdateDirectoryCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DescribeUpdateDirectoryCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const input = { // DescribeUpdateDirectoryRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   UpdateType: "OS", // required
 *   RegionName: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeUpdateDirectoryCommand(input);
 * const response = await client.send(command);
 * // { // DescribeUpdateDirectoryResult
 * //   UpdateActivities: [ // UpdateActivities
 * //     { // UpdateInfoEntry
 * //       Region: "STRING_VALUE",
 * //       Status: "Updated" || "Updating" || "UpdateFailed",
 * //       StatusReason: "STRING_VALUE",
 * //       InitiatedBy: "STRING_VALUE",
 * //       NewValue: { // UpdateValue
 * //         OSUpdateSettings: { // OSUpdateSettings
 * //           OSVersion: "SERVER_2012" || "SERVER_2019",
 * //         },
 * //       },
 * //       PreviousValue: {
 * //         OSUpdateSettings: {
 * //           OSVersion: "SERVER_2012" || "SERVER_2019",
 * //         },
 * //       },
 * //       StartTime: new Date("TIMESTAMP"),
 * //       LastUpdatedDateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeUpdateDirectoryCommandInput - {@link DescribeUpdateDirectoryCommandInput}
 * @returns {@link DescribeUpdateDirectoryCommandOutput}
 * @see {@link DescribeUpdateDirectoryCommandInput} for command's `input` shape.
 * @see {@link DescribeUpdateDirectoryCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Client authentication is not available in this region at this time.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link DirectoryDoesNotExistException} (client fault)
 *  <p>The specified directory does not exist in the system.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> value is not valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 */
export class DescribeUpdateDirectoryCommand extends $Command<
  DescribeUpdateDirectoryCommandInput,
  DescribeUpdateDirectoryCommandOutput,
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
  constructor(readonly input: DescribeUpdateDirectoryCommandInput) {
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
  ): Handler<DescribeUpdateDirectoryCommandInput, DescribeUpdateDirectoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeUpdateDirectoryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "DescribeUpdateDirectoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DirectoryService_20150416",
        operation: "DescribeUpdateDirectory",
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
  private serialize(input: DescribeUpdateDirectoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeUpdateDirectoryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeUpdateDirectoryCommandOutput> {
    return de_DescribeUpdateDirectoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
