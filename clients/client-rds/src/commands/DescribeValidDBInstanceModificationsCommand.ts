// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeValidDBInstanceModificationsMessage,
  DescribeValidDBInstanceModificationsResult,
} from "../models/models_1";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeValidDBInstanceModifications } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeValidDBInstanceModificationsCommand}.
 */
export interface DescribeValidDBInstanceModificationsCommandInput extends DescribeValidDBInstanceModificationsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeValidDBInstanceModificationsCommand}.
 */
export interface DescribeValidDBInstanceModificationsCommandOutput
  extends DescribeValidDBInstanceModificationsResult,
    __MetadataBearer {}

/**
 * <p>You can call <code>DescribeValidDBInstanceModifications</code> to learn what modifications you can make to
 *             your DB instance. You can use this information when you call <code>ModifyDBInstance</code>.</p>
 *          <p>This command doesn't apply to RDS Custom.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeValidDBInstanceModificationsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeValidDBInstanceModificationsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // DescribeValidDBInstanceModificationsMessage
 *   DBInstanceIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DescribeValidDBInstanceModificationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeValidDBInstanceModificationsResult
 * //   ValidDBInstanceModificationsMessage: { // ValidDBInstanceModificationsMessage
 * //     Storage: [ // ValidStorageOptionsList
 * //       { // ValidStorageOptions
 * //         StorageType: "STRING_VALUE",
 * //         StorageSize: [ // RangeList
 * //           { // Range
 * //             From: Number("int"),
 * //             To: Number("int"),
 * //             Step: Number("int"),
 * //           },
 * //         ],
 * //         ProvisionedIops: [
 * //           {
 * //             From: Number("int"),
 * //             To: Number("int"),
 * //             Step: Number("int"),
 * //           },
 * //         ],
 * //         IopsToStorageRatio: [ // DoubleRangeList
 * //           { // DoubleRange
 * //             From: Number("double"),
 * //             To: Number("double"),
 * //           },
 * //         ],
 * //         ProvisionedStorageThroughput: [
 * //           {
 * //             From: Number("int"),
 * //             To: Number("int"),
 * //             Step: Number("int"),
 * //           },
 * //         ],
 * //         StorageThroughputToIopsRatio: [
 * //           {
 * //             From: Number("double"),
 * //             To: Number("double"),
 * //           },
 * //         ],
 * //         SupportsStorageAutoscaling: true || false,
 * //       },
 * //     ],
 * //     ValidProcessorFeatures: [ // AvailableProcessorFeatureList
 * //       { // AvailableProcessorFeature
 * //         Name: "STRING_VALUE",
 * //         DefaultValue: "STRING_VALUE",
 * //         AllowedValues: "STRING_VALUE",
 * //       },
 * //     ],
 * //     SupportsDedicatedLogVolume: true || false,
 * //     AdditionalStorage: { // ValidAdditionalStorageOptions
 * //       SupportsAdditionalStorageVolumes: true || false,
 * //       Volumes: [ // ValidVolumeOptionsList
 * //         { // ValidVolumeOptions
 * //           VolumeName: "STRING_VALUE",
 * //           Storage: [
 * //             {
 * //               StorageType: "STRING_VALUE",
 * //               StorageSize: [
 * //                 {
 * //                   From: Number("int"),
 * //                   To: Number("int"),
 * //                   Step: Number("int"),
 * //                 },
 * //               ],
 * //               ProvisionedIops: [
 * //                 {
 * //                   From: Number("int"),
 * //                   To: Number("int"),
 * //                   Step: Number("int"),
 * //                 },
 * //               ],
 * //               IopsToStorageRatio: [
 * //                 {
 * //                   From: Number("double"),
 * //                   To: Number("double"),
 * //                 },
 * //               ],
 * //               ProvisionedStorageThroughput: "<RangeList>",
 * //               StorageThroughputToIopsRatio: [
 * //                 {
 * //                   From: Number("double"),
 * //                   To: Number("double"),
 * //                 },
 * //               ],
 * //               SupportsStorageAutoscaling: true || false,
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeValidDBInstanceModificationsCommandInput - {@link DescribeValidDBInstanceModificationsCommandInput}
 * @returns {@link DescribeValidDBInstanceModificationsCommandOutput}
 * @see {@link DescribeValidDBInstanceModificationsCommandInput} for command's `input` shape.
 * @see {@link DescribeValidDBInstanceModificationsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *  <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance.</p>
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *  <p>The DB instance isn't in a valid state.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To describe valid modifications for a DB instance
 * ```javascript
 * // The following example retrieves details about the valid modifications for the specified DB instance.
 * const input = {
 *   DBInstanceIdentifier: "database-test1"
 * };
 * const command = new DescribeValidDBInstanceModificationsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ValidDBInstanceModificationsMessage: {
 *     Storage: [
 *       {
 *         StorageSize: [
 *           {
 *             From: 20,
 *             Step: 1,
 *             To: 20
 *           },
 *           {
 *             From: 22,
 *             Step: 1,
 *             To: 6144
 *           }
 *         ],
 *         StorageType: "gp2"
 *       }
 *     ]
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeValidDBInstanceModificationsCommand extends $Command
  .classBuilder<
    DescribeValidDBInstanceModificationsCommandInput,
    DescribeValidDBInstanceModificationsCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DescribeValidDBInstanceModifications", {})
  .n("RDSClient", "DescribeValidDBInstanceModificationsCommand")
  .sc(DescribeValidDBInstanceModifications)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeValidDBInstanceModificationsMessage;
      output: DescribeValidDBInstanceModificationsResult;
    };
    sdk: {
      input: DescribeValidDBInstanceModificationsCommandInput;
      output: DescribeValidDBInstanceModificationsCommandOutput;
    };
  };
}
