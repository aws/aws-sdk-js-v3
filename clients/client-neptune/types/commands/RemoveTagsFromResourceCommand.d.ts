import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { RemoveTagsFromResourceMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RemoveTagsFromResourceCommandInput = RemoveTagsFromResourceMessage;
export declare type RemoveTagsFromResourceCommandOutput = __MetadataBearer;
export declare class RemoveTagsFromResourceCommand extends $Command<RemoveTagsFromResourceCommandInput, RemoveTagsFromResourceCommandOutput, NeptuneClientResolvedConfig> {
    readonly input: RemoveTagsFromResourceCommandInput;
    constructor(input: RemoveTagsFromResourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NeptuneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemoveTagsFromResourceCommandInput, RemoveTagsFromResourceCommandOutput>;
    private serialize;
    private deserialize;
}
