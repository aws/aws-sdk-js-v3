import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DescribeInstancesRequest, DescribeInstancesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeInstancesCommandInput = DescribeInstancesRequest;
export declare type DescribeInstancesCommandOutput = DescribeInstancesResult & __MetadataBearer;
export declare class DescribeInstancesCommand extends $Command<DescribeInstancesCommandInput, DescribeInstancesCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: DescribeInstancesCommandInput;
    constructor(input: DescribeInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeInstancesCommandInput, DescribeInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
