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
import { DescribeSettingsRequest, DescribeSettingsResult } from "../models/models_0";
import { de_DescribeSettingsCommand, se_DescribeSettingsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeSettingsCommand}.
 */
export interface DescribeSettingsCommandInput extends DescribeSettingsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSettingsCommand}.
 */
export interface DescribeSettingsCommandOutput extends DescribeSettingsResult, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information about the configurable settings for the specified directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeSettingsCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DescribeSettingsCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const input = { // DescribeSettingsRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   Status: "Requested" || "Updating" || "Updated" || "Failed" || "Default",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeSettingsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSettingsResult
 * //   DirectoryId: "STRING_VALUE",
 * //   SettingEntries: [ // SettingEntries
 * //     { // SettingEntry
 * //       Type: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       AllowedValues: "STRING_VALUE",
 * //       AppliedValue: "STRING_VALUE",
 * //       RequestedValue: "STRING_VALUE",
 * //       RequestStatus: "Requested" || "Updating" || "Updated" || "Failed" || "Default",
 * //       RequestDetailedStatus: { // DirectoryConfigurationSettingRequestDetailedStatus
 * //         "<keys>": "Requested" || "Updating" || "Updated" || "Failed" || "Default",
 * //       },
 * //       RequestStatusMessage: "STRING_VALUE",
 * //       LastUpdatedDateTime: new Date("TIMESTAMP"),
 * //       LastRequestedDateTime: new Date("TIMESTAMP"),
 * //       DataType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSettingsCommandInput - {@link DescribeSettingsCommandInput}
 * @returns {@link DescribeSettingsCommandOutput}
 * @see {@link DescribeSettingsCommandInput} for command's `input` shape.
 * @see {@link DescribeSettingsCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
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
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The operation is not supported.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 */
export class DescribeSettingsCommand extends $Command<
  DescribeSettingsCommandInput,
  DescribeSettingsCommandOutput,
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
  constructor(readonly input: DescribeSettingsCommandInput) {
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
  ): Handler<DescribeSettingsCommandInput, DescribeSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSettingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "DescribeSettingsCommand";
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
  private serialize(input: DescribeSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeSettingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSettingsCommandOutput> {
    return de_DescribeSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
