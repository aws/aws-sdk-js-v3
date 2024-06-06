// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeTemplateRequest, DescribeTemplateResponse } from "../models/models_3";
import { de_DescribeTemplateCommand, se_DescribeTemplateCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * @public
 */
export class DescribeTemplateCommand extends $Command
  .classBuilder<
    DescribeTemplateCommandInput,
    DescribeTemplateCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "DescribeTemplate", {})
  .n("QuickSightClient", "DescribeTemplateCommand")
  .f(void 0, void 0)
  .ser(se_DescribeTemplateCommand)
  .de(de_DescribeTemplateCommand)
  .build() {}
