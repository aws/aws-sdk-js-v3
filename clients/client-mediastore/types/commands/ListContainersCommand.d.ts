import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { ListContainersInput, ListContainersOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListContainersCommandInput = ListContainersInput;
export declare type ListContainersCommandOutput = ListContainersOutput & __MetadataBearer;
export declare class ListContainersCommand extends $Command<ListContainersCommandInput, ListContainersCommandOutput, MediaStoreClientResolvedConfig> {
    readonly input: ListContainersCommandInput;
    constructor(input: ListContainersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaStoreClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListContainersCommandInput, ListContainersCommandOutput>;
    private serialize;
    private deserialize;
}
