// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { UpdateVolumeRequest, UpdateVolumeResponse } from "../models/models_0";
import { de_UpdateVolumeCommand, se_UpdateVolumeCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link UpdateVolumeCommand}.
 */
export interface UpdateVolumeCommandInput extends UpdateVolumeRequest {}
/**
 * @public
 *
 * The output of {@link UpdateVolumeCommand}.
 */
export interface UpdateVolumeCommandOutput extends UpdateVolumeResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the configuration of an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volume.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, UpdateVolumeCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, UpdateVolumeCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const input = { // UpdateVolumeRequest
 *   ClientRequestToken: "STRING_VALUE",
 *   VolumeId: "STRING_VALUE", // required
 *   OntapConfiguration: { // UpdateOntapVolumeConfiguration
 *     JunctionPath: "STRING_VALUE",
 *     SecurityStyle: "UNIX" || "NTFS" || "MIXED",
 *     SizeInMegabytes: Number("int"),
 *     StorageEfficiencyEnabled: true || false,
 *     TieringPolicy: { // TieringPolicy
 *       CoolingPeriod: Number("int"),
 *       Name: "SNAPSHOT_ONLY" || "AUTO" || "ALL" || "NONE",
 *     },
 *     SnapshotPolicy: "STRING_VALUE",
 *     CopyTagsToBackups: true || false,
 *   },
 *   Name: "STRING_VALUE",
 *   OpenZFSConfiguration: { // UpdateOpenZFSVolumeConfiguration
 *     StorageCapacityReservationGiB: Number("int"),
 *     StorageCapacityQuotaGiB: Number("int"),
 *     RecordSizeKiB: Number("int"),
 *     DataCompressionType: "NONE" || "ZSTD" || "LZ4",
 *     NfsExports: [ // OpenZFSNfsExports
 *       { // OpenZFSNfsExport
 *         ClientConfigurations: [ // OpenZFSClientConfigurations // required
 *           { // OpenZFSClientConfiguration
 *             Clients: "STRING_VALUE", // required
 *             Options: [ // OpenZFSNfsExportOptions // required
 *               "STRING_VALUE",
 *             ],
 *           },
 *         ],
 *       },
 *     ],
 *     UserAndGroupQuotas: [ // OpenZFSUserAndGroupQuotas
 *       { // OpenZFSUserOrGroupQuota
 *         Type: "USER" || "GROUP", // required
 *         Id: Number("int"), // required
 *         StorageCapacityQuotaGiB: Number("int"), // required
 *       },
 *     ],
 *     ReadOnly: true || false,
 *   },
 * };
 * const command = new UpdateVolumeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateVolumeCommandInput - {@link UpdateVolumeCommandInput}
 * @returns {@link UpdateVolumeCommandOutput}
 * @see {@link UpdateVolumeCommandInput} for command's `input` shape.
 * @see {@link UpdateVolumeCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link IncompatibleParameterError} (client fault)
 *  <p>The error returned when a second request is received with the same client request
 *             token but different parameters settings. A client request token should always uniquely
 *             identify a single request.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>A generic error indicating a server-side failure.</p>
 *
 * @throws {@link MissingVolumeConfiguration} (client fault)
 *  <p>A volume configuration is required for this operation.</p>
 *
 * @throws {@link VolumeNotFound} (client fault)
 *  <p>No Amazon FSx volumes were found based upon the supplied parameters.</p>
 *
 *
 */
export class UpdateVolumeCommand extends $Command<
  UpdateVolumeCommandInput,
  UpdateVolumeCommandOutput,
  FSxClientResolvedConfig
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
  constructor(readonly input: UpdateVolumeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FSxClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateVolumeCommandInput, UpdateVolumeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateVolumeCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "UpdateVolumeCommand";
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
  private serialize(input: UpdateVolumeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateVolumeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateVolumeCommandOutput> {
    return de_UpdateVolumeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
