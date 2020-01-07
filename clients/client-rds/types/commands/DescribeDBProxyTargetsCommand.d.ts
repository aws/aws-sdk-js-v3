import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeDBProxyTargetsRequest, DescribeDBProxyTargetsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDBProxyTargetsCommandInput = DescribeDBProxyTargetsRequest;
export declare type DescribeDBProxyTargetsCommandOutput = DescribeDBProxyTargetsResponse & __MetadataBearer;
export declare class DescribeDBProxyTargetsCommand extends $Command<DescribeDBProxyTargetsCommandInput, DescribeDBProxyTargetsCommandOutput, RDSClientResolvedConfig> {
    readonly input: DescribeDBProxyTargetsCommandInput;
    constructor(input: DescribeDBProxyTargetsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDBProxyTargetsCommandInput, DescribeDBProxyTargetsCommandOutput>;
    private serialize;
    private deserialize;
}
