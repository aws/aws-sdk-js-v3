import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";
import { ListCompatibleImagesRequest, ListCompatibleImagesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListCompatibleImagesCommandInput = ListCompatibleImagesRequest;
export declare type ListCompatibleImagesCommandOutput = ListCompatibleImagesResult & __MetadataBearer;
export declare class ListCompatibleImagesCommand extends $Command<ListCompatibleImagesCommandInput, ListCompatibleImagesCommandOutput, SnowballClientResolvedConfig> {
    readonly input: ListCompatibleImagesCommandInput;
    constructor(input: ListCompatibleImagesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SnowballClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListCompatibleImagesCommandInput, ListCompatibleImagesCommandOutput>;
    private serialize;
    private deserialize;
}
