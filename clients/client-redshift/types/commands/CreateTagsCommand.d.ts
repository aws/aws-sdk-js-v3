import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { CreateTagsMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateTagsCommandInput = CreateTagsMessage;
export declare type CreateTagsCommandOutput = __MetadataBearer;
export declare class CreateTagsCommand extends $Command<CreateTagsCommandInput, CreateTagsCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: CreateTagsCommandInput;
    constructor(input: CreateTagsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTagsCommandInput, CreateTagsCommandOutput>;
    private serialize;
    private deserialize;
}
