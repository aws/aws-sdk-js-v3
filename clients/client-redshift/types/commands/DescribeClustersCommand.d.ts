import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ClustersMessage, DescribeClustersMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeClustersCommandInput = DescribeClustersMessage;
export declare type DescribeClustersCommandOutput = ClustersMessage & __MetadataBearer;
export declare class DescribeClustersCommand extends $Command<DescribeClustersCommandInput, DescribeClustersCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DescribeClustersCommandInput;
    constructor(input: DescribeClustersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeClustersCommandInput, DescribeClustersCommandOutput>;
    private serialize;
    private deserialize;
}
