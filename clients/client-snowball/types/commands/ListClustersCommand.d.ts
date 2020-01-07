import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";
import { ListClustersRequest, ListClustersResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListClustersCommandInput = ListClustersRequest;
export declare type ListClustersCommandOutput = ListClustersResult & __MetadataBearer;
export declare class ListClustersCommand extends $Command<ListClustersCommandInput, ListClustersCommandOutput, SnowballClientResolvedConfig> {
    readonly input: ListClustersCommandInput;
    constructor(input: ListClustersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SnowballClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListClustersCommandInput, ListClustersCommandOutput>;
    private serialize;
    private deserialize;
}
