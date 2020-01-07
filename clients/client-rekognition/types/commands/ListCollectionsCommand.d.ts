import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { ListCollectionsRequest, ListCollectionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListCollectionsCommandInput = ListCollectionsRequest;
export declare type ListCollectionsCommandOutput = ListCollectionsResponse & __MetadataBearer;
export declare class ListCollectionsCommand extends $Command<ListCollectionsCommandInput, ListCollectionsCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: ListCollectionsCommandInput;
    constructor(input: ListCollectionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListCollectionsCommandInput, ListCollectionsCommandOutput>;
    private serialize;
    private deserialize;
}
