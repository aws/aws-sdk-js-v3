import { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient";
import { DescribeClustersRequest, DescribeClustersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeClustersCommandInput = DescribeClustersRequest;
export declare type DescribeClustersCommandOutput = DescribeClustersResponse & __MetadataBearer;
export declare class DescribeClustersCommand extends $Command<DescribeClustersCommandInput, DescribeClustersCommandOutput, DAXClientResolvedConfig> {
    readonly input: DescribeClustersCommandInput;
    constructor(input: DescribeClustersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DAXClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeClustersCommandInput, DescribeClustersCommandOutput>;
    private serialize;
    private deserialize;
}
