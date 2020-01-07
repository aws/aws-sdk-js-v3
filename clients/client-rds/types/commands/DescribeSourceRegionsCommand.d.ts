import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeSourceRegionsMessage, SourceRegionMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeSourceRegionsCommandInput = DescribeSourceRegionsMessage;
export declare type DescribeSourceRegionsCommandOutput = SourceRegionMessage & __MetadataBearer;
export declare class DescribeSourceRegionsCommand extends $Command<DescribeSourceRegionsCommandInput, DescribeSourceRegionsCommandOutput, RDSClientResolvedConfig> {
    readonly input: DescribeSourceRegionsCommandInput;
    constructor(input: DescribeSourceRegionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSourceRegionsCommandInput, DescribeSourceRegionsCommandOutput>;
    private serialize;
    private deserialize;
}
