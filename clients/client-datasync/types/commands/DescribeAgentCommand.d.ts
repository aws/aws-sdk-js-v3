import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { DescribeAgentRequest, DescribeAgentResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAgentCommandInput = DescribeAgentRequest;
export declare type DescribeAgentCommandOutput = DescribeAgentResponse & __MetadataBearer;
export declare class DescribeAgentCommand extends $Command<DescribeAgentCommandInput, DescribeAgentCommandOutput, DataSyncClientResolvedConfig> {
    readonly input: DescribeAgentCommandInput;
    constructor(input: DescribeAgentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAgentCommandInput, DescribeAgentCommandOutput>;
    private serialize;
    private deserialize;
}
