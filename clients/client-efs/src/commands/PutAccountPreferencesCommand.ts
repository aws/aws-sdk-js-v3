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

import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { PutAccountPreferencesRequest, PutAccountPreferencesResponse } from "../models/models_0";
import { de_PutAccountPreferencesCommand, se_PutAccountPreferencesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutAccountPreferencesCommand}.
 */
export interface PutAccountPreferencesCommandInput extends PutAccountPreferencesRequest {}
/**
 * @public
 *
 * The output of {@link PutAccountPreferencesCommand}.
 */
export interface PutAccountPreferencesCommandOutput extends PutAccountPreferencesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Use this operation to set the account preference in the current Amazon Web Services Region
 *       to use long 17 character (63 bit) or short 8 character (32 bit) resource IDs for
 *       new EFS file system and mount target resources. All existing resource IDs are not affected
 *       by any changes you make. You can set the ID preference during the
 *       opt-in period as EFS transitions to long resource IDs. For more information,
 *       see <a href="https://docs.aws.amazon.com/efs/latest/ug/manage-efs-resource-ids.html">Managing Amazon EFS resource IDs</a>.</p>
 *          <note>
 *             <p>Starting in October, 2021, you will receive an error if you try to set the account preference
 *         to use the short 8 character format resource ID. Contact Amazon Web Services support if you
 *         receive an error and must use short IDs for file system and mount target resources.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, PutAccountPreferencesCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, PutAccountPreferencesCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const input = { // PutAccountPreferencesRequest
 *   ResourceIdType: "LONG_ID" || "SHORT_ID", // required
 * };
 * const command = new PutAccountPreferencesCommand(input);
 * const response = await client.send(command);
 * // { // PutAccountPreferencesResponse
 * //   ResourceIdPreference: { // ResourceIdPreference
 * //     ResourceIdType: "LONG_ID" || "SHORT_ID",
 * //     Resources: [ // Resources
 * //       "FILE_SYSTEM" || "MOUNT_TARGET",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param PutAccountPreferencesCommandInput - {@link PutAccountPreferencesCommandInput}
 * @returns {@link PutAccountPreferencesCommandOutput}
 * @see {@link PutAccountPreferencesCommandInput} for command's `input` shape.
 * @see {@link PutAccountPreferencesCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for EFSClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>Returned if the request is malformed or contains an error such as an invalid
 *             parameter value or a missing required parameter.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Returned if an error occurred on the server side.</p>
 *
 * @throws {@link EFSServiceException}
 * <p>Base exception class for all service exceptions from EFS service.</p>
 *
 */
export class PutAccountPreferencesCommand extends $Command<
  PutAccountPreferencesCommandInput,
  PutAccountPreferencesCommandOutput,
  EFSClientResolvedConfig
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
  constructor(readonly input: PutAccountPreferencesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EFSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutAccountPreferencesCommandInput, PutAccountPreferencesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutAccountPreferencesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EFSClient";
    const commandName = "PutAccountPreferencesCommand";
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
  private serialize(input: PutAccountPreferencesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutAccountPreferencesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutAccountPreferencesCommandOutput> {
    return de_PutAccountPreferencesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
