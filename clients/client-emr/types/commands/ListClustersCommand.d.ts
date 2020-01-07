import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { ListClustersInput, ListClustersOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListClustersCommandInput = ListClustersInput;
export declare type ListClustersCommandOutput = ListClustersOutput & __MetadataBearer;
export declare class ListClustersCommand extends $Command<ListClustersCommandInput, ListClustersCommandOutput, EMRClientResolvedConfig> {
    readonly input: ListClustersCommandInput;
    constructor(input: ListClustersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListClustersCommandInput, ListClustersCommandOutput>;
    private serialize;
    private deserialize;
}
