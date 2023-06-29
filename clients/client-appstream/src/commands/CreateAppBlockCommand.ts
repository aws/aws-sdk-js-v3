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

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { CreateAppBlockRequest, CreateAppBlockResult } from "../models/models_0";
import { de_CreateAppBlockCommand, se_CreateAppBlockCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateAppBlockCommand}.
 */
export interface CreateAppBlockCommandInput extends CreateAppBlockRequest {}
/**
 * @public
 *
 * The output of {@link CreateAppBlockCommand}.
 */
export interface CreateAppBlockCommandOutput extends CreateAppBlockResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates an app block.</p>
 *          <p>App blocks are an Amazon AppStream 2.0 resource that stores the details about the
 *             virtual hard disk in an S3 bucket. It also stores the setup script with details about
 *             how to mount the virtual hard disk. The virtual hard disk includes the application
 *             binaries and other files necessary to launch your applications. Multiple applications
 *             can be assigned to a single app block.</p>
 *          <p>This is only supported for Elastic fleets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, CreateAppBlockCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, CreateAppBlockCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const input = { // CreateAppBlockRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   DisplayName: "STRING_VALUE",
 *   SourceS3Location: { // S3Location
 *     S3Bucket: "STRING_VALUE", // required
 *     S3Key: "STRING_VALUE",
 *   },
 *   SetupScriptDetails: { // ScriptDetails
 *     ScriptS3Location: {
 *       S3Bucket: "STRING_VALUE", // required
 *       S3Key: "STRING_VALUE",
 *     },
 *     ExecutablePath: "STRING_VALUE", // required
 *     ExecutableParameters: "STRING_VALUE",
 *     TimeoutInSeconds: Number("int"), // required
 *   },
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   PostSetupScriptDetails: {
 *     ScriptS3Location: {
 *       S3Bucket: "STRING_VALUE", // required
 *       S3Key: "STRING_VALUE",
 *     },
 *     ExecutablePath: "STRING_VALUE", // required
 *     ExecutableParameters: "STRING_VALUE",
 *     TimeoutInSeconds: Number("int"), // required
 *   },
 *   PackagingType: "CUSTOM" || "APPSTREAM2",
 * };
 * const command = new CreateAppBlockCommand(input);
 * const response = await client.send(command);
 * // { // CreateAppBlockResult
 * //   AppBlock: { // AppBlock
 * //     Name: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     DisplayName: "STRING_VALUE",
 * //     SourceS3Location: { // S3Location
 * //       S3Bucket: "STRING_VALUE", // required
 * //       S3Key: "STRING_VALUE",
 * //     },
 * //     SetupScriptDetails: { // ScriptDetails
 * //       ScriptS3Location: {
 * //         S3Bucket: "STRING_VALUE", // required
 * //         S3Key: "STRING_VALUE",
 * //       },
 * //       ExecutablePath: "STRING_VALUE", // required
 * //       ExecutableParameters: "STRING_VALUE",
 * //       TimeoutInSeconds: Number("int"), // required
 * //     },
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     PostSetupScriptDetails: {
 * //       ScriptS3Location: {
 * //         S3Bucket: "STRING_VALUE", // required
 * //         S3Key: "STRING_VALUE",
 * //       },
 * //       ExecutablePath: "STRING_VALUE", // required
 * //       ExecutableParameters: "STRING_VALUE",
 * //       TimeoutInSeconds: Number("int"), // required
 * //     },
 * //     PackagingType: "CUSTOM" || "APPSTREAM2",
 * //     State: "INACTIVE" || "ACTIVE",
 * //     AppBlockErrors: [ // ErrorDetailsList
 * //       { // ErrorDetails
 * //         ErrorCode: "STRING_VALUE",
 * //         ErrorMessage: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateAppBlockCommandInput - {@link CreateAppBlockCommandInput}
 * @returns {@link CreateAppBlockCommandOutput}
 * @see {@link CreateAppBlockCommandInput} for command's `input` shape.
 * @see {@link CreateAppBlockCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>An API error occurred. Wait a few minutes and try again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested limit exceeds the permitted limit for an account.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The attempted operation is not permitted.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified resource already exists.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 */
export class CreateAppBlockCommand extends $Command<
  CreateAppBlockCommandInput,
  CreateAppBlockCommandOutput,
  AppStreamClientResolvedConfig
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
  constructor(readonly input: CreateAppBlockCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAppBlockCommandInput, CreateAppBlockCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAppBlockCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "CreateAppBlockCommand";
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
  private serialize(input: CreateAppBlockCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateAppBlockCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAppBlockCommandOutput> {
    return de_CreateAppBlockCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
