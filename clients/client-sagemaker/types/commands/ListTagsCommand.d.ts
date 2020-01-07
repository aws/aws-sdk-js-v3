import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListTagsInput, ListTagsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTagsCommandInput = ListTagsInput;
export declare type ListTagsCommandOutput = ListTagsOutput & __MetadataBearer;
export declare class ListTagsCommand extends $Command<ListTagsCommandInput, ListTagsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListTagsCommandInput;
    constructor(input: ListTagsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTagsCommandInput, ListTagsCommandOutput>;
    private serialize;
    private deserialize;
}
