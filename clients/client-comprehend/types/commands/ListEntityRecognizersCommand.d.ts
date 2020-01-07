import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { ListEntityRecognizersRequest, ListEntityRecognizersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListEntityRecognizersCommandInput = ListEntityRecognizersRequest;
export declare type ListEntityRecognizersCommandOutput = ListEntityRecognizersResponse & __MetadataBearer;
export declare class ListEntityRecognizersCommand extends $Command<ListEntityRecognizersCommandInput, ListEntityRecognizersCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: ListEntityRecognizersCommandInput;
    constructor(input: ListEntityRecognizersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListEntityRecognizersCommandInput, ListEntityRecognizersCommandOutput>;
    private serialize;
    private deserialize;
}
