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

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { DescribeEngineDefaultParametersMessage, DescribeEngineDefaultParametersResult } from "../models/models_0";
import {
  de_DescribeEngineDefaultParametersCommand,
  se_DescribeEngineDefaultParametersCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeEngineDefaultParametersCommand}.
 */
export interface DescribeEngineDefaultParametersCommandInput extends DescribeEngineDefaultParametersMessage {}
/**
 * @public
 *
 * The output of {@link DescribeEngineDefaultParametersCommand}.
 */
export interface DescribeEngineDefaultParametersCommandOutput
  extends DescribeEngineDefaultParametersResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns the default engine and
 *             system parameter information for the specified cache engine.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeEngineDefaultParametersCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeEngineDefaultParametersCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // DescribeEngineDefaultParametersMessage
 *   CacheParameterGroupFamily: "STRING_VALUE", // required
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeEngineDefaultParametersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEngineDefaultParametersResult
 * //   EngineDefaults: { // EngineDefaults
 * //     CacheParameterGroupFamily: "STRING_VALUE",
 * //     Marker: "STRING_VALUE",
 * //     Parameters: [ // ParametersList
 * //       { // Parameter
 * //         ParameterName: "STRING_VALUE",
 * //         ParameterValue: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         Source: "STRING_VALUE",
 * //         DataType: "STRING_VALUE",
 * //         AllowedValues: "STRING_VALUE",
 * //         IsModifiable: true || false,
 * //         MinimumEngineVersion: "STRING_VALUE",
 * //         ChangeType: "immediate" || "requires-reboot",
 * //       },
 * //     ],
 * //     CacheNodeTypeSpecificParameters: [ // CacheNodeTypeSpecificParametersList
 * //       { // CacheNodeTypeSpecificParameter
 * //         ParameterName: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         Source: "STRING_VALUE",
 * //         DataType: "STRING_VALUE",
 * //         AllowedValues: "STRING_VALUE",
 * //         IsModifiable: true || false,
 * //         MinimumEngineVersion: "STRING_VALUE",
 * //         CacheNodeTypeSpecificValues: [ // CacheNodeTypeSpecificValueList
 * //           { // CacheNodeTypeSpecificValue
 * //             CacheNodeType: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //           },
 * //         ],
 * //         ChangeType: "immediate" || "requires-reboot",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeEngineDefaultParametersCommandInput - {@link DescribeEngineDefaultParametersCommandInput}
 * @returns {@link DescribeEngineDefaultParametersCommandOutput}
 * @see {@link DescribeEngineDefaultParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeEngineDefaultParametersCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 * @example DescribeEngineDefaultParameters
 * ```javascript
 * // Returns the default engine and system parameter information for the specified cache engine.
 * const input = {
 *   "CacheParameterGroupFamily": "redis2.8",
 *   "MaxRecords": 25
 * };
 * const command = new DescribeEngineDefaultParametersCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "EngineDefaults": {
 *     "CacheNodeTypeSpecificParameters": [
 *       {
 *         "AllowedValues": "0-",
 *         "CacheNodeTypeSpecificValues": [
 *           {
 *             "CacheNodeType": "cache.c1.xlarge",
 *             "Value": "650117120"
 *           },
 *           {
 *             "CacheNodeType": "cache.m1.large",
 *             "Value": "702545920"
 *           },
 *           {
 *             "CacheNodeType": "cache.m1.medium",
 *             "Value": "309329920"
 *           },
 *           {
 *             "CacheNodeType": "cache.m1.small",
 *             "Value": "94371840"
 *           },
 *           {
 *             "CacheNodeType": "cache.m1.xlarge",
 *             "Value": "1488977920"
 *           },
 *           {
 *             "CacheNodeType": "cache.m2.2xlarge",
 *             "Value": "3502243840"
 *           },
 *           {
 *             "CacheNodeType": "cache.m2.4xlarge",
 *             "Value": "7088373760"
 *           },
 *           {
 *             "CacheNodeType": "cache.m2.xlarge",
 *             "Value": "1709178880"
 *           },
 *           {
 *             "CacheNodeType": "cache.m3.2xlarge",
 *             "Value": "2998927360"
 *           },
 *           {
 *             "CacheNodeType": "cache.m3.large",
 *             "Value": "650117120"
 *           },
 *           {
 *             "CacheNodeType": "cache.m3.medium",
 *             "Value": "309329920"
 *           },
 *           {
 *             "CacheNodeType": "cache.m3.xlarge",
 *             "Value": "1426063360"
 *           },
 *           {
 *             "CacheNodeType": "cache.m4.10xlarge",
 *             "Value": "16604761424"
 *           },
 *           {
 *             "CacheNodeType": "cache.m4.2xlarge",
 *             "Value": "3188912636"
 *           },
 *           {
 *             "CacheNodeType": "cache.m4.4xlarge",
 *             "Value": "6525729063"
 *           },
 *           {
 *             "CacheNodeType": "cache.m4.large",
 *             "Value": "689259315"
 *           },
 *           {
 *             "CacheNodeType": "cache.m4.xlarge",
 *             "Value": "1532850176"
 *           },
 *           {
 *             "CacheNodeType": "cache.r3.2xlarge",
 *             "Value": "6081740800"
 *           },
 *           {
 *             "CacheNodeType": "cache.r3.4xlarge",
 *             "Value": "12268339200"
 *           },
 *           {
 *             "CacheNodeType": "cache.r3.8xlarge",
 *             "Value": "24536678400"
 *           },
 *           {
 *             "CacheNodeType": "cache.r3.large",
 *             "Value": "1468006400"
 *           },
 *           {
 *             "CacheNodeType": "cache.r3.xlarge",
 *             "Value": "3040870400"
 *           },
 *           {
 *             "CacheNodeType": "cache.t1.micro",
 *             "Value": "14260633"
 *           },
 *           {
 *             "CacheNodeType": "cache.t2.medium",
 *             "Value": "346134937"
 *           },
 *           {
 *             "CacheNodeType": "cache.t2.micro",
 *             "Value": "58195968"
 *           },
 *           {
 *             "CacheNodeType": "cache.t2.small",
 *             "Value": "166513868"
 *           }
 *         ],
 *         "ChangeType": "immediate",
 *         "DataType": "integer",
 *         "Description": "Slave client output buffer hard limit in bytes.",
 *         "IsModifiable": false,
 *         "MinimumEngineVersion": "2.8.6",
 *         "ParameterName": "client-output-buffer-limit-slave-hard-limit",
 *         "Source": "system"
 *       },
 *       {
 *         "AllowedValues": "0-",
 *         "CacheNodeTypeSpecificValues": [
 *           {
 *             "CacheNodeType": "cache.c1.xlarge",
 *             "Value": "650117120"
 *           },
 *           {
 *             "CacheNodeType": "cache.m1.large",
 *             "Value": "702545920"
 *           },
 *           {
 *             "CacheNodeType": "cache.m1.medium",
 *             "Value": "309329920"
 *           },
 *           {
 *             "CacheNodeType": "cache.m1.small",
 *             "Value": "94371840"
 *           },
 *           {
 *             "CacheNodeType": "cache.m1.xlarge",
 *             "Value": "1488977920"
 *           },
 *           {
 *             "CacheNodeType": "cache.m2.2xlarge",
 *             "Value": "3502243840"
 *           },
 *           {
 *             "CacheNodeType": "cache.m2.4xlarge",
 *             "Value": "7088373760"
 *           },
 *           {
 *             "CacheNodeType": "cache.m2.xlarge",
 *             "Value": "1709178880"
 *           },
 *           {
 *             "CacheNodeType": "cache.m3.2xlarge",
 *             "Value": "2998927360"
 *           },
 *           {
 *             "CacheNodeType": "cache.m3.large",
 *             "Value": "650117120"
 *           },
 *           {
 *             "CacheNodeType": "cache.m3.medium",
 *             "Value": "309329920"
 *           },
 *           {
 *             "CacheNodeType": "cache.m3.xlarge",
 *             "Value": "1426063360"
 *           },
 *           {
 *             "CacheNodeType": "cache.m4.10xlarge",
 *             "Value": "16604761424"
 *           },
 *           {
 *             "CacheNodeType": "cache.m4.2xlarge",
 *             "Value": "3188912636"
 *           },
 *           {
 *             "CacheNodeType": "cache.m4.4xlarge",
 *             "Value": "6525729063"
 *           },
 *           {
 *             "CacheNodeType": "cache.m4.large",
 *             "Value": "689259315"
 *           },
 *           {
 *             "CacheNodeType": "cache.m4.xlarge",
 *             "Value": "1532850176"
 *           },
 *           {
 *             "CacheNodeType": "cache.r3.2xlarge",
 *             "Value": "6081740800"
 *           },
 *           {
 *             "CacheNodeType": "cache.r3.4xlarge",
 *             "Value": "12268339200"
 *           },
 *           {
 *             "CacheNodeType": "cache.r3.8xlarge",
 *             "Value": "24536678400"
 *           },
 *           {
 *             "CacheNodeType": "cache.r3.large",
 *             "Value": "1468006400"
 *           },
 *           {
 *             "CacheNodeType": "cache.r3.xlarge",
 *             "Value": "3040870400"
 *           },
 *           {
 *             "CacheNodeType": "cache.t1.micro",
 *             "Value": "14260633"
 *           },
 *           {
 *             "CacheNodeType": "cache.t2.medium",
 *             "Value": "346134937"
 *           },
 *           {
 *             "CacheNodeType": "cache.t2.micro",
 *             "Value": "58195968"
 *           },
 *           {
 *             "CacheNodeType": "cache.t2.small",
 *             "Value": "166513868"
 *           }
 *         ],
 *         "ChangeType": "immediate",
 *         "DataType": "integer",
 *         "Description": "Slave client output buffer soft limit in bytes.",
 *         "IsModifiable": false,
 *         "MinimumEngineVersion": "2.8.6",
 *         "ParameterName": "client-output-buffer-limit-slave-soft-limit",
 *         "Source": "system"
 *       },
 *       {
 *         "AllowedValues": "0-",
 *         "CacheNodeTypeSpecificValues": [
 *           {
 *             "CacheNodeType": "cache.c1.xlarge",
 *             "Value": "6501171200"
 *           },
 *           {
 *             "CacheNodeType": "cache.m1.large",
 *             "Value": "7025459200"
 *           },
 *           {
 *             "CacheNodeType": "cache.m1.medium",
 *             "Value": "3093299200"
 *           },
 *           {
 *             "CacheNodeType": "cache.m1.small",
 *             "Value": "943718400"
 *           },
 *           {
 *             "CacheNodeType": "cache.m1.xlarge",
 *             "Value": "14889779200"
 *           },
 *           {
 *             "CacheNodeType": "cache.m2.2xlarge",
 *             "Value": "35022438400"
 *           },
 *           {
 *             "CacheNodeType": "cache.m2.4xlarge",
 *             "Value": "70883737600"
 *           },
 *           {
 *             "CacheNodeType": "cache.m2.xlarge",
 *             "Value": "17091788800"
 *           },
 *           {
 *             "CacheNodeType": "cache.m3.2xlarge",
 *             "Value": "29989273600"
 *           },
 *           {
 *             "CacheNodeType": "cache.m3.large",
 *             "Value": "6501171200"
 *           },
 *           {
 *             "CacheNodeType": "cache.m3.medium",
 *             "Value": "2988441600"
 *           },
 *           {
 *             "CacheNodeType": "cache.m3.xlarge",
 *             "Value": "14260633600"
 *           },
 *           {
 *             "CacheNodeType": "cache.m4.10xlarge",
 *             "Value": "166047614239"
 *           },
 *           {
 *             "CacheNodeType": "cache.m4.2xlarge",
 *             "Value": "31889126359"
 *           },
 *           {
 *             "CacheNodeType": "cache.m4.4xlarge",
 *             "Value": "65257290629"
 *           },
 *           {
 *             "CacheNodeType": "cache.m4.large",
 *             "Value": "6892593152"
 *           },
 *           {
 *             "CacheNodeType": "cache.m4.xlarge",
 *             "Value": "15328501760"
 *           },
 *           {
 *             "CacheNodeType": "cache.r3.2xlarge",
 *             "Value": "62495129600"
 *           },
 *           {
 *             "CacheNodeType": "cache.r3.4xlarge",
 *             "Value": "126458265600"
 *           },
 *           {
 *             "CacheNodeType": "cache.r3.8xlarge",
 *             "Value": "254384537600"
 *           },
 *           {
 *             "CacheNodeType": "cache.r3.large",
 *             "Value": "14470348800"
 *           },
 *           {
 *             "CacheNodeType": "cache.r3.xlarge",
 *             "Value": "30513561600"
 *           },
 *           {
 *             "CacheNodeType": "cache.t1.micro",
 *             "Value": "142606336"
 *           },
 *           {
 *             "CacheNodeType": "cache.t2.medium",
 *             "Value": "3461349376"
 *           },
 *           {
 *             "CacheNodeType": "cache.t2.micro",
 *             "Value": "581959680"
 *           },
 *           {
 *             "CacheNodeType": "cache.t2.small",
 *             "Value": "1665138688"
 *           }
 *         ],
 *         "ChangeType": "immediate",
 *         "DataType": "integer",
 *         "Description": "The maximum configurable amount of memory to use to store items, in bytes.",
 *         "IsModifiable": false,
 *         "MinimumEngineVersion": "2.8.6",
 *         "ParameterName": "maxmemory",
 *         "Source": "system"
 *       }
 *     ],
 *     "CacheParameterGroupFamily": "redis2.8",
 *     "Marker": "bWluLXNsYXZlcy10by13cml0ZQ==",
 *     "Parameters": [
 *       {
 *         "AllowedValues": "yes,no",
 *         "ChangeType": "requires-reboot",
 *         "DataType": "string",
 *         "Description": "Apply rehashing or not.",
 *         "IsModifiable": true,
 *         "MinimumEngineVersion": "2.8.6",
 *         "ParameterName": "activerehashing",
 *         "ParameterValue": "yes",
 *         "Source": "system"
 *       },
 *       {
 *         "AllowedValues": "always,everysec,no",
 *         "ChangeType": "immediate",
 *         "DataType": "string",
 *         "Description": "fsync policy for AOF persistence",
 *         "IsModifiable": true,
 *         "MinimumEngineVersion": "2.8.6",
 *         "ParameterName": "appendfsync",
 *         "ParameterValue": "everysec",
 *         "Source": "system"
 *       },
 *       {
 *         "AllowedValues": "yes,no",
 *         "ChangeType": "immediate",
 *         "DataType": "string",
 *         "Description": "Enable Redis persistence.",
 *         "IsModifiable": true,
 *         "MinimumEngineVersion": "2.8.6",
 *         "ParameterName": "appendonly",
 *         "ParameterValue": "no",
 *         "Source": "system"
 *       },
 *       {
 *         "AllowedValues": "0-",
 *         "ChangeType": "immediate",
 *         "DataType": "integer",
 *         "Description": "Normal client output buffer hard limit in bytes.",
 *         "IsModifiable": true,
 *         "MinimumEngineVersion": "2.8.6",
 *         "ParameterName": "client-output-buffer-limit-normal-hard-limit",
 *         "ParameterValue": "0",
 *         "Source": "system"
 *       },
 *       {
 *         "AllowedValues": "0-",
 *         "ChangeType": "immediate",
 *         "DataType": "integer",
 *         "Description": "Normal client output buffer soft limit in bytes.",
 *         "IsModifiable": true,
 *         "MinimumEngineVersion": "2.8.6",
 *         "ParameterName": "client-output-buffer-limit-normal-soft-limit",
 *         "ParameterValue": "0",
 *         "Source": "system"
 *       },
 *       {
 *         "AllowedValues": "0-",
 *         "ChangeType": "immediate",
 *         "DataType": "integer",
 *         "Description": "Normal client output buffer soft limit in seconds.",
 *         "IsModifiable": true,
 *         "MinimumEngineVersion": "2.8.6",
 *         "ParameterName": "client-output-buffer-limit-normal-soft-seconds",
 *         "ParameterValue": "0",
 *         "Source": "system"
 *       },
 *       {
 *         "AllowedValues": "0-",
 *         "ChangeType": "immediate",
 *         "DataType": "integer",
 *         "Description": "Pubsub client output buffer hard limit in bytes.",
 *         "IsModifiable": true,
 *         "MinimumEngineVersion": "2.8.6",
 *         "ParameterName": "client-output-buffer-limit-pubsub-hard-limit",
 *         "ParameterValue": "33554432",
 *         "Source": "system"
 *       },
 *       {
 *         "AllowedValues": "0-",
 *         "ChangeType": "immediate",
 *         "DataType": "integer",
 *         "Description": "Pubsub client output buffer soft limit in bytes.",
 *         "IsModifiable": true,
 *         "MinimumEngineVersion": "2.8.6",
 *         "ParameterName": "client-output-buffer-limit-pubsub-soft-limit",
 *         "ParameterValue": "8388608",
 *         "Source": "system"
 *       },
 *       {
 *         "AllowedValues": "0-",
 *         "ChangeType": "immediate",
 *         "DataType": "integer",
 *         "Description": "Pubsub client output buffer soft limit in seconds.",
 *         "IsModifiable": true,
 *         "MinimumEngineVersion": "2.8.6",
 *         "ParameterName": "client-output-buffer-limit-pubsub-soft-seconds",
 *         "ParameterValue": "60",
 *         "Source": "system"
 *       },
 *       {
 *         "AllowedValues": "0-",
 *         "ChangeType": "immediate",
 *         "DataType": "integer",
 *         "Description": "Slave client output buffer soft limit in seconds.",
 *         "IsModifiable": false,
 *         "MinimumEngineVersion": "2.8.6",
 *         "ParameterName": "client-output-buffer-limit-slave-soft-seconds",
 *         "ParameterValue": "60",
 *         "Source": "system"
 *       },
 *       {
 *         "AllowedValues": "yes,no",
 *         "ChangeType": "immediate",
 *         "DataType": "string",
 *         "Description": "If enabled, clients who attempt to write to a read-only slave will be disconnected. Applicable to 2.8.23 and higher.",
 *         "IsModifiable": true,
 *         "MinimumEngineVersion": "2.8.23",
 *         "ParameterName": "close-on-slave-write",
 *         "ParameterValue": "yes",
 *         "Source": "system"
 *       },
 *       {
 *         "AllowedValues": "1-1200000",
 *         "ChangeType": "requires-reboot",
 *         "DataType": "integer",
 *         "Description": "Set the number of databases.",
 *         "IsModifiable": true,
 *         "MinimumEngineVersion": "2.8.6",
 *         "ParameterName": "databases",
 *         "ParameterValue": "16",
 *         "Source": "system"
 *       },
 *       {
 *         "AllowedValues": "0-",
 *         "ChangeType": "immediate",
 *         "DataType": "integer",
 *         "Description": "The maximum number of hash entries in order for the dataset to be compressed.",
 *         "IsModifiable": true,
 *         "MinimumEngineVersion": "2.8.6",
 *         "ParameterName": "hash-max-ziplist-entries",
 *         "ParameterValue": "512",
 *         "Source": "system"
 *       },
 *       {
 *         "AllowedValues": "0-",
 *         "ChangeType": "immediate",
 *         "DataType": "integer",
 *         "Description": "The threshold of biggest hash entries in order for the dataset to be compressed.",
 *         "IsModifiable": true,
 *         "MinimumEngineVersion": "2.8.6",
 *         "ParameterName": "hash-max-ziplist-value",
 *         "ParameterValue": "64",
 *         "Source": "system"
 *       },
 *       {
 *         "AllowedValues": "0-",
 *         "ChangeType": "immediate",
 *         "DataType": "integer",
 *         "Description": "The maximum number of list entries in order for the dataset to be compressed.",
 *         "IsModifiable": true,
 *         "MinimumEngineVersion": "2.8.6",
 *         "ParameterName": "list-max-ziplist-entries",
 *         "ParameterValue": "512",
 *         "Source": "system"
 *       },
 *       {
 *         "AllowedValues": "0-",
 *         "ChangeType": "immediate",
 *         "DataType": "integer",
 *         "Description": "The threshold of biggest list entries in order for the dataset to be compressed.",
 *         "IsModifiable": true,
 *         "MinimumEngineVersion": "2.8.6",
 *         "ParameterName": "list-max-ziplist-value",
 *         "ParameterValue": "64",
 *         "Source": "system"
 *       },
 *       {
 *         "AllowedValues": "5000",
 *         "ChangeType": "immediate",
 *         "DataType": "integer",
 *         "Description": "Max execution time of a Lua script in milliseconds. 0 for unlimited execution without warnings.",
 *         "IsModifiable": false,
 *         "MinimumEngineVersion": "2.8.6",
 *         "ParameterName": "lua-time-limit",
 *         "ParameterValue": "5000",
 *         "Source": "system"
 *       },
 *       {
 *         "AllowedValues": "1-65000",
 *         "ChangeType": "requires-reboot",
 *         "DataType": "integer",
 *         "Description": "The maximum number of Redis clients.",
 *         "IsModifiable": false,
 *         "MinimumEngineVersion": "2.8.6",
 *         "ParameterName": "maxclients",
 *         "ParameterValue": "65000",
 *         "Source": "system"
 *       },
 *       {
 *         "AllowedValues": "volatile-lru,allkeys-lru,volatile-random,allkeys-random,volatile-ttl,noeviction",
 *         "ChangeType": "immediate",
 *         "DataType": "string",
 *         "Description": "Max memory policy.",
 *         "IsModifiable": true,
 *         "MinimumEngineVersion": "2.8.6",
 *         "ParameterName": "maxmemory-policy",
 *         "ParameterValue": "volatile-lru",
 *         "Source": "system"
 *       },
 *       {
 *         "AllowedValues": "1-",
 *         "ChangeType": "immediate",
 *         "DataType": "integer",
 *         "Description": "Max memory samples.",
 *         "IsModifiable": true,
 *         "MinimumEngineVersion": "2.8.6",
 *         "ParameterName": "maxmemory-samples",
 *         "ParameterValue": "3",
 *         "Source": "system"
 *       },
 *       {
 *         "AllowedValues": "0-",
 *         "ChangeType": "immediate",
 *         "DataType": "integer",
 *         "Description": "Maximum number of seconds within which the master must receive a ping from a slave to take writes. Use this parameter together with min-slaves-to-write to regulate when the master stops accepting writes. Setting this value to 0 means the master always takes writes.",
 *         "IsModifiable": true,
 *         "MinimumEngineVersion": "2.8.6",
 *         "ParameterName": "min-slaves-max-lag",
 *         "ParameterValue": "10",
 *         "Source": "system"
 *       },
 *       {
 *         "AllowedValues": "0-",
 *         "ChangeType": "immediate",
 *         "DataType": "integer",
 *         "Description": "Number of slaves that must be connected in order for master to take writes. Use this parameter together with min-slaves-max-lag to regulate when the master stops accepting writes. Setting this to 0 means the master always takes writes.",
 *         "IsModifiable": true,
 *         "MinimumEngineVersion": "2.8.6",
 *         "ParameterName": "min-slaves-to-write",
 *         "ParameterValue": "0",
 *         "Source": "system"
 *       }
 *     ]
 *   }
 * }
 * *\/
 * // example id: describeenginedefaultparameters-1481738057686
 * ```
 *
 */
export class DescribeEngineDefaultParametersCommand extends $Command<
  DescribeEngineDefaultParametersCommandInput,
  DescribeEngineDefaultParametersCommandOutput,
  ElastiCacheClientResolvedConfig
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
  constructor(readonly input: DescribeEngineDefaultParametersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElastiCacheClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEngineDefaultParametersCommandInput, DescribeEngineDefaultParametersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeEngineDefaultParametersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DescribeEngineDefaultParametersCommand";
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
  private serialize(
    input: DescribeEngineDefaultParametersCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeEngineDefaultParametersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeEngineDefaultParametersCommandOutput> {
    return de_DescribeEngineDefaultParametersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
