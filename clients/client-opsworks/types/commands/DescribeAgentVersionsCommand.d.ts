import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DescribeAgentVersionsRequest, DescribeAgentVersionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAgentVersionsCommandInput = DescribeAgentVersionsRequest;
export declare type DescribeAgentVersionsCommandOutput = DescribeAgentVersionsResult & __MetadataBearer;
export declare class DescribeAgentVersionsCommand extends $Command<DescribeAgentVersionsCommandInput, DescribeAgentVersionsCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: DescribeAgentVersionsCommandInput;
    constructor(input: DescribeAgentVersionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAgentVersionsCommandInput, DescribeAgentVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
