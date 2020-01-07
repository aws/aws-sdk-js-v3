import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DescribeRdsDbInstancesRequest, DescribeRdsDbInstancesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeRdsDbInstancesCommandInput = DescribeRdsDbInstancesRequest;
export declare type DescribeRdsDbInstancesCommandOutput = DescribeRdsDbInstancesResult & __MetadataBearer;
export declare class DescribeRdsDbInstancesCommand extends $Command<DescribeRdsDbInstancesCommandInput, DescribeRdsDbInstancesCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: DescribeRdsDbInstancesCommandInput;
    constructor(input: DescribeRdsDbInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeRdsDbInstancesCommandInput, DescribeRdsDbInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
