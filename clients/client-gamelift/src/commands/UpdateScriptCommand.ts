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

import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { UpdateScriptInput, UpdateScriptOutput } from "../models/models_1";
import { de_UpdateScriptCommand, se_UpdateScriptCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateScriptCommand}.
 */
export interface UpdateScriptCommandInput extends UpdateScriptInput {}
/**
 * @public
 *
 * The output of {@link UpdateScriptCommand}.
 */
export interface UpdateScriptCommandOutput extends UpdateScriptOutput, __MetadataBearer {}

/**
 * @public
 * <p>Updates Realtime script metadata and content.</p>
 *          <p>To update script metadata, specify the script ID and provide updated name and/or
 *             version values. </p>
 *          <p>To update script content, provide an updated zip file by pointing to either a local
 *             file or an Amazon S3 bucket location. You can use either method regardless of how the
 *             original script was uploaded. Use the <i>Version</i> parameter to track
 *             updates to the script.</p>
 *          <p>If the call is successful, the updated metadata is stored in the script record and a
 *             revised script is uploaded to the Amazon GameLift service. Once the script is updated and
 *             acquired by a fleet instance, the new version is used for all new game sessions. </p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a>
 *          </p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, UpdateScriptCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, UpdateScriptCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // UpdateScriptInput
 *   ScriptId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Version: "STRING_VALUE",
 *   StorageLocation: { // S3Location
 *     Bucket: "STRING_VALUE",
 *     Key: "STRING_VALUE",
 *     RoleArn: "STRING_VALUE",
 *     ObjectVersion: "STRING_VALUE",
 *   },
 *   ZipFile: "BLOB_VALUE",
 * };
 * const command = new UpdateScriptCommand(input);
 * const response = await client.send(command);
 * // { // UpdateScriptOutput
 * //   Script: { // Script
 * //     ScriptId: "STRING_VALUE",
 * //     ScriptArn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Version: "STRING_VALUE",
 * //     SizeOnDisk: Number("long"),
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     StorageLocation: { // S3Location
 * //       Bucket: "STRING_VALUE",
 * //       Key: "STRING_VALUE",
 * //       RoleArn: "STRING_VALUE",
 * //       ObjectVersion: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateScriptCommandInput - {@link UpdateScriptCommandInput}
 * @returns {@link UpdateScriptCommandOutput}
 * @see {@link UpdateScriptCommandInput} for command's `input` shape.
 * @see {@link UpdateScriptCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The service encountered an unrecoverable internal failure while processing the
 *             request. Clients can retry such requests immediately or after a waiting period.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more parameter values in the request are invalid. Correct the invalid parameter
 *             values before retrying.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>THe requested resources was not found. The resource was either not created yet or deleted.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client failed authentication. Clients should not retry such requests.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 */
export class UpdateScriptCommand extends $Command<
  UpdateScriptCommandInput,
  UpdateScriptCommandOutput,
  GameLiftClientResolvedConfig
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
  constructor(readonly input: UpdateScriptCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameLiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateScriptCommandInput, UpdateScriptCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateScriptCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "UpdateScriptCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GameLift",
        operation: "UpdateScript",
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
  private serialize(input: UpdateScriptCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateScriptCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateScriptCommandOutput> {
    return de_UpdateScriptCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
