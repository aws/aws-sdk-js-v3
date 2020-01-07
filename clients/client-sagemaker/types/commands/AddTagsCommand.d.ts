import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { AddTagsInput, AddTagsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AddTagsCommandInput = AddTagsInput;
export declare type AddTagsCommandOutput = AddTagsOutput & __MetadataBearer;
export declare class AddTagsCommand extends $Command<AddTagsCommandInput, AddTagsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: AddTagsCommandInput;
    constructor(input: AddTagsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddTagsCommandInput, AddTagsCommandOutput>;
    private serialize;
    private deserialize;
}
