import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { ListResourcesRequest, ListResourcesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListResourcesCommandInput = ListResourcesRequest;
export declare type ListResourcesCommandOutput = ListResourcesResponse & __MetadataBearer;
export declare class ListResourcesCommand extends $Command<ListResourcesCommandInput, ListResourcesCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: ListResourcesCommandInput;
    constructor(input: ListResourcesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListResourcesCommandInput, ListResourcesCommandOutput>;
    private serialize;
    private deserialize;
}
