import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { ListStreamProcessorsRequest, ListStreamProcessorsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListStreamProcessorsCommandInput = ListStreamProcessorsRequest;
export declare type ListStreamProcessorsCommandOutput = ListStreamProcessorsResponse & __MetadataBearer;
export declare class ListStreamProcessorsCommand extends $Command<ListStreamProcessorsCommandInput, ListStreamProcessorsCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: ListStreamProcessorsCommandInput;
    constructor(input: ListStreamProcessorsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListStreamProcessorsCommandInput, ListStreamProcessorsCommandOutput>;
    private serialize;
    private deserialize;
}
