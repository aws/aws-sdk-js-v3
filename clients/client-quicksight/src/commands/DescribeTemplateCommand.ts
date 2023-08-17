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

import { DescribeTemplateRequest, DescribeTemplateResponse } from "../models/models_3";
import { de_DescribeTemplateCommand, se_DescribeTemplateCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeTemplateCommand}.
 */
export interface DescribeTemplateCommandInput extends DescribeTemplateRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTemplateCommand}.
 */
export interface DescribeTemplateCommandOutput extends DescribeTemplateResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes a template's metadata.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeTemplateCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeTemplateCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // DescribeTemplateRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   TemplateId: "STRING_VALUE", // required
 *   VersionNumber: Number("long"),
 *   AliasName: "STRING_VALUE",
 * };
 * const command = new DescribeTemplateCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTemplateResponse
 * //   Template: { // Template
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Version: { // TemplateVersion
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       Errors: [ // TemplateErrorList
 * //         { // TemplateError
 * //           Type: "SOURCE_NOT_FOUND" || "DATA_SET_NOT_FOUND" || "INTERNAL_FAILURE" || "ACCESS_DENIED",
 * //           Message: "STRING_VALUE",
 * //           ViolatedEntities: [ // EntityList
 * //             { // Entity
 * //               Path: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       VersionNumber: Number("long"),
 * //       Status: "CREATION_IN_PROGRESS" || "CREATION_SUCCESSFUL" || "CREATION_FAILED" || "UPDATE_IN_PROGRESS" || "UPDATE_SUCCESSFUL" || "UPDATE_FAILED" || "DELETED",
 * //       DataSetConfigurations: [ // DataSetConfigurationList
 * //         { // DataSetConfiguration
 * //           Placeholder: "STRING_VALUE",
 * //           DataSetSchema: { // DataSetSchema
 * //             ColumnSchemaList: [ // ColumnSchemaList
 * //               { // ColumnSchema
 * //                 Name: "STRING_VALUE",
 * //                 DataType: "STRING_VALUE",
 * //                 GeographicRole: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //           ColumnGroupSchemaList: [ // ColumnGroupSchemaList
 * //             { // ColumnGroupSchema
 * //               Name: "STRING_VALUE",
 * //               ColumnGroupColumnSchemaList: [ // ColumnGroupColumnSchemaList
 * //                 { // ColumnGroupColumnSchema
 * //                   Name: "STRING_VALUE",
 * //                 },
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       Description: "STRING_VALUE",
 * //       SourceEntityArn: "STRING_VALUE",
 * //       ThemeArn: "STRING_VALUE",
 * //       Sheets: [ // SheetList
 * //         { // Sheet
 * //           SheetId: "STRING_VALUE",
 * //           Name: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     TemplateId: "STRING_VALUE",
 * //     LastUpdatedTime: new Date("TIMESTAMP"),
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //   },
 * //   Status: Number("int"),
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeTemplateCommandInput - {@link DescribeTemplateCommandInput}
 * @returns {@link DescribeTemplateCommandOutput}
 * @see {@link DescribeTemplateCommandInput} for command's `input` shape.
 * @see {@link DescribeTemplateCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The resource specified already exists. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *  <p>This error indicates that you are calling an operation on an Amazon QuickSight
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			Amazon QuickSight currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 */
export class DescribeTemplateCommand extends $Command<
  DescribeTemplateCommandInput,
  DescribeTemplateCommandOutput,
  QuickSightClientResolvedConfig
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
  constructor(readonly input: DescribeTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTemplateCommandInput, DescribeTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "DescribeTemplateCommand";
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
  private serialize(input: DescribeTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTemplateCommandOutput> {
    return de_DescribeTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
