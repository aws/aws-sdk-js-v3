import { IoTSecureTunnelingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSecureTunnelingClient";
import { ListTagsForResourceRequest, ListTagsForResourceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTagsForResourceCommandInput = ListTagsForResourceRequest;
export declare type ListTagsForResourceCommandOutput = ListTagsForResourceResponse & __MetadataBearer;
export declare class ListTagsForResourceCommand extends $Command<ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput, IoTSecureTunnelingClientResolvedConfig> {
    readonly input: ListTagsForResourceCommandInput;
    constructor(input: ListTagsForResourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTSecureTunnelingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput>;
    private serialize;
    private deserialize;
}
