import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeGlobalClustersMessage, GlobalClustersMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeGlobalClustersCommandInput = DescribeGlobalClustersMessage;
export declare type DescribeGlobalClustersCommandOutput = GlobalClustersMessage & __MetadataBearer;
export declare class DescribeGlobalClustersCommand extends $Command<DescribeGlobalClustersCommandInput, DescribeGlobalClustersCommandOutput, RDSClientResolvedConfig> {
    readonly input: DescribeGlobalClustersCommandInput;
    constructor(input: DescribeGlobalClustersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeGlobalClustersCommandInput, DescribeGlobalClustersCommandOutput>;
    private serialize;
    private deserialize;
}
