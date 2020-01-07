import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { ListClustersRequest, ListClustersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListClustersCommandInput = ListClustersRequest;
export declare type ListClustersCommandOutput = ListClustersResponse & __MetadataBearer;
export declare class ListClustersCommand extends $Command<ListClustersCommandInput, ListClustersCommandOutput, ECSClientResolvedConfig> {
    readonly input: ListClustersCommandInput;
    constructor(input: ListClustersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListClustersCommandInput, ListClustersCommandOutput>;
    private serialize;
    private deserialize;
}
