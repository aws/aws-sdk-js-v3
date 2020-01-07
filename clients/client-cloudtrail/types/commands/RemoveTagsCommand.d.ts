import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { RemoveTagsRequest, RemoveTagsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RemoveTagsCommandInput = RemoveTagsRequest;
export declare type RemoveTagsCommandOutput = RemoveTagsResponse & __MetadataBearer;
export declare class RemoveTagsCommand extends $Command<RemoveTagsCommandInput, RemoveTagsCommandOutput, CloudTrailClientResolvedConfig> {
    readonly input: RemoveTagsCommandInput;
    constructor(input: RemoveTagsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudTrailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemoveTagsCommandInput, RemoveTagsCommandOutput>;
    private serialize;
    private deserialize;
}
