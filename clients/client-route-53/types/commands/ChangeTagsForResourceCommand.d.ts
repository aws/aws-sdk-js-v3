import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { ChangeTagsForResourceRequest, ChangeTagsForResourceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ChangeTagsForResourceCommandInput = ChangeTagsForResourceRequest;
export declare type ChangeTagsForResourceCommandOutput = ChangeTagsForResourceResponse & __MetadataBearer;
export declare class ChangeTagsForResourceCommand extends $Command<ChangeTagsForResourceCommandInput, ChangeTagsForResourceCommandOutput, Route53ClientResolvedConfig> {
    readonly input: ChangeTagsForResourceCommandInput;
    constructor(input: ChangeTagsForResourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ChangeTagsForResourceCommandInput, ChangeTagsForResourceCommandOutput>;
    private serialize;
    private deserialize;
}
