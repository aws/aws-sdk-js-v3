import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { ListImagesRequest, ListImagesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListImagesCommandInput = ListImagesRequest;
export declare type ListImagesCommandOutput = ListImagesResponse & __MetadataBearer;
export declare class ListImagesCommand extends $Command<ListImagesCommandInput, ListImagesCommandOutput, ECRClientResolvedConfig> {
    readonly input: ListImagesCommandInput;
    constructor(input: ListImagesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListImagesCommandInput, ListImagesCommandOutput>;
    private serialize;
    private deserialize;
}
